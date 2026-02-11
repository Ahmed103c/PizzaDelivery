import express from "express";
import { PizzaService } from  "./service/pizzaService.js";

const PORT = 8080;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Pizzima!");
});

app.get("/pizzas", (req, res) => {
  const pizzaService = new PizzaService();
  res.json(pizzaService.getAllPizzas());
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});