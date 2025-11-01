import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PollenStation() {
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
          <div className="golden-frame p-8 mb-12 section-pollen text-white rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Pollen Station</h1>
            <p className="text-xl opacity-90">
              Environmental monitoring and research through pollen analysis and ecological observation.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The Pollen Station project represents my commitment to environmental science and ecological monitoring. 
                  By establishing a systematic approach to pollen collection and analysis, I contribute to understanding 
                  local biodiversity patterns, seasonal variations, and the impacts of climate change on plant communities.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Methodology</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Using standardized pollen traps and microscopic analysis techniques, I collect and identify pollen samples 
                  on a regular basis. This data helps track flowering patterns, identify invasive species, and monitor 
                  ecosystem health. The station serves as both a research tool and an educational resource for the community.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Key Findings</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Seasonal Biodiversity Patterns</h3>
                  <p className="text-muted-foreground">
                    Documented significant variations in pollen diversity across seasons, revealing ecosystem dynamics.
                  </p>
                </div>
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Climate Impact Assessment</h3>
                  <p className="text-muted-foreground">
                    Identified correlations between temperature fluctuations and flowering phenology in local species.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Community Impact</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Beyond research, the Pollen Station serves as an educational platform, engaging students and community 
                  members in hands-on environmental science. Through workshops and public data sharing, I aim to foster 
                  greater awareness of local ecology and the importance of biodiversity conservation.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
