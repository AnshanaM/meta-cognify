"use client";
import "./styles/globals.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';

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
          <p className="paragraph-style">Students of all ages, this is your calling. Struggling to grasp or retain new knowledge? Boost your understanding and track your progress using our <b className="falcon-text">Falcon</b>-powered self-study tools</p>
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
            <br/>
            <i><p className="paragraph-style">"The ultimate test of your knowledge is your capacity to convey it to others."</p></i>
            <br/>
            <p className="paragraph-style">
            Test your understanding by teaching a topic to Noobert, our AI bot. As you explain, Noobert asks questions a beginner would ask. At the end of your explanation, find out how well you did!
            </p>
            <br/>
            <button className="learn-more-button">Try Now!</button>
          </div>
          <div className="blocks">
            <div className="cols">
              <div className="block block-black">
                <div className="icon">
                  <Image src="/system-regular-76-newspaper.gif" alt="Front Page" width={50} height={50} unoptimized />
                </div>
                <div className="block-text">
                  <b>Study and prepare a concept.</b>
                </div>
              </div>
              <div className="block block-gradient">
                <div className="icon">
                  <Image src="/explain.gif" alt="Front Page" width={70} height={70} unoptimized/>
                </div>
                <div className="block-text">
                  <b>Noobert asks beginner questions, and analyses your explanation.</b>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="block block-gradient">
                <div className="icon">
                  <Image src="/analyse.gif" alt="Front Page" width={80} height={80} unoptimized/>
                </div>
                <div className="block-text">
                  <b>Explain the concept to Noobert.</b>
                </div>
              </div>
              <div className="block block-black">
                <div className="icon">
                  <Image src="/check.gif" alt="Front Page" width={50} height={50} unoptimized/>
                </div>
                <div className="block-text">
                  <b>Get a detailed analysis and feedback on possible knowledge gaps!</b>
                </div>
              </div>
          </div>
          </div>
        </div>
      </section>

      <section>
        <div className="socrates">
          <div className="image">
            <Image src="/NoobertCollage.jpeg" alt="Front Page" width={500} height={500} unoptimized/>
          </div>
          <div className="description">
            <b><h1 className="text-gradient-underline">Socratic Method</h1></b>
            <br/>
            <br/>
            <i><p className="paragraph-style">“A technique of philosophical investigation that emphasizes the use of conversation and inquiry to explore difficult ideas and concepts.”</p></i>
            <br/>
            <p className="paragraph-style">
            Is there a challenging topic you want to explore for the first time? Have a thoughtful conversation with SocraBot, who will craft questions in a way that you will eventually discover and realise the concept on your own!
            </p>
            <br/>
            <button className="log-in-button">Try Now!</button>
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
            <button className="learn-more-button">Chat With Socrabot!</button>
          </section>
        </div>
      </section>

      <div className="footer">
        <p>Created by The Falconers</p>
        <p>Powered by Falcon AI</p>
      </div>
    </main>
  );
}
