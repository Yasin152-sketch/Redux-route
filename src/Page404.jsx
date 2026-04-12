import { Link } from "react-router";
import "./index.css"
function Pagenotfound() {
  return (
    <div className="header2">
      <h2>
        <Link to="/" className="home">Back to Homepage!</Link>
      </h2>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
        alt="page not found!"
      />
    </div>
  );
}

export default Pagenotfound;
