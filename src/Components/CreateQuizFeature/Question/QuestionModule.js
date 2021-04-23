export const updateQuestion = (i, value) => {
  return {
    type: "updateQuestion",
    i,
    value,
  };
};

export const deleteQuestion = (i) => {
  return {
    type: "deleteQuestion",
    i,
  };
};

export const addAnswer = (i) => {
  return {
    type: "addAnswer",
    i,
  };
};
