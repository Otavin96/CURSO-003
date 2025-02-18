import { useState } from "react";
import api from "../services/api";

const CadastrarUsuario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
    };

    try {
      const response = await api.post("/users/cadastrar", data);
      console.log("Usuário cadastrado:", response.data.users);
      alert("Usuário cadastrado com sucesso!");

      // Limpar campos após o envio
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Verifique o console.");
    }
  };

  return (
    <div>
      <h2 className="m-8 text-center text-3xl">Cadastrar Usuário</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarUsuario;
