import React from "react";
import { LuLanguages, LuUser2 } from "react-icons/lu";

interface IconsProps {
  className?: string;
}
export const Icons: React.FC<IconsProps> = ({ className = "" }) => {
  return (
    <div className={`flex space-x-6 ${className}`}>
      <LuLanguages size={25} />
      <LuUser2 size={25} />
    </div>
  );
};
