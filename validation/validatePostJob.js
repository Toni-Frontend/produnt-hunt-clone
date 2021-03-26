const validatePostJob = (value) => {
  let errors = {};

  if (!value.company) {
    errors.company = `CAN'T BE BLANK`;
  } else if (value.company.length > 40) {
    errors.company = `THE MAX LENGHT 40 CHARACTERS`;
  } else if (value.company.length < 5) {
    errors.company = `THE MIN LENGHT 5 CHARACTERS`;
  }

  if (!value.location) {
    errors.location = `CAN'T BE BLANK`;
  }
  if (!value.jobtitle) {
    errors.jobtitle = `CAN'T BE BLANK`;
  } else if (value.jobtitle.length > 100) {
    errors.jobtitle = `THE MAX LENGHT 260 CHARACTERS`;
  } else if (value.jobtitle.length < 10) {
    errors.jobtitle = `THE MIN LENGHT 160 CHARACTERS`;
  }

  return errors;
};

export default validatePostJob;
