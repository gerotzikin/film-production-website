export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-foreground/60">
            © 2025 TZ'IKIN Productions. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
