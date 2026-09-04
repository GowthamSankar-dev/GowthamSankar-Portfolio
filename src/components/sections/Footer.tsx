import { aboutData } from '../../data/about';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-4">
        <p className="text-sm text-muted-foreground/60">
          Last updated: {aboutData.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
