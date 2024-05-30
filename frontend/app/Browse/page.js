import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./Browse.css";

const Browse = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/api/posts");
      setPosts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.browse}>
      <h1>Browse Posts</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/posts/${post._id}`}>
              <a>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Browse;