"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="menu-page">
      <section className="menu-error">
        <p className="section-label">MENU ERROR</p>

        <h1>Something went wrong.</h1>

        <p>
          We couldn't load the menu. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="error-retry-btn"
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
