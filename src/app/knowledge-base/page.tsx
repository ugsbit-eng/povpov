import Navigation from "@/components/sections/navigation";
import KBHero from "@/components/kb/kb-hero";
import KBCategoryGrid from "@/components/kb/kb-category-grid";
import Footer from "@/components/sections/footer";

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-primary">
      <div className="pt-[72px]">
        <Navigation />
      </div>

      <KBHero />
      <KBCategoryGrid />

      <Footer />
    </main>
  );
}