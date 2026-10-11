import Link from "next/link";
import { notFound } from "next/navigation";
import dishesData from "../../../public/dishes.json";

export async function generateStaticParams() {
  return dishesData.items.map((dish) => ({
    id: String(dish.id),
  }));
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dish = dishesData.items.find(
    (dish) => String(dish.id) === id
  );

  if (!dish) {
    notFound();
  }

  return (
    <main className="menu-page">
      <section className="dish-detail-page">
        <article className="dish-detail-card">
          <div className="dish-detail-header">
            <div className="dish-category">
              <span
                className={`catagory catagory-${dish.category}`}
              >
                {dish.category}
              </span>

              {dish.spicy && (
                <span className="spicy-badge">
                  🌶️ Spicy
                </span>
              )}
            </div>

            <h1>{dish.name}</h1>

            <p className="dish-detail-description">
              {dish.description}
            </p>
          </div>

          <div className="dish-detail-divider" />

          <div className="dish-detail-info">
            <div className="dish-info-box">
              <span className="dish-info-label">
                Price
              </span>

              <span className="dish-detail-price">
                {dish.price} ETB
              </span>
            </div>

            <div className="dish-info-box">
              <span className="dish-info-label">
                Category
              </span>

              <span className="dish-info-value">
                {dish.category}
              </span>
            </div>
          </div>

          <div className="dish-detail-actions">
            <Link
              href="/menu"
              className="back-menu-btn"
            >
              Back to Menu
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}