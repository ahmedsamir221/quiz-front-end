export const test = (state = [], action) => {
  if (action.type === "updateTest") {
    return [
      ...state.slice(undefined, action.i),
      action.j,
      ...state.slice(action.i + 1),
    ];
  } else if (action.type === "fillTest") {
    let temp = [];
    let cnt = action.cnt;
    while (cnt--) temp.push(-1);
    return temp;
  } else {
    return state;
  }
};
