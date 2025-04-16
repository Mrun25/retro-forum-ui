
import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';

interface NewThreadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewThreadModal: React.FC<NewThreadModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create a new thread
    console.log({ title, content, category, tags: tags.split(',').map(tag => tag.trim()) });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="outline-card bg-background w-full max-w-2xl p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-xl font-bold mb-6">Create New Thread</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-input w-full"
              placeholder="Enter a descriptive title"
              required
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="outline-input w-full"
              required
            >
              <option value="">Select a category</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Showcase">Showcase</option>
              <option value="General">General</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="outline-input w-full min-h-[150px]"
              placeholder="What's on your mind?"
              required
            />
          </div>
          
          <div>
            <label htmlFor="tags" className="block text-sm font-medium mb-1">Tags</label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="outline-input w-full"
              placeholder="Separate tags with commas: react, javascript, design"
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="outline-card px-4 py-2 hover-bounce-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="outline-button px-4 py-2"
            >
              Create Thread
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const NewThreadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="floating-button glow-effect"
        aria-label="Create new thread"
      >
        <PlusCircle className="h-5 w-5" />
        <span className="font-medium">New Thread</span>
      </button>
      
      <NewThreadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default NewThreadButton;
