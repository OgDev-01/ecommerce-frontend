export const CartCount = ({ children }) => {
  return (
    <span
      style={{
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: "#000000",
        color: "#fff",
      }}
      className='flex justify-center align-center'
    >
      {children}
    </span>
  );
};
