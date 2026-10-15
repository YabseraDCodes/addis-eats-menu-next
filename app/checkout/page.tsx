import Link from "next/link";
import CheckoutForm from "@/component/CheckoutForm";

export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <h2>Checkout</h2>
          <p>Complete your information to place your order.</p>
        </div>

        <div className="checkout-content">
          <CheckoutForm />
          <div className="checkout-summary"> <h3>Order Summary</h3> <p>Your cart is currently empty.</p>

            <div className="checkout-total"> <span>Total</span> <strong>0 ETB</strong> </div>

            <Link href="/cart" className="cart-browse-btn"> Back to Cart </Link>
          </div>
        </div>
      </div>
    </main>);
}