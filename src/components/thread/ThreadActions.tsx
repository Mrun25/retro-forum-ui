
import React from 'react';
import { MessageSquare, Clock, ArrowUp, ArrowDown } from 'lucide-react';

type ThreadActionsProps = {
  timeAgo: string;
  replyCount: number;
  upvotes: number;
  userVote: 'up' | 'down' | null;
  onToggleComments: () => void;
  onUpvote: () => void;
  onDownvote: () => void;
};

const ThreadActions = ({
  timeAgo,
  replyCount,
  upvotes,
  userVote,
  onToggleComments,
  onUpvote,
  onDownvote
}: ThreadActionsProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span className="text-xs">{timeAgo}</span>
      </div>
      
      <button 
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
        onClick={onToggleComments}
      >
        <MessageSquare className="h-4 w-4" />
        <span className="text-xs">{replyCount}</span>
      </button>
      
      <div className="flex items-center outline-pill bg-background py-0">
        <button 
          className={`p-1 hover:animate-wobble ${userVote === 'up' ? 'text-accent' : ''}`}
          onClick={onUpvote}
          aria-label="Upvote"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
        <span className="text-xs font-medium mx-1">{upvotes}</span>
        <button 
          className={`p-1 hover:animate-wobble ${userVote === 'down' ? 'text-destructive' : ''}`}
          onClick={onDownvote}
          aria-label="Downvote"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ThreadActions;
