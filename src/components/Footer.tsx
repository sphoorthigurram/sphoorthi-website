export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          <span className="text-cyan-400 font-semibold">Sphoorthi Gurram</span>{" "}
          · EE @ Texas A&amp;M
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sphoorthigurram"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="https://linkedin.com/in/sphoorthi-gurram"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">·</span>
          <a
            href="mailto:gurramsphoorthi@tamu.edu"
            className="hover:text-cyan-400 transition-colors"
          >
            gurramsphoorthi@tamu.edu
          </a>
        </div>
        <p>College Station, TX · Class of 2029</p>
      </div>
    </footer>
  );
}
