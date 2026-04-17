function Home() {
  return (
    <section className="page page-home">
      <h1>Welcome to Creator's Kitchen</h1>
      <p>
        Discover recipe content workflows, creator tools, and a simple layout
        that can grow into a complete creator platform.
      </p>
      <div className="home-grid">
        <article>
          <h2>Theme</h2>
          <p>
            Build recipe collections, publish cooking guides, and manage all
            creator content from one dashboard.
          </p>
        </article>
        <article>
          <h2>Navigation</h2>
          <p>Use the header links to browse pages without full page reloads.</p>
        </article>
        <article>
          <h2>Next Step</h2>
          <p>
            Expand this foundation with real content, forms, and backend
            integration later.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
