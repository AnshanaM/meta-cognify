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

      <section className="about-techniques">
        <Image src="/feynman.png" alt="Left Image" width={300} height={300} className="left-image" />
        <div className="text-container">
          <i><b><h1 className="heading-text">
            "Too often, we teach students <span className="highlight-text">what</span> to think, not <span className="highlight-text">how</span> to think."
          </h1></b></i>
          <p className="description-text">
          Metacognition is an advanced level of thinking that involves understanding and being aware of one's own thought processes. This capability is essential for achieving advanced comprehension of concepts across all fields. Start now with MetaCognify - Enhance your understanding of any subject with any of the following self-study techniques powered by AI.
          </p>
        </div>
        <Image src="/socrates.png" alt="Right Image" width={300} height={300} className="right-image" />
      </section>

      <section>
        <div className="feynman">
          <div className="description">
            <b><h1>LOREM <span className="highlight-text">IPSUM</span></h1></b>
            <p>Passively consuming information can only take you so far. How can you be sure if you fully understand it? The Feynman Technique posits that the best way to test your understanding is by teaching it to a complete beginner.</p>
            <p>With MetaCognify, you can put this to the test by explaining your topic to Noobert, our AI bot, who acts as a complete beginner! Noobert will ask questions that beginners ask, try your best to explain as simply as possible.</p>
            <p>After you complete your explanation, Noobert rates your explanation based on simplicity and accuracy, providing analytics and possible knowledge gaps.</p>
            <i><p>"The ultimate test of your knowledge is your capacity to convey it to others."</p></i>
          </div>
          <div className="blocks">
            <div className="cols">
              <div className="block block-black">
                  <div className="icon">
                    ICON
                  </div>
                  <div className="block-text">
                    short text description
                  </div>
              </div>
              <div className="block block-gradient">
                <div className="icon">
                    ICON
                  </div>
                  <div className="block-text">
                    short text description
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="block block-gradient">
                <div className="icon">
                    ICON
                  </div>
                  <div className="block-text">
                    short text description
                </div>
              </div>
              <div className="block block-black">
                <div className="icon">
                    ICON
                  </div>
                  <div className="block-text">
                    short text description
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="footer">
        <p>Created by The Falconers</p>
        <p>Powered by Falcon AI</p>
      </div>
    </main>
  );
}
