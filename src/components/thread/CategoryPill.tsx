
import React from 'react';

type CategoryPillProps = {
  category: string;
};

const CategoryPill = ({ category }: CategoryPillProps) => {
  // Map the category to appropriate colors for outlined design
  const getCategoryPillClass = () => {
    if (category === "Development") return "bg-secondary";
    if (category === "Showcase") return "bg-accent";
    if (category === "Marketing") return "bg-[#FFD1E3]";
    if (category === "Design") return "bg-primary";
    return "bg-[#D1F5E0]"; // General
  };

  return (
    <div className={`outline-pill ${getCategoryPillClass()}`}>
      {category}
    </div>
  );
};

export default CategoryPill;
