
import React, { useState } from 'react';
import { MessageSquare, Bookmark, BookmarkCheck, ArrowUp, ArrowDown, Clock, Send } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

type CommentType = {
  id: number;
  username: string;
  avatar: string;
  content: string;
  timeAgo: string;
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
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      username: "webDev",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=John",
      content: "This is really insightful, thanks for sharing!",
      timeAgo: "1h ago"
    },
    {
      id: 2,
      username: "designPro",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emma",
      content: "I disagree with point #2, but otherwise great post.",
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
  };

  const handleDownvote = () => {
    if (userVote === 'down') {
      setUpvotes(upvotes + 1);
      setUserVote(null);
    } else {
      setUpvotes(userVote === 'up' ? upvotes - 2 : upvotes - 1);
      setUserVote('down');
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    
    const newCommentObj: CommentType = {
      id: comments.length + 1,
      username: "currentUser",
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Felix",
      content: newComment,
      timeAgo: "Just now"
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment('');
    setReplyCount(replyCount + 1);
  };

  return (
    <article className="outline-card border border-black dark:border-white p-5 transition-all duration-300 hover-bounce">
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
          
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">{replyCount}</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-3">
              <h3 className="font-medium mb-2">Comments</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto mb-3">
                {comments.map(comment => (
                  <div key={comment.id} className="border border-border rounded-md p-2">
                    <div className="flex items-center gap-2 mb-1">
                      <img src={comment.avatar} alt={comment.username} className="h-6 w-6 rounded-full" />
                      <span className="text-xs font-medium">{comment.username}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{comment.timeAgo}</span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Add a comment..." 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddComment();
                  }}
                  className="text-sm"
                />
                <Button size="sm" onClick={handleAddComment}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
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
    </article>
  );
};

export default ThreadCard;
