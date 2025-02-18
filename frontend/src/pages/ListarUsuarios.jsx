import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ListarUsuarios = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/users/getAll").then((res) => setUsers(res.data.users));
  }, []);

  function eventDelete(id) {
    alert("Deseja deletar o Usuário do ID: " + id);
    api.delete(`users/deletar/${id}`);
  }

  function eventEdit(id) {
    api.get(`users/get/${id}`).then((res) => setEditUser(res.data.user));
    console.log(editUser);
    navigate("/edit");
  }

  return (
    <div className="flex flex-col">
      <h2 className="m-8 text-center text-3xl">Lista de Usuários</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300">ID</th>
            <th className="border border-gray-300">Nome</th>
            <th className="border border-gray-300">Email</th>
            <th className="border border-gray-300">Deletar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-4 border border-gray-300">{user.id}</td>
              <td className="p-4 border border-gray-300">{user.name}</td>
              <td className="p-4 border border-gray-300">{user.email}</td>
              <td className="flex">
                <button
                  id="btnDelete"
                  className="size-10 grow-3 flex-1 p-2 ms-4 my-2 cursor-pointer rounded-md border-2 border-red-400"
                  onClick={() => eventDelete(user.id)}
                >
                  Deletar
                </button>

                <button
                  id="btnEdit"
                  className="size-10 grow-3 flex-1 p-2 ms-4 my-2 cursor-pointer rounded-md border-2 border-indigo-500"
                  onClick={() => eventEdit(user.id)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;
