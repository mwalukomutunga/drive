const Wrapper = ({ children }) => {
  return (
    <>
      <div id="wrapper">{children}</div>
      <div className="rightbar-overlay"></div>
    </>
  );
};

export default Wrapper;
