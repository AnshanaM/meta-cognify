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
          Metacognition is a higher level of thinking. It is the <span className="highlight-text">understanding and awareness of one’s thought process.</span> This is crucial if you wish to have an advanced level of understanding of concepts, regardless of which field. From the <span className="highlight-text">Feynman Technique</span> to the <span className="highlight-text">Socratic Method</span>, use MetaCognify to understand any topic of your choice, and track your progress with Falcon AI. 
          </p>
        </div>
        <Image src="/socrates.png" alt="Right Image" width={300} height={300} className="right-image" />
      </section>

      <section>
        <div className="feynman">
          <div className="description">
            <div className="slogan-group">
              <b><h1 className="text-gradient-underline">The Feynman Technique</h1></b>
            </div>
            <p>"The ultimate test of your knowledge is your capacity to convey it to others."</p>
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
