import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CarCard from "@/components/listings/CarCard";

const listings = [
  { id: "bmw-320i", title: "BMW 320i", price: 25900, year: 2020, km: "60 600", fuel: "Essence", image: "https://images.unsplash.com/photo-1672024110512-f7028b49db28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrfGVufDB8fHx8MTc3NDMwODEzMnww&ixlib=rb-4.1.0&q=85", badge: "Vérifié" }
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h1 className="mb-8 text-4xl font-black">Recherche</h1>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
