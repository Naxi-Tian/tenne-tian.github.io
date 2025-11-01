import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function FilmsBoomOperator() {
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
          <div className="golden-frame-ornate p-8 mb-12 section-films-boom text-white rounded-lg relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Films and Boom Operator</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Exploring the art of cinema through both critical analysis and hands-on production experience in audio engineering.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Film Production Experience</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey in film production has given me a deep appreciation for the technical and artistic elements 
                  that bring stories to life. As a boom operator, I've learned the critical importance of capturing clean, 
                  high-quality audio that serves the narrative and enhances the viewer's emotional connection to the story.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Working on set has taught me the value of collaboration, precision, and creative problem-solving. 
                  The role of a boom operator requires not only technical expertise but also an understanding of 
                  cinematography, blocking, and the director's vision. Every project presents unique challenges, 
                  from managing environmental noise to positioning microphones for optimal sound capture while 
                  staying out of frame.
                </p>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Skills & Equipment</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Audio Engineering</h3>
                  <p className="text-muted-foreground">
                    Proficient in operating boom poles, shotgun microphones, wireless systems, and field recorders. 
                    Understanding of audio mixing, levels, and post-production workflows.
                  </p>
                </div>
                <div className="golden-frame p-6 bg-card rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">On-Set Coordination</h3>
                  <p className="text-muted-foreground">
                    Experienced in working with directors, cinematographers, and sound mixers to achieve optimal 
                    audio capture while maintaining production efficiency and creative flow.
                  </p>
                </div>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Film Analysis & Appreciation</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond production work, I'm deeply engaged with film as an art form. I analyze how sound design, 
                  dialogue, and ambient audio contribute to storytelling and emotional impact. The interplay between 
                  visual and auditory elements creates the cinematic experience, and understanding this relationship 
                  has enriched both my technical work and my appreciation for the medium.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I study the work of renowned sound designers and boom operators, examining how they approach 
                  different genres and narrative styles. From the subtle naturalism of independent cinema to the 
                  complex soundscapes of blockbuster productions, each approach offers valuable insights into the 
                  craft and its evolution.
                </p>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Notable Projects</h2>
              <div className="space-y-6">
                <div className="golden-frame-ornate p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">Student Film Productions</h3>
                  <p className="text-muted-foreground mb-4">
                    Served as boom operator on multiple student film projects, ranging from short narratives to 
                    documentary work. These experiences taught me adaptability and the importance of maintaining 
                    professional standards even in resource-constrained environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Narrative Film</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Documentary</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Audio Production</span>
                  </div>
                </div>

                <div className="golden-frame-ornate p-6 bg-card rounded-lg">
                  <h3 className="text-2xl font-semibold mb-3">Sound Design Experiments</h3>
                  <p className="text-muted-foreground mb-4">
                    Explored creative approaches to sound capture and manipulation, experimenting with different 
                    microphone techniques, ambient recording, and the relationship between diegetic and non-diegetic 
                    sound in storytelling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Sound Design</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Field Recording</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Creative Audio</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="artistic-divider"></div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Future Aspirations</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I aspire to continue developing my skills in both the technical and artistic aspects of film 
                  production. Whether working as part of a professional crew or pursuing independent projects, 
                  I'm committed to excellence in audio capture and to understanding how sound serves story. 
                  The intersection of technical precision and creative expression in filmmaking continues to 
                  inspire and challenge me.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
