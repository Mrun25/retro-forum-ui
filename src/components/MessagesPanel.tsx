
import React from 'react';

const MessagesPanel = () => {
  return (
    <div className="container mx-auto max-w-4xl py-6 px-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Messages</h2>
      
      <div className="space-y-3">
        <div className="outline-card p-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Max" 
              alt="User avatar" 
              className="h-10 w-10 rounded-full border-2 border-border" 
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">motionDesigner</p>
                <span className="text-xs text-muted-foreground">5m ago</span>
              </div>
              <p className="text-sm text-muted-foreground">Thanks for the help with that animation issue!</p>
            </div>
          </div>
        </div>
        
        <div className="outline-card p-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Coco" 
              alt="User avatar" 
              className="h-10 w-10 rounded-full border-2 border-border" 
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">minimalDesigner</p>
                <span className="text-xs text-muted-foreground">1h ago</span>
              </div>
              <p className="text-sm text-muted-foreground">I just shared my latest project, would love your feedback!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPanel;
