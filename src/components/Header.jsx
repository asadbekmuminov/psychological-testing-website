import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white">
      <div className="align-element py-5">
        <div className="flex justify-between items-center">
          <Link className="font-black text-3xl " to={"/"}>
            Home
          </Link>
          <Link to={"about"} className="font-bold text-xl">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
