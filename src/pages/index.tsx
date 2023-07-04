import Head from "next/head";
import LandingPage from "@/components/landing-page/LandingPage";

export default function Home() {
  return (
    <section className="bg-[#0a192f] min-h-screen">
      <Head>
        <title>Ujjwal Kirti</title>
        <meta name="description" content="Ujjwal Kirti's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/UK.png" />
      </Head>
      <LandingPage />
    </section>
  );
}
