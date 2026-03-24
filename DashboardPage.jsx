import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h1 className="text-4xl font-black">Dashboard</h1>
      </main>
      <Footer />
    </div>
  );
}
