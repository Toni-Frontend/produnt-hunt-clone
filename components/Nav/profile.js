import React, { useContext } from "react";
import Link from "next/link";
import firebase from "../../db";
import FirebaseContext from "../../db/context";

const Profile = () => {
  const { usuario } = useContext(FirebaseContext);
  return (
    <>
      <Link href="/post-product">
        <a className="link-post-style">Post</a>
      </Link>

      <img
        onClick={() => firebase.LogOut()}
        className="perfil-picture"
        src={usuario.photoURL}
        alt=""
      />
    </>
  );
};

export default Profile;
