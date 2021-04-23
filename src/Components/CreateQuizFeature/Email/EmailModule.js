export const updateEmail = (i, value) => {
  return {
    type: "updateEmail",
    i,
    value,
  };
};

export const deleteEmail = (i) => {
  return {
    type: "deleteEmail",
    i,
  };
};
