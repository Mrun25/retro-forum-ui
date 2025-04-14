
import React from 'react';
import { X, Edit, Calendar, MessageCircle, ArrowUp } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background border-2 border-border rounded-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b-2 border-border">
          <h2 className="text-xl font-bold">User Profile</h2>
          <button 
            onClick={onClose}
            className="outline-pill p-1"
            aria-label="Close profile"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" 
              alt="User avatar" 
              className="h-20 w-20 rounded-full border-2 border-border" 
            />
            <div>
              <h3 className="text-xl font-bold">Felix</h3>
              <p className="text-muted-foreground">felix@example.com</p>
            </div>
          </div>
          
          <div className="outline-card p-4 mb-6">
            <div className="flex justify-between mb-2">
              <h4 className="font-medium">Bio</h4>
              <button className="outline-pill p-1">
                <Edit className="h-4 w-4" />
              </button>
            </div>
            <p>Web developer and design enthusiast. I love creating beautiful, functional interfaces and discussing the latest trends in UI/UX design.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="outline-card p-3 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="font-medium">Joined</span>
              </div>
              <p>March 2023</p>
            </div>
            
            <div className="outline-card p-3 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="font-medium">Threads</span>
              </div>
              <p>24 created</p>
            </div>
            
            <div className="outline-card p-3 flex flex-col items-center col-span-2">
              <div className="flex items-center gap-2 mb-1">
                <ArrowUp className="h-4 w-4 text-secondary" />
                <span className="font-medium">Upvotes</span>
              </div>
              <p>328 received</p>
            </div>
          </div>
          
          <button 
            className="outline-pill bg-primary text-primary-foreground w-full"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
