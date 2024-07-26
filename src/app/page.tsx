import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="main-content">
        <div className="text-section">
          <div className="slogan-group">
            <h1 className="text-gradient-underline"><b>Revise.</b></h1>
            <h1 className="text-gradient-underline"><b>Retain.</b></h1>
            <h1 className="text-gradient-underline"><b>Revolutionize.</b></h1>
          </div>
          <p>Students of all ages, this is your calling. Struggling to grasp or retain new knowledge? MetaCognify guides you through proven self-study techniques powered by AI to boost your understanding and track your progress.</p>
          <p><i>Discover the power within you to excel beyond limits.</i></p>
          <div className="button-group">
            <button className="sign-up-button">Sign Up</button>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
        <div className="image-section">
          <Image src="/frontpage.png" alt="Front Page" width={800} height={533} />
        </div>
      </div>

      {/* New heading and paragraph */}
      <section className="about-techniques">
        <i><h1 className="heading-text">"Too often, we teach students what to think, not how to think."</h1></i>
        <p className="description-text">
        Metacognition is a higher level of thinking.
        It is the understanding and awareness of one’s thought process. Advanced learning is powered by metacognition.
        Using MetaCognify, understand any topic of your preference at an advanced level.
        Start now - choose any of the following powerful self-study techniques backed by psychology research and see how far your understanding goes with the help of AI.
        </p>
      </section>

      {/* New section with dark background */}
      <section className="additional-section">
        {/* Add any content you want for this section */}
      </section>

      <div className="footer">
        <p>Created by The Falconers</p>
        <p>Powered by Falcon AI</p>
      </div>
    </main>
  );
}
