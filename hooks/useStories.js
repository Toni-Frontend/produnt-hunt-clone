import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../db";

const useStories = () => {
  const [stories, setStories] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const storieQuery = firebase.db
      .collection("stories")
      .onSnapshot(handleSnapshot);

    const unsubscribe = storieQuery;

    const getStories = async () => {
      await storieQuery;
    };

    getStories();

    return () => {
      unsubscribe();
    };
  }, []);

  function handleSnapshot(snapshot) {
    const storie = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setStories(storie);
  }

  return { stories };
};

export default useStories;
