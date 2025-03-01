import Container from "./Container";

function Modal({ children }) {
  return (
    <div className="fixed top-0 h-screen w-screen flex justify-center items-center z-20">
      <div className="h-full w-full bg-gray-800 dark:bg-black opacity-50"></div>
      <Container
        type="secondary"
        addClassName="absolute justify-center items-center gap-2 sm:gap-3 tracking-wide sm:tracking-wider"
      >
        {children}
      </Container>
    </div>
  );
}

export default Modal;
