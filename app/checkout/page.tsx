import Link from "next/link";

export const dynamic = "force-dynamic";
// This read requires dynamic rendering because checkout
// must use the current request's data rather than static output.

export default function CheckoutPage() {
  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <h2>Checkout</h2>

          <p>
            Complete your information to place your order.
          </p>
        </div>

        <div className="checkout-content">
          <form className="checkout-form">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
            />

            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />

            <label htmlFor="address">Delivery Address</label>

            <textarea
              id="address"
              rows={4}
              placeholder="Enter your delivery address"
            />

            <button type="submit">
              Place Order
            </button>
          </form>

          <div className="checkout-summary">
            <h3>Order Summary</h3>

            <p>Your cart is currently empty.</p>

            <div className="checkout-total">
              <span>Total</span>
              <strong>0 ETB</strong>
            </div>

            <Link href="/cart" className="cart-browse-btn">
              Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
