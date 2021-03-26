import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  // Registra un usuario Google
  async googleLogin() {
    const provider = new app.auth.GoogleAuthProvider();
    await this.auth
      .signInWithPopup(provider)
      /* .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */
  }

  // Facebook login
  async facebookLogin() {
    const provider = new app.auth.FacebookAuthProvider();
    await this.auth
      .signInWithPopup(provider)
      /* .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      }); */
  }

  async LogOut() {
    await this.auth.signOut();
  }


}

export const firebase = new Firebase();
