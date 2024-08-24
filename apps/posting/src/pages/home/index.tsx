import React, { useEffect, useState } from "react";

import useAuth0Client from "../../hooks/use-auth0-client";

import "./style.scss";
import { Profile } from "../../components/profile";
import { PostType } from "../../types";
import { createPost, getPosts, removePost } from "../../apis";
import { Post } from "../../components/post";
import { WritePost } from "../../components/write-post";

const PageHome: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [posts, setPosts] = useState<PostType[]>([]);

  const deletePostById = async (id: number) => {
    try {
      const token = await auth0Client.getTokenSilently();
      await removePost(token, id);
      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      alert(error);
    }
  };

  const writePost = async (message: string) => {
    try {
      const token = await auth0Client.getTokenSilently();
      await createPost(token, { message });
      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const posts = await getPosts(token);
        setPosts(posts);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  return (
    <div className="posting--page-home">
      <div className="posting--page-home-left">
        <Profile />
      </div>
      <div className="posting--page-home-center">
        <WritePost writePost={writePost} />
        {posts.map((post) => (
          <Post key={post.id} {...post} deletePostById={deletePostById} />
        ))}
      </div>
      <div className="posting--page-home-right"></div>
    </div>
  );
};

export default PageHome;
