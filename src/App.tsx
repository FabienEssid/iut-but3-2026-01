import blueEyesImg from "./assets/images/blue-eyes-white-dragon-7485.jpg";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-slate-800 p-4 text-center text-xl font-bold text-white">iut-but3-2026-01</header>

      <main className="flex flex-1 flex-wrap items-start justify-start gap-6 bg-slate-100 p-4">
        <div className="card">
          <div className="card-header">
            <span className="card-title">Blue-Eyes White Dragon</span>
            <span className="card-attribute">LIGHT</span>
          </div>

          <img src={blueEyesImg} alt="Blue-Eyes White Dragon" className="card-image" />

          <p className="card-type">Normal Monster / Dragon</p>

          <div className="card-stats">
            <span />
            <div className="card-stats-values">
              <span>ATK/3000</span>
              <span>DEF/2500</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 p-4 text-center text-sm text-white">© 2026 iut-but3-2026-01</footer>
    </div>
  );
}

export default App;
