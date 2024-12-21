import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import BlogForm from '../components/BlogForm';
import { getPosts } from '../services/api';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1> Managing Blog </h1>
      <BlogForm onAdd={fetchPosts} />
      <BlogList posts={posts} onRefresh={fetchPosts} />
    </div>
  );
};

export default HomePage;
