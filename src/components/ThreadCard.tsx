
import React from 'react';
import { MessageSquare, Bookmark, ArrowUp, ArrowDown, Clock } from 'lucide-react';

type ThreadCardProps = {
  title: string;
  category: string;
  categoryColor: string;
  content: string;
  username: string;
  avatar: string;
  replyCount: number;
  timeAgo: string;
  upvotes: number;
  tags: string[];
};

const ThreadCard = ({
  title,
  category,
  categoryColor,
  content,
  username,
  avatar,
  replyCount,
  timeAgo,
  upvotes,
  tags
}: ThreadCardProps) => {
  // Map the category to appropriate colors for outlined design
  const getCategoryPillClass = () => {
    if (category === "Development") return "bg-secondary";
    if (category === "Showcase") return "bg-accent";
    if (category === "Marketing") return "bg-[#FFD1E3]";
    if (category === "Design") return "bg-primary";
    return "bg-[#D1F5E0]"; // General
  };

  return (
    <article className="outline-card p-5 transition-all duration-300 hover-bounce">
      <div className="flex justify-between items-start mb-3">
        <div className={`outline-pill ${getCategoryPillClass()}`}>
          {category}
        </div>
        <button className="text-muted-foreground hover:text-black">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs border-2 border-black bg-white px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={avatar} alt={username} className="h-7 w-7 rounded-full border-2 border-black" />
          <span className="text-sm font-medium">{username}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-xs">{timeAgo}</span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">{replyCount}</span>
          </div>
          
          <div className="flex items-center outline-pill bg-white py-0">
            <button className="p-1 hover:animate-wobble">
              <ArrowUp className="h-4 w-4" />
            </button>
            <span className="text-xs font-medium mx-1">{upvotes}</span>
            <button className="p-1 hover:animate-wobble">
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
