export const fillQuestions = (questions) => {
  return {
    type: "fillQuestions",
    questions,
  };
};

export const fillEmails = (emails) => {
  return {
    type: "fillEmails",
    emails,
  };
};
