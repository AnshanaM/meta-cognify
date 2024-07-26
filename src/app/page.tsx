import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <div className="text-section">
        <h1><b>Revise. Retain. Revolutionize.</b></h1>
        <p>Students of all ages, this is your calling. Are you facing challenges in retaining information or grasping complex concepts? Elevate your learning journey with groundbreaking self-study techniques rooted in psychology, and supercharge your progress with cutting-edge AI models.</p>
        <p>Discover the power within you to excel beyond limits.</p>
        <div className="button-group">
          <button className="learn-more-button"><b>Learn More</b></button>
          <button className="sign-up-button"><b>Sign Up</b></button>
        </div>
      </div>
      <div className="image-section">
        <Image src="/frontpage.png" alt="Front Page" width={800} height={533} />
      </div>
    </main>
  );
}
