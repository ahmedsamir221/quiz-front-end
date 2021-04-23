export const updateAnswer = (i, j, value) => {
  return {
    type: "updateAnswer",
    i,
    j,
    value,
  };
};

export const deleteAnswer = (i, j) => {
  return {
    type: "deleteAnswer",
    i,
    j,
  };
};

export const correctAnswer = (i, j) => {
  return {
    type: "correctAnswer",
    i,
    j,
  };
};
