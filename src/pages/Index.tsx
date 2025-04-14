
import React from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import ThreadFeed from '../components/ThreadFeed';
import MobileNavigation from '../components/MobileNavigation';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopNavBar />
      
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-4xl">
            <ThreadFeed />
          </div>
          <div className="h-20 md:hidden" />
        </main>
        
        <RightSidebar />
      </div>
      
      <MobileNavigation />
    </div>
  );
};

export default Index;
