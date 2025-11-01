import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function SciencePopularization() {
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
          <div className="golden-frame p-8 mb-12 section-science text-white rounded-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Science Popularization</h1>
            <p className="text-xl opacity-90">
              Making science accessible and engaging for diverse audiences through creative communication.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Mission</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Science popularization is about bridging the gap between complex scientific concepts and public understanding. 
                  Through engaging presentations, interactive demonstrations, and accessible writing, I strive to ignite 
                  curiosity and foster scientific literacy in my community.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Outreach Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Public Lectures & Workshops</h3>
                  <p className="text-muted-foreground">
                    Organized and delivered interactive science workshops for students and community members, covering topics 
                    from environmental science to technology innovation.
                  </p>
                </div>
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Science Communication Projects</h3>
                  <p className="text-muted-foreground">
                    Created multimedia content including videos, infographics, and articles to explain complex scientific 
                    phenomena in accessible and engaging ways.
                  </p>
                </div>
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">School Science Fairs</h3>
                  <p className="text-muted-foreground">
                    Participated in and organized science fair exhibitions, mentoring younger students and demonstrating 
                    hands-on experiments.
                  </p>
                </div>
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Digital Outreach</h3>
                  <p className="text-muted-foreground">
                    Maintained online platforms to share science news, explain current research, and engage with a broader 
                    audience interested in scientific discovery.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Impact & Reach</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Through these initiatives, I've reached hundreds of students and community members, inspiring many to 
                  pursue their own scientific interests. The positive feedback and continued engagement from participants 
                  demonstrates the value of making science accessible and exciting for all ages.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Core Principles</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Clarity Over Complexity</h4>
                  <p className="text-muted-foreground">
                    Breaking down complex ideas into understandable components without sacrificing accuracy.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Engagement Through Storytelling</h4>
                  <p className="text-muted-foreground">
                    Using narrative techniques to make scientific concepts relatable and memorable.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Hands-On Learning</h4>
                  <p className="text-muted-foreground">
                    Encouraging active participation through experiments and interactive demonstrations.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
