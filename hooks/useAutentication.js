import { useEffect, useState } from 'react';
import firebase from '../db';

const useAutentication = () => {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
            if(usuario) {
                setUsuarioAutenticado(usuario);
            } else {
                setUsuarioAutenticado(null);
            }
        });

        return () => unsuscribe();
    },[]);

    return usuarioAutenticado;
}

export default useAutentication;