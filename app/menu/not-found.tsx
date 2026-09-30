import Link from "next/link";

export default function NotFound() {
  return (
    <main className="menu-page">
      <section className="dish-not-found">
        <p className="section-label">DISH NOT FOUND</p>

        <h1>We couldn't find that dish.</h1>

        <p>
          The dish you're looking for doesn't exist in our menu.
        </p>

        <Link href="/menu" className="back-menu-btn">
          Back to Menu
        </Link>
      </section>
    </main>
  );
}
