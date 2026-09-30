import Link from "next/link";
import dishesData from "../../public/dishes.json";

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
  const params = await searchParams;

  const selectedCategory = params.category as Category | undefined;

  const dishes = selectedCategory
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

        <nav className="navigation">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
        </nav>
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
        <div className="category-filter">
          {categories.map((category) => (
            <Link
              key={category.value}
              href={
                category.value === "ALL"
                  ? "/menu"
                  : `/menu?category=${category.value}`
              }
              className={
                selectedCategory === category.value ||
                (!selectedCategory && category.value === "ALL")
                  ? "active"
                  : ""
              }
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Dishes */}
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
      </section>
    </main>
  );
}