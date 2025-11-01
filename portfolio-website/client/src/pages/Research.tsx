import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <header className="py-8 px-6 border-b border-border">
        <div className="container flex items-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section with Golden Frame */}
          <div className="golden-frame p-8 mb-12 section-research text-white rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Research</h1>
            <p className="text-xl opacity-90">
              Academic investigations spanning multiple disciplines, driven by curiosity and rigorous methodology.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Research Philosophy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  My research approach is interdisciplinary, drawing connections between seemingly disparate fields to 
                  uncover novel insights. I believe that the most significant breakthroughs occur at the intersection of 
                  different domains of knowledge, where traditional boundaries dissolve and new perspectives emerge.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Current Projects</h2>
              <div className="space-y-6">
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">Interdisciplinary Studies in Environmental Science</h3>
                  <p className="text-muted-foreground mb-4">
                    Investigating the complex relationships between human activity, climate patterns, and ecosystem resilience 
                    through data-driven analysis and field observations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Environmental Science</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Data Analysis</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Field Research</span>
                  </div>
                </div>

                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">Cultural Analysis and Visual Studies</h3>
                  <p className="text-muted-foreground mb-4">
                    Exploring how visual culture shapes and reflects societal values, with particular focus on the evolution 
                    of artistic expression in the digital age.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cultural Studies</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Visual Analysis</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Digital Media</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Publications & Presentations</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  My research has been presented at various academic forums and school symposiums, where I've had the 
                  opportunity to engage with peers and receive valuable feedback. These experiences have refined my ability 
                  to communicate complex ideas clearly and defend my methodological choices.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Future Directions</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Looking ahead, I plan to expand my research into emerging areas such as the intersection of artificial 
                  intelligence and environmental monitoring, and the role of digital humanities in preserving and analyzing 
                  cultural artifacts. I'm particularly interested in developing methodologies that bridge quantitative and 
                  qualitative approaches.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
