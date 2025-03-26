import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
  text-align: center; 
`;

const PostImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) return <p>Post not found</p>;

  return (
    <DetailContainer>
      <h1>{post.title}</h1>
      <PostImage src={post.image} alt={post.title} />
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <blockquote>{post.quote}</blockquote>
    </DetailContainer>
  );
};

export default PostDetail;