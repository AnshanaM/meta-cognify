import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <div className="text-section">
        <h1><b>MetaCognify</b></h1>
        <p>Students of all ages, seize your moment. Are you facing challenges in retaining information or grasping complex concepts? Elevate your learning journey with groundbreaking self-study techniques rooted in psychology, and supercharge your progress with cutting-edge AI models. Discover the power within you to excel beyond limits.</p>
        <button className="sign-up-button">Sign Up Now</button>
      </div>
      <div className="image-section">
        <Image src="/frontpage.png" alt="Front Page" width={600} height={400} />
      </div>
    </main>
  );
}
