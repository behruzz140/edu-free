function wrappergrid({ children }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">{children}</div>
    </>
  );
}

export default wrappergrid;
