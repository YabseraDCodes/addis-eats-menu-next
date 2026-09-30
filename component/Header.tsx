import Link from "next/link";

export function Header() {
    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link href="/" className="site-logo">
                    Addis Eats
                </Link>

                <nav className="site-nav">
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/cart">Cart</Link>
                    <Link href="/checkout">Checkout</Link>
                    <Link href="/login">Login</Link>
                </nav>
            </div>
        </header>
    );
}
