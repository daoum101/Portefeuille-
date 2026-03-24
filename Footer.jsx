export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10 bg-[#070707]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <div className="text-3xl font-black tracking-tight"><span className="text-[#E60000]">Vite</span>Auto</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            La plateforme premium pour acheter et vendre des voitures d’occasion entre particuliers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Navigation</h3>
          <ul className="mt-4 space-y-3 text-zinc-400">
            <li>Accueil</li>
            <li>Rechercher</li>
            <li>Vendre ma voiture</li>
            <li>À propos</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-zinc-400">
            <li>contact@viteauto.com</li>
            <li>+32 470 12 34 56</li>
            <li>Bruxelles, Belgique</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
