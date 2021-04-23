const Error = ({ value }) => {
  if (value) {
    return <span></span>;
  } else {
    return (
      <span style={{ color: "#de0000", fontSize: "1.3rem" }}>
        {" "}
        This field is required{" "}
      </span>
    );
  }
};

export default Error;
