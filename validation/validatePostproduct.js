const validatePostProduct = (value) => {
  let errors = {};

  if (!value.nameproduct) {
    errors.nameproduct = `CAN'T BE BLANK`;
  } else if (value.nameproduct.length > 40) {
    errors.nameproduct = `THE MAX LENGHT 40 CHARACTERS`;
  } else if (value.nameproduct.length < 5) {
    errors.nameproduct = `THE MIN LENGHT 5 CHARACTERS`;
  }

  if (!value.tagline) {
    errors.tagline = `CAN'T BE BLANK`;
  } else if (value.tagline.length > 60) {
    errors.tagline = `THE MAX LENGHT 40 CHARACTERS`;
  } else if (value.tagline.length < 5) {
    errors.tagline = `THE MIN LENGHT 5 CHARACTERS`;
  }

  if (!value.topics) {
    errors.topics = `CAN'T BE BLANK`;
  }
  if (!value.description) {
    errors.description = `CAN'T BE BLANK`;
  } else if (value.description.length > 360) {
    errors.description = `THE MAX LENGHT 260 CHARACTERS`;
  } else if (value.description.length < 160) {
    errors.description = `THE MIN LENGHT 160 CHARACTERS`;
  }

  return errors;
};

export default validatePostProduct;
