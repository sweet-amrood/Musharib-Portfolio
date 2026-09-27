"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Procedural 3D character face. The head rotates toward the cursor,
 * the pupils shift to follow it, and the eyes blink — all smoothed
 * with damping so it feels alive rather than robotic.
 */
function FaceRig() {
  const head = useRef<THREE.Group>(null);
  const pupilL = useRef<THREE.Group>(null);
  const pupilR = useRef<THREE.Group>(null);
  const eyeL = useRef<THREE.Group>(null);
  const eyeR = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    const t = state.clock.elapsedTime;

    // Head follows the cursor
    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(
        head.current.rotation.y,
        THREE.MathUtils.clamp(x * 0.55, -0.6, 0.6),
        4,
        delta
      );
      head.current.rotation.x = THREE.MathUtils.damp(
        head.current.rotation.x,
        THREE.MathUtils.clamp(-y * 0.35, -0.4, 0.4),
        4,
        delta
      );
      head.current.rotation.z = THREE.MathUtils.damp(
        head.current.rotation.z,
        x * -0.06,
        4,
        delta
      );
    }

    // Pupils track the cursor
    const px = THREE.MathUtils.clamp(x * 0.06, -0.07, 0.07);
    const py = THREE.MathUtils.clamp(y * 0.05, -0.06, 0.06);
    for (const p of [pupilL.current, pupilR.current]) {
      if (!p) continue;
      p.position.x = THREE.MathUtils.damp(p.position.x, px, 8, delta);
      p.position.y = THREE.MathUtils.damp(p.position.y, py, 8, delta);
    }

    // Blink roughly every 3.4 seconds
    const cycle = t % 3.4;
    const target = cycle < 0.12 ? 0.08 : 1;
    for (const e of [eyeL.current, eyeR.current]) {
      if (!e) continue;
      e.scale.y = THREE.MathUtils.damp(e.scale.y, target, 18, delta);
    }
  });

  return (
    <group ref={head}>
      {/* Head */}
      <mesh scale={[1, 1.06, 0.94]}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial color="#f2edff" roughness={0.32} metalness={0.04} />
      </mesh>

      {/* Ears */}
      {[-1, 1].map((s) => (
        <mesh key={`ear-${s}`} position={[s * 1.0, -0.05, 0]}>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial color="#B265FF" roughness={0.4} />
        </mesh>
      ))}

      {/* Antenna */}
      <mesh position={[0, 1.28, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.5, 16]} />
        <meshStandardMaterial color="#8f86b8" roughness={0.4} metalness={0.4} />
      </mesh>
      <mesh position={[0, 1.58, 0]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial
          color="#FFA100"
          emissive="#FFA100"
          emissiveIntensity={1.4}
          roughness={0.3}
        />
      </mesh>

      {/* Eyes — whites stay, pupils follow the cursor */}
      {[-1, 1].map((s) => (
        <group
          key={`eye-${s}`}
          position={[s * 0.37, 0.16, 0.76]}
          ref={s < 0 ? eyeL : eyeR}
        >
          <mesh>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.12} />
          </mesh>
          <group ref={s < 0 ? pupilL : pupilR}>
            <mesh position={[0, 0, 0.175]}>
              <sphereGeometry args={[0.088, 24, 24]} />
              <meshStandardMaterial color="#221d33" roughness={0.25} />
            </mesh>
            <mesh position={[0.032, 0.036, 0.238]}>
              <sphereGeometry args={[0.028, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        </group>
      ))}

      {/* Cheeks */}
      {[-1, 1].map((s) => (
        <mesh
          key={`cheek-${s}`}
          position={[s * 0.6, -0.2, 0.7]}
          scale={[1, 0.65, 0.45]}
        >
          <sphereGeometry args={[0.11, 24, 24]} />
          <meshStandardMaterial
            color="#ff9db4"
            roughness={1}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}

      {/* Smile */}
      <mesh position={[0, -0.3, 0.895]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.2, 0.032, 16, 40, Math.PI]} />
        <meshStandardMaterial color="#3a3350" roughness={0.4} />
      </mesh>
    </group>
  );
}

export function FaceCanvas() {
  return (
    <div
      className="relative aspect-square w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[26rem]"
      role="img"
      aria-label="3D character face that follows your cursor"
    >
      <Canvas
        camera={{ position: [0, 0.15, 4.8], fov: 36 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[3.5, 4, 5]} intensity={1.5} />
        <pointLight position={[-4, 1.5, 3]} intensity={10} color="#B265FF" />
        <pointLight position={[4, -1, 3.5]} intensity={8} color="#FFA100" />
        <Float speed={2.2} rotationIntensity={0.12} floatIntensity={0.55}>
          <FaceRig />
        </Float>
        <Sparkles
          count={36}
          scale={[5, 3.5, 2]}
          position={[0, 0.4, -1]}
          size={3.5}
          speed={0.35}
          color="#c9b8ff"
          opacity={0.7}
        />
        <ContactShadows
          position={[0, -1.45, 0]}
          opacity={0.32}
          scale={7}
          blur={2.6}
          far={3}
          color="#2a2140"
        />
      </Canvas>
    </div>
  );
}
