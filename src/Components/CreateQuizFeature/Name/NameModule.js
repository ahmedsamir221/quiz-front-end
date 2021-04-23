export const name = (state = "", action) => {
  let type = action.type;
  let value = action.value;
  if (type === "updateName") {
    return value;
  } else if (type === "clearName") {
    return "";
  } else {
    return state;
  }
};

export const updateName = (value) => {
  return {
    type: "updateName",
    value,
  };
};
