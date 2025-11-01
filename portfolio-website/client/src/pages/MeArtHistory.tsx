import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function MeArtHistory() {
  return (
    <div className="min-h-screen bg-background page-content">
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
          <div className="golden-frame-ornate p-8 mb-12 section-art-history text-white rounded-lg relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Me and Art History</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              A personal journey through the evolution of visual culture and its profound influence on my worldview.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">My Connection to Art History</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Art history is more than an academic subject for me—it's a lens through which I understand human 
                  creativity, cultural evolution, and the visual language that shapes our perception of the world. 
                  From the cave paintings of Lascaux to contemporary digital art, the story of visual expression 
                  mirrors the story of human consciousness itself.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My fascination began with the recognition that every artwork is a time capsule, preserving not 
                  just aesthetic choices but entire worldviews, philosophical frameworks, and social structures. 
                  Understanding art history allows me to decode these visual messages and appreciate the dialogue 
                  that spans centuries and cultures.
                </p>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Areas of Focus</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="golden-frame-ornate p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Renaissance & Classical Art</h3>
                  <p className="text-muted-foreground">
                    Studying the masters of perspective, composition, and the golden ratio. The Renaissance 
                    represents a pivotal moment when art became both science and philosophy, establishing 
                    principles that continue to influence visual culture today.
                  </p>
                </div>
                <div className="golden-frame-ornate p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Modern & Contemporary Movements</h3>
                  <p className="text-muted-foreground">
                    Exploring how 20th and 21st-century artists challenged conventions, from Impressionism's 
                    capture of light to Abstract Expressionism's emotional intensity and contemporary art's 
                    engagement with technology and social issues.
                  </p>
                </div>
                <div className="golden-frame-ornate p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Cross-Cultural Perspectives</h3>
                  <p className="text-muted-foreground">
                    Examining how different cultures approach visual representation, from Eastern calligraphy 
                    and ink painting to African sculpture and indigenous art forms. These diverse traditions 
                    enrich our understanding of what art can be.
                  </p>
                </div>
                <div className="golden-frame-ornate p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Art Theory & Criticism</h3>
                  <p className="text-muted-foreground">
                    Engaging with theoretical frameworks that help interpret and contextualize artworks. 
                    Understanding semiotics, iconography, and critical theory deepens appreciation and 
                    analytical capability.
                  </p>
                </div>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Personal Research & Analysis</h2>
              <div className="space-y-6">
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">The Golden Ratio in Visual Composition</h3>
                  <p className="text-muted-foreground mb-4">
                    Investigated how the mathematical principle of the golden ratio appears across art history, 
                    from ancient Greek architecture to Renaissance paintings to modern design. This research 
                    revealed the deep connection between mathematics, nature, and aesthetic harmony.
                  </p>
                </div>

                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">Symbolism and Iconography</h3>
                  <p className="text-muted-foreground mb-4">
                    Explored the rich symbolic language embedded in historical artworks, learning to decode 
                    religious, political, and cultural meanings that would be invisible without historical context. 
                    This skill transforms passive viewing into active interpretation.
                  </p>
                </div>

                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">Art History and Modern Media</h3>
                  <p className="text-muted-foreground mb-4">
                    Analyzed how classical art principles influence contemporary visual media, including film, 
                    photography, and digital design. The continuity between historical and modern visual language 
                    demonstrates the enduring relevance of art historical study.
                  </p>
                </div>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">How Art History Shapes My Perspective</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Studying art history has fundamentally changed how I see the world. I notice compositional 
                  elements in everyday scenes, recognize visual references in contemporary culture, and understand 
                  how aesthetic choices communicate meaning. This awareness enriches my experience of both art and life.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond visual literacy, art history teaches empathy and cultural understanding. Each artwork 
                  represents a different way of seeing and being in the world. By engaging with these diverse 
                  perspectives, I develop a more nuanced understanding of human experience across time and place.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The discipline also cultivates critical thinking and analytical skills. Learning to construct 
                  arguments about visual evidence, to contextualize artworks within their historical moment, and 
                  to articulate aesthetic responses—these abilities extend far beyond art history itself.
                </p>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Ongoing Exploration</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  My journey with art history is far from complete. I continue to discover new artists, movements, 
                  and theoretical approaches. Each museum visit, each book, each conversation adds layers to my 
                  understanding. Art history is not a fixed body of knowledge but a living conversation that 
                  continues to evolve, and I'm grateful to be part of that ongoing dialogue.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
