
import React, { useState } from 'react';
import { MessageSquare, Bookmark, BookmarkCheck, ArrowUp, ArrowDown, Clock, X, Send } from 'lucide-react';
import { toast } from 'sonner';

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
  replyCount: initialReplyCount,
  timeAgo,
  upvotes: initialUpvotes,
  tags
}: ThreadCardProps) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [replyCount, setReplyCount] = useState(initialReplyCount);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "designPro",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Dusty",
      content: "This is really insightful! I've been thinking about the same issues.",
      timeAgo: "1h ago"
    },
    {
      id: 2,
      username: "techGuru",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Coco",
      content: "I disagree with point #2, but overall good discussion.",
      timeAgo: "30m ago"
    }
  ]);

  // Map the category to appropriate colors for outlined design
  const getCategoryPillClass = () => {
    if (category === "Development") return "bg-secondary";
    if (category === "Showcase") return "bg-accent";
    if (category === "Marketing") return "bg-[#FFD1E3]";
    if (category === "Design") return "bg-primary";
    return "bg-[#D1F5E0]"; // General
  };

  const handleUpvote = () => {
    if (userVote === 'up') {
      setUpvotes(upvotes - 1);
      setUserVote(null);
    } else {
      setUpvotes(userVote === 'down' ? upvotes + 2 : upvotes + 1);
      setUserVote('up');
    }
    
    if (userVote !== 'up') {
      toast.success("Upvoted thread");
    }
  };

  const handleDownvote = () => {
    if (userVote === 'down') {
      setUpvotes(upvotes + 1);
      setUserVote(null);
    } else {
      setUpvotes(userVote === 'up' ? upvotes - 2 : upvotes - 1);
      setUserVote('down');
    }
    
    if (userVote !== 'down') {
      toast.success("Downvoted thread");
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    
    toast.success(isBookmarked ? "Removed from bookmarks" : "Added to bookmarks");
  };
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  const submitComment = () => {
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: comments.length + 1,
      username: "You",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix",
      content: newComment,
      timeAgo: "Just now"
    };
    
    setComments([newCommentObj, ...comments]);
    setReplyCount(replyCount + 1);
    setNewComment('');
    
    toast.success("Comment posted");
  };

  return (
    <article className="outline-card p-5 transition-all duration-300 hover-bounce">
      <div className="flex justify-between items-start mb-3">
        <div className={`outline-pill ${getCategoryPillClass()}`}>
          {category}
        </div>
        <button 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          onClick={toggleBookmark}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          {isBookmarked ? (
            <BookmarkCheck className="h-5 w-5 text-accent" />
          ) : (
            <Bookmark className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{content}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs border-2 border-border bg-background px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={avatar} alt={username} className="h-7 w-7 rounded-full border-2 border-border" />
          <span className="text-sm font-medium">{username}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-xs">{timeAgo}</span>
          </div>
          
          <button 
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
            onClick={toggleComments}
          >
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">{replyCount}</span>
          </button>
          
          <div className="flex items-center outline-pill bg-background py-0">
            <button 
              className={`p-1 hover:animate-wobble ${userVote === 'up' ? 'text-accent' : ''}`}
              onClick={handleUpvote}
              aria-label="Upvote"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
            <span className="text-xs font-medium mx-1">{upvotes}</span>
            <button 
              className={`p-1 hover:animate-wobble ${userVote === 'down' ? 'text-destructive' : ''}`}
              onClick={handleDownvote}
              aria-label="Downvote"
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {showComments && (
        <div className="mt-4 pt-4 border-t-2 border-border">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Comments ({replyCount})</h4>
            <button 
              onClick={toggleComments}
              className="outline-pill p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex gap-2 mb-4">
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" 
              alt="Your avatar" 
              className="h-8 w-8 rounded-full border-2 border-border shrink-0"
            />
            <div className="flex-1 flex gap-2">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="outline-card px-3 py-2 flex-1"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    submitComment();
                  }
                }}
              />
              <button 
                className="outline-pill bg-primary text-primary-foreground"
                onClick={submitComment}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {comments.map((comment) => (
              <div key={comment.id} className="outline-card p-3">
                <div className="flex gap-2 mb-1">
                  <img 
                    src={comment.avatar} 
                    alt={`${comment.username}'s avatar`} 
                    className="h-6 w-6 rounded-full border-2 border-border shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{comment.username}</span>
                      <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                    </div>
                    <p className="text-sm mt-1">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default ThreadCard;
