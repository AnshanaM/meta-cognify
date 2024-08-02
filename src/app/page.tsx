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
            <h1 className="text-gradient-underline"><b>Realise.</b></h1>
            <h1 className="text-gradient-underline"><b>Retain.</b></h1>
            <h1 className="text-gradient-underline"><b>Revolutionize.</b></h1>
          </div>
          <p className="paragraph-style">Metacognition is high level thinking. It means understanding your own thinking process — key to mastering any subject. Use MetaCognify to boost your understanding and track your progress with our Falcon AI-powered self-study tools.</p>
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

      <section className="services">
        <b><p>THE ULTIMATE SELF-STUDY RESOURCE</p></b>
        <i><b><h1 className="heading-text">
          "Too often, we teach students <span className="highlight-text">what</span> to think, not <span className="highlight-text">how</span> to think."
        </h1></b></i>
        <h3>With MetaCognify, achieve deeper understanding and critical thinking skills.</h3>
        <div className="cards-container">
          <div className="card">
          <img src="/theBots.png" alt="Intro to bots image"/>
          <b><h3>Chat Bots designed for Self-Study</h3></b>
            <p>Meet Noobert and Socrabot, our charming AI chatbots designed to simulate the Feynman Technique and the Socratic Method.</p>
          </div>
          <div className="card">
          <img src="/feature22.png" alt="Analytics image"/>            
          <b><h3>Personalized Learning Analytics</h3></b>
            <p>Using feedback from AI, see how well you understand and explain concepts based on conversations with the chatbots.
            </p>
          </div>
          <div className="card">
            <img src="/interaction.png" alt="Interaction image"/>
            <b><h3>Interactive Learning Experience</h3></b>
            <p>Experience an engaging and interactive learning process designed to boost your understanding and perspective of any topic.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="split-screen">
          <section className="left-section">
            <h2>Meet Noobert, the novice.</h2>
            <img src="/noobert.png" alt="Left Image"/>
            <h1>Teach Noobert and you'll teach yourself!</h1>
            <p>Inspired by the Feynman Technique.</p>
            <button className="learn-more-button" onClick={() => router.push('/ChatPage')}>Try Now!</button>
          </section>
          <section className="right-section">
            <h2>Meet Socrabot, the challenger.</h2>
            <img src="/socrabot.png" alt="Right Image" />
            <h1>Challenge Socrabot and deepen your knowledge!</h1>
            <p>Inspired by the Socratic Method.</p>
            <button className="learn-more-button" onClick={() => router.push('/SocraChat')}>Try Now!</button>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
