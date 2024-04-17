// frontend/pages/feed.js
import React from 'react';
import Feed from '../components/Feed';

const FeedPage = ({ posts }) => {
 return <Feed posts={posts} />;
};

export async function getServerSideProps() {
 const res = await fetch('http://localhost:5000/api/posts');
 const posts = await res.json();

 return {
    props: { posts },
 };
}

export default FeedPage;
