import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CadastrarUsuario from "./pages/CadastrarUsuario";
import ListarUsuarios from "./pages/ListarUsuarios";
import EditUser from "./pages/editUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<CadastrarUsuario />} />
        <Route path="/listar" element={<ListarUsuarios />} />
        <Route path="/edit" element={<EditUser id />} />
      </Routes>
    </Router>
  );
  // // const [users, setUsers] = useState(0);
  // // const [error, setError] = useState(0);
  // // useEffect(() => {
  // //   // Função para buscar os dados
  // //   const fetchTools = async () => {
  // //     try {
  // //       const response = await axios.get("http://localhost:3000/users/getAll");
  // //       //console.log("fetchTools", response.data[1].supplier_id.name);
  // //       setUsers(response.data.users); // Atualiza o estado com os dados da API
  // //       //setSupplierName(response.data[1].supplier_id.name);
  // //     } catch (err) {
  // //       console.error("Erro ao buscar dados:", err);
  // //       setError("Não foi possível carregar a lista de usuários.");
  // //     }
  // //   };
  // //   fetchTools(); // Chama a função ao montar o componente
  // // }, []);
  // return (
  //   <>
  //     {/* <div className="container">
  //       <h2>Lista de Usuários</h2>
  //       {error && <p className="error">{error}</p>}
  //       {users.length > 0 ? (
  //         users.map((item, index) => (
  //           <ul key={index}>
  //             <li>
  //               Nome: <b>{item.name}</b>
  //             </li>
  //             <li>
  //               Email: <b>{item.email}</b>
  //             </li>
  //           </ul>
  //         ))
  //       ) : (
  //         <p>Carregando dados...</p>
  //       )}
  //       <hr />
  //       <h2>Cadastrar Usuário: </h2>
  //       <form action="">
  //         <label htmlFor="">Nome: </label>
  //         <input type="text" name="name" />
  //         <br />
  //         <label htmlFor="">Email: </label>
  //         <input type="text" name="email" />
  //         <br />
  //         <button type="submit">Cadastrar</button>
  //       </form>
  //     </div> */}
  //   </>
  // );
}

export default App;
