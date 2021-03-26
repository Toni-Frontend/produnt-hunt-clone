import React from "react";
import Link from "next/link";
import { StyledTodayContainer } from "../UI/StyledToday";

const Today = ({ product }) => {
  const { id, nameproduct, urlimagen, tagline, topics, comments, votes } = product;

  const handleVote = (e) => {
    e.preventDefault();
  }

  return (
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <StyledTodayContainer>
        <div className="content-list-product">
          <div className="img-logo-product">
            <img src={urlimagen} />
          </div>
          <div className="text-product-list">
            <h2>{nameproduct}</h2>
            <h3>{tagline}</h3>
            <div>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className="comments-link">
                  <img src="/static/icons/u_comment.png" />
                  <p>{comments.length}</p>
                </a>
              </Link>
              <Link href="/">
                <a className="category-product-link">{topics}</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="box-votes">
          <button onClick={handleVote}>
            <img src="/static/icons/arrow.png" />
            <p>{votes}</p>
          </button>
        </div>
      </StyledTodayContainer>
    </Link>
  );
};

export default Today;
