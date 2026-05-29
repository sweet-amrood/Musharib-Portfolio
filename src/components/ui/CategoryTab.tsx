"use client";

interface CategoryTabProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export function CategoryTab({ children, active, onClick }: CategoryTabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 py-2 lg:px-5 px-3 min-w-36 rounded-full ${
        active
          ? "bg-gradient-to-r from-[#B265FF] via-[#FF4400] to-[#FFA100] text-white border-2 border-white"
          : "border-[#222222] hover:bg-slate-100"
      }`}
    >
      <p className="lg:text-base text-sm">{children}</p>
    </button>
  );
}
