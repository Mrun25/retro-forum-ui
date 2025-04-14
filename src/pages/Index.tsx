
import React, { useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import ThreadFeed from '../components/ThreadFeed';
import MobileNavigation from '../components/MobileNavigation';
import NewThreadButton from '../components/NewThreadButton';
import MyThreadsPanel from '../components/MyThreadsPanel';
import NotificationsPanel from '../components/NotificationsPanel';
import MessagesPanel from '../components/MessagesPanel';
import SettingsPanel from '../components/SettingsPanel';
import BookmarkedPanel from '../components/BookmarkedPanel';

const Index = () => {
  const [activeSection, setActiveSection] = useState('Home');

  // Function to render the active content panel
  const renderActiveContent = () => {
    switch (activeSection) {
      case 'My Threads':
        return <MyThreadsPanel />;
      case 'Notifications':
        return <NotificationsPanel />;
      case 'Messages':
        return <MessagesPanel />;
      case 'Settings':
        return <SettingsPanel />;
      case 'Bookmarked':
        return <BookmarkedPanel />;
      case 'Home':
      default:
        return <ThreadFeed />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopNavBar />
      
      <div className="flex flex-1 overflow-hidden pt-16">
        <LeftSidebar setActiveSection={setActiveSection} />
        
        <main className="flex-1 overflow-y-auto ml-64">
          <div className="container mx-auto max-w-4xl min-h-[calc(100vh-4rem)]">
            {renderActiveContent()}
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
