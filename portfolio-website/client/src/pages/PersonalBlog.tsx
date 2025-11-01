import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PersonalBlog() {
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
          <div className="golden-frame p-8 mb-12 section-blog text-gray-800 rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Personal Blog</h1>
            <p className="text-xl opacity-90">
              Reflections, observations, and creative writings exploring life, learning, and personal growth.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">About This Space</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  This blog serves as my personal space for reflection and creative expression. Here, I share thoughts 
                  that don't fit neatly into academic categories—musings on daily experiences, philosophical questions, 
                  creative writing experiments, and observations about the world around me.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Featured Writings</h2>
              <div className="space-y-6">
                <article className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">The Art of Observation</h3>
                  <p className="text-sm text-muted-foreground mb-4">Reflections on mindfulness and seeing the extraordinary in the ordinary</p>
                  <p className="text-muted-foreground leading-relaxed">
                    In our rush through daily life, we often miss the subtle beauty that surrounds us. This essay explores 
                    how slowing down and truly observing our environment can transform our understanding of the world and 
                    ourselves. Through examples from art, science, and personal experience, I examine the practice of 
                    mindful observation...
                  </p>
                </article>

                <article className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Between Disciplines</h3>
                  <p className="text-sm text-muted-foreground mb-4">Thoughts on interdisciplinary learning and creative synthesis</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The boundaries between academic disciplines are often artificial constructs. This piece reflects on my 
                    journey of learning across multiple fields and how insights from one domain can illuminate another. 
                    From connecting art history with environmental science to finding parallels between film analysis and 
                    data visualization...
                  </p>
                </article>

                <article className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Fragments of Memory</h3>
                  <p className="text-sm text-muted-foreground mb-4">A creative exploration of memory, time, and identity</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Memory is not a perfect recording but a creative reconstruction. In this experimental piece, I explore 
                    how our memories shape our identity and how the act of remembering itself transforms what we remember. 
                    Through a blend of personal narrative and philosophical reflection...
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Writing Themes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Personal Growth</h4>
                  <p className="text-sm text-muted-foreground">Reflections on learning and self-discovery</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Creative Expression</h4>
                  <p className="text-sm text-muted-foreground">Experimental writing and artistic exploration</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Philosophical Inquiry</h4>
                  <p className="text-sm text-muted-foreground">Questions about meaning and existence</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Why I Write</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Writing is both a tool for thinking and a form of creative expression. Through writing, I clarify my 
                  thoughts, process experiences, and explore ideas that intrigue me. This blog represents my ongoing 
                  conversation with myself and the world—a space where curiosity leads and conclusions remain open-ended.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
