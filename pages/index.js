import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="logo">
            <Link href="/">Burger Shop</Link>
          </h1>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      <main className="site-main">
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-inner">
            <h2 className="hero-title">Taste the Best Burgers in Town</h2>
            <p className="hero-subtitle">
              Fresh, handcrafted, and delivered hot to your door.
            </p>
            <Link href="/menu" className="cta-button">
              Order Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container features-grid">
            <article className="feature-card">
              <span className="feature-icon">🥬</span>
              <h3 className="feature-title">Fresh Ingredients</h3>
              <p className="feature-text">
                Locally sourced lettuce, tomatoes, and premium beef for a
                mouth‑watering experience.
              </p>
            </article>
            <article className="feature-card">
              <span className="feature-icon">🍔</span>
              <h3 className="feature-title">Handcrafted Burgers</h3>
              <p className="feature-text">
                Every patty is hand‑shaped and grilled to perfection.
              </p>
            </article>
            <article className="feature-card">
              <span className="feature-icon">🚚</span>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-text">
                Hot and ready in under 30 minutes, right to your doorstep.
              </p>
            </article>
          </div>
        </section>

        {/* Call‑to‑Action Section */}
        <section className="cta-section">
          <div className="container cta-inner">
            <h2 className="cta-title">Ready for a Bite?</h2>
            <Link href="/menu" className="cta-button secondary">
              Browse the Menu
            </Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} Burger Shop. All rights reserved.</p>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        /* Layout helpers */
        .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .site-header {
          background: #fff;
          border-bottom: 1px solid #eaeaea;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        .logo a {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d32f2f;
          text-decoration: none;
        }
        .nav {
          display: flex;
        }
        .nav ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* Hero */
        .hero {
          background: url("/hero-bg.jpg") center/cover no-repeat;
          color: #fff;
          text-align: center;
          padding: 6rem 0;
        }
        .hero-inner {
          max-width: 800px;
        }
        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .cta-button {
          display: inline-block;
          background: #d32f2f;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
        }
        .cta-button:hover {
          background: #b71c1c;
        }
        .cta-button.secondary {
          background: #fff;
          color: #d32f2f;
        }
        .cta-button.secondary:hover {
          background: #f5f5f5;
        }

        /* Features */
        .features {
          background: #fafafa;
          padding: 4rem 0;
        }
        .features-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        .feature-card {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
        }
        .feature-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }
        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .feature-text {
          font-size: 0.95rem;
          color: #666;
        }

        /* CTA Section */
        .cta-section {
          background: #d32f2f;
          color: #fff;
          text-align: center;
          padding: 3rem 0;
        }
        .cta-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        /* Footer */
        .site-footer {
          background: #212121;
          color: #bbb;
          padding: 2rem 0;
          font-size: 0.9rem;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .footer-nav ul {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-nav a {
          color: #bbb;
          text-decoration: none;
        }
        .footer-nav a:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-inner {
            flex-wrap: wrap;
          }
          .nav {
            width: 100%;
            display: ${menuOpen ? "block" : "none"};
          }
          .nav ul {
            flex-direction: column;
            gap: 0.75rem;
            margin-top: 0.5rem;
          }
          .menu-toggle {
            display: block;
          }
          .hero {
            padding: 4rem 0;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}