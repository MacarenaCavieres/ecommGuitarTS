export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type cartItem = Guitar & {
    quantity: number
}

// export interface CartItem extends Guitar {
//     quantity: number
// }

// para elegir ciertos atributos de otro types
// export type cartItem = Pick< Guitar, "id" | "name" | "price" > &{
//     quantity: number
// }
