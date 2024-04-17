// components/Feed.js
import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import FeedContent from './FeedContent';

const Feed = ({ posts = [] }) => { // Provide a default value for posts
 return (
    <div>
      <CreatePost />
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
      <FeedContent />
    </div>
 );
};

export default Feed;
