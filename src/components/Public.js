import { Link } from "react-router-dom";
const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Dan D. Repairs!</span>
        </h1>
      </header>
      <main className="public_main">
        <p>
          Located in Beautful Downtown Foo City, Dan D. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public_addr">
          Dan D. Repair <br />
          555 Foo Drive <br />
          Foo City, CA 12345 <br />
          <a href="tel:+998901234567">(90) 123-45-67</a>
        </address>
        <br />
        <p>Owner: Dan Davidson</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
