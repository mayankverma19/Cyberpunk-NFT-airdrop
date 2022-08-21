import "./styles/Navbar.scss";

import Facebook from "./assets/social-media-icons/facebook.png";
import Twitter from "./assets/social-media-icons/twitter.png";
import Email from "./assets/social-media-icons/email.png";

export default function Navbar({ accounts, setAccounts }) {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    } else {
      window.alert("Please install metamask to use this website");
    }
  }

  return (
    <header className="header">
      <section className="iconContainer">
        
        <a href="https://www.linkedin.com/in/basilisk111/">
          <img
            id="ahah"
            src="https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png"
            alt="linkedin"
          />
        </a>
        <a href="mailto:lit2019038@iiitl.ac.in">
          <img src={Email} alt="gmail" />
        </a>
      </section>

      <section className="navigation">
        <div>About</div>
        <div>Mint</div>
        <div>Team</div>

        {isConnected ? (
          <p>Connected</p>
        ) : (
          <button onClick={connectAccount}>Connect</button>
        )}
      </section>
    </header>
  );
}
