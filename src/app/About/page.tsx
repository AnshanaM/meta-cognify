"use client";
import "../styles/globals.css";
import "../styles/About.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Footer from "../components/Footer";

export default function About() {
  const router = useRouter();

  return (
    <main>
      <section>
        <div className="feynman">
          <div className="description">
            <div className="slogan-group">
              <b><h1 className="text-gradient-underline">The Feynman Technique</h1></b>
            </div>
            <br />
            <i><p className="paragraph-style">"The ultimate test of your knowledge is your capacity to convey it to others."</p></i>
            <br />
            <p className="paragraph-style">
              Test your understanding by teaching a topic to Noobert, our AI bot. As you explain, Noobert asks questions a beginner would ask. At the end of your explanation, find out how well you did!
            </p>
            <br />
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
                  <Image src="/explain.gif" alt="Front Page" width={70} height={70} unoptimized />
                </div>
                <div className="block-text">
                  <b>Noobert asks beginner questions and analyzes your explanation.</b>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="block block-gradient">
                <div className="icon">
                  <Image src="/analyse.gif" alt="Front Page" width={80} height={80} unoptimized />
                </div>
                <div className="block-text">
                  <b>Explain the concept to Noobert.</b>
                </div>
              </div>
              <div className="block block-black">
                <div className="icon">
                  <Image src="/check.gif" alt="Front Page" width={50} height={50} unoptimized />
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
          <div className="blocks">
            <div className="cols">
              <div className="block block-grey">
                <div className="icon">
                  <Image src="/ask.gif" alt="Ask Questions" width={50} height={50} unoptimized />
                </div>
                <div className="block-text">
                  <b><p>Choose a topic or concept.</p></b>
                </div>
              </div>
              <div className="block block-gradient">
                <div className="icon">
                  <Image src="/explore.gif" alt="Explore Topics" width={70} height={70} unoptimized />
                </div>
                <div className="block-text">
                  <b><p>Answer Socrabot's questions thoroughly.</p></b>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="block block-gradient">
                <div className="icon">
                  <Image src="/understand.gif" alt="Understand Concepts" width={80} height={80} unoptimized />
                </div>
                <div className="block-text">
                  <b><p>Socrabot asks thought-provoking Socratic questions.</p></b>
                </div>
              </div>
              <div className="block block-grey">
                <div className="icon">
                  <Image src="/discover.gif" alt="Discover Insights" width={50} height={50} unoptimized />
                </div>
                <div className="block-text">
                  <b><p>Get detailed analytics and feedback based on how well you did.</p></b>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <b><h1 className="text-gradient-underline">Socratic Method</h1></b>
            <br />
            <br />
            <i><p className="paragraph-style">“A technique of philosophical investigation that emphasizes the use of conversation and inquiry to explore difficult ideas and concepts.”</p></i>
            <br />
            <p className="paragraph-style">
              One way to enhance your critical thinking is to experience Socratic questioning. Have a thoughtful conversation with SocraBot about a specific topic or concept. Socrabot will craft questions in a way that you will eventually discover and realize the concept on your own!
            </p>
            <br />
            <button className="log-in-button">Try Now!</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
