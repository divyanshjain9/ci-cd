import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Dashboard</h1>
      </header>
      <main className="App-main">
        <div className="App-sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
            <li>New List Options</li>
          </ul>
        </div>
        <div className="App-content">
          <h2>Main Content</h2>
          <p>Welcome to the dashboard!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
