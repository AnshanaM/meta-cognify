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
          <p>Students of all ages, this is your calling. Struggling to grasp or retain new knowledge? Boost your understanding and track your progress using our <b className="falcon-text">Falcon</b>-powered self-study tools</p>
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
        <Image src="/left.png" alt="Left Image" width={150} height={150} className="left-image" />
        <div className="text-container">
          <i><b><h1 className="heading-text">
            "Too often, we teach students <span className="highlight-text">what</span> to think, not <span className="highlight-text">how</span> to think."
          </h1></b></i>
          <p className="description-text">
          Metacognition is an advanced level of thinking that involves understanding and being aware of one's own thought processes. This capability is essential for achieving advanced comprehension of concepts across all fields. Start now with MetaCognify - Enhance your understanding of any subject with any of the following self-study techniques powered by AI.
          </p>
        </div>

        <Image src="/right.png" alt="Right Image" width={150} height={150} className="right-image" />
      </section>

      {/* New section with dark background */}
      <section className="main-content">
        <div className="image-section">
          <div className="feynman-image">
            <Image src="/noobert.png" alt="Front Page" width={200} height={300} />
          </div>
          <div className="text-section">
          <b><div className="slogan-group">
            <h1 className="text-gradient-underline"><b>The Feynman Technique</b></h1>
          </div></b>
          <p>
            Passively consuming information about a topic can only take you so far. How can you be sure if you fully understand it?
          </p>
          <i><p className="quote">
            "The ultimate test of your knowledge is your capacity to convey it to others."
          </p></i>
          <ul>
              <li>Noobert acts as a complete beginner and will ask questions that beginners typically ask.</li>
              <li>Try your best to explain the topic as simply as possible.</li>
              <li>After you complete your explanation, Noobert will:</li>
              <li>Rate your explanation based on simplicity and accuracy.</li>
              <li>Provide analytics and identify possible knowledge gaps.</li>
          </ul>
          </div>
        </div>
      </section>
      {/* New heading and paragraph */}
      <section className="about-techniques">
      </section>


      <div className="footer">
        <p>Created by The Falconers</p>
        <p>Powered by Falcon AI</p>
      </div>
    </main>
  );
}
