"use client";
import "./styles/globals.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Footer from "./components/Footer";

export default function Home() {

  const router = useRouter();

  return (
    <main>
      <div className="main-content">
        <div className="text-section">
          <div className="slogan-group">
            <h1 className="text-gradient-underline"><b>Revise.</b></h1>
            <h1 className="text-gradient-underline"><b>Retain.</b></h1>
            <h1 className="text-gradient-underline"><b>Revolutionize.</b></h1>
          </div>
          <p className="paragraph-style">Struggling to grasp new knowledge? Boost your understanding and track your progress using our <b className="falcon-text">Falcon</b>-powered self-study tools.</p>
          <p><i>Discover the power within you to excel beyond limits.</i></p>
          <div className="button-group">
            {/* <button className="sign-up-button">Sign Up</button> */}
            <button className="learn-more-button" onClick={() => router.push('/About')}>Learn More</button>
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

      <section className="services">
        <b><p>THE ULTIMATE SELF-STUDY RESOURCE</p></b>
        <i><b><h1 className="heading-text">
          "Too often, we teach students <span className="highlight-text">what</span> to think, not <span className="highlight-text">how</span> to think."
        </h1></b></i>
        <h3>Finding the best learning approach for you</h3>
        <div className="cards-container">
          <div className="card">
            PUT IMAGE HERE
            <p>put text here</p>
          </div>
          <div className="card">
            PUT IMAGE HERE
            <p>put text here</p>
          </div>
          <div className="card">
            PUT IMAGE HERE
            <p>put text here</p>
          </div>
        </div>
      </section>

      <section>
        <div className="split-screen">
          <section className="left-section">
            <Image src="/feynman.png" alt="Left Image" width={300} height={300} />
            <h1>add some attractive text here</h1>
            <button className="learn-more-button" onClick={() => router.push('/ChatPage')}>Chat With Noobert!</button>
          </section>
          <section className="right-section">
            <Image src="/socrates.png" alt="Right Image" width={300} height={300} />
            <b><h1>add some attractive text here</h1></b>
            <button className="learn-more-button" onClick={() => router.push('/SocraChat')}>Chat With Socrabot!</button>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
