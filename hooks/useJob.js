import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../db";

const useJob = (orden) => {
  const [jobs, setJobs] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const jobQuery = firebase.db
      .collection("jobs")
      .orderBy(orden, "desc")
      .onSnapshot(handleSnapshot);

    const unsubscribe = jobQuery;

    const getJobs = async () => {
      await jobQuery;
    };

    getJobs();

    return () => {
      unsubscribe();
    };
  }, []);

  function handleSnapshot(snapshot) {
    const jobs = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setJobs(jobs);
  }

  return { jobs };
};

export default useJob;
