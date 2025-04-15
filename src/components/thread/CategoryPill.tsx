
import React from 'react';

type CategoryPillProps = {
  category: string;
};

const CategoryPill = ({ category }: CategoryPillProps) => {
  // Map the category to appropriate colors for outlined design
  const getCategoryClass = () => {
    switch (category) {
      case "Development": return "bg-secondary text-secondary-foreground";
      case "Showcase": return "bg-accent text-accent-foreground";
      case "Marketing": return "bg-[#FFD1E3] text-foreground";
      case "Design": return "bg-primary text-primary-foreground";
      default: return "bg-[#D1F5E0] text-foreground"; // General
    }
  };

  return (
    <div className={`outline-pill ${getCategoryClass()}`}>
      {category}
    </div>
  );
};

export default CategoryPill;
