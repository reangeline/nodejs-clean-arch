import paths from "./paths";
import components from "./components";
import schemas from "./schemas";

export default {
  openapi: "3.0.0",
  info: {
    title: "arquitetura de modelo",
    description:
      "Exemplo de modelo pra criação de aplicações em nodejs utilizando clean arc",
    version: "1.0.0",
    contact: {
      name: "Renato Saraiva Angeline",
      email: "reangeline@hotmail.com",
      url: "https://www.linkedin.com/in/reangeline",
    },
    // license: {
    //   name: "GPL-3.0-or-later",
    //   url: "https://spdx.org/licenses/GPL-3.0-or-later.html",
    // },
  },
  servers: [
    {
      url: "/api",
      description: "Servidor Principal",
    },
  ],
  tags: [
    {
      name: "Task",
      description: "APIs relacionadas a Task",
    },
  ],
  paths,
  schemas,
  components,
};
