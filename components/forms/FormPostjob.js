import React, { useContext, useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledSubmit,
  StyledContainerInput,
  StyledContainerLabel,
} from "../UI/StyledForm";
import { useRouter } from "next/router";
import { StyledHired } from "../UI/StyledBoxJob";
import FirebaseContext from "../../db/context";
import useValidation from "../../hooks/useValidation";
import FileUploader from "react-firebase-file-uploader";
import validatePostJob from "../../validation/validatePostJob";
import HiringNow from "../Jobs/HiringNow";

const STATE_INICIAL = {
  company: "",
  jobtitle: "",
  location: "",
  logocompany: "",
};

const FormPostJob = () => {
  // State de las imagenes
  const [nombreImagen, setNombreImagen] = useState("");
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [logocompany, setLogoCompany] = useState("");

  const { values, errors, handleChange, handleSubmit } = useValidation(
    STATE_INICIAL,
    validatePostJob,
    createJob
  );

  const router = useRouter();
  const { company, jobtitle, location } = values;
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
      .ref("logocompany")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        setLogoCompany(url);
      });
  };

  async function createJob() {
    if (!usuario) {
      return router.push("/");
    }

    const job = {
      company,
      jobtitle,
      location,
      logocompany,
      create: Date.now(),
    };

    await firebase.db.collection("jobs").add(job);

    return router.push("/jobs");
  }

  return (
    <>
      <div>
        <h1 className="title-component-h">Create your job listing</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="company">Company name</label>
              {errors.company && <span>{errors.company}</span>}
            </StyledContainerLabel>
            <StyledInput
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={handleChange}
              placeholder="Ex. Acme Corp"
            />
          </StyledContainerInput>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="jobtitle">Job title</label>
              {errors.jobtitle && <span>{errors.jobtitle}</span>}
            </StyledContainerLabel>
            <StyledInput
              type="text"
              name="jobtitle"
              id="jobtitle"
              value={jobtitle}
              onChange={handleChange}
              placeholder="What is the title for this role"
            />
          </StyledContainerInput>
          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="location">Location</label>
              {errors.location && <span>{errors.location}</span>}
            </StyledContainerLabel>
            <StyledInput
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={handleChange}
              placeholder="Location(s) for this role"
            />
          </StyledContainerInput>

          <StyledContainerInput>
            <StyledContainerLabel>
              <label htmlFor="logocompany">Company Logo</label>
            </StyledContainerLabel>
            <FileUploader
              css={css`
                margin-top: 2rem;
              `}
              accept="image/*"
              id="logocompany"
              name="logocompany"
              randomizeFilename
              storageRef={firebase.storage.ref("logocompany")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </StyledContainerInput>
          <StyledSubmit type="submit" value="post job" />
        </StyledForm>
      </div>
      <StyledHired></StyledHired>
    </>
  );
};

export default FormPostJob;
