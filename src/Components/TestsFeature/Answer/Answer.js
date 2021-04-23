import "./Answer.css";
const Answer = ({
  children: answer,
  i,
  j,
  isChecked,
  updateTestClickHandler,
}) => {
  return (
    <li className="test-answer">
      <div className="test-answer-item"> {answer} </div>
      <input
        className="test-ckeck"
        type="checkbox"
        readOnly
        checked={isChecked}
        onClick={() => updateTestClickHandler(i, j)}
      />
    </li>
  );
};

export default Answer;
