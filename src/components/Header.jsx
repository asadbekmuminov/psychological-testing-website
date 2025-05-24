import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white">
      <div className="align-element py-5">
        <div className="flex justify-between items-center">
          <Link className="font-black text-3xl " to={"/"}>
            Home
          </Link>
          <div className="flex gap-6">
          <Link to={"about"} className="font-bold text-xl">
            About
          </Link>
          <Link to={"chatPage"} className="font-bold text-xl">
            AI yordamchi
          </Link>
          <Link to="/LoginForm">Kirish</Link>
      <Link to="/RegisterForm">Ro‘yxatdan o‘tish</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
