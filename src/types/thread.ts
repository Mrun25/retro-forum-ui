
export type ThreadCardProps = {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  content: string;
  username: string;
  avatar: string;
  replyCount: number;
  timeAgo: string;
  upvotes: number;
  tags: string[];
};

export type CommentType = {
  id: number;
  username: string;
  avatar: string;
  content: string;
  timeAgo: string;
};

export type BookmarkType = {
  id: number;
  title: string;
  username: string;
  timeAgo: string;
};
