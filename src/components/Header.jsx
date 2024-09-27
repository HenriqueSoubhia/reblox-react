import Logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import { Close, Menu,} from "@mui/icons-material";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="fixed top-0 flex justify-center w-full bg-primary-blue py-3 z-50">
      <div className="max-w-7xl flex w-full justify-between items-center px-8">
        <Link to="/">
          <img className="w-48" src={Logo} alt="" />
        </Link>

        <div className="text-light-white flex md:hidden cursor-pointer" onClick={() => setMenuOpened(true)}>
          <Menu fontSize="large" />
        </div>

        {menuOpened && (
          <div className="w-screen h-screen z-50 fixed top-0 left-0 bg-blue-900 text-light-white flex justify-center">
            <Close
              fontSize="large"
              className="fixed z-50 top-4 right-4 cursor-pointer"
              onClick={() => setMenuOpened(false)}
            />

            <nav>
              <ul className="flex flex-col mt-72 text-center gap-4">
                <li>
                  <Link
                    className="p-2 font-bold"
                    to="/"
                    onClick={() => setMenuOpened(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 font-bold"
                    to="/about"
                    onClick={() => setMenuOpened(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    className="p-2 font-bold"
                    to="/solution"
                    onClick={() => setMenuOpened(false)}
                  >
                    Solução
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <nav className="hidden md:flex">
          <ul className="flex-row gap-4 flex">
            <li>
              <Link
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                to="/about"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="p-2 border-b-2 text-light-white font-bold border-transparent transition-colors hover:border-light-white"
                to="/solution"
              >
                Solução
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
