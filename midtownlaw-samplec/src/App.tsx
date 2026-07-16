import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroBg from './chatgpt_hero_bg.png';
import practiceBg from './chatgpt_practice_bg.png';
import Logo from './components/Logo';
import workplaceBg from './30638.jpg';
import carAccidentBg from './4076.jpg';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Star,
  MapPin,
  Mail,
  Scale,
  Award,
  Shield,
  Briefcase,
  Plus,
  FileText,
  FileSignature,
  HardHat,
  Users,
  ClipboardCheck,
  Target,
  Gavel,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-darkblue text-white font-sans selection:bg-white selection:text-darkblue">
      
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 h-[90px] flex items-center ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-subtle shadow-sm' : 'bg-transparent'}`}>
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          
          <Logo className="z-50 !items-start" />

          <div className="hidden lg:flex items-center gap-8 text-[15px] text-darkblue">
            <a href="#" className="hover:text-darkblue/70 transition-colors">Home</a>
            <a href="#about" className="hover:text-darkblue/70 transition-colors">About</a>
            <a href="#practice-areas" className="hover:text-darkblue/70 transition-colors">Services</a>
            <a href="#attorneys" className="hover:text-darkblue/70 transition-colors">Our Team</a>
            <a href="#contact" className="hover:text-darkblue/70 transition-colors">Contact Us</a>
          </div>

          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 bg-[#0B1B3D] text-white px-6 py-3 text-[14px] font-medium hover:bg-[#0B1B3D]/90 transition-all duration-300">
              <Phone className="w-4 h-4" />
              Call Us: (713) 999-1234
            </button>
          </div>

          <button className="lg:hidden text-darkblue z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center pt-32 pb-64 md:pt-40 md:pb-80 lg:pt-48 lg:pb-[300px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Courthouse at night" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[700px]">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[76px] leading-[1.1] mb-8 text-darkblue">
              Fierce Advocacy.<br />Proven Results.
            </h1>
            <p className="text-darkblue/80 text-lg md:text-[19px] mb-12 max-w-[550px] font-light leading-relaxed">
              Midtown Law Group LLP. Standing up for employees and injury victims with relentless commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0B1B3D] text-white h-[52px] px-[40px] font-medium flex items-center justify-center hover:bg-[#0B1B3D]/90 transition-colors rounded-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="bg-darkblue py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute left-[-150px] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Scale className="w-[600px] h-[600px]" strokeWidth={0.5} />
        </div>
        
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white uppercase tracking-widest text-[13px] font-bold">ABOUT US</span>
                <div className="w-16 h-[1px] bg-white" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] leading-[1.15]">
                Welcome to<br />Midtown Law Group
              </h2>
            </div>
            
            <div className="space-y-6 text-body text-[17px] font-light leading-relaxed">
              <p>
                Midtown Law Group LLP is a premier employment and personal injury law firm dedicated to defending the rights of individuals. Whether you are facing workplace injustice, discrimination, or have suffered serious injuries due to negligence, our seasoned trial attorneys stand ready to fight for you.
              </p>
              <p>
                We handle a wide range of complex cases, from wrongful termination and wage-and-hour violations to catastrophic auto accidents and slip-and-falls. Our mission is simple: to secure the dignity, safety, and full financial compensation you deserve.
              </p>
              <div className="pt-6">
                <button className="border border-white/20 rounded-sm text-white h-[46px] px-[32px] uppercase tracking-wider text-[12px] font-bold flex items-center gap-3 hover:border-white hover:text-white/80 transition-colors">
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRACTICE AREAS */}
      <section id="practice-areas" className="relative bg-[#F4F5F7] py-24 border-b border-darkblue/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={practiceBg} 
            alt="Library background" 
            className="w-full h-full object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#0B1B3D]" />
              <span className="text-[#0B1B3D] uppercase tracking-widest text-[13px] font-bold">PRACTICE AREAS</span>
              <div className="w-12 h-[1px] bg-[#0B1B3D]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#0B1B3D]">Areas of Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Wrongful Termination', desc: 'If you have been fired illegally, retaliated against, or subjected to a hostile work environment, we will protect your career.', icon: FileText, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800' },
              { title: 'Discrimination', desc: 'Protecting employees from unlawful discrimination and harassment based on race, gender, age, disability, or sexual orientation.', icon: Users, img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800' },
              { title: 'Wage & Hour Disputes', desc: 'Fighting for workers who have been denied overtime, misclassified as independent contractors, or had wages stolen.', icon: Scale, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800' },
              { title: 'Car & Truck Accidents', desc: 'Securing justice and full compensation for victims of motor vehicle collisions, highway trucking wrecks, and pedestrian accidents.', icon: Briefcase, img: carAccidentBg },
              { title: 'Workplace Injuries', desc: 'Guarding your rights and livelihoods if you have been injured on the job or at a construction site due to unsafe conditions.', icon: HardHat, img: workplaceBg },
              { title: 'Serious Personal Injury', desc: 'Providing compassionate and aggressive representation for slip-and-fall victims, medical malpractice, and catastrophic injuries.', icon: FileSignature, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
            ].map((area, i) => (
              <div key={i} className="group relative h-[320px] overflow-hidden bg-white shadow-md border border-black/5 cursor-pointer rounded-sm">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={area.img} 
                    alt={area.title}
                    className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/70 to-[#0B1B3D]/20" />
                </div>
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <area.icon className="w-10 h-10 text-white shrink-0" strokeWidth={1} />
                    <h3 className="font-serif text-2xl text-white">{area.title}</h3>
                  </div>
                  <p className="text-white/90 text-[15px] font-light leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="border border-[#0B1B3D] rounded-sm text-[#0B1B3D] h-[46px] px-[32px] uppercase tracking-wider text-[12px] font-bold flex items-center gap-3 hover:bg-[#0B1B3D] hover:text-white transition-colors">
              VIEW ALL PRACTICE AREAS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR TEAM */}
      <section id="attorneys" className="relative w-full flex flex-col lg:flex-row min-h-[600px] bg-[#0B1B3D]">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" 
            alt="Professional Attorney" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 relative flex items-center overflow-hidden">
          {/* Concentric Circles */}
          <div className="absolute right-[-300px] top-1/2 -translate-y-1/2 text-[#08132B] pointer-events-none opacity-40">
            <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none">
              <circle cx="500" cy="500" r="150" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="500" cy="500" r="250" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="500" cy="500" r="350" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="500" cy="500" r="550" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="relative z-10 px-8 py-20 lg:px-20 xl:px-28 w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white text-[14px]">Our Team</span>
              <div className="w-24 h-[1px] bg-white/40" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-white leading-[1.2] mb-8">
              Meet Our<br />Professional Team
            </h2>
            
            <p className="text-white/80 text-[15px] font-light leading-relaxed mb-10 max-w-[480px]">
              At Midtown Law Group LLP, we believe that every individual deserves top-tier legal representation when facing powerful employers or large insurance corporations. Our award-winning attorneys bring decades of collective courtroom experience, a deep understanding of state and federal labor laws, and a relentless commitment to winning your case.
            </p>
            
            <button className="bg-white text-[#0B1B3D] h-[48px] px-[36px] font-medium text-[14px] hover:bg-white/90 transition-colors rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="bg-[#F4F5F7] py-24 border-b border-darkblue/10">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
            <div className="max-w-[500px]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#0B1B3D] uppercase tracking-widest text-[13px] font-bold">HOW IT WORKS</span>
                <div className="w-16 h-[1px] bg-[#0B1B3D]" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#0B1B3D] leading-[1.1]">
                Take a look at how<br />we get it done
              </h2>
            </div>
            <div className="max-w-[500px] lg:mb-2">
              <p className="text-[#0B1B3D]/80 text-[15px] font-light leading-relaxed mb-6">
                Our process is designed to be seamless, transparent, and completely risk-free. From your first free consultation to the final settlement or trial verdict, we handle the legal burden so you can focus on healing and moving forward.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="bg-[#0B1B3D] text-white h-[46px] px-[32px] uppercase tracking-wider text-[12px] font-bold flex items-center justify-center whitespace-nowrap shrink-0 hover:bg-[#0B1B3D]/90 transition-colors rounded-sm">
                  GET STARTED
                </button>
                <span className="text-[#0B1B3D]/60 text-[12px]">
                  *We operate on a contingency fee basis—you pay nothing unless we win.
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Free Consultation', desc: 'Schedule a risk-free case evaluation with our expert legal team to discuss your situation and options.' },
              { num: '2', title: 'Case Investigation', desc: 'We gather critical evidence, interview witnesses, review medical records, and build a powerful legal strategy.' },
              { num: '3', title: 'Fierce Negotiation', desc: 'We demand maximum compensation from insurance companies or employers and negotiate aggressively on your behalf.' },
              { num: '4', title: 'Resolution & Recovery', desc: 'If they refuse to settle fairly, we take them to court and fight for a winning jury verdict or settlement.' },
            ].map((step, i) => (
              <div 
                key={i} 
                className="flex-1 rounded-sm p-8 flex flex-col items-start min-h-[340px] bg-[#0B1B3D] shadow-xl border border-transparent"
              >
                <div className="w-12 h-12 rounded-sm flex items-center justify-center text-[20px] font-bold mb-auto bg-white text-[#0B1B3D] shadow-md">
                  {step.num}
                </div>
                <div className="mt-16 w-full">
                  <h4 className="font-serif text-[22px] mb-3 text-white">{step.title}</h4>
                  <p className="text-[15px] font-light leading-relaxed mb-8 text-white/80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section id="testimonials" className="relative py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Building background" 
            className="w-full h-full object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-[#0B1B3D]/90" />
        </div>
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-white" />
              <span className="text-white uppercase tracking-widest text-[13px] font-bold">TESTIMONIALS</span>
              <div className="w-12 h-[1px] bg-white" />
            </div>
            <h2 className="font-serif text-4xl md:text-[42px]">Our Happy Clients</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                quote: "The attorneys at Midtown Law Group were outstanding. They guided me through my wrongful termination suit and kept me informed every step of the way. I received a settlement that far exceeded my expectations.",
                name: "Adam Smith"
              },
              { 
                quote: "After my car accident, I was overwhelmed by medical bills and insurance calls. Midtown Law Group took over everything, allowing me to focus on recovery. They fought hard and won my personal injury case.",
                name: "Jane Miller"
              },
              { 
                quote: "I highly recommend Midtown Law Group to anyone facing workplace abuse. They took on my former employer for overtime wage theft and stood up for my rights when nobody else would.",
                name: "Jack Leffon"
              }
            ].map((test, i) => (
              <div key={i} className="border border-white/10 bg-darkblue-light p-8 flex flex-col justify-between h-[320px]">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-[14px] h-[14px] fill-white text-white" />)}
                  </div>
                  <p className="text-[14px] text-body font-light leading-relaxed">
                    {test.quote}
                  </p>
                </div>
                <div className="text-white text-[14px] font-bold mt-6">
                  {test.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section id="faq" className="bg-[#F4F5F7] py-24 border-b border-darkblue/10">
        <div className="w-full max-w-[900px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#0B1B3D]" />
              <span className="text-[#0B1B3D] uppercase tracking-widest text-[13px] font-bold">FAQ</span>
              <div className="w-12 h-[1px] bg-[#0B1B3D]" />
            </div>
            <h2 className="font-serif text-4xl md:text-[42px] text-[#0B1B3D]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              'How much does it cost to hire your firm?',
              'What types of cases do you handle?',
              'How long will my case take?',
              'Do you offer a free consultation?',
              'How do I start my case?'
            ].map((q, i) => (
              <div key={i} className="border border-black/5 bg-white p-6 flex justify-between items-center cursor-pointer hover:border-black/10 shadow-sm transition-all rounded-sm">
                <span className="text-[16px] font-light text-[#0B1B3D]">{q}</span>
                <Plus className="w-5 h-5 text-[#0B1B3D] shrink-0" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT */}
      <section id="contact" className="flex flex-col lg:flex-row min-h-[800px] border-b border-[#0B1B3D]/10">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center py-24 px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="w-full max-w-[600px]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-medium text-[#0B1B3D] mb-2">Your name</label>
                  <input type="text" placeholder="Enter your name" className="bg-[#F4F5F7] text-[#0B1B3D] placeholder:text-[#0B1B3D]/40 px-5 py-3.5 text-sm outline-none w-full rounded-xl transition-colors focus:ring-1 focus:ring-[#0B1B3D]/20" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#0B1B3D] mb-2">Last name</label>
                  <input type="text" placeholder="Enter your last name" className="bg-[#F4F5F7] text-[#0B1B3D] placeholder:text-[#0B1B3D]/40 px-5 py-3.5 text-sm outline-none w-full rounded-xl transition-colors focus:ring-1 focus:ring-[#0B1B3D]/20" />
                </div>
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-[#0B1B3D] mb-2">Email Address</label>
                <input type="email" placeholder="Enter your email address" className="bg-[#F4F5F7] text-[#0B1B3D] placeholder:text-[#0B1B3D]/40 px-5 py-3.5 text-sm outline-none w-full rounded-xl transition-colors focus:ring-1 focus:ring-[#0B1B3D]/20" />
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-[#0B1B3D] mb-2">Case Type</label>
                <div className="relative">
                  <select defaultValue="" className="bg-[#F4F5F7] text-[#0B1B3D] px-5 py-3.5 text-sm outline-none w-full appearance-none rounded-xl transition-colors focus:ring-1 focus:ring-[#0B1B3D]/20">
                    <option value="" disabled className="text-[#0B1B3D]/40">Select case type</option>
                    <option value="1">Employment Law</option>
                    <option value="2">Personal Injury</option>
                    <option value="3">Other Case</option>
                  </select>
                  <ChevronRight className="w-4 h-4 text-[#0B1B3D]/40 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-[#0B1B3D] mb-2">Case Details</label>
                <textarea placeholder="Enter case details" rows={5} className="bg-[#F4F5F7] text-[#0B1B3D] placeholder:text-[#0B1B3D]/40 px-5 py-3.5 text-sm outline-none w-full resize-none rounded-xl transition-colors focus:ring-1 focus:ring-[#0B1B3D]/20"></textarea>
              </div>
              
              <button className="bg-black text-white px-8 py-4 text-[14px] font-semibold rounded-full hover:bg-black/80 transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 relative flex flex-col justify-center bg-[#0B1B3D] overflow-hidden py-24 px-6 md:px-12 lg:px-20 xl:px-28">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          <div className="relative z-10 w-full max-w-[600px] flex flex-col h-full justify-center">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[72px] text-white leading-[1.1] tracking-tight mb-8">
              Got a case?<br />Let's win it right.
            </h2>
            
            <p className="text-white/80 text-[16px] md:text-[18px] font-light leading-relaxed max-w-[480px] mb-16">
              From initial strategy and consultation to full representation, we help clients navigate complex legal matters to achieve the best outcome.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="flex items-center gap-4 bg-white/10 rounded-full pr-6 pl-2 py-2 w-fit">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#0B1B3D]" fill="currentColor" />
                </div>
                <span className="text-white text-[15px] font-medium">info@midtownlawgroup.com</span>
              </div>
              
              <div className="flex items-center gap-4 bg-white/10 rounded-full pr-6 pl-2 py-2 w-fit">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#0B1B3D]" fill="currentColor" />
                </div>
                <span className="text-white text-[15px] font-medium">(713) 999-1234</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-darkblue-light pt-20 pb-8 border-t border-white/10">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 mb-16">
            
            <div>
              <div className="mb-6 flex justify-start">
                <Logo light={true} className="!items-start" />
              </div>
              <p className="text-body text-[13px] font-light leading-relaxed max-w-[320px] mb-8">
                We are dedicated to fighting for the rights of our clients and providing exceptional legal representation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:text-white/80 transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:text-white/80 transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:text-white/80 transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:text-white/80 transition-colors"><Youtube className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:text-white/80 transition-colors"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-sans text-[13px] font-bold uppercase tracking-wider mb-6 text-white">PRACTICE AREAS</h4>
              <ul className="space-y-3 text-[13px] text-body font-light">
                <li><a href="#practice-areas" className="hover:text-white/80 transition-colors">Wrongful Termination</a></li>
                <li><a href="#practice-areas" className="hover:text-white/80 transition-colors">Discrimination</a></li>
                <li><a href="#practice-areas" className="hover:text-white/80 transition-colors">Wage & Hour Disputes</a></li>
                <li><a href="#practice-areas" className="hover:text-white/80 transition-colors">Car & Truck Accidents</a></li>
                <li><a href="#practice-areas" className="hover:text-white/80 transition-colors">Workplace Injuries</a></li>
                <li><a href="#practice-areas" className="hover:text-white/80 transition-colors">Serious Personal Injury</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-[13px] font-bold uppercase tracking-wider mb-6 text-white">QUICK LINKS</h4>
              <ul className="space-y-3 text-[13px] text-body font-light">
                <li><a href="#about" className="hover:text-white/80 transition-colors">About Us</a></li>
                <li><a href="#attorneys" className="hover:text-white/80 transition-colors">Attorneys</a></li>
                <li><a href="#results" className="hover:text-white/80 transition-colors">Results</a></li>
                <li><a href="#testimonials" className="hover:text-white/80 transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white/80 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-[13px] font-bold uppercase tracking-wider mb-6 text-white">CONTACT US</h4>
              <ul className="space-y-4 text-[13px] text-body font-light">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white shrink-0" fill="currentColor" />
                  (713) 999-1234
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white shrink-0" fill="currentColor" />
                  info@midtownlawgroup.com
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" fill="currentColor" />
                  <span>456 Midtown Avenue, Suite 1200<br/>New York, NY 10018</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-white shrink-0" fill="currentColor" />
                  Mon - Sun: Open 24 Hours
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-body font-light">
            <p>&copy; {new Date().getFullYear()} Midtown Law Group LLP. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white/80 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
