import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../db";
import {
  StyledHeadPostId,
  StyledPostId,
  StyledContainerDiscussion,
} from "../../components/UI/StyledPostid";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Layout from "../../components/layout/Layout";
import CircularIndeterminate from "../../components/layout/Progress";
import {
  StyledButton,
  StyledButtonVote,
  StyledContainerVote,
} from "../../components/UI/Button";
import { StyledComentary } from "../../components/UI/StyledComentary";
import AvatarGroups from "../../components/material-ui/AvatarGroup";
import BoxHunter from "../../components/material-ui/BoxHunter";
import { css } from "styled-components";
import CommentUI from "../../components/material-ui/Comment";

const Post = () => {
  const [products, setProducts] = useState({});
  const [error, setError] = useState(false);
  const [comment, setComment] = useState({});
  const [consultarDB, setConsultarDB] = useState(true);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { usuario, firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDB) {
      const getProducts = async () => {
        const productsQ = await firebase.db.collection("products").doc(id);
        const product = await productsQ.get();
        if (product.exists) {
          setProducts(product.data());
          setConsultarDB(false);
        } else {
          setError(true);
          setConsultarDB(false);
        }
      };

      getProducts();
    }
  }, [id]);

  const {
    topics,
    tagline,
    urlimagen,
    gallery,
    description,
    nameproduct,
    hasVoted,
    comments,
    creator,
    create,
    votes,
  } = products;

  const voteProduct = (e) => {
    e.preventDefault();

    if (!usuario) {
      return router.push("/");
    }

    const newTotal = votes + 1;
    if (hasVoted.includes(usuario.uid)) return;

    const newHasVoted = [...hasVoted, usuario.uid];

    // Actualizar en la BD
    firebase.db.collection("products").doc(id).update({
      votes: newTotal,
      hasVoted: newHasVoted,
    });

    setProducts({
      ...products,
      votes: newTotal,
      hasVoted: newHasVoted,
    });

    setConsultarDB(true);
  };

  // Crear comentario y capturar datos

  const handleChangeComment = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSetComment = (e) => {
    e.preventDefault();

    if (!usuario) {
      return router.push("/");
    }

    if (
      comment.comentary === "" ||
      comment.comentary === null ||
      comment.comentary === undefined
    ) {
      return e.preventDefault();
    }

    comment.usuarioId = usuario.uid;
    comment.usuarioName = usuario.displayName;
    comment.photo = usuario.photoURL;

    const newComments = [...comments, comment];

    // Actualizar la BD
    firebase.db.collection("products").doc(id).update({
      comments: newComments,
    });

    // Actualizar el state
    setProducts({
      ...products,
      comments: newComments,
    });

    document.querySelector(".container-input-comment").reset();
    setConsultarDB(true);
  };

  const isCreator = (id) => {
    if (creator.id === id) {
      return true;
    }
  };

  const handleDeleteProduct = () => {
    if (!usuario) {
      return false;
    }

    if (creator.id === usuario.uid) {
      return true;
    }
  };

  const deleteProduct = async () => {
    if (!usuario) return router.push("/");
    if (creator.id === usuario.uid) return router.push("/");

    try {
      await firebase.db.collection('products').doc(id).delete();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {Object.keys(products).length === 0 && !error ? (
        <CircularIndeterminate />
      ) : (
        <>
          <StyledHeadPostId>
            <div className="links-post">
              <Link href="/">
                <a>Home&#8594;</a>
              </Link>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a
                  css={css`
                    font-weight: 500;
                  `}
                >
                  {nameproduct}
                </a>
              </Link>
            </div>
            <div className="head-title-id">
              <div className="img-post-id">
                <img src={urlimagen} alt="logo" />
              </div>
              <div className="title-id-post">
                <h2>{nameproduct}</h2>
                <p className="tagline">{tagline}</p>
                <p className="topics">{topics}</p>
              </div>
            </div>
          </StyledHeadPostId>
          <div className="container">
            <StyledPostId>
              <div className="container-description-post">
                <div className="container-img-post">
                  <img src={gallery} alt="content" />
                </div>
                {handleDeleteProduct() && (
                  <StyledButton
                    onClick={deleteProduct}
                    css={css`
                      margin-top: 1rem;
                    `}
                  >
                    delete product
                  </StyledButton>
                )}
                <div className="description-text-post">
                  <p>{description}</p>
                  <p>Have a question about this product?</p>
                </div>
                <div className="social-and-date">
                  <div className="red-social-buttons">
                    <button className="twitter">
                      <i className="fab fa-twitter"></i>
                      <span>TWEET</span>
                    </button>
                    <button className="facebook">
                      <i className="fab fa-facebook-f"></i>
                      <span>SHARE</span>
                    </button>
                  </div>
                  <p className="date-post">
                    {formatDistanceToNow(new Date(create))}
                  </p>
                </div>
              </div>
              <StyledContainerDiscussion>
                <h2 className="title-discussion">Discussion</h2>
                <div className="container-discussion">
                  <h4>Would you recommend this product?</h4>
                  {comments.length === 0 ? <CommentUI /> : null}
                  {usuario && (
                    <div className="content-comment">
                      <div className="img-user">
                        <img
                          src={
                            usuario
                              ? usuario.photoURL
                              : `/static/img/guest-user-avatar.jpg`
                          }
                          alt="user"
                        />
                      </div>

                      <form
                        onSubmit={handleSetComment}
                        className="container-input-comment"
                      >
                        <textarea
                          name="comentary"
                          id="comentary"
                          onChange={handleChangeComment}
                          placeholder="What do you think of the product?"
                        ></textarea>
                        <input type="submit" value="send" />
                      </form>
                    </div>
                  )}
                  <StyledComentary>
                    {comments.map((comentarys, i) => (
                      <div
                        key={`${comentarys.usuarioId}-${i}`}
                        className="unique-comment"
                      >
                        <div className="img-comment-user">
                          <img src={comentarys.photo} alt="" />
                        </div>
                        <div className="description-comment">
                          <div className="text-comentary-section">
                            <div className="creator-section">
                              <h2>{comentarys.usuarioName}</h2>
                              {isCreator(comentarys.usuarioId) ? (
                                <p className="maker">Maker</p>
                              ) : (
                                <p className="hunter">Hunter</p>
                              )}
                            </div>
                            <p className="role">Frontend Developer</p>
                            <div className="box-comentary">
                              <p>{comentarys.comentary}</p>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    ))}
                  </StyledComentary>
                </div>
              </StyledContainerDiscussion>
            </StyledPostId>
            <aside
              css={css`
                @media (max-width: 899px) {
                  display: none;
                }
                @media (min-width: 900px) {
                  display: block;
                }
              `}
            >
              <StyledContainerVote>
                <StyledButtonVote>get it</StyledButtonVote>
                {usuario && (
                  <StyledButtonVote onClick={voteProduct} bgColor="true">
                    <img src="/static/icons/arrow.svg" />
                    upvote {votes}
                  </StyledButtonVote>
                )}
              </StyledContainerVote>
              <AvatarGroups />
              <BoxHunter />
            </aside>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Post;
