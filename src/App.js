import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Registration-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test Registration Form</h1>
      </header>
      <form>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              className="input-box"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="input-box"
              type="text"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              className="input-box"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="contact">Contact</label>
            <input
              className="input-box"
              type="text"
              id="contact"
              placeholder="Contact"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              className="input-box"
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              className="input-box"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <br></br>
        <div className="form-container">
          <div className="submit-button">
            <button className="submit-button" type="submit">
              Register Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
