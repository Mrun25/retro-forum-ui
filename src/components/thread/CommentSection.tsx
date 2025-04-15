
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { toast } from 'sonner';
import { CommentType } from '@/types/thread';

type CommentSectionProps = {
  comments: CommentType[];
  replyCount: number;
  setReplyCount: React.Dispatch<React.SetStateAction<number>>;
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
  onClose: () => void;
};

const CommentSection = ({ 
  comments, 
  replyCount, 
  setReplyCount, 
  setComments, 
  onClose 
}: CommentSectionProps) => {
  const [newComment, setNewComment] = useState('');

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
    <div className="mt-4 pt-4 border-t-2 border-border">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium">Comments ({replyCount})</h4>
        <button 
          onClick={onClose}
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
  );
};

export default CommentSection;
