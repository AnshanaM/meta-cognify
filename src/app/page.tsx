import Image from "next/image";

export default function Home() {
  return (
    <main className="main-content">
      <div className="text-section">
        <h1><b>MetaCognify</b></h1>
        <p>Students of all ages, this is your calling. Are you struggling to retain information? Is it hard to understand concepts?  Walk yourself through powerful self-study techniques backed by psychology and optimise your progress using powerful AI models.</p>
      </div>
      <div className="image-section">
        <Image src="/frontpage.png" alt="Front Page" width={600} height={400} />
      </div>

    </main>
  );
}
