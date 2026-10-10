import blueEyesImg from "./assets/images/blue-eyes-white-dragon-7485.jpg";
import darkMagicianImg from "./assets/images/dark-magician-4003.jpg";
import redEyesImg from "./assets/images/red-eyes-black-dragon-6276.jpg";

type YugiohCardProps = {
  image: string;
  title: string;
  attribute: string;
  type: string;
  attack: number;
  defense: number;
};

const YugiohCard = ({ image, title, attribute, type, attack, defense }: YugiohCardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{title}</span>
        <span className="card-attribute">{attribute}</span>
      </div>

      <img src={image} alt={title} className="card-image" />

      <p className="card-type">{type}</p>

      <div className="card-stats">
        <span />
        <div className="card-stats-values">
          <span>ATK/{attack}</span>
          <span>DEF/{defense}</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-slate-800 p-4 text-center text-xl font-bold text-white">iut-but3-2026-01</header>

      <main className="flex flex-1 flex-wrap items-start justify-start gap-6 bg-slate-100 p-4">
        <YugiohCard
          image={blueEyesImg}
          title="Blue-Eyes White Dragon"
          attribute="LIGHT"
          type="Normal Monster / Dragon"
          attack={3000}
          defense={2500}
        />
        <YugiohCard
          image={darkMagicianImg}
          title="Dark Magician"
          attribute="DARK"
          type="Normal Monster / Spellcaster"
          attack={2500}
          defense={2100}
        />
        <YugiohCard
          image={redEyesImg}
          title="Red-Eyes Black Dragon"
          attribute="DARK"
          type="Normal Monster / Dragon"
          attack={2400}
          defense={2000}
        />
      </main>

      <footer className="bg-slate-800 p-4 text-center text-sm text-white">© 2026 iut-but3-2026-01</footer>
    </div>
  );
}

export default App;
