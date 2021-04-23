export const questions = (
  state = [
    {
      question: "",
      answers: [""],
      correctAnswer: 0,
    },
  ],
  action
) => {
  //console.log(action)
  let type = action.type;
  let value = action.value;
  let i = action.i;
  let j = action.j;
  if (type === "clearQuestions") {
    return [
      {
        question: "",
        answers: [""],
        correctAnswer: 0,
      },
    ];
  } else if (type === "addQuestion") {
    return [
      ...state,
      {
        question: "",
        answers: [""],
        correctAnswer: 0,
      },
    ];
  } else if (type === "updateQuestion") {
    return [
      ...state.slice(undefined, i),
      {
        ...state[i],
        question: value,
      },
      ...state.slice(i + 1),
    ];
  } else if (type === "deleteQuestion") {
    return state.length === 1
      ? [
          {
            question: "",
            answers: [""],
            correctAnswer: 0,
          },
        ]
      : [...state.slice(undefined, i), ...state.slice(i + 1)];
  } else if (type === "addAnswer") {
    return [
      ...state.slice(undefined, i),
      {
        ...state[i],
        answers: [...state[i].answers, ""],
      },
      ...state.slice(i + 1),
    ];
  } else if (type === "updateAnswer") {
    return [
      ...state.slice(undefined, i),
      {
        ...state[i],
        answers: [
          ...state[i].answers.slice(undefined, j),
          value,
          ...state[i].answers.slice(j + 1),
        ],
      },
      ...state.slice(i + 1),
    ];
  } else if (type === "deleteAnswer") {
    return [
      ...state.slice(undefined, i),
      {
        ...state[i],
        answers:
          state[i].answers.length > 1
            ? [
                ...state[i].answers.slice(undefined, j),
                ...state[i].answers.slice(j + 1),
              ]
            : [""],
        correctAnswer:
          state[i].correctAnswer < j
            ? state[i].correctAnswer
            : state[i].correctAnswer === j
            ? 0
            : state[i].correctAnswer - 1,
      },
      ...state.slice(i + 1),
    ];
  } else if (type === "correctAnswer") {
    return [
      ...state.slice(undefined, i),
      {
        ...state[i],
        correctAnswer: j,
      },
      ...state.slice(i + 1),
    ];
  } else if (type === "fillQuestions") {
    return action.questions;
  } else {
    return state;
  }
};
