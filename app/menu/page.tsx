import Link from "next/link";
import dishesData from "../../public/dishes.json";
import { DishList } from "./DishList";
import { CategoryBar } from "./CatagoryBar";

type Category = "ALL" | "MAIN" | "BREAKFAST" | "DRINK" | "DESSERT";

const categories: { name: string; value: Category }[] = [
  { name: "All", value: "ALL" },
  { name: "Main Dishes", value: "MAIN" },
  { name: "Breakfast", value: "BREAKFAST" },
  { name: "Drinks", value: "DRINK" },
  { name: "Desserts", value: "DESSERT" },
];

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  // throw new Error("Testing menu error");
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const params = await searchParams;

  const selectedCategory = params.category as Category | undefined;

  const filteredDishes = selectedCategory
    ? dishesData.items.filter(
      (dish) => dish.category === selectedCategory
    )
    : dishesData.items;

  return (
    <main>
      {/* Header */}
      <section className="Header">
        <div className="Title">
          <h1>Addis Eats Menu</h1>
        </div>

        
      </section>

      {/* Menu */}
      <section className="home-section">
        <div className="section-heading centered">
          <p className="section-label">OUR MENU</p>

          <h2>
            {selectedCategory
              ? categories.find(
                (category) => category.value === selectedCategory
              )?.name
              : "All Dishes"}
          </h2>

          <p>
            Traditional Ethiopian food made with care.
          </p>
        </div>

        {/* Categories */}
        <CategoryBar categories={categories} selectedCategory={selectedCategory} />

        <DishList dishes={filteredDishes} />
      </section>
    </main>
  );
}