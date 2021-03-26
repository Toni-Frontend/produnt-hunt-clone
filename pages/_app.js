import "../sass/global.scss";
import firebase, { FirebaseContext } from "../db";
import useAutentication from "../hooks/useAutentication";

const MyApp = ({ Component, pageProps }) => {
  const usuario = useAutentication();

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
