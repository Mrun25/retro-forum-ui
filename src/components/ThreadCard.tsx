
import React, { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useBookmarkContext } from './BookmarkedPanel';
import { ThreadCardProps, CommentType } from '@/types/thread';
import CategoryPill from './thread/CategoryPill';
import ThreadActions from './thread/ThreadActions';
import CommentSection from './thread/CommentSection';

const ThreadCard = ({
  id,
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
  const [replyCount, setReplyCount] = useState(initialReplyCount);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([
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

  // Use the bookmark context
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarkContext();
  const threadIsBookmarked = isBookmarked(id);

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
    if (threadIsBookmarked) {
      removeBookmark(id);
    } else {
      addBookmark({
        id,
        title,
        username,
        timeAgo
      });
    }
  };
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <article className="outline-card p-5 transition-all duration-300 hover-bounce border-[var(--outline-width)] border-[var(--outline-color)]">
      <div className="flex justify-between items-start mb-3">
        <CategoryPill category={category} />
        <button 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:animate-wobble"
          onClick={toggleBookmark}
          aria-label={threadIsBookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          {threadIsBookmarked ? (
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
        
        <ThreadActions 
          timeAgo={timeAgo}
          replyCount={replyCount}
          upvotes={upvotes}
          userVote={userVote}
          onToggleComments={toggleComments}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
      </div>
      
      {showComments && (
        <CommentSection 
          comments={comments}
          replyCount={replyCount}
          setReplyCount={setReplyCount}
          setComments={setComments}
          onClose={toggleComments}
        />
      )}
    </article>
  );
};

export default ThreadCard;
