export const emails = (state = [], action) => {
  let type = action.type;
  let i = action.i;
  let value = action.value;
  if (type === "addEmail") {
    return [...state, ""];
  } else if (type === "updateEmail") {
    return [...state.slice(undefined, i), value, ...state.slice(i + 1)];
  } else if (type === "deleteEmail") {
    return [...state.slice(undefined, i), ...state.slice(i + 1)];
  } else if (type === "clearEmails") {
    return [];
  } else if (type === "fillEmails") {
    return action.emails;
  } else {
    return state;
  }
};
