import React, { ReactNode } from "react";
import { GlobeIcon } from "@/components/ui/icons/Globe";
import { HeartIcon } from "@/components/ui/icons/Heart";

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title = "LEDEMY" 
}) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-4 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
      <div className="absolute right-4 top-4">
        <GlobeIcon />
      </div>
      
      <div className="flex items-center gap-2.5 mt-56">
        <h1 className="text-white text-[64px] font-normal max-md:text-5xl max-sm:text-4xl">
          {title}
        </h1>
        <HeartIcon />
      </div>
      
      {children}
    </div>
  );
};
