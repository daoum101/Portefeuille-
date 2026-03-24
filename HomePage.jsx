import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CarCard from "@/components/listings/CarCard";

const featuredCars = [
  { id: "bmw-320i", title: "BMW 320i", price: 25900, year: 2020, km: "60 600", fuel: "Essence", image: "https://images.unsplash.com/photo-1672024110512-f7028b49db28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrfGVufDB8fHx8MTc3NDMwODEzMnww&ixlib=rb-4.1.0&q=85", badge: "Vérifié" },
  { id: "audi-rs6", title: "Audi RS6 Avant", price: 85000, year: 2020, km: "30 000", fuel: "Essence", image: "https://images.unsplash.com/photo-1761139844529-4cc441e01457?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrfGVufDB8fHx8MTc3NDMwODEzMnww&ixlib=rb-4.1.0&q=85", badge: "Top offre" },
  { id: "sport-premium", title: "Coupé Sport Premium", price: 69900, year: 2021, km: "18 000", fuel: "Essence", image: "https://images.unsplash.com/photo-1760191062947-fabf83477e5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrfGVufDB8fHx8MTc3NDMwODEzMnww&ixlib=rb-4.1.0&q=85", badge: "Nouveau" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-[#5a1111]/40">
          <div className="absolute inset-0 bg-hero-viteauto" />
          <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
                  Trouvez votre
                  <span className="block">voiture idéale</span>
                </h1>
                <p className="mt-6 max-w-xl text-xl leading-10 text-zinc-300 md:text-2xl">
                  Des milliers de véhicules vérifiés
                  <br />
                  par des particuliers de confiance.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="relative">
                <div className="absolute inset-x-8 bottom-10 h-20 rounded-full bg-[#ff1a1a]/24 blur-3xl" />
                <img
                  src="/hero-car-approved.png"
                  alt="Voiture validée ViteAuto"
                  className="relative z-10 w-full object-contain"
                />
              </motion.div>
            </div>

            <div className="mt-8 rounded-[20px] border border-[#672020] bg-[rgba(18,4,6,0.42)] backdrop-blur-sm">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-r border-[#672020] px-6 py-5 text-xl text-zinc-100 md:text-2xl">Toutes les marques</div>
                <div className="border-b border-[#672020] px-6 py-5 text-xl text-zinc-100 md:text-2xl">Tous les modèles</div>
                <div className="border-r border-[#672020] px-6 py-5 text-xl text-zinc-100 md:text-2xl">Prix min <span className="float-right">0 €</span></div>
                <div className="px-6 py-5 text-xl text-zinc-100 md:text-2xl">Prix max <span className="float-right">100 000 €</span></div>
              </div>
            </div>

            <div className="mt-5 flex justify-center">
              <button className="rounded-2xl border border-[#ff3a3a]/35 bg-[rgba(145,16,16,0.52)] px-16 py-4 text-2xl font-bold text-white shadow-[0_0_12px_rgba(255,0,0,0.12)] transition-colors hover:bg-[rgba(160,18,18,0.60)] md:text-3xl">
                Rechercher
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md md:grid-cols-4">
            {[{ value: "1452", label: "Véhicules en ligne" }, { value: "798", label: "Vendeurs vérifiés" }, { value: "98%", label: "Clients satisfaits" }, { value: "24h", label: "Temps moyen de vente" }].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/5 bg-black/20 px-4 py-5">
                <div className="text-3xl font-bold tracking-tight text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Meilleures offres du moment</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
