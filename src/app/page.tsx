import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <div className="text-section">
      {/* <p className="text-section-p">Students of all ages, this is your calling.</p> */}
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
    </main>
  );
}
