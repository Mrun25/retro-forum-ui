
import React from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import ThreadFeed from '../components/ThreadFeed';
import MobileNavigation from '../components/MobileNavigation';
import NewThreadButton from '../components/NewThreadButton';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopNavBar />
      
      <div className="flex flex-1 relative">
        {/* Make the left sidebar position fixed on desktop */}
        <div className="hidden md:block w-60 flex-shrink-0">
          <div className="fixed w-60 h-[calc(100vh-64px)]">
            <LeftSidebar />
          </div>
        </div>
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-4xl px-4 py-6">
            <ThreadFeed />
          </div>
          <div className="h-20 md:hidden" />
        </main>
        
        <RightSidebar />
      </div>
      
      <MobileNavigation />
      <NewThreadButton />
    </div>
  );
};

export default Index;
