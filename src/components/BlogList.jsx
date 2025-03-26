import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
const PostCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: contain;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
`;

const BlogList = ({ posts }) => {
  return (
    <PostContainer>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostImage src={post.image} alt={post.title} /> 
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </PostCard>
      ))}
    </PostContainer>
  );
};

export default BlogList;
