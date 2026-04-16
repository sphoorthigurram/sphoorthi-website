export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          <span className="text-cyan-400 font-semibold">Sphoorthi Gurram</span>{" "}
          · EE @ Texas A&amp;M
        </p>
        <p>College Station, TX · Class of 2029</p>
        <a
          href="mailto:gurramsphoorthi@tamu.edu"
          className="hover:text-cyan-400 transition-colors"
        >
          gurramsphoorthi@tamu.edu
        </a>
      </div>
    </footer>
  );
}
