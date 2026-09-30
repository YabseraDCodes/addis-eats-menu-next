// import { Dish } from "./Dish"
import Link from "next/link"

type Dish = {
    id: number;
    name: string;
    description: string;
    price: number;
    spicy: boolean;
    category: string;
};

type DishListProps = {
    dishes: Dish[];
};

export function DishList({ dishes }: DishListProps) {
    return (
        <div>
            {dishes.length > 0 ? (
                <div className="items">
                    {dishes.map((dish) => (
                        <article key={dish.id} className="food-card">
                            <div>
                                <h3>{dish.name}</h3>

                                <p>{dish.description}</p>

                                {dish.spicy && (
                                    <span className="spicy-badge">
                                        🌶️ Spicy
                                    </span>
                                )}
                            </div>

                            <div className="food-bottom">
                                <span className="price">
                                    {dish.price} ETB
                                </span>

                                <span
                                    className={`catagory catagory-${dish.category}`}
                                >
                                    {dish.category}
                                </span>
                            </div>

                            <div className="item-actions">
                                <button className="addBtn">
                                    Add to Order
                                </button>

                                <Link
                                    href={`/menu/${dish.id}`}
                                    className="viewDetails"
                                >
                                    Details
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="empty-state">
                    No dishes found in this category.
                </p>
            )}
        </div>
    )
}