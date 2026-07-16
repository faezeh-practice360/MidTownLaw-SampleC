import { useState, useEffect, FormEvent } from 'react';
import {
  Scale,
  Shield,
  FileText,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
  Lock,
  CheckCircle,
  Briefcase,
  Users,
  Award,
  BookOpen,
  Send,
  Check,
  Building,
  Gavel,
  ExternalLink,
  Plus,
  Minus
} from 'lucide-react';
import attorneysImage from './assets/images/teammember.png';
import attorneysBgImage from './assets/images/teammemberbg.png';
import heroBgVideo from './assets/images/0_Business_Beach_1280x720 - COMPRESS.mp4';
import buildingImage from './assets/images/hero_building_1783627451055.jpg';
import carAccidentImage from './assets/images/car_accident_1783627486842.jpg';
import whistleblowerImage from './assets/images/whistleblower_safeguards_1783627498797.jpg';
import wrongfulTerminationImage from './assets/images/wrongful_termination_1783627471830.jpg';

// Define Types for strict safety
interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: typeof Scale;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

// Removed AboutCard interface

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

interface Article {
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export default function App() {
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Video Modal State
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // FAQ State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Consultation Modal State
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [modalFormSubmitted, setModalFormSubmitted] = useState(false);

  // Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isNewClient: '',
    caseType: '',
    message: '',
    smsConsent: false
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Hover and UI State
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [testimonialCarouselIndex, setTestimonialCarouselIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Subpage states & routing
  const [currentView, setCurrentView] = useState<'landing' | 'car-accidents'>('landing');
  const [subpageFormSubmitted, setSubpageFormSubmitted] = useState(false);
  const [subpageForm, setSubpageForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    caseType: 'Car Accident',
    message: ''
  });

  const handleSubpageFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Subpage consultation form submitted", subpageForm);
    setSubpageFormSubmitted(true);
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#car-accidents') {
        setCurrentView('car-accidents');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('landing');
      }
    };
    handleHashChange(); // Run on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const checkMediaQuery = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkMediaQuery();
    window.addEventListener('resize', checkMediaQuery);
    return () => window.removeEventListener('resize', checkMediaQuery);
  }, []);

  // Scroll spy for premium navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data Definitions
  const services: Service[] = [
    {
      id: 'car-accidents',
      title: 'Car Accidents',
      category: 'Personal Injury',
      icon: Scale,
      description: 'Involved in a collision? We go head-to-head with insurance companies to secure maximum medical and financial recovery.',
      image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'discrimination',
      title: 'Discrimination & Harassment',
      category: 'Employment Law',
      icon: Users,
      description: 'Protecting your right to a safe, respectful workplace. We fight back against illegal bias, abuse, and hostile work environments.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'retaliation',
      title: 'Retaliation',
      category: 'Employment Law',
      icon: Shield,
      description: 'Punished or fired for speaking up? We protect whistleblowers and employees who report illegal practices or safety hazards.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'wrongful-termination',
      title: 'Wrongful Termination',
      category: 'Employment Law',
      icon: Gavel,
      description: 'Laid off or fired illegally? We defend victims of breach of contract, discrimination, and unlawful layoffs.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'wage-hour',
      title: 'Wage & Hour',
      category: 'Employment Law',
      icon: Briefcase,
      description: 'Recovering unpaid overtime, misclassified worker status, missed breaks, and stolen wages.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'class-actions',
      title: 'Class Actions',
      category: 'Employment Law',
      icon: Users,
      description: 'Strength in numbers. We represent groups of workers united against systemic corporate abuse and wage theft.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'motorcycle-accidents',
      title: 'Motorcycle Accidents',
      category: 'Personal Injury',
      icon: Shield,
      description: 'We aggressively protect the rights of injured riders, ensuring you get maximum compensation against negligent drivers.',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'dog-bites',
      title: 'Dog Bites',
      category: 'Personal Injury',
      icon: Shield,
      description: 'Injured by a dog attack? We hold negligent owners accountable to secure full compensation for medical bills and trauma.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const steps: Step[] = [
    {
      number: 'STEP 1',
      title: 'Free Consultation',
      description: 'Share your case with us. We analyze your workplace situation or accident and provide expert initial advice at no cost.'
    },
    {
      number: 'STEP 2',
      title: 'Strategy & Evaluation',
      description: 'We identify the strongest legal pathways and strategies that match your situation and requirements.'
    },
    {
      number: 'STEP 3',
      title: 'Evidence & Case Building',
      description: 'Our team gathers crucial records, accident reports, medical logs, policies, and statements for a comprehensive case evaluation.'
    },
    {
      number: 'STEP 4',
      title: 'Resolution Support',
      description: 'We manage the entire negotiation, settlement proceedings, and lawsuits, staying with you until everything is successfully completed.'
    }
  ];

  // Removed aboutCards array

  const testimonials: Testimonial[] = [
    {
      name: "Marcus Thorne",
      role: "Lead Software Engineer",
      text: "After being wrongfully terminated for whistleblowing about security flaws, I felt completely helpless. Midtown Law Group stood by me like a rock. They uncovered critical internal emails that forced a multi-million dollar settlement. Absolute legends.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah Jenkins",
      role: "Sales Director",
      text: "Facing workplace discrimination and retaliation from senior management was the darkest period of my life. The team at Midtown not only secured a historic settlement but restored my dignity. They were compassionate, relentless, and brilliant.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Rivera",
      role: "Warehouse Manager",
      text: "Our employer was systematically shortchanging us on overtime and misclassifying our work roles. Midtown Law Group organized us into a tight class action. They didn't let the corporate lawyers bully us and won back every penny of our stolen wages.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Amanda Zhao",
      role: "Creative Director",
      text: "When a major car accident left me with severe spinal injuries and mounting medical bills, the insurance company offered a joke of a settlement. Midtown Law Group stepped in, reconstructed the accident scene, and negotiated a payout that secured my medical future.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "How much does it cost to hire Midtown Law Group?",
      answer: "We work strictly on a contingency fee basis. This means there are absolutely no out-of-pocket costs, upfront retainer fees, or hidden hourly charges. No Fee Unless We Win—if we do not secure financial compensation for you, you do not pay us a single cent."
    },
    {
      question: "What should I do immediately following a car accident or personal injury?",
      answer: "First, prioritize your safety and seek professional medical treatment immediately to document your injuries. Second, obtain a copy of the police report or file an incident report at the scene. Third, take photographs of the vehicle damage, injuries, and surrounding area. Finally, contact Midtown Law Group before giving any statements or accepting settlement offers from insurance representatives."
    },
    {
      question: "Can my employer fire me for speaking up about discrimination, harassment, or unpaid wages?",
      answer: "No. Federal and state labor laws strictly prohibit retaliation against employees who report illegal discrimination, sexual harassment, wage theft, safety violations, or other unlawful activities. If your employer retaliates by firing, demoting, or transferring you, they are committing a severe violation. We will file a lawsuit immediately to hold them fiercely accountable."
    },
    {
      question: "What is the timeline for resolving an employment law or injury case?",
      answer: "Every case is unique. Some clear-cut disputes can be settled successfully via strategic negotiations within a few months, while complex corporate disputes or severe injury cases requiring trial litigation can take a year or more. Regardless of length, our primary goal is to maximize your recovery—we treat every case with the meticulous preparation required to win at trial."
    }
  ];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if ((formData.fullName || formData.firstName) && formData.email) {
      setFormSubmitted(true);
    }
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isNewClient: '',
      caseType: '',
      message: '',
      smsConsent: false
    });
    setFormSubmitted(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0B1E36] text-[#FAF8F4] font-sans antialiased">
      {/* PROFESSIONAL POLISH BACKGROUND OVERLAY GRAPHICS */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#3B82F6]/15 to-transparent"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] border-[1px] border-white/5 rounded-full"></div>
      </div>

      {/* EDITORIAL SIDEBAR ACCENT */}
      <div className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-12 items-center w-10 opacity-30 z-10 pointer-events-none">
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.5em] text-[9px] font-bold text-[#3B82F6]">SINCE 1994</span>
        <div className="w-[1px] h-20 bg-white/20"></div>
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.5em] text-[9px] font-bold text-white">NYC ADVOCATES</span>
      </div>

      {/* BACKGROUND LADY JUSTICE GRAPHIC (GLOBAL WATERMARK ACCENT) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-1/2 h-[1200px] pointer-events-none opacity-[0.015] bg-no-repeat bg-right-top bg-contain z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800')` }}
      />

      {/* HEADER / NAVIGATION */}
      <header 
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center group" id="nav-logo">
            <span className={`font-serif text-2xl tracking-[0.12em] font-medium transition-colors leading-none group-hover:text-[#3B82F6] ${
              scrolled ? 'text-[#0B1E36]' : 'text-white'
            }`}>
              MIDTOWN
            </span>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className={`h-[1px] w-4 transition-colors ${
                scrolled ? 'bg-[#3B82F6]/60 group-hover:bg-[#0B1E36]' : 'bg-[#3B82F6]/60 group-hover:bg-white'
              }`} />
              <span className={`text-[9px] tracking-[0.22em] font-semibold uppercase transition-colors whitespace-nowrap leading-none ${
                scrolled ? 'text-[#3B82F6] group-hover:text-[#0B1E36]' : 'text-[#3B82F6] group-hover:text-white'
              }`}>
                LAW GROUP
              </span>
              <div className={`h-[1px] w-4 transition-colors ${
                scrolled ? 'bg-[#3B82F6]/60 group-hover:bg-[#0B1E36]' : 'bg-[#3B82F6]/60 group-hover:bg-white'
              }`} />
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className={`h-[1px] w-8 transition-colors ${
                scrolled ? 'bg-[#3B82F6]/40 group-hover:bg-[#0B1E36]/50' : 'bg-[#3B82F6]/40 group-hover:bg-white/50'
              }`} />
              <span className={`text-[7px] tracking-[0.3em] font-medium transition-colors whitespace-nowrap leading-none ${
                scrolled ? 'text-[#3B82F6]/90 group-hover:text-[#0B1E36]' : 'text-[#3B82F6]/90 group-hover:text-white'
              }`}>
                LLP
              </span>
              <div className={`h-[1px] w-8 transition-colors ${
                scrolled ? 'bg-[#3B82F6]/40 group-hover:bg-[#0B1E36]/50' : 'bg-[#3B82F6]/40 group-hover:bg-white/50'
              }`} />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8" id="desktop-nav">
            <a href="#" className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              scrolled ? 'text-[#0B1E36] hover:text-[#3B82F6]' : 'text-white hover:text-[#3B82F6]'
            }`}>Home</a>
            <a href="#about" className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              scrolled ? 'text-[#0B1E36]/70 hover:text-[#3B82F6]' : 'text-white/70 hover:text-[#3B82F6]'
            }`}>Why Choose Us</a>
            <a href="#services" className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              scrolled ? 'text-[#0B1E36]/70 hover:text-[#3B82F6]' : 'text-white/70 hover:text-[#3B82F6]'
            }`}>Practice Areas</a>
            <a href="#attorneys" className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              scrolled ? 'text-[#0B1E36]/70 hover:text-[#3B82F6]' : 'text-white/70 hover:text-[#3B82F6]'
            }`}>Our Attorneys</a>
            <a href="#how-it-works" className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              scrolled ? 'text-[#0B1E36]/70 hover:text-[#3B82F6]' : 'text-white/70 hover:text-[#3B82F6]'
            }`}>Our Process</a>
          </nav>

          {/* Phone Number Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18005558374" 
              className="inline-flex items-center justify-center h-[54px] px-6 bg-[#3B82F6] hover:bg-[#EAB308] text-white hover:text-[#0B1E36] rounded-xl font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2"
            >
              <Phone className="w-4 h-4" />
              1-800-555-8374
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden flex items-center justify-center w-10 h-10 border transition-all duration-300 ${
              scrolled 
                ? 'border-gray-200 text-[#0B1E36] hover:text-[#3B82F6] hover:border-[#3B82F6]' 
                : 'border-white/10 text-white hover:text-[#EAB308] hover:border-[#EAB308]'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-nav-drawer"
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0B1E36] border-b border-white/10 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
        >
          <div className="px-8 py-6 flex flex-col gap-5 bg-[#0E253E]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-serif tracking-wider text-white/90 hover:text-[#3B82F6] py-1 border-b border-white/5"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-serif tracking-wider text-white/90 hover:text-[#3B82F6] py-1 border-b border-white/5"
            >
              Our Expertise
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-serif tracking-wider text-white/90 hover:text-[#3B82F6] py-1 border-b border-white/5"
            >
              Our Process
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-serif tracking-wider text-white/90 hover:text-[#3B82F6] py-1"
            >
              Contact
            </a>
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setConsultationOpen(true);
              }}
              className="w-full mt-2 py-4 bg-[#2563EB] text-white text-center text-xs font-bold tracking-widest uppercase hover:bg-[#EAB308] hover:text-[#0B1E36] transition-all duration-300"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </header>

      {currentView === 'landing' ? (
        <>
          {/* SECTION 1 — HERO SECTION */}
      <section 
        id="hero"
        className="relative min-h-[750px] md:min-h-[850px] flex flex-col justify-center pt-40 pb-24 overflow-hidden w-full"
      >
        {/* Background Video with React Autoplay and Muted Bug Workaround */}
        <video 
          ref={(el) => {
            if (el) {
              el.muted = true;
              el.play().catch((err) => {
                console.log("Autoplay was prevented, playing on user interaction or fallback used", err);
              });
            }
          }}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>

        {/* Cinematic gradient overlays to match luxury aesthetic, balanced darkness */}
        <div className="absolute inset-0 bg-[#0B1E36]/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36]/60 via-[#0B1E36]/45 to-[#0B1E36]/75 pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="text-left flex flex-col justify-center max-w-2xl">
            {/* Top premium tagline */}
            <div className="inline-flex items-center gap-3 mb-6" id="hero-tagline-block">
              <h2 className="text-[#3B82F6] text-sm sm:text-base md:text-lg uppercase tracking-[0.4em] font-serif font-bold block">
                YOUR RIGHTS. OUR FIGHT.
              </h2>
            </div>

            {/* Heading with large serif typography */}
            <h1 
              id="hero-heading"
              className="text-[44px] sm:text-[64px] md:text-[76px] leading-[1.05] md:leading-[1] font-serif font-bold tracking-tight mb-6 text-[#FAF8F4] drop-shadow-lg"
            >
              Employment &amp;<br />
              Injury Law<br />
              For You.
            </h1>

            {/* Core subheadings from prompt */}
            <p className="text-white/95 text-sm md:text-base mb-10 font-medium leading-relaxed drop-shadow-md">
              Protecting employees and injury victims. Holding corporations and insurance companies
              accountable. We fight fiercely for the compensation you deserve.
            </p>
            {/* Values / Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" id="hero-values">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/15 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Shield className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white mb-0.5">No Win, No Fee</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed font-serif">
                    You pay absolutely nothing unless we win. Zero upfront costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/15 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white mb-0.5">Available 24/7</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed font-serif">
                    Get an immediate, free, &amp; confidential consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right Column: Contact Form Card */}
          <div className="relative w-full max-w-[520px] mx-auto lg:ml-auto z-20" id="hero-form-column">
            <div className="w-full bg-[#FAF8F4] border border-gray-200/80 shadow-[0_40px_80px_rgba(11,30,54,0.15)] p-8 sm:p-10 rounded-2xl relative text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#0B1E36] mb-6 tracking-wide uppercase">
                speak with a lawyer today
              </h3>
 
              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in font-serif">
                  <div className="w-20 h-20 rounded-2xl border border-[#3B82F6] flex items-center justify-center text-[#3B82F6] bg-[#3B82F6]/10 mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#0B1E36] mb-3">Request Confirmed</h4>
                  <p className="text-gray-600 text-sm max-w-sm mb-8 leading-relaxed font-light mx-auto font-serif">
                    Your consultation request has been received. Our managing clerk will contact you shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center justify-center h-[60px] px-8 border border-[#0B1E36]/20 text-[#0B1E36] hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-[#0B1E36] rounded-xl font-sans font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300"
                  >
                    New Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 animate-fade-in text-left font-serif">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-gray-300/80 px-4 py-3 text-sm text-[#0B1E36] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors font-serif placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
 
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Confidential Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-300/80 px-4 py-3 text-sm text-[#0B1E36] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors font-serif placeholder:text-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-sans font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-gray-300/80 px-4 py-3 text-sm text-[#0B1E36] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors font-serif placeholder:text-gray-400"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
 
                  <div>
                    <label className="block text-xs font-sans font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      How can we help you? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-300/80 px-4 py-3 text-sm text-[#0B1E36] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-colors h-[120px] resize-none font-serif placeholder:text-gray-400"
                      placeholder="Brief description of your workplace dispute or accident..."
                    />
                  </div>
 
                  <button
                    type="submit"
                    className="w-full h-[60px] bg-[#EAB308] text-[#0B1E36] font-sans font-bold text-sm md:text-base tracking-widest uppercase hover:bg-[#0B1E36] hover:text-white rounded-xl transition-all duration-300 ease-out hover:scale-[1.01] active:scale-95 shadow-lg flex items-center justify-center gap-2"
                  >
                    SUBMIT REQUEST <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR ATTORNEYS */}
      <section id="attorneys" className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-24 md:pb-32 bg-white overflow-hidden min-h-[580px] md:min-h-[650px] lg:min-h-[700px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img 
            src={attorneysBgImage} 
            alt="Courthouse background" 
            className="w-full h-full object-cover"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Right Cutout Image (Attorneys) - Direct child of section for perfect bottom-0 alignment */}
        <div className="absolute bottom-0 left-1/2 md:left-auto md:right-[6%] lg:right-[10%] -translate-x-1/2 md:translate-x-0 w-full md:w-[58%] lg:w-[52%] h-[90%] md:h-[95%] lg:h-[100%] z-20 flex justify-center pointer-events-none">
          <img 
            src={attorneysImage} 
            alt="Attorneys Cutout" 
            className="max-h-full w-auto object-contain drop-shadow-2xl mix-blend-multiply origin-bottom scale-100 sm:scale-102 md:scale-105"
            style={{ objectPosition: 'bottom center' }}
            referrerPolicy="no-referrer"
          />

          {/* Two separate boxes for each attorney, beautifully styled and positioned */}
          <div className="absolute bottom-6 left-[22%] md:left-[24%] lg:left-[26%] -translate-x-1/2 z-30 pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md border border-gray-200/60 px-6 py-4 md:px-8 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 text-center whitespace-nowrap min-w-[180px] md:min-w-[220px]">
              <h3 className="font-serif text-sm md:text-base lg:text-lg font-bold text-[#0B1E36]">
                Michael R. Johnson
              </h3>
              <p className="text-[#3B82F6] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 mb-2.5 font-mono">
                Founding Partner
              </p>
              <div className="w-10 h-[3px] bg-[#3B82F6] rounded-full mx-auto"></div>
            </div>
          </div>

          <div className="absolute bottom-6 left-[78%] md:left-[76%] lg:left-[74%] -translate-x-1/2 z-30 pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-md border border-gray-200/60 px-6 py-4 md:px-8 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 text-center whitespace-nowrap min-w-[180px] md:min-w-[220px]">
              <h3 className="font-serif text-sm md:text-base lg:text-lg font-bold text-[#0B1E36]">
                Sarah L. Martinez
              </h3>
              <p className="text-[#3B82F6] text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 mb-2.5 font-mono">
                Founding Partner
              </p>
              <div className="w-10 h-[3px] bg-[#3B82F6] rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-8 lg:px-10 w-full relative z-10 flex flex-col md:flex-row justify-between items-start h-full">
          
          {/* Left Content Column */}
          <div className="w-full md:w-[45%] flex flex-col justify-start self-start text-left relative z-30 pb-24 md:pb-0">
            <span className="text-xs tracking-[0.3em] font-semibold text-[#3B82F6] uppercase font-mono block mb-3 hover:text-blue-600 transition-colors">
              OUR ATTORNEYS
            </span>
            <h2 className="font-serif text-[44px] sm:text-[54px] leading-[1.1] font-bold text-[#0B1E36] tracking-tight mb-6">
              Experienced attorneys.<br />
              Results that matter.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Our team combines decades of experience in employment and personal injury law to fight for your rights and achieve the best possible outcome for your case.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-[60px] px-8 bg-[#3B82F6] hover:bg-[#EAB308] text-white hover:text-[#0B1E36] rounded-xl font-sans font-bold text-sm md:text-base tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 gap-2 w-fit"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — SERVICES SECTION */}
      <section id="services" className="py-36 bg-[#FAF8F4] text-[#0B1E36] border-t border-gray-100 relative">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-10">
          
          {/* Centered Heading Block */}
          <div className="text-center max-w-2xl mx-auto mb-20" id="services-header">
            <span className="text-xs tracking-[0.3em] font-semibold text-[#3B82F6] uppercase font-mono block mb-3 hover:text-blue-600 transition-colors">
              EXPERTISE &amp; SERVICES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1E36] mb-4">
              Our Practice Areas
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              We specialize in protecting employees who have been wronged in the workplace and representing injury victims who have suffered due to negligence. Explore our core services below.
            </p>
          </div>

          {/* Grid: 3 or 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="services-grid">
            {services.map((svc) => {
              return (
                <div 
                  key={svc.id}
                  className="bg-white border border-gray-100 hover:border-[#EAB308] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out group hover:-translate-y-1.5 hover:shadow-xl text-left"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={svc.image} 
                      alt={svc.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0B1E36] tracking-wide mb-2.5 group-hover:text-[#EAB308] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-light mb-4">
                        {svc.description}
                      </p>
                    </div>
                    <div>
                      <a href={`#${svc.id}`} className="text-xs font-semibold text-[#3B82F6] group-hover:text-[#EAB308] transition-colors inline-flex items-center gap-1.5 uppercase tracking-wide">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section 
        id="how-it-works" 
        className="relative py-36 bg-[#0B1E36] text-[#FAF8F4] overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200')`,
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundColor: '#0B1E36'
        }}
      >
        {/* Overlay to keep text legible but reveal background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/80 to-[#0B1E36]/60 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-8 lg:px-10 relative z-10">
          
          {/* Header */}
          <div className="mb-20 text-center lg:text-left" id="process-header">
            <span className="text-xs tracking-[0.3em] font-semibold text-[#3B82F6] uppercase font-mono block mb-3">
              TRANSPARENT PROCESS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Let’s See How it Works
            </h2>
            <p className="text-sm text-white/60 font-light max-w-3xl leading-relaxed">
              We have made the process of working with us as simple, transparent, and stress-free as possible. From our initial review to final resolution, we handle every detail so you can focus on recovering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10" id="timeline-container">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#0D2440]/40 border border-white/30 hover:border-[#EAB308] p-8 rounded-2xl hover:bg-[#0D2440]/60 transition-all duration-300 flex flex-col justify-between group min-h-[220px]"
              >
                <div>
                  <span className="font-mono text-3xl font-bold text-[#EAB308] group-hover:text-[#EAB308] transition-colors duration-300 block mb-6">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#EAB308] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-3 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — ABOUT SECTION (WHY CHOOSE US) */}
      <section id="about" className="py-36 bg-[#FAF8F4] text-[#0B1E36] relative z-20 overflow-hidden border-t border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-10 relative z-10">
          
          {/* Section Header */}
          <div className="mb-20 text-center">
            <span className="text-xs tracking-[0.3em] font-semibold text-[#3B82F6] uppercase font-mono block mb-5">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1E36] max-w-3xl mx-auto">
              A client-first process designed to get results.
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mt-5">
              Our team keeps your claim organized, powerful, and focused on results—moving seamlessly from strategic evaluation to final recovery. We handle the complex legal fights so you can focus on recovering.
            </p>
          </div>

          {/* Grid Layout inspired by template */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Column 1: Two standard cards */}
            <div className="flex flex-col justify-between gap-6">
              
              {/* Card 1: Client-Focused Advocacy */}
              <div 
                onMouseEnter={() => setHoveredCard('client')}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#0B1E36] text-white p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between flex-1 ${
                  hoveredCard === 'client' ? 'border-[#EAB308]/40 bg-[#11233D]' : 'border-white/5 bg-[#0B1E36]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 'client' ? 'bg-[#EAB308]/20 text-[#EAB308]' : 'bg-white/10 text-[#EAB308]'
                    }`}>
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className={`font-serif text-xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredCard === 'client' ? 'text-[#EAB308]' : 'text-white'
                  }`}>
                    Client-Focused Advocacy
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    We stand exclusively with individuals, never with insurance conglomerates or corporate empires. Every strategic decision is made to safeguard your career, health, and family's future.
                  </p>
                </div>
              </div>

              {/* Card 2: Compassionate Support */}
              <div 
                onMouseEnter={() => setHoveredCard('compassionate')}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#0B1E36] text-white p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between flex-1 ${
                  hoveredCard === 'compassionate' ? 'border-[#EAB308]/40 bg-[#11233D]' : 'border-white/5 bg-[#0B1E36]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 'compassionate' ? 'bg-[#EAB308]/20 text-[#EAB308]' : 'bg-white/10 text-[#EAB308]'
                    }`}>
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className={`font-serif text-xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredCard === 'compassionate' ? 'text-[#EAB308]' : 'text-white'
                  }`}>
                    Compassionate Support
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    Navigating legal disputes can be incredibly daunting. We provide a dedicated, supportive team that keeps you continuously updated and handles all communication with opposing counsel.
                  </p>
                </div>
              </div>

            </div>

            {/* Column 2: Vertical Highlight Image Card with preloaded smooth fading layers */}
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full border border-gray-100 shadow-sm bg-[#0B1E36]">
              {/* Image 1: Default & Proven */}
              <img 
                src={buildingImage}
                alt="Law Firm Building"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  (!hoveredCard || hoveredCard === 'proven') ? 'opacity-100' : 'opacity-0'
                }`}
                referrerPolicy="no-referrer"
              />
              {/* Image 2: Client-Focused (Wrongful Termination) */}
              <img 
                src={wrongfulTerminationImage}
                alt="Wrongful Termination Case"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hoveredCard === 'client' ? 'opacity-100' : 'opacity-0'
                }`}
                referrerPolicy="no-referrer"
              />
              {/* Image 3: Compassionate Support (Whistleblower Safeguards) */}
              <img 
                src={whistleblowerImage}
                alt="Whistleblower Safeguards Representation"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hoveredCard === 'compassionate' ? 'opacity-100' : 'opacity-0'
                }`}
                referrerPolicy="no-referrer"
              />
              {/* Image 4: Transparent & Direct (Car Accident or Claim Process) */}
              <img 
                src={carAccidentImage}
                alt="Car Accident Representation"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hoveredCard === 'transparent' ? 'opacity-100' : 'opacity-0'
                }`}
                referrerPolicy="no-referrer"
              />
              {/* Dark ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Column 3: Highlighted Top Card & Standard Card */}
            <div className="flex flex-col justify-between gap-6">
              
              {/* Card 3: Proven Case Results */}
              <div 
                onMouseEnter={() => setHoveredCard('proven')}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#0B1E36] text-white p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between flex-1 ${
                  hoveredCard === 'proven' ? 'border-[#EAB308]/40 bg-[#11233D]' : 'border-white/5 bg-[#0B1E36]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 'proven' ? 'bg-[#EAB308]/20 text-[#EAB308]' : 'bg-white/10 text-[#EAB308]'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className={`font-serif text-xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredCard === 'proven' ? 'text-[#EAB308]' : 'text-white'
                  }`}>
                    Proven Case Results
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    Our attorneys have secured millions in settlements and verdicts. We meticulously prepare every case as if it is heading to trial, giving us maximum leverage during negotiations.
                  </p>
                </div>
              </div>

              {/* Card 4: Transparent & Direct */}
              <div 
                onMouseEnter={() => setHoveredCard('transparent')}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#0B1E36] text-white p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between flex-1 ${
                  hoveredCard === 'transparent' ? 'border-[#EAB308]/40 bg-[#11233D]' : 'border-white/5 bg-[#0B1E36]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === 'transparent' ? 'bg-[#EAB308]/20 text-[#EAB308]' : 'bg-white/10 text-[#EAB308]'
                    }`}>
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className={`font-serif text-xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredCard === 'transparent' ? 'text-[#EAB308]' : 'text-white'
                  }`}>
                    Transparent & Direct
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                    No hidden fees, no opaque processes. You get direct access to your lead attorney and a transparent, online portal where you can track the real-time status of your case files.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4.5 — DARK TESTIMONIALS SECTION */}
      <section 
        id="testimonials" 
        className="py-36 bg-[#0B1E36] text-white relative z-20 overflow-hidden border-t border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${buildingImage})`,
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundColor: '#0B1E36'
        }}
      >
        {/* Overlay to keep text legible but reveal background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/80 via-[#0B1E36]/65 to-[#0B1E36]/45 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8 lg:px-10 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-xs tracking-[0.3em] font-semibold text-[#3B82F6] uppercase font-mono block mb-5">
                CLIENT TESTIMONIALS
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-xl">
                What our clients say about their experience.
              </h2>
            </div>

            {/* Testimonials Controls */}
            <div className="flex gap-2">
              <button 
                onClick={() => setTestimonialCarouselIndex((prev) => Math.max(prev - 1, 0))}
                disabled={testimonialCarouselIndex === 0}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300 active:scale-95 disabled:opacity-20 disabled:pointer-events-none text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const maxIndex = isDesktop ? testimonials.length - 2 : testimonials.length - 1;
                  setTestimonialCarouselIndex((prev) => Math.min(prev + 1, maxIndex));
                }}
                disabled={testimonialCarouselIndex >= (isDesktop ? testimonials.length - 2 : testimonials.length - 1)}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300 active:scale-95 disabled:opacity-20 disabled:pointer-events-none text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Carousel Container */}
          <div className="relative overflow-hidden w-full flex items-center py-4" id="testimonials-carousel-container">
            <div 
              className="flex transition-transform duration-500 ease-out w-full"
              style={{ 
                transform: `translateX(-${testimonialCarouselIndex * (isDesktop ? 50 : 100)}%)` 
              }}
            >
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="w-full lg:w-1/2 shrink-0 px-2.5"
                >
                  <div className="bg-[#0D2440]/40 border border-white/10 p-10 md:p-12 rounded-[2.5rem] min-h-[350px] flex flex-col justify-between relative group hover:border-[#3B82F6]/50 transition-all duration-300">
                    
                    <div>
                      {/* Quote Icon & Rating Stars */}
                      <div className="flex justify-between items-start mb-8">
                        <span className="text-[#3B82F6] opacity-30 group-hover:opacity-60 transition-opacity">
                          <Quote className="w-10 h-10 transform -scale-x-100" />
                        </span>
                        <div className="flex gap-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-sm md:text-base text-white/80 leading-relaxed font-light italic mb-8">
                        "{t.text}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 border border-white/10">
                        <img 
                          src={t.image} 
                          alt={t.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-serif font-bold text-white text-sm md:text-base tracking-wide">
                          {t.name}
                        </h4>
                        <p className="text-xs text-[#3B82F6] font-mono tracking-wider mt-0.5">
                          {t.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5.5 — FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-36 bg-[#FAF8F4] text-[#0B1E36] relative border-t border-gray-100">
        <div className="max-w-[1024px] mx-auto px-8 lg:px-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20" id="faq-header">
            <span className="text-xs tracking-[0.3em] font-semibold text-[#3B82F6] uppercase font-mono block mb-3">
              KNOWLEDGE BASE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1E36]">
              Frequently Asked Questions
            </h2>
            <div className="h-[2px] w-12 bg-[#3B82F6] mx-auto mt-6"></div>
          </div>

          {/* Accordion Container */}
          <div className="space-y-4 max-w-3xl mx-auto" id="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-[#3B82F6] bg-white shadow-md' : 'border-gray-200 bg-white/50 hover:bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-6 px-6 sm:px-8 flex justify-between items-center text-left focus:outline-none transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#0B1E36] pr-4">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all ${
                      isOpen ? 'border-[#3B82F6] bg-[#3B82F6] text-white' : 'border-gray-200 text-gray-500'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 text-xs sm:text-sm text-[#0B1E36]/70 leading-relaxed font-light border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7 — CONTACT CTA */}
      <section 
        id="contact" 
        className="relative bg-[#0B1E36] overflow-hidden border-t border-b border-white/10"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          
          {/* Left side: Form Panel */}
          <div id="contact-form-panel" className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-[640px] lg:max-w-none mx-auto w-full z-10 relative">
            <div>
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#3B82F6] uppercase font-mono block mb-3">
                GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">
                Connect with Us
              </h2>
              <p className="text-white/60 text-xs sm:text-sm font-sans mb-8 max-w-md leading-relaxed">
                Have questions, inquiries, or feedback? All fields are confidential and protected by Attorney-Client Privilege. We review and respond within 4 business hours.
              </p>
            </div>

            {formSubmitted ? (
              /* Success State */
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in font-serif">
                <div className="w-20 h-20 rounded-2xl border border-[#3B82F6] flex items-center justify-center text-[#3B82F6] bg-[#3B82F6]/10 mb-6 animate-pulse">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Submission Privileged
                </h3>
                <p className="text-sm text-white/70 max-w-sm mb-8 leading-relaxed font-serif">
                  Thank you, <span className="text-[#3B82F6] font-semibold">{formData.firstName || 'there'}</span>. Your inquiry has been logged securely. Our intake partner will review and contact you at <span className="text-blue-100 font-semibold">{formData.email}</span> shortly.
                </p>
                <button 
                  onClick={resetForm}
                  className="inline-flex items-center justify-center h-[50px] px-8 bg-[#EAB308] hover:bg-[#3B82F6] text-[#0B1E36] hover:text-white rounded-xl font-sans font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* Custom Form matching the premium aesthetic */
              <form onSubmit={handleFormSubmit} className="space-y-5 font-sans">
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors placeholder:text-white/20"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors placeholder:text-white/20"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors placeholder:text-white/20"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex">
                      <div className="flex items-center gap-1 px-2.5 bg-white/5 border border-r-0 border-white/10 rounded-l-lg text-white/50 text-xs select-none">
                        <span className="text-base leading-none">🇺🇸</span>
                        <span>+1</span>
                        <span className="text-[8px] text-white/30">▼</span>
                      </div>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-r-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors placeholder:text-white/20"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>

                {/* New Client & Case Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                      Are you a new client?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.isNewClient}
                        onChange={(e) => setFormData({...formData, isNewClient: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0B1E36] text-white">Please make a selection</option>
                        <option value="Yes" className="bg-[#0B1E36] text-white">Yes</option>
                        <option value="No" className="bg-[#0B1E36] text-white">No</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                      Case Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.caseType}
                        onChange={(e) => setFormData({...formData, caseType: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#0B1E36] text-white">Please make a selection</option>
                        <option value="Car Accidents" className="bg-[#0B1E36] text-white">Car Accidents</option>
                        <option value="Wrongful Termination" className="bg-[#0B1E36] text-white">Wrongful Termination</option>
                        <option value="Discrimination & Harassment" className="bg-[#0B1E36] text-white">Discrimination & Harassment</option>
                        <option value="Retaliation" className="bg-[#0B1E36] text-white">Retaliation</option>
                        <option value="Wage & Hour Claims" className="bg-[#0B1E36] text-white">Wage & Hour Claims</option>
                        <option value="Class Actions" className="bg-[#0B1E36] text-white">Class Actions</option>
                        <option value="Other" className="bg-[#0B1E36] text-white">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white/40 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Describe your case */}
                <div>
                  <label className="block text-sm md:text-base font-sans font-medium text-white/95 mb-1.5">
                    Describe your case <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors h-[100px] resize-none placeholder:text-white/20"
                    placeholder="Describe your case here...."
                  />
                </div>

                {/* SMS Opt-in Checkbox & Disclaimer */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      id="sms-consent"
                      type="checkbox"
                      required
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                      className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-0 cursor-pointer"
                    />
                    <label htmlFor="sms-consent" className="text-xs text-white/80 leading-tight font-sans select-none cursor-pointer">
                      By checking this box, I agree to receive communications by text message about my inquiry. <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <p className="text-[11px] text-white/40 leading-normal font-sans mt-2.5">
                    You may opt-out by replying STOP or reply HELP for more information. Message frequency varies. Message and data rates may apply. You may review our Privacy Policy to learn how your data is used.
                  </p>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="w-full h-[54px] bg-[#EAB308] hover:bg-[#3B82F6] text-[#0B1E36] hover:text-white font-sans font-bold text-xs sm:text-sm tracking-widest uppercase rounded-lg transition-all duration-300 ease-out hover:scale-[1.01] active:scale-95 shadow-lg flex items-center justify-center gap-2"
                >
                  GET LEGAL HELP <Send className="w-3.5 h-3.5" />
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Google Map */}
          <div className="relative w-full h-[400px] lg:h-auto min-h-[450px] border-t lg:border-t-0 lg:border-l border-white/10">
            <iframe
              title="9701 Wilshire Blvd Map"
              src="https://maps.google.com/maps?q=9701%20Wilshire%20Blvd,%20Suite%201000,%20Beverly%20Hills,%20CA%2090212&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale opacity-80 contrast-125 brightness-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>

        </div>
      </section>
        </>
      ) : (
        <div className="animate-fade-in text-[#0B1E36]" id="car-accidents-detail">
          {/* Banner Section */}
          <section 
            className="relative py-28 pt-44 bg-[#0B1E36] text-white overflow-hidden bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${carAccidentImage})`,
              backgroundAttachment: 'fixed',
            }}
          >
            {/* Dark overlay with landing page colors to ensure premium legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/95 via-[#0B1E36]/85 to-[#0B1E36]/65 pointer-events-none" />
            
            <div className="max-w-[1280px] mx-auto px-8 lg:px-10 relative z-10 text-left">
              <span className="text-xs tracking-[0.3em] font-semibold text-[#EAB308] uppercase font-mono block mb-3 animate-fade-in">
                Car Accidents
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-tight">
                We Fight for the <span className="text-[#EAB308]">Compensation</span> You Deserve.
              </h1>
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl font-serif">
                If you've been injured in a car accident, our experienced legal team is here to protect your rights and pursue the maximum compensation you deserve while you focus on your recovery.
              </p>
            </div>
          </section>

          {/* Main Split Columns */}
          <section className="py-20 bg-[#FAF8F4] relative">
            {/* Clean, editorial grid */}
            <div className="max-w-[1280px] mx-auto px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Substantive Content */}
              <div className="lg:col-span-8 space-y-16 text-left" id="car-accidents-content">
                
                {/* Block 1: Intro */}
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="w-12 h-[3px] bg-[#EAB308] mb-1" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#0B1E36] tracking-wide uppercase">
                      Car Accident Lawyers
                    </h2>
                  </div>
                  <p className="font-serif text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                    A car accident can change your life in an instant. Medical bills, lost wages, and insurance companies can add stress when you're trying to heal. At <span className="font-semibold text-[#0B1E36]">Midtown Law Group</span>, we protect your rights and fight for full and fair compensation.
                  </p>
                  <p className="font-serif text-base text-gray-600 leading-relaxed font-light">
                    Our Los Angeles car accident attorneys have decades of combined experience handling all types of accident cases. We investigate thoroughly, deal with the insurance companies, and are fully prepared to take your case to trial if needed.
                  </p>
                </div>

                {/* Block 2: Types we handle */}
                <div className="space-y-8 pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-2">
                    <div className="w-12 h-[3px] bg-[#EAB308] mb-1" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#0B1E36] tracking-wide uppercase">
                      Types of Car Accident Cases We Handle
                    </h2>
                  </div>

                  <div className="space-y-6 font-serif text-base text-gray-600 leading-relaxed font-light">
                    <p>
                      Our legal practice is built on a comprehensive understanding of traffic collisions, physics, and state motoring regulations. We represent injured victims across a diverse spectrum of roadway accidents, ensuring that no matter the complexity of your collision, your case receives meticulous investigative attention.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">Rear-End &amp; Multi-Vehicle Chain Collisions</h4>
                      <p className="text-sm text-gray-500">
                        Often mischaracterized as simple cases, rear-end collisions frequently involve severe whiplash and spinal trauma that may not manifest immediately. In multi-vehicle accidents, establishing liability requires analyzing chain-reaction dynamics, comparative fault, and retrieving event data recorders from commercial or passenger vehicles to prove negligence.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">High-Impact, T-Bone, &amp; Head-On Crashes</h4>
                      <p className="text-sm text-gray-500">
                        Side-impact and frontal collisions represent some of the most devastating incidents on our highways, often leading to traumatic brain injuries, fractures, and long-term disability. These crashes are heavily correlated with reckless behavior, distracted driving, and driving under the influence. Our team works with elite accident reconstructionists to establish fault and prove liability beyond doubt.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">Rideshare, Pedestrian, &amp; Hit-and-Run Incidents</h4>
                      <p className="text-sm text-gray-500">
                        Incidents involving Uber, Lyft, delivery vehicles, or pedestrians present unique insurance hurdles. Determining which policy covers the accident—and to what extent—demands skilled legal parsing. In hit-and-run scenarios, we work closely with investigators to identify the responsible party or pursue uninsured motorist coverage to secure your recovery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Block 3: What to do */}
                <div className="space-y-8 pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-2">
                    <div className="w-12 h-[3px] bg-[#EAB308] mb-1" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#0B1E36] tracking-wide uppercase">
                      What to Do After a Car Accident
                    </h2>
                  </div>

                  <div className="space-y-6 font-serif text-base text-gray-600 leading-relaxed font-light">
                    <p>
                      The immediately succeeding hours and days of a vehicle crash are highly stressful, yet the actions you take during this period are absolutely crucial to safeguarding your health and securing your future legal rights.
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">1. Prioritize Immediate Safety &amp; Emergency Response</h4>
                      <p className="text-sm text-gray-500">
                        Your absolute priority must be physical safety. Safely position your vehicle away from active traffic if possible, turn on your hazard lights, and dial 911 immediately. An official police report provides a neutral, contemporaneous record of the scene, which is invaluable for your claim.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">2. Document the Scene &amp; Collect Vital Evidence</h4>
                      <p className="text-sm text-gray-500">
                        If physically able, capture comprehensive photographs of all vehicles from multiple angles, visible injuries, skid marks, weather conditions, and traffic signs. Exchange names, contact information, driver's licenses, and insurance policies with all drivers. Avoid discussing fault or apologizing, as statements made at the scene can be used against you later.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">3. Seek Professional Medical Evaluation Immediately</h4>
                      <p className="text-sm text-gray-500">
                        Adrenaline and shock can easily mask severe internal injuries, concussions, and soft-tissue damage. Seeking a thorough medical evaluation within 24 hours is paramount. Doing so not only protects your physical well-being, but also establishes a clear, undeniable medical link between the accident and your injuries.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-bold text-[#0B1E36]">4. Consult an Experienced Legal Advocate</h4>
                      <p className="text-sm text-gray-500">
                        Before speaking with insurance claims adjusters or signing any authorization forms, contact qualified legal counsel. Insurance companies are businesses looking to minimize their payouts. Having an experienced car accident attorney handle all communication ensures your rights are protected and positions you for maximum recovery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Banner call to action */}
                <div className="bg-[#0B1E36] border border-white/10 p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="flex items-center gap-5 text-left">
                    <div className="w-12 h-12 rounded-full border border-[#EAB308]/30 flex items-center justify-center text-[#EAB308] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">Injured in a Car Accident?</h4>
                      <p className="text-xs text-white/70 font-light font-serif">Let us handle the legal stress so you can heal.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setConsultationOpen(true)}
                    className="px-6 py-3 bg-[#EAB308] hover:bg-white text-[#0B1E36] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm whitespace-nowrap"
                  >
                    Free Consultation ➔
                  </button>
                </div>

              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4 space-y-8" id="car-accidents-sidebar">
                
                {/* Practice Areas List Card */}
                <div className="bg-[#0B1E36] rounded-3xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.35)] overflow-hidden">
                  <div className="bg-[#05101E] p-6 text-left border-b border-white/10">
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                      Practice Areas
                    </h3>
                  </div>
                  <div className="divide-y divide-white/5">
                    {[
                      "Personal Injury",
                      "Assault & Battery",
                      "Bicycle Accidents",
                      "Car Accidents",
                      "Motorcycle Accidents",
                      "Pedestrian Accidents",
                      "Rideshare Accidents",
                      "Truck Accidents",
                      "Dog Bites",
                      "Premises Liability",
                      "Wrongful Death",
                      "Defective Products"
                    ].map((area, index) => {
                      const isActive = area === "Car Accidents";
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (area === "Car Accidents") {
                              window.location.hash = "#car-accidents";
                            } else if (area === "Bicycle Accidents") {
                              window.location.hash = "#bicycle-accidents";
                            } else if (area === "Motorcycle Accidents") {
                              window.location.hash = "#motorcycle-accidents";
                            } else if (area === "Dog Bites") {
                              window.location.hash = "#dog-bites";
                            } else {
                              window.location.hash = "#services";
                            }
                          }}
                          className={`w-full flex items-center justify-between p-4 px-6 text-left text-sm transition-all duration-300 font-serif ${
                            isActive 
                              ? 'bg-[#EAB308]/10 text-[#EAB308] font-bold border-l-4 border-[#EAB308]' 
                              : 'text-white/70 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                          }`}
                        >
                          <span>{area}</span>
                          <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#EAB308]' : 'text-white/30'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Consultation Form Card */}
                <div className="bg-[#0B1E36] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.35)] text-left space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide mb-1">
                      Request a Consultation
                    </h3>
                    <p className="text-[11px] text-[#EAB308] uppercase tracking-[0.15em] font-mono font-bold">
                      Tell Us About Your Case
                    </p>
                  </div>

                  {subpageFormSubmitted ? (
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center space-y-3">
                      <CheckCircle className="w-10 h-10 text-[#EAB308] mx-auto animate-bounce" />
                      <h4 className="font-serif text-base font-bold text-white">Consultation Requested</h4>
                      <p className="text-xs text-white/70 font-light leading-relaxed font-serif">
                        Thank you! Our dedicated car accident legal team will contact you in less than 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubpageFormSubmit} className="space-y-4 font-serif">
                      <div>
                        <label className="block text-xs font-sans font-semibold text-white/80 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={subpageForm.fullName}
                          onChange={(e) => setSubpageForm({ ...subpageForm, fullName: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-[#0B1E36]/70 transition-all font-serif placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-semibold text-white/80 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(123) 456-7890"
                          value={subpageForm.phone}
                          onChange={(e) => setSubpageForm({ ...subpageForm, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-[#0B1E36]/70 transition-all font-serif placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-semibold text-white/80 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={subpageForm.email}
                          onChange={(e) => setSubpageForm({ ...subpageForm, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-[#0B1E36]/70 transition-all font-serif placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-semibold text-white/80 mb-1">
                          Case Type
                        </label>
                        <select
                          value={subpageForm.caseType}
                          onChange={(e) => setSubpageForm({ ...subpageForm, caseType: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-[#0B1E36]/70 transition-all font-serif"
                        >
                          <option value="Car Accident" className="bg-[#0B1E36] text-white">Car Accident</option>
                          <option value="Personal Injury" className="bg-[#0B1E36] text-white">Personal Injury</option>
                          <option value="Motorcycle Accident" className="bg-[#0B1E36] text-white">Motorcycle Accident</option>
                          <option value="Bicycle Accident" className="bg-[#0B1E36] text-white">Bicycle Accident</option>
                          <option value="Other" className="bg-[#0B1E36] text-white">Other Practice Area</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-semibold text-white/80 mb-1">
                          Briefly describe your case...
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Tell us what happened..."
                          value={subpageForm.message}
                          onChange={(e) => setSubpageForm({ ...subpageForm, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] focus:bg-[#0B1E36]/70 transition-all resize-none font-serif placeholder:text-white/30"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full h-11 bg-[#EAB308] hover:bg-white text-[#0B1E36] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                      >
                        Submit Request <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>
          </section>
        </div>
      )}

      {/* SECTION 8 — FOOTER */}
      <footer className="bg-[#05101E] text-[#FAF8F4] border-t border-white/10 py-16 relative">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            
            {/* Column 1: Logo & Tagline */}
            <div className="space-y-4">
              <div className="flex flex-col items-start">
                <span className="font-serif text-2xl tracking-[0.12em] font-medium text-[#FAF8F4] leading-none">
                  MIDTOWN
                </span>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="h-[1px] w-4 bg-[#3B82F6]/60" />
                  <span className="text-[9px] tracking-[0.22em] font-semibold text-[#3B82F6] uppercase whitespace-nowrap leading-none">
                    LAW GROUP
                  </span>
                  <div className="h-[1px] w-4 bg-[#3B82F6]/60" />
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="h-[1px] w-8 bg-[#3B82F6]/40" />
                  <span className="text-[7px] tracking-[0.3em] font-medium text-[#3B82F6]/90 whitespace-nowrap leading-none">
                    LLP
                  </span>
                  <div className="h-[1px] w-8 bg-[#3B82F6]/40" />
                </div>
              </div>
              
              <p className="text-xs text-white/50 leading-relaxed max-w-xs font-light">
                A premier boutique law firm centering on aggressive representation for employees, workplace whistleblowers, and injury victims. No Fee Unless We Win.
              </p>

              <div className="flex gap-3 pt-2">
                {['LinkedIn', 'Twitter', 'LexDirectory'].map((soc, i) => (
                  <a 
                    key={i}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs uppercase tracking-wider text-white/60 rounded-lg hover:bg-[#EAB308] hover:text-[#0B1E36] hover:border-[#EAB308] transition-all duration-300"
                    title={`Midtown Law Group ${soc}`}
                  >
                    {soc[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Direct Contact details */}
            <div className="space-y-4">
              <h4 className="font-serif text-base font-bold text-[#3B82F6] tracking-wide">
                Contact Information
              </h4>
              <div className="space-y-3.5 text-xs text-white/70">
                <p className="flex flex-col gap-1">
                  <strong className="text-white font-semibold">New York Chambers:</strong>
                  <span className="text-white/60">500 Fifth Avenue, Suite 4400, New York, NY 10110</span>
                </p>
                <p className="flex flex-col gap-1">
                  <strong className="text-white font-semibold">Beverly Hills Office:</strong>
                  <span className="text-white/60">9701 Wilshire Blvd, Suite 1000, Beverly Hills, CA 90212</span>
                </p>
                <p className="flex flex-col gap-1">
                  <strong className="text-white font-semibold">Confidential Intake Email:</strong>
                  <a href="mailto:intake@midtownlaw.com" className="text-[#3B82F6] hover:underline">intake@midtownlaw.com</a>
                </p>
                <p className="flex flex-col gap-1">
                  <strong className="text-white font-semibold">Intake Direct Line:</strong>
                  <a href="tel:+18005558374" className="text-[#3B82F6] hover:underline">1-800-555-8374</a>
                </p>
              </div>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="font-serif text-base font-bold text-[#3B82F6] tracking-wide mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs text-white/60">
                {[
                  { name: 'Home', href: '#' },
                  { name: 'Why Choose Us', href: '#about' },
                  { name: 'Practice Areas', href: '#services' },
                  { name: 'Our Attorneys', href: '#attorneys' },
                  { name: 'Our Process', href: '#how-it-works' },
                  { name: 'FAQ', href: '#faq' }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="hover:text-[#3B82F6] transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom copyright bar */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
            <div>
              <p>©2026 Midtown Law Group. All Rights Reserved. Attorney Advertising.</p>
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-[#3B82F6] transition-colors">Privacy Policy</a>
              <span className="text-white/10">|</span>
              <a href="#terms" className="hover:text-[#3B82F6] transition-colors">Terms of Use</a>
            </div>
          </div>

        </div>
      </footer>

      {/* DETAILED INTERACTIVE VIDEO PLAYER PRESENTATION MODAL */}
      {videoOpen && (
        <div 
          id="video-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E36]/95 backdrop-blur-md p-4 sm:p-8"
        >
          <div className="w-full max-w-4xl bg-[#0E253E] border border-white/10 shadow-2xl rounded-2xl overflow-hidden relative">
            
            {/* Header / Dismiss */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-ping" />
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#3B82F6] font-bold">
                  MIDTOWN LAW OVERVIEW
                </span>
              </div>
              <button 
                onClick={() => {
                  setVideoOpen(false);
                  setVideoPlaying(false);
                }}
                className="w-8 h-8 flex items-center justify-center border border-white/10 hover:bg-[#EAB308] hover:border-[#EAB308] text-white hover:text-[#0B1E36] rounded-lg transition-all"
                aria-label="Close presentation video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Mock Video Visualizer */}
            <div className="aspect-video bg-black relative flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=1200" 
                alt="Trial Simulation Presentation" 
                className={`w-full h-full object-cover transition-all duration-1000 absolute inset-0 ${
                  videoPlaying ? 'scale-105 opacity-60 filter saturate-50' : 'scale-100 opacity-80'
                }`}
              />

              {/* Decorative Audio Grid Visualizer on Play */}
              {videoPlaying && (
                <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-[#0B1E36]/80 px-3 py-1.5 border border-white/10">
                      <p className="text-[9px] font-mono tracking-widest text-[#3B82F6] uppercase">
                        TRIAL ADVOCACY & PRESENTATION SERIES
                      </p>
                    </div>
                    <div className="bg-blue-950/80 px-3 py-1.5 border border-blue-500/30 flex items-center gap-2 text-blue-400">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[9px] font-mono tracking-widest uppercase font-bold">INTRODUCTORY SERIES</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-white font-serif text-lg font-bold drop-shadow">
                      "Uncovering Key Regulatory Evidence in Federal Securities Disputes"
                    </p>
                    <p className="text-white/60 text-xs drop-shadow">
                      Speaker: Managing Partner Nicholas Sterling, Esq.
                    </p>
                  </div>
                </div>
              )}

              {/* Huge Play/Pause Overlay Toggle */}
              <button 
                onClick={() => setVideoPlaying(!videoPlaying)}
                className="w-20 h-20 bg-[#2563EB] text-white hover:bg-[#EAB308] hover:text-[#0B1E36] rounded-full flex items-center justify-center transition-all duration-300 z-10 relative group shadow-2xl"
              >
                {videoPlaying ? (
                  /* Pause Icon representer */
                  <div className="flex gap-2.5">
                    <div className="w-2.5 h-7 bg-white group-hover:bg-[#0B1E36]" />
                    <div className="w-2.5 h-7 bg-white group-hover:bg-[#0B1E36]" />
                  </div>
                ) : (
                  <Play className="w-8 h-8 fill-current ml-1" />
                )}
              </button>

              {/* Interactive Player Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0B1E36]/90 backdrop-blur border-t border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setVideoPlaying(!videoPlaying)}
                    className="text-xs uppercase tracking-widest font-mono text-[#3B82F6] hover:text-[#EAB308]"
                  >
                    {videoPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  <span className="text-white/20">|</span>
                  <span className="text-[10px] font-mono text-white/60">
                    {videoPlaying ? '01:24 / 08:50' : '00:00 / 08:50'}
                  </span>
                </div>

                {/* Progress bar simulation */}
                <div className="flex-grow mx-4 relative h-1 bg-white/10 cursor-pointer">
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-[#3B82F6] transition-all duration-300"
                    style={{ width: videoPlaying ? '16%' : '0%' }}
                  />
                </div>

                <div className="flex gap-4 text-[10px] font-mono text-white/40">
                  <span className="text-[#3B82F6] font-bold">HD</span>
                  <span>STEREO PRESENTATION</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
      {/* PRIVILEGED CONSULTATION MODAL INQUIRY */}
      {consultationOpen && (
        <div 
          id="consultation-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E36]/90 backdrop-blur-md p-4"
        >
          <div className="w-full max-w-lg bg-[#0D2440] border border-white/10 shadow-2xl p-8 sm:p-10 rounded-2xl relative font-serif">
            
            {/* Close Button */}
            <button 
              onClick={() => {
                setConsultationOpen(false);
                setModalFormSubmitted(false);
              }}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center border border-white/10 hover:bg-[#EAB308] hover:border-[#EAB308] text-white hover:text-[#0B1E36] rounded-lg transition-all"
              aria-label="Close consultation modal"
            >
              <X className="w-4 h-4" />
            </button>

            {modalFormSubmitted ? (
              <div className="text-center py-10 flex flex-col items-center justify-center font-serif">
                <div className="w-16 h-16 rounded-2xl border border-[#3B82F6] bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] mb-6 animate-pulse">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Inquiry Logged</h3>
                <p className="text-xs text-white/60 max-w-sm mb-6 leading-relaxed font-serif">
                  Your confidential brief has been forwarded directly to our Senior Intake Partner. We will contact you within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setModalFormSubmitted(false);
                    setConsultationOpen(false);
                  }}
                  className="px-6 py-2.5 border border-white/20 text-white hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-[#0B1E36] rounded-lg text-xs font-serif tracking-widest uppercase transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-serif uppercase text-[#3B82F6] block mb-2 font-semibold">
                    MIDTOWN LAW CLIENT INTAKE
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Confidential Consultation Request
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-6 font-serif">
                    Please complete this rapid brief to dispatch a message directly to our partner-on-duty for expedited analysis.
                  </p>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setModalFormSubmitted(true);
                  }}
                  className="space-y-4 font-serif text-left"
                >
                  <div>
                    <label className="block text-sm md:text-base font-sans font-semibold text-white/90 mb-1.5">
                      Your Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[#0B1E36] border border-white/10 px-4 py-3.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] font-serif placeholder:text-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-sans font-semibold text-white/90 mb-1.5">
                      Direct Contact Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-[#0B1E36] border border-white/10 px-4 py-3.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] font-serif placeholder:text-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-sans font-semibold text-white/90 mb-1.5">
                      How can we help you? *
                    </label>
                    <textarea 
                      required
                      placeholder="Please supply a brief outline of your dispute, injury, or workplace matter..."
                      className="w-full bg-[#0B1E36] border border-white/10 px-4 py-3.5 text-xs text-white rounded-xl focus:outline-none focus:border-[#3B82F6] h-24 resize-none font-serif placeholder:text-white/30"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-[60px] bg-[#EAB308] text-[#0B1E36] font-sans font-bold text-sm md:text-base tracking-widest uppercase rounded-xl hover:bg-[#2563EB] hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    REQUEST CONFIDENTIAL CALLBACK
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[9px] text-white/30 tracking-widest uppercase font-serif pt-3 border-t border-white/5">
                    <Lock className="w-3 h-3 text-[#3B82F6]" />
                    <span>Attorney-Client Privilege Appended</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </main>
  );
}
