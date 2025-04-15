
import React, { useEffect, useState } from 'react';
import { Bookmark, X } from 'lucide-react';
import { toast } from 'sonner';

// Type definition for a bookmarked thread
export interface BookmarkedThread {
  id: number;
  title: string;
  username: string;
  timeAgo: string;
}

// Create a shared bookmarks context that will be used across components
export const useBookmarks = () => {
  // We'll use local storage to persist bookmarks
  const [bookmarkedThreads, setBookmarkedThreads] = useState<BookmarkedThread[]>(() => {
    const saved = localStorage.getItem('bookmarkedThreads');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "What's your favorite CSS framework in 2025?",
        username: "cssWizard",
        timeAgo: "2h ago"
      },
      {
        id: 3,
        title: "AI tools for content creation - worth it?",
        username: "contentCreator",
        timeAgo: "3h ago"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('bookmarkedThreads', JSON.stringify(bookmarkedThreads));
  }, [bookmarkedThreads]);

  const addBookmark = (thread: BookmarkedThread) => {
    // Check if thread is already bookmarked
    if (!bookmarkedThreads.some(t => t.id === thread.id)) {
      setBookmarkedThreads(prev => [...prev, thread]);
      toast.success('Thread bookmarked successfully');
    }
  };

  const removeBookmark = (threadId: number) => {
    setBookmarkedThreads(prev => prev.filter(thread => thread.id !== threadId));
    toast.success('Thread removed from bookmarks');
  };

  const isBookmarked = (threadId: number) => {
    return bookmarkedThreads.some(thread => thread.id === threadId);
  };

  return {
    bookmarkedThreads,
    addBookmark,
    removeBookmark,
    isBookmarked
  };
};

// Create a context for sharing bookmark state
import { createContext, useContext } from 'react';

export const BookmarkContext = createContext<ReturnType<typeof useBookmarks> | null>(null);

export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarkContext must be used within a BookmarkProvider');
  }
  return context;
};

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bookmarkFunctions = useBookmarks();
  
  return (
    <BookmarkContext.Provider value={bookmarkFunctions}>
      {children}
    </BookmarkContext.Provider>
  );
};

const BookmarkedPanel = () => {
  const { bookmarkedThreads, removeBookmark } = useBookmarkContext();

  return (
    <div className="container mx-auto max-w-4xl py-6 px-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-6">Bookmarked Threads</h2>
      
      <div className="space-y-3">
        {bookmarkedThreads.length > 0 ? (
          bookmarkedThreads.map(thread => (
            <div key={thread.id} className="outline-card p-4 hover-bounce-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{thread.title}</h3>
                <button 
                  onClick={() => removeBookmark(thread.id)}
                  className="hover:text-destructive transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">by {thread.username}</p>
                <p className="text-xs text-muted-foreground">{thread.timeAgo}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="outline-card p-4 text-center">
            <p className="text-muted-foreground">No bookmarked threads yet</p>
            <p className="text-xs mt-2">Bookmark threads by clicking the bookmark icon on any thread</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarkedPanel;
