
import React, { useState } from 'react';
import { Plus, X, FileText, Hash, Send } from 'lucide-react';
import { toast } from 'sonner';

const CategoryOptions = ["Development", "Design", "Marketing", "Showcase", "General"];

const NewThreadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!title.trim() || !content.trim() || !category) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // In a real app, we would save the thread to a database
    toast.success('Thread created successfully!');
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 outline-card bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover-bounce z-30"
        aria-label="Create new thread"
      >
        <Plus className="h-6 w-6" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background border-2 border-border rounded-xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b-2 border-border">
              <h2 className="text-xl font-bold">Create New Thread</h2>
              <button 
                onClick={closeModal}
                className="outline-pill p-1"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Thread Title <span className="text-destructive">*</span></label>
                <div className="flex border-2 border-border rounded-lg overflow-hidden">
                  <div className="bg-muted flex items-center px-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="What's your thread about?"
                    className="flex-1 p-2 outline-none bg-transparent"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Category <span className="text-destructive">*</span></label>
                <select
                  className="border-2 border-border rounded-lg p-2 w-full bg-transparent"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a category</option>
                  {CategoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Thread Content <span className="text-destructive">*</span></label>
                <textarea
                  placeholder="Share your thoughts, questions, or insights..."
                  className="border-2 border-border rounded-lg p-2 w-full h-32 resize-none bg-transparent"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Tags <span className="text-muted-foreground">(comma-separated)</span></label>
                <div className="flex border-2 border-border rounded-lg overflow-hidden">
                  <div className="bg-muted flex items-center px-3">
                    <Hash className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="webdev, design, help"
                    className="flex-1 p-2 outline-none bg-transparent"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Add relevant tags to help others find your thread</p>
              </div>
              
              <div className="pt-4 border-t-2 border-border flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="outline-pill bg-background"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="outline-pill bg-primary text-primary-foreground flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Publish Thread
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewThreadButton;
