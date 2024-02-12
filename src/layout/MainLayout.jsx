import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="align-element mb-auto">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
