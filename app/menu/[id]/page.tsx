import React from 'react'
import dishes from "../../../public/dishes.json";

type Props = {
    params: Promise<{
        id: string;
    }>;
};


async function DishDetail({ params }: Props) {
    const { id } = await params;

    const dish = dishes.items.find((item) => Number(id) === item.id)
    if (!dish) {
        return <h1>Dish not found</h1>;
    }
    return (
        <div>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            <p>{dish.price} ETB</p>
        </div>
    )
}

export default DishDetail
