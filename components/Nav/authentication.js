import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StyledButton } from "../UI/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import firebase from "../../db";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1.7,
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: "8px",
    padding: theme.spacing(2, 4, 3),
  },
}));

const Authentication = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Login Google
  const googleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebase.googleLogin();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const facebookSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebase.facebookLogin();
      setOpen(false);
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <>
      <StyledButton onClick={handleOpen}>log in</StyledButton>
      <StyledButton onClick={handleOpen} bgColor="true">
        sign up
      </StyledButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="modal-logo-dog">
              <img src="/static/img/dog.png" alt="" />
            </div>
            <h2 className="modal-title">Sign up on Product Hunt</h2>
            <p className="modal-description">
              Join our community of friendly folks discovering and sharing the
              latest products in tech.
            </p>
            <div className="modal-login-container">
              <button className="login-twitter">
                <i className="fab fa-twitter"></i>
                log in with twitter
              </button>
              <button onClick={facebookSignUp} className="login-facebook">
                <i className="fab fa-facebook-f"></i>
                log in with facebook
              </button>
              <button onClick={googleSignUp} className="login-google">
                <img src="/static/icons/google.png" />
                log in with google
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Authentication;
