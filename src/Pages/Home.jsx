import React, { useState, useEffect, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react"

// Completely isolated animated cube - will never re-render
const AnimatedCube = memo(() => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes rotate3d {
          from { transform: rotateX(-20deg) rotateY(0deg); }
          to { transform: rotateX(-20deg) rotateY(360deg); }
        }
        
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { 
            transform: translateY(-100px) translateX(20px);
          }
        }
        
        .perspective-container {
        --cube-size: 300px;
        --cube-half: 150px;
        perspective: 1000px;
        width: var(--cube-size);
        height: var(--cube-size);
        }

        @media (max-width: 640px) {
        .perspective-container {
        --cube-size: 220px;
        --cube-half: 110px;
          }
        }
        
        .cube-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 15s linear infinite;
          will-change: transform;
        }
        
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }
        
        .cube-face {
          position: absolute;
          width: var(--cube-size);
          height: var(--cube-size);
          border: 2px solid rgba(99, 102, 241, 0.3);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
          backdrop-filter: blur(10px);
        }
        
        
        .front  { transform: translateZ(var(--cube-half)); }
        .back   { transform: rotateY(180deg) translateZ(var(--cube-half)); }
        .right  { transform: rotateY(90deg) translateZ(var(--cube-half)); }
        .left   { transform: rotateY(-90deg) translateZ(var(--cube-half)); }
        .top    { transform: rotateX(90deg) translateZ(var(--cube-half)); }
        .bottom { transform: rotateX(-90deg) translateZ(var(--cube-half)); }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 50%;
          animation: floatParticle linear infinite;
        }
      `}</style>
      
      <div className="perspective-container">
        <div className="cube-container">
          <div className="cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle" style={{left: '23%', top: '41%', animationDelay: '0s', animationDuration: '3s'}} />
        <div className="particle" style={{left: '40%', top: '70%', animationDelay: '0.3s', animationDuration: '4s'}} />
        <div className="particle" style={{left: '57%', top: '99%', animationDelay: '0.6s', animationDuration: '5s'}} />
        <div className="particle" style={{left: '74%', top: '28%', animationDelay: '0.9s', animationDuration: '6s'}} />
        <div className="particle" style={{left: '91%', top: '57%', animationDelay: '1.2s', animationDuration: '3s'}} />
        <div className="particle" style={{left: '8%', top: '86%', animationDelay: '1.5s', animationDuration: '4s'}} />
        <div className="particle" style={{left: '25%', top: '15%', animationDelay: '1.8s', animationDuration: '5s'}} />
        <div className="particle" style={{left: '42%', top: '44%', animationDelay: '2.1s', animationDuration: '6s'}} />
        <div className="particle" style={{left: '59%', top: '73%', animationDelay: '2.4s', animationDuration: '3s'}} />
        <div className="particle" style={{left: '76%', top: '2%', animationDelay: '2.7s', animationDuration: '4s'}} />
        <div className="particle" style={{left: '93%', top: '31%', animationDelay: '3s', animationDuration: '5s'}} />
        <div className="particle" style={{left: '10%', top: '60%', animationDelay: '3.3s', animationDuration: '6s'}} />
        <div className="particle" style={{left: '27%', top: '89%', animationDelay: '3.6s', animationDuration: '3s'}} />
        <div className="particle" style={{left: '44%', top: '18%', animationDelay: '3.9s', animationDuration: '4s'}} />
        <div className="particle" style={{left: '61%', top: '47%', animationDelay: '4.2s', animationDuration: '5s'}} />
        <div className="particle" style={{left: '78%', top: '76%', animationDelay: '4.5s', animationDuration: '6s'}} />
        <div className="particle" style={{left: '95%', top: '5%', animationDelay: '4.8s', animationDuration: '3s'}} />
        <div className="particle" style={{left: '12%', top: '34%', animationDelay: '5.1s', animationDuration: '4s'}} />
        <div className="particle" style={{left: '29%', top: '63%', animationDelay: '5.4s', animationDuration: '5s'}} />
        <div className="particle" style={{left: '46%', top: '92%', animationDelay: '5.7s', animationDuration: '6s'}} />
      </div>
    </div>
  );
}, () => true); // Never re-render this component

// Memoized Components
const StatusBadge = memo(({ variant = "default", className = "" }) => {
  const isInline = variant === "inline";

  return (
    <div
      className={[
        "inline-block animate-float lg:mx-0", // float stays ON everywhere
        isInline ? "sm:hidden" : "hidden sm:inline-block", // inline shows only on mobile
        className,
      ].join(" ")}
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

        <div
          className={[
            "relative rounded-full bg-black/40 backdrop-blur-xl border border-white/10",
            isInline ? "px-2 py-1" : "px-3 sm:px-4 py-2",
          ].join(" ")}
        >
          <span
            className={[
              "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text font-medium flex items-center whitespace-nowrap",
              isInline ? "text-[0.65rem]" : "sm:text-sm text-[0.7rem]",
            ].join(" ")}
          >
            <Sparkles
              className={[
                isInline ? "w-3 h-3" : "sm:w-4 sm:h-4 w-3 h-3",
                "mr-2 text-blue-400",
              ].join(" ")}
            />
            Ready to Innovate
          </span>
        </div>
      </div>
    </div>
  );
});


const MainTitle = memo(() => (
  <div>
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <div className="relative inline-block w-fit">
        {/* Names always stacked */}
        <div className="relative w-fit pr-44 sm:pr-0 leading-[0.92]">
          <span className="relative block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Aashir
            </span>
          </span>

          <span className="relative block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Grewal
            </span>
          </span>
        </div>

        {/* Badge only positioned like this on mobile */}
        <div className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2">
          <StatusBadge variant="inline" />
        </div>
      </div>
    </h1>
  </div>
));





const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Innovator", "Tech Enthusiast", "Developer"];
const TECH_STACK = ["Java", "Javascript", "Python", "CSS", "Node.js", "HTML"];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/Aashir-G" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/aashirg" },
  { icon: Instagram, link: "https://www.instagram.com/aashir.g_/" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (charIndex < WORDS[wordIndex].length) {
          setText(WORDS[wordIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsTyping(false), PAUSE_DURATION);
        }
      } else {
        if (charIndex > 0) {
          setText(WORDS[wordIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setWordIndex((wordIndex + 1) % WORDS.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? TYPING_SPEED : ERASING_SPEED);

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, wordIndex]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
      
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0">
              <div className="space-y-4 sm:space-y-6">
                <StatusBadge />
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-8 flex items-center">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light">
                  A Computer Science & Business Student At Wilfrid Laurier
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-start">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 w-full justify-start">
                  <CTAButton href="#Portfolio" text="Projects" icon={ExternalLink} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>

                {/* Social Links */}
                <div className="hidden sm:flex gap-4 justify-start">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Animated Cube */}
            <div className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
              <div className="relative w-full opacity-90">
                <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                  isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                }`}>
                </div>

                <div className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${
                  isHovering ? "scale-105" : "scale-100"
                }`}>
                  <AnimatedCube />
                </div>

                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                  isHovering ? "opacity-50" : "opacity-20"
                }`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                    isHovering ? "scale-110" : "scale-100"
                  }`}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);