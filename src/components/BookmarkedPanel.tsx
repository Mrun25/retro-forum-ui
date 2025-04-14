
import React from 'react';
import { Bookmark } from 'lucide-react';

const BookmarkedPanel = () => {
  return (
    <div className="container mx-auto max-w-4xl py-6 px-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Bookmarked Threads</h2>
      
      <div className="space-y-3">
        <div className="outline-card p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">What's your favorite CSS framework in 2025?</h3>
            <Bookmark className="h-5 w-5 text-accent" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">by cssWizard</p>
            <p className="text-xs text-muted-foreground">2h ago</p>
          </div>
        </div>
        
        <div className="outline-card p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">AI tools for content creation - worth it?</h3>
            <Bookmark className="h-5 w-5 text-accent" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">by contentCreator</p>
            <p className="text-xs text-muted-foreground">3h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkedPanel;
