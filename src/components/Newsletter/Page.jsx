function Newsletter() {
  return (
    <section className="subscribe-container">
      <div className="hero-newsletter">
        <h2>Assine a nossa newsletter</h2>
      </div>

      <div className="form-container">
        <form id="form">
          <input
            type="email"
            placeholder="Endereço de email"
            name="email"
            id="email"
            required
          />
          <div>
            <input type="submit" id="submit" value="Inscrever-se" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
