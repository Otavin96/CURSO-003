import { Link } from "react-router-dom";
import "./Navbar.modules.css";

const Navbar = () => {
  return (
    <ul className="flex items-center bg-sky-900 shadow-xl">
      <Link className="p-4 text-white" to="/">
        Home
      </Link>
      <Link className="p-4 text-white" to="/cadastrar">
        Cadastrar Usuário
      </Link>
      <Link className="p-4 text-white" to="/listar">
        Listar Usuários
      </Link>
    </ul>
  );
};

export default Navbar;
