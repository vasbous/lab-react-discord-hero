// src/App.jsx
import "./App.css";
import discordBackground from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import discordMenu from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img src={discordLogo} className="logo" />
        <img src={discordMenu} className="menu" />
      </div>
      <div className="content">
        <h1>
          IMAGINE A<br />
          PLACE...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a<br />
          worldwide art community. Where just you and a handful of
          <br />
          friends can spend time together. A place that makes it easy to
          <br />
          talk every day and hang out more often.
        </p>
      </div>
      <div className="btn-and-image">
        <div className="btn-container">
          <button className="download">Download for Mac</button>
          <button className="open">Open Discord in your browser</button>
        </div>
        <img src={discordBackground} className="background-img" />
      </div>
    </div>
  );
}

export default App;
