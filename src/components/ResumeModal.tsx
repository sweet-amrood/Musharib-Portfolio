"use client";

import { portfolio } from "@/data/portfolio";

interface ResumeModalProps {
  onClose: () => void;
}

export function ResumeModal({ onClose }: ResumeModalProps) {
  return (
    <div className="absolute flex justify-center h-full w-full bg-[#00000000] z-50 backdrop-blur-md pt-40 inset-0 fixed">
      <div className="bg-white border-2 border-blue-500 rounded-lg lg:max-w-96 w-11/12 h-fit p-3 absolute">
        <div className="flex flex-col gap-2 w-full items-center">
          <div className="flex flex-row justify-between w-full">
            <p className="font-bold">Resume</p>
            <button
              type="button"
              onClick={onClose}
              className="opacity-60 hover:opacity-100 w-3 mr-1 cursor-pointer text-lg leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="border-b-[1px] w-full border-black" />
          <div className="flex flex-col gap-5 items-center py-2">
            <p className="text-sm text-center text-[#787878]">
              Download {portfolio.fullName}&apos;s resume
            </p>
            <div className="flex flex-row gap-5">
              <a
                href={portfolio.resumeUrl}
                download={portfolio.resumeDownloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-600 text-sm px-4"
              >
                Download CV
              </a>
              <button
                type="button"
                onClick={onClose}
                className="border border-[#222222] p-2 rounded-lg text-sm px-4 hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
