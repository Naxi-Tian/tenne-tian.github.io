import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Section data
const sections = [
  {
    id: "research",
    title: "Research",
    subtitle: "Academic Work",
    color: "section-research",
    image: "/research-photo.png",
    imagePosition: "object-center",
    content: {
      intro: "My research focuses on exploring scientific questions through rigorous methodology and innovative approaches. I've developed projects that combine theoretical understanding with practical application, contributing to both academic knowledge and real-world solutions.",
      highlights: [
        { title: "Independent Research Projects", desc: "Designed and executed original research investigating complex scientific phenomena, demonstrating initiative and analytical thinking." },
        { title: "Data Analysis & Methodology", desc: "Applied statistical methods and experimental design principles to ensure valid, reliable results that advance understanding in the field." },
        { title: "Academic Presentations", desc: "Communicated findings through formal presentations and written reports, translating complex concepts for diverse audiences." }
      ]
    }
  },
  {
    id: "pollen-station",
    title: "Pollen Station",
    subtitle: "Environmental Research",
    color: "section-pollen",
    image: "/pollen-station-photo.jpg",
    imagePosition: "object-top",
    content: {
      intro: "The Pollen Station project represents my commitment to environmental science and public health. By establishing Beijing's first school-based pollen monitoring system, I've created a resource that serves students, teachers, and families while advancing citizen science.",
      highlights: [
        { title: "System Design & Implementation", desc: "Developed and deployed a comprehensive pollen monitoring infrastructure, integrating scientific equipment with data collection protocols." },
        { title: "Public Health Impact", desc: "Provided daily pollen index data to help the school community make informed decisions about outdoor activities and health precautions during peak allergy seasons." },
        { title: "Environmental Awareness", desc: "Educated peers about the relationship between environmental conditions, plant biology, and human health through accessible data visualization." }
      ]
    }
  },
  {
    id: "films-boom",
    title: "Dreamworks Film-making Club",
    subtitle: "Audio & Cinema",
    color: "section-films-boom",
    image: "/films-boom-photo.jpg",
    filmLink: "PLACEHOLDER_LINK",
    content: {
      intro: "As a member of the Dreamworks Film-making Club, I've gained hands-on experience in film production, working as a boom operator and contributing to various aspects of cinema. Our collaborative projects have taken us to exciting locations, including Dubai, where we created compelling visual stories.",
      highlights: [
        { title: "On-Set Audio Production", desc: "Operated boom microphones and audio equipment on multiple film projects, ensuring high-quality sound capture while coordinating with directors and cinematographers." },
        { title: "Technical Expertise", desc: "Developed proficiency in audio engineering, including microphone placement, sound mixing, and understanding of acoustics in various filming environments." },
        { title: "Film Analysis", desc: "Cultivated deep appreciation for cinema as an art form, analyzing how sound design and dialogue contribute to narrative and emotional impact." }
      ]
    }
  },
  {
    id: "art-history",
    title: "Me and Art History",
    subtitle: "Visual Culture",
    color: "section-art-history",
    image: "/art-history-photo.jpg",
    content: {
      intro: "Art history has profoundly shaped my worldview and analytical abilities. Through studying visual culture across time and geography, I've developed skills in interpretation, contextualization, and critical thinking that extend far beyond the discipline itself.",
      highlights: [
        { title: "Historical & Cultural Analysis", desc: "Examined artworks within their historical, social, and philosophical contexts, learning to decode visual language and symbolic meaning." },
        { title: "Cross-Cultural Perspectives", desc: "Explored diverse artistic traditions from Renaissance Europe to contemporary global art, developing cultural awareness and appreciation for multiple ways of seeing." },
        { title: "Visual Literacy", desc: "Cultivated ability to analyze composition, symbolism, and aesthetic choices, skills applicable to understanding all forms of visual communication." }
      ]
    }
  },
  {
    id: "educational-videos",
    title: "Science Popularization",
    subtitle: "Educational Outreach",
    color: "section-science",
    image: "/science-pop-photo.jpg",
    content: {
      intro: "Science popularization work has allowed me to bridge the gap between complex scientific concepts and public understanding. Through presentations, demonstrations, and educational content, I've made science accessible and engaging for diverse audiences.",
      highlights: [
        { title: "Public Presentations", desc: "Delivered engaging science presentations that translate technical concepts into accessible explanations, fostering curiosity and understanding among students and community members." },
        { title: "Educational Content Creation", desc: "Developed demonstrations and visual materials that illustrate scientific principles through hands-on examples and clear communication." },
        { title: "STEM Advocacy", desc: "Promoted scientific literacy and critical thinking, encouraging peers to engage with science as both a body of knowledge and a way of understanding the world." }
      ]
    }
  },
  {
    id: "personal-blog",
    title: "Personal Blog",
    subtitle: "Writings & Thoughts",
    color: "section-blog",
    image: "/personal-blog-photo.png",
    content: {
      intro: "My personal writing serves as a space for reflection, exploration, and expression. Through essays and observations, I examine ideas, experiences, and questions that shape my intellectual and personal development.",
      highlights: [
        { title: "Reflective Writing", desc: "Explored personal experiences and observations through thoughtful essays that connect individual moments to broader themes and ideas." },
        { title: "Intellectual Exploration", desc: "Investigated questions across disciplines, demonstrating curiosity and willingness to engage with complex, ambiguous topics." },
        { title: "Voice & Expression", desc: "Developed a distinctive writing voice that balances analytical thinking with personal perspective, communicating ideas with clarity and authenticity." }
      ]
    }
  }
];

function AnimatedSection({ section, index }: { section: typeof sections[0], index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section
      id={section.id}
      ref={ref}
      className={`min-h-screen py-20 px-6 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`${section.color} rounded-2xl overflow-hidden shadow-2xl mb-12`}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img 
                src={section.image} 
                alt={section.title}
                className={`w-full h-full object-cover ${section.imagePosition || ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 text-white flex flex-col justify-center relative">
              <div className="corner-decoration top-right"></div>
              <div className="corner-decoration bottom-left"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">{section.title}</h2>
              <p className="text-lg md:text-xl opacity-90">{section.subtitle}</p>
              {section.filmLink && (
                <a 
                  href={section.filmLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  🎬 Check out our film in Dubai →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Section Content */}
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {section.content.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {section.content.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className={`golden-frame-ornate p-6 bg-card rounded-lg transition-all duration-500 delay-${idx * 100}`}
                style={{ transitionDelay: inView ? `${idx * 150}ms` : '0ms' }}
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Artistic background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-golden-frame rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 border border-golden-frame rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-golden-frame rotate-45"></div>
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50 py-4 px-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / Summary Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
              Portfolio
            </h1>
            <div className="artistic-divider max-w-md mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my work across research, environmental science, film production, 
              art history, science communication, and personal writing.
            </p>
          </div>

          {/* Summary Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="portfolio-card group text-left"
              >
                <div className="rounded-lg overflow-hidden shadow-xl h-64 relative">
                  <div className="absolute inset-0">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${section.imagePosition || ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative h-full p-6 flex flex-col justify-end text-white z-10">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{section.title}</h3>
                    <p className="text-sm opacity-90">{section.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Scroll down to explore each section</p>
            <div className="animate-bounce inline-block text-primary">↓</div>
          </div>
        </div>
      </section>

      {/* Full Sections */}
      {sections.map((section, index) => (
        <AnimatedSection key={section.id} section={section} index={index} />
      ))}

      {/* Footer - Contact */}
      <footer className="py-16 px-6 text-center relative z-10 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="artistic-divider max-w-xs mx-auto mb-8"></div>
          <p className="text-sm text-muted-foreground mb-4 font-medium tracking-wide uppercase">Contact</p>
          <a 
            href="mailto:tenne_tian@126.com" 
            className="text-2xl font-medium hover:text-primary transition-colors inline-block"
          >
            tenne_tian@126.com
          </a>
        </div>
      </footer>
    </div>
  );
}
