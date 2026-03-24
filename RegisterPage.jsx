import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="mx-auto max-w-xl px-4 py-16 md:px-6">
        <div className="rounded-3xl border border-white/10 bg-[#111] p-8 shadow-panel">
          <h1 className="text-4xl font-black">Inscription</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
