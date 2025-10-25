import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Postman" style={{width: '150px'}} />
        <nav>
          <ul>
            <li>Product</li>
            <li>Pricing</li>
            <li>Enterprise</li>
            <li>Resources and Support</li>
            <li>Public API Network</li>
          </ul>
        </nav>
        <div>
          <button>Contact Sales</button>
          <button>Sign In</button>
          <button>Sign Up for Free</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Are your APIs ready for AI agents?</h1>
          <p>Your API foundation is your AI foundation. Postman provides the tools you need to build, consume, and secure AI-ready APIs.</p>
          <button>Get Started for Free</button>
        </section>

        <section className="stats">
          <div>
            <h2>40M+</h2>
            <p>developers</p>
          </div>
          <div>
            <h2>800K+</h2>
            <p>organizations</p>
          </div>
          <div>
            <h2>98%</h2>
            <p>of the Fortune 500</p>
          </div>
        </section>

        <section className="resources">
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Resource 1" />
            <h3>The True Cost of API Chaos</h3>
            <p>Learn how API sprawl, lack of governance, and poor quality can cost you.</p>
            <a href="#">Read the report</a>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Resource 2" />
            <h3>The Developer's Guide to AI-Ready APIs</h3>
            <p>Build high-quality, secure, and scalable APIs that are ready for AI.</p>
            <a href="#">Get the guide</a>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Resource 3" />
            <h3>The 90-day AI Readiness Playbook</h3>
            <p>A step-by-step guide to get your APIs ready for the AI-powered future.</p>
            <a href="#">Download the playbook</a>
          </div>
        </section>
      </main>

      <footer>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}

export default App;
