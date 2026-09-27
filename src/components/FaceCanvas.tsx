"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import faceData from "@/data/face-geometry.json";

type FaceGeometry = {
  positions: number[];
  uvs: number[];
  indices: number[];
  skinTone: string;
  backing: { rx: number; ry: number };
};

const FACE = faceData as FaceGeometry;

/**
 * A real 3D face built from the portrait photo: 468 facial landmarks
 * become mesh vertices, and the photo itself is the texture.
 * The head turns toward the cursor with smooth damping.
 */
function PhotoFace() {
  const head = useRef<THREE.Group>(null);

  const texture = useLoader(THREE.TextureLoader, "/face/face-texture.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(FACE.positions, 3)
    );
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(FACE.uvs, 2));
    geo.setIndex(FACE.indices);
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    if (!head.current) return;
    // Turn toward the cursor — clamped so the photo texture never
    // stretches into an unnatural angle.
    head.current.rotation.y = THREE.MathUtils.damp(
      head.current.rotation.y,
      THREE.MathUtils.clamp(x * 0.5, -0.38, 0.38),
      4,
      delta
    );
    head.current.rotation.x = THREE.MathUtils.damp(
      head.current.rotation.x,
      THREE.MathUtils.clamp(-y * 0.32, -0.26, 0.26),
      4,
      delta
    );
    head.current.rotation.z = THREE.MathUtils.damp(
      head.current.rotation.z,
      x * -0.05,
      4,
      delta
    );
    // Gentle parallax drift toward the cursor
    head.current.position.x = THREE.MathUtils.damp(
      head.current.position.x,
      x * 0.18,
      4,
      delta
    );
    head.current.position.y = THREE.MathUtils.damp(
      head.current.position.y,
      y * 0.12,
      4,
      delta
    );
  });

  return (
    <group ref={head}>
      {/* Skin-tone backing so the mesh reads as a solid head */}
      <mesh position={[0, 0, -0.09]} scale={[FACE.backing.rx, FACE.backing.ry, 1]}>
        <circleGeometry args={[1, 48]} />
        <meshStandardMaterial
          color={FACE.skinTone}
          roughness={0.7}
          metalness={0}
        />
      </mesh>
      {/* Photo-textured face mesh, scaled to sit on the backing */}
      <mesh geometry={geometry} scale={[FACE.backing.rx, FACE.backing.ry, 1]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.55}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function FaceCanvas() {
  return (
    <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px]">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color="#fff1e0" />
        <directionalLight position={[-4, 2, 3]} intensity={0.7} color="#c4b5fd" />
        <directionalLight position={[0, -3, 4]} intensity={0.35} color="#fdba74" />
        <Suspense fallback={null}>
          <Float
            speed={1.6}
            rotationIntensity={0.12}
            floatIntensity={0.5}
            floatingRange={[-0.08, 0.08]}
          >
            <PhotoFace />
          </Float>
        </Suspense>
        <Sparkles count={45} scale={[4.5, 4.5, 2]} size={2.5} speed={0.35} color="#c4b5fd" opacity={0.6} />
        <ContactShadows position={[0, -1.9, 0]} opacity={0.42} scale={7} blur={2.6} far={4} color="#1e1b4b" />
      </Canvas>
      {/* Soft glow behind the face */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(196,181,253,0.35), rgba(253,186,116,0.12) 55%, transparent 75%)",
        }}
      />
    </div>
  );
}

export default FaceCanvas;
