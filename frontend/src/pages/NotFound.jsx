import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page page-notfound">
      <h1>404 — Page not found</h1>
      <p>
        We couldn't find that page. Please use the navigation above to continue.
      </p>
      <Link to="/" className="home-link">
        Return home
      </Link>
    </section>
  );
}

export default NotFound;
