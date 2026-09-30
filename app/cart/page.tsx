import Link from "next/link";

export default function CartPage() {
  return (
    <main className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <div>
            <h2>Your Cart</h2>
            <span>0 items</span>
          </div>

          <Link href="/menu" className="cart-browse-btn">
            Browse Menu
          </Link>
        </div>

        <div className="cart-empty">
          <h3>Your cart is empty</h3>

          <p>
            Add some delicious Ethiopian dishes to your order.
          </p>

          <Link href="/menu" className="cart-browse-btn">
            Browse Menu
          </Link>
        </div>
      </div>
    </main>
  );
}
