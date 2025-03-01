import UserOperation from "../_features/user/UserOperation";
import Logout from "../_features/authentication/Logout";

function Layout({ children }) {
  return (
    <main className="h-full px-[3vw] flex flex-col items-center gap-1">
      <header className="relative flex flex-col gap-2 sm:flex-row sm:gap-0 items-center ">
        <UserOperation />
        <div className="sm:absolute sm:left-full sm:ml-3 lg:ml-4">
          <Logout />
        </div>
      </header>
      {children}
    </main>
  );
}

export default Layout;
