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
      className={`inline-flex min-h-11 min-w-36 items-center justify-center rounded-full border-2 px-5 py-2 text-base font-medium lg:text-lg ${
        active
          ? "border-white bg-gradient-to-r from-[#B265FF] via-[#FF4400] to-[#FFA100] text-white"
          : "border-[#222222] hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}
