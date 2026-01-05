import express from "express";

const app = express();
const PORT = Bun.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor en ${PORT}`);
});
