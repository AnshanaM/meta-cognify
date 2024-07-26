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
          <p>Are you facing challenges in retaining information or grasping complex concepts? Elevate your learning journey with groundbreaking self-study techniques rooted in psychology, and supercharge your progress with cutting-edge AI models.</p>
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
        <h1 className="heading-text"><i>"Too often, we teach students what to think, not how to think."</i></h1>
        <p className="description-text">
          MetaCognify allows you to actively identify what is missing from your understanding of any topic. The mind is a strong asset, but we don't have a manual.
        </p>
      </section>
      <div className="footer">
        <p>Created by The Falconers</p>
        <p>Powered by Falcon AI</p>
      </div>
    </main>
  );
}
