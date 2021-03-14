const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");

conexao.connect((error) => {
  if (error) {
    console.error("Erro de conexão de banco de dados", error);
  } else {

    console.log("Conexão do banco de dados, sucesso!")
    const app = customExpress();
    app.listen(3000, () => console.log("Servidor lodding..."));
  }
});
