import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../services/api';

type BlogListProps = {
  posts: { id: number; title: string }[];
  onRefresh: () => void;
};

const BlogList: React.FC<BlogListProps> = ({ posts, onRefresh }) => {
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await deletePost(id);
    onRefresh();
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <button onClick={() => navigate(`/posts/${post.id}`)}>View</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
