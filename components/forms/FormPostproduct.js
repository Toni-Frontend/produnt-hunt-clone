import React, { useContext, useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledSubmit,
  StyledP,
  StyledH5,
  StyledTextArea,
  StyledImageDiv,
  StyledContainerInput,
  StyledContainerLabel,
} from "../UI/StyledForm";
import { useRouter } from "next/router";
import { css } from "styled-components";
import FirebaseContext from "../../db/context";
import useValidation from "../../hooks/useValidation";
import FileUploader from "react-firebase-file-uploader";
import validatePostProduct from "../../validation/validatePostproduct";

const STATE_INICIAL = {
  nameproduct: "",
  tagline: "",
  topics: "",
  description: "",
  imagen: "",
};

const FormPostProduct = () => {
  // State de las imagenes
  const [nombreImagen, setNombreImagen] = useState("");
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [urlimagen, setUrlImagen] = useState("");
  const [gallery, setGallery] = useState("");

  const { values, errors, handleChange, handleSubmit } = useValidation(
    STATE_INICIAL,
    validatePostProduct,
    crearProducto
  );

  const { nameproduct, tagline, topics, description } = values;

  const router = useRouter();

  const { usuario, firebase } = useContext(FirebaseContext);


  const handleUploadStart = () => {
    setProgreso(0);
    setSubiendo(true);
  };

  const handleProgress = (progreso) => setProgreso({ progreso });

  const handleUploadError = (error) => {
    setSubiendo(error);
  };

  const handleUploadSuccess = (nombre) => {
    setProgreso(100);
    setSubiendo(false);
    setNombreImagen(nombre);
    firebase.storage
      .ref("logos")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        setUrlImagen(url);
      });
  };

  const handleUploadSuccessG = (nombre) => {
    setProgreso(100);
    setSubiendo(false);
    setNombreImagen(nombre);
    firebase.storage
      .ref("gallery")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        setGallery(url);
      });
  };


  // Crear producto
  async function crearProducto(e) {

    if (!usuario) {
      return router.push("/");
    }

    const product = {
      nameproduct,
      tagline,
      topics,
      urlimagen,
      gallery,
      description,
      votes: 0,
      comments: [],
      create: Date.now(),
      creator: {
          id: usuario.uid,
          name: usuario.displayName
      },
      hasVoted: []
    }

    await firebase.db.collection('products').add(product);

    return router.push('/');
  };

  return (
    <>
      <div>
        <h1 className="title-component-h">👋Tell us more about this product</h1>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="nameproduct">Name of the product</label>
              {errors.nameproduct && <span>{errors.nameproduct}</span>}
            </StyledContainerLabel>
            <StyledInput
              type="text"
              name="nameproduct"
              id="nameproduct"
              value={nameproduct}
              onChange={handleChange}
              placeholder="Simply the name of the product"
            />
          </StyledContainerInput>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="tagline">Tagline</label>
              {errors.tagline && <span>{errors.tagline}</span>}
            </StyledContainerLabel>
            <StyledInput
              type="text"
              name="tagline"
              id="tagline"
              value={tagline}
              onChange={handleChange}
              placeholder="Simply the name of the product"
            />
          </StyledContainerInput>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="topics">Topics</label>
              {errors.topics && <span>{errors.topics}</span>}
            </StyledContainerLabel>
            <StyledInput
              type="text"
              name="topics"
              id="topics"
              value={topics}
              onChange={handleChange}
              placeholder="Add a topic"
            />
          </StyledContainerInput>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="description">Description</label>
              {errors.description && <span>{errors.description}</span>}
            </StyledContainerLabel>
            <StyledTextArea
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleChange}
              placeholder="Shor description of the product"
            ></StyledTextArea>
          </StyledContainerInput>

          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="imagen">Thumbnail</label>
            </StyledContainerLabel>
            <FileUploader
              css={css`
                margin-top: 2rem;
              `}
              accept="image/*"
              id="imagen"
              name="imagen"
              randomizeFilename
              storageRef={firebase.storage.ref("logos")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </StyledContainerInput>

          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="gallery">Gallery</label>
            </StyledContainerLabel>
            <FileUploader
              css={css`
                margin-top: 2rem;
              `}
              accept="image/*"
              id="gallery"
              name="gallery"
              randomizeFilename
              storageRef={firebase.storage.ref("gallery")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccessG}
              onProgress={handleProgress}
            />
          </StyledContainerInput>

          <StyledSubmit type="submit" value="POST PRODUCT" />
        </StyledForm>
      </div>
      <StyledImageDiv
        css={css`
          @media (max-width: 1199px) {
            display: none;
          }
          @media (min-width: 1200px) {
            display: block;
            margin-top: 0 !important;
          }
        `}
      >
        <img src="/static/img/beats.png" alt="" />
        <StyledH5>Let's make this product look good</StyledH5>
        <StyledP>
          Welcome to Product Hunt, a place to discover, share and geek out about
          new products and technology. Before hunting a product, take a peek at
          these rules of thumb.
        </StyledP>
      </StyledImageDiv>
    </>
  );
};

export default FormPostProduct;
