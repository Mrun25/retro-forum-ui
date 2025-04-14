
import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const initialMyThreads = [
  {
    id: 1,
    title: "My CSS Framework Question",
    timeAgo: "2d ago",
  },
  {
    id: 2,
    title: "My Thoughts on AI Tools",
    timeAgo: "5d ago",
  }
];

const MyThreadsPanel = () => {
  const [myThreads, setMyThreads] = useState(initialMyThreads);

  const handleDeleteThread = (id) => {
    setMyThreads(myThreads.filter(thread => thread.id !== id));
    toast.success('Thread deleted successfully');
  };

  return (
    <div className="container mx-auto max-w-4xl py-6 px-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">My Threads</h2>
      
      {myThreads.length > 0 ? (
        <div className="space-y-4">
          {myThreads.map(thread => (
            <div key={thread.id} className="outline-card p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{thread.title}</p>
                <p className="text-xs text-muted-foreground">{thread.timeAgo}</p>
              </div>
              <button 
                onClick={() => handleDeleteThread(thread.id)}
                className="outline-pill bg-destructive text-destructive-foreground p-1"
                aria-label="Delete thread"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground outline-card p-4">You haven't created any threads yet.</p>
      )}
    </div>
  );
};

export default MyThreadsPanel;
