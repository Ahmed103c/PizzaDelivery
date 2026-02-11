import { type Pizza, pizzas } from "../data/listeDesPizzas.js";

export class PizzaService {
    getAllPizzas() : Pizza[] {
        return pizzas;
    }

    getPizzaByNome(name: string) : Pizza | undefined {
        return pizzas.find(pizza => pizza.name.toLowerCase() === name.toLowerCase());
    }

}

