import "./style.css";

const container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
    </>
  );
};

export default container;
