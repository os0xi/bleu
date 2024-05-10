import Footer from "@/components/Footer";
import HeadingCTA from "@/components/HeadingCTA";

export default function Home() {
  return (
    <main className="container h-full flex flex-col items-center justify-between lg:justify-between max-w-6xl mx-auto py-8 px-4 lg:px-0  min-h-screen">
      <div className="mt-0.5 w-full h-0 self-end" />
      <HeadingCTA />
      <Footer />
    </main>
  );
}
