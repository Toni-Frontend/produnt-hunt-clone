import React, { useEffect, useState } from "react";

const useValidation = (stateInicial, validate, fn) => {
  const [values, setValues] = useState(stateInicial);
  const [submitform, setSubmitForm] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (submitform) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fn();
      }
      setSubmitForm(false);
    }
  }, [errors]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validate(values);

    setErrors(errorsValidation);
    setSubmitForm(true);
  };

  return {
      values,
      errors,
      handleChange,
      handleSubmit
  }
};

export default useValidation;
