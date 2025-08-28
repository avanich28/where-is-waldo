import Container from "./Container";

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 h-screen w-screen flex justify-center items-center z-20">
      <div className="h-full w-full bg-gray-800 dark:bg-black opacity-50"></div>
      <Container
        type="secondary"
        addClassName="absolute justify-center items-center sm:gap-1 lg:gap-2 text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wide sm:tracking-wider sm:px-5 lg:px-6"
      >
        {children}
      </Container>
    </div>
  );
}

export default Modal;
