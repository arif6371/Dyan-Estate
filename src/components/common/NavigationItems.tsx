import React from "react";

interface NavigationItemsProps {
  className?: string;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({
  className = "",
}) => {
  return (
    <ul className={`flex flex-col lg:flex-row ${className}`}>
      <li className="py-2 lg:py-0 lg:mx-4">properties</li>
      <li className="py-2 lg:py-0 lg:mx-4">my Dashboard/Activity</li>
      <li className="py-2 lg:py-0 lg:mx-4">list your property</li>
      <li className="py-2 lg:py-0 lg:mx-4">contact us</li>
      <li className="py-2 lg:py-0 lg:mx-4">more</li>
    </ul>
  );
};
