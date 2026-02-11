export interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const pizzas: Pizza[] = [
    {
        id: 1, 
        name: "Margherita",
        description: "Tomato sauce, mozzarella, and basil.",
        price: 8.99
    },
    {
        id: 2,
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, and pepperoni.",        
        price: 9.99
    } 
];