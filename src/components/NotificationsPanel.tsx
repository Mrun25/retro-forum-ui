
import React from 'react';

const NotificationsPanel = () => {
  return (
    <div className="container mx-auto max-w-4xl py-6 px-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Notifications</h2>
      
      <div className="space-y-3">
        <div className="outline-card p-4">
          <p className="text-sm">
            <span className="font-medium">minimalDesigner</span> replied to your thread
          </p>
          <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
        </div>
        
        <div className="outline-card p-4">
          <p className="text-sm">
            <span className="font-medium">cssWizard</span> mentioned you in a comment
          </p>
          <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
        </div>
        
        <div className="outline-card p-4">
          <p className="text-sm">
            Your thread "<span className="font-medium">CSS Grid vs Flexbox</span>" received 10 upvotes
          </p>
          <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPanel;
