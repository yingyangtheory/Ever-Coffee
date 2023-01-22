import * as React from "react";
import "./App.css";
import maskGroup1 from "./assets/maskGroup1.svg";
import maskGroup from "./assets/maskGroup.svg";
import rectangle22 from "./assets/rectangle22.png";
import rectangle27 from "./assets/rectangle27.svg";
import imgShowTheBest from "./assets/imgShowTheBest.svg";
import rectangle21 from "./assets/rectangle21.png";
import cuteCoupleBarista from "./assets/cuteCoupleBarista.png";
import rysunek1 from "./assets/rysunek1.svg";
import rectangle271 from "./assets/rectangle271.svg";
import LearnMoreButton from "./components/LearnMoreButton";
const App = () => {
  const propsData = {
    learnMoreButton: {
      learnMore: "Learn More",
    },
    learnMoreButton3: {
      learnMore: "Buy now",
    },
    learnMoreButton1: {
      learnMore: "Buy now",
    },
    learnMoreButton2: {
      learnMore: "Join us",
    },
    learnMoreButton4: {
      learnMore: "Join us",
    },
  };
  return (
    <div className="iphone-14">
      <div className="i-phone-14-1">
        <div className="flex-container">
          <img className="rectangle-27" src={rectangle27} />
          <div className="cat-absolute-container">
            <div className="flex-container-1">
              <div className="flex-container-2">
                <span className="ever-coffee">Ever Coffee</span>
                <img className="rysunek-1" src={rysunek1} />
              </div>
              <span className="home">Home</span>
              <span className="features">Features</span>
              <span className="about-us">About Us</span>
            </div>
            <div className="flex-container-3">
              <span className="your-favourite-coffe">
                Your favourite coffee, whenever and wherever you are
              </span>
              <img className="img-show-the-best" src={imgShowTheBest} />
            </div>
            <LearnMoreButton
              className="learn-more-button-instance-1"
              {...propsData.learnMoreButton}
            />
          </div>
        </div>
        <img className="mask-group" src={maskGroup1} />
        <span className="freshly-brewed-coffe">
          Freshly brewed coffee with only one touch
        </span>
        <span className="our-technology-offer">
          Our technology offers you coffee from freshly ground beans with just
          one touch. With us you can say goodbye to instant coffee, because from
          now on your freshly ground coffee is always at hand.
        </span>
        <LearnMoreButton
          className="learn-more-button-3-instance"
          {...propsData.learnMoreButton3}
        />
        <div className="flex-container-4">
          <img className="mask-group-1" src={maskGroup} />
          <img className="rectangle-27-1" src={rectangle271} />
        </div>
        <span className="we-promote-quality">We promote quality </span>
        <span className="the-comfort-of-your">
          The comfort of your day begins with the morning coffee. Take the first
          step to improve the quality of your first daily routine.
        </span>
        <LearnMoreButton
          className="learn-more-button-1-instance"
          {...propsData.learnMoreButton1}
        />
        <img className="rectangle-22" src={rectangle22} />
        <span className="community">Community</span>
        <span className="our-coffee-lovers-co">
          Our coffee lovers communit y is waiting for you. Sign up now to share
          your knowledge, experiences and more...
        </span>
        <img className="rectangle-21" src={rectangle21} />
        <span className="types-of-coffee">Types of coffee</span>
        <span className="learn-what-makes-our">
          Learn what makes our coffee so delicious and our coffee machines so
          unique...
        </span>
        <LearnMoreButton
          className="learn-more-button-2-instance"
          {...propsData.learnMoreButton2}
        />
        <img className="cute-couple-barista" src={cuteCoupleBarista} />
        <span className="how-it-works">How It Works</span>
        <span className="in-our-company-you-a">
          In our company, you and your favourite coffee are our priority. That’s
          why we place great value on the quality of the products we deliver to
          you. We are passionate about coffee, so we make sure that our coffee
          machines are adapted to your needs..
        </span>
        <LearnMoreButton
          className="learn-more-button-4-instance"
          {...propsData.learnMoreButton4}
        />
        <div className="rectangle-19">
          <span className="ever-coffee-1">Ever Coffee</span>
          <span className="contact-us">Contact Us</span>
          <span className="num-48-458-262-199">+48 458 262 199</span>
          <span className="ever-coffeegmailcom">Ever_Coffee@gmail.com</span>
          <span className="facebook">Facebook</span>
          <span className="instagram">Instagram</span>
          <span className="twitter">Twitter</span>
          <span className="comunity">Comunity</span>
          <span className="support">Support</span>
          <span className="help">Help</span>
          <span className="faq">FAQ</span>
          <span className="our-blogs">Our Blogs</span>
          <span className="about-us-1">About Us</span>
          <span>Our Company</span>
          <span className="privacy-policy">Privacy Policy</span>
          <span className="terms-of-use">Terms Of Use</span>
          <span className="stay-updated">Stay Updated</span>
          <input
            className="rectangle-3"
            placeholder="Insert Your Email Here"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
export default App;
