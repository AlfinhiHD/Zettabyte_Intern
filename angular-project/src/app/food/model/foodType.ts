export interface FoodType {
    _id: string,
    name: string,
    type: string,
    description: string,
    price: number,
    image: {
        cover: string,
        preview: string
    },
    ingredients: {
        name: string,
        type: string,
        price: number,
        amount: string,
    }[],
    stock: number,
    popularity: number
}