import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin, Cog, Wrench, Cpu, Box, Printer, ChefHat, Users, GraduationCap,
  Car, Award, Mail, Linkedin, Instagram, Github, Download, Menu, X,
  ArrowRight, ExternalLink, Sparkles, Zap, Shield, Hammer, Cuboid, Bot,
  CircuitBoard, Flame, Scissors, Briefcase
} from "lucide-react";
import profileImg from "@/assets/profile.png";
import certTire from "@/assets/cert-tire.png";
import certLift from "@/assets/cert-lift.png";
import certVehicle from "@/assets/cert-vehicle.png";
import certButchery from "@/assets/cert-butchery.png";
import certCad from "@/assets/cert-cad.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certs" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const LINKEDIN = "https://www.linkedin.com/in/minh-quang-bui/";
const INSTAGRAM = "https://www.instagram.com/andyvampir1412/";
const EMAIL = "minhquangbui101010@gmail.com";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="glass-strong mx-auto max-w-7xl rounded-2xl px-5 py-3 flex items-center justify-between shadow-neon">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-violet)] grid place-items-center font-black text-primary-foreground shadow-neon">
            MQB
          </div>
          <div className="hidden sm:block">
            <div className="text-xs text-muted-foreground leading-none">Mechatronics Engineer</div>
            <div className="text-xs text-muted-foreground leading-none mt-1">in the Making</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] text-primary-foreground font-semibold text-sm hover:scale-105 transition shadow-neon">
            <Sparkles className="w-4 h-4" /> Let's Connect
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg glass">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden glass-strong mx-auto max-w-7xl rounded-2xl mt-2 p-4 flex flex-col gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5">{n.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-40" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[var(--neon-blue)]/30 blur-[120px] animate-blob" />
      <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-[var(--neon-violet)]/25 blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[var(--neon-amber)]/20 blur-[140px] animate-blob" style={{ animationDelay: "8s" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-md aspect-square">
          {/* Orbits */}
          <div className="absolute inset-0 rounded-full border border-[var(--neon-cyan)]/30 animate-spin-slower" />
          <div className="absolute inset-6 rounded-full border border-dashed border-[var(--neon-violet)]/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-12 rounded-full border border-[var(--neon-amber)]/20 animate-spin-slower" />
          {/* Glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[var(--neon-blue)]/40 via-[var(--neon-violet)]/30 to-[var(--neon-amber)]/30 blur-3xl" />
          {/* Image */}
          <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-[var(--neon-cyan)]/60 shadow-neon animate-pulse-glow">
            {/* Replace this with Minh's profile photo */}
            <img src={profileImg} alt="Minh Quang Bui" className="w-full h-full object-cover" />
          </div>
          {/* Floating gear */}
          <div className="absolute -top-2 -right-2 w-24 h-24 grid place-items-center glass rounded-2xl animate-float shadow-neon">
            <Cog className="w-14 h-14 text-[var(--neon-cyan)] animate-spin-slow" />
          </div>
          <div className="absolute -bottom-2 -left-4 w-20 h-20 grid place-items-center glass rounded-2xl animate-float shadow-amber-glow" style={{ animationDelay: "2s" }}>
            <CircuitBoard className="w-10 h-10 text-[var(--neon-amber)]" />
          </div>
          <div className="absolute bottom-8 right-0 glass-strong rounded-xl px-3 py-2 flex items-center gap-2 text-xs shadow-neon">
            <MapPin className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
            Oshawa, ON 🇨🇦
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="flex flex-wrap gap-2 mb-5">
            {["He/Him", "Ontario Tech University", "Open to Work"].map((b) => (
              <span key={b} className="text-xs px-3 py-1.5 glass rounded-full border border-[var(--neon-cyan)]/20">{b}</span>
            ))}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            Minh <span className="text-gradient">Quang Bui</span>
          </h1>
          <p className="mt-4 text-xl text-foreground/90 font-semibold">Mechatronics Engineering Student</p>
          <p className="text-sm text-muted-foreground mt-1">Automotive & Manufacturing • 3D Printing • CAD/CAM</p>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Hands-on Mechatronics student building, fixing, and creating. Experience in 3D printing, CAD/CAM,
            vehicle operation & safety, lifting, tire changes, preventive maintenance — plus culinary training
            in butchery and cooking. I value teamwork, reliability, and continuous learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] text-primary-foreground font-semibold shadow-neon hover:scale-105 transition">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#certs" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong hover:border-[var(--neon-amber)]/50 transition">
              <Award className="w-4 h-4 text-[var(--neon-amber)]" /> Certifications
            </a>
            <a href="#experience" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong hover:border-[var(--neon-cyan)]/50 transition">
              <Briefcase className="w-4 h-4 text-[var(--neon-cyan)]" /> Experience
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong hover:border-[var(--neon-blue)]/50 transition">
              <Linkedin className="w-4 h-4 text-[var(--neon-blue)]" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ABOUT_CARDS = [
  { icon: Cpu, title: "Mechatronics", desc: "Robotics, sensors, and system integration", color: "var(--neon-cyan)" },
  { icon: Shield, title: "Automotive Safety", desc: "Inspections, lifts, brake & tire safety", color: "var(--neon-amber)" },
  { icon: Printer, title: "3D Printing", desc: "Build, repair, slice, optimize prints", color: "var(--neon-violet)" },
  { icon: Cuboid, title: "CAD/CAM", desc: "AutoCAD, 3D modeling, manufacturing", color: "var(--neon-blue)" },
  { icon: Hammer, title: "Manufacturing", desc: "GM Paint Ops, 5S, GMS standards", color: "var(--neon-teal)" },
  { icon: ChefHat, title: "Culinary & Butchery", desc: "Trained in butchery & kitchen ops", color: "var(--neon-amber)" },
  { icon: Users, title: "Team Communication", desc: "Reliable, collaborative, fast learner", color: "var(--neon-cyan)" },
];

function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="About Minh" title="A Hands-On Engineer" subtitle="A collage of disciplines — engineering, automotive, manufacturing, and craft." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {ABOUT_CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`glass rounded-2xl p-6 hover-lift group relative overflow-hidden ${i === 0 || i === 3 ? "lg:row-span-2" : ""}`}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition" style={{ background: `oklch(from ${c.color} l c h / 0.6)` }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl glass-strong grid place-items-center mb-4">
                    <Icon className="w-6 h-6" style={{ color: `var(--neon-${c.color.includes("cyan") ? "cyan" : c.color.includes("amber") ? "amber" : c.color.includes("violet") ? "violet" : c.color.includes("teal") ? "teal" : "blue"})` }} />
                  </div>
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-xs text-[var(--neon-cyan)] mb-4">
        <Zap className="w-3.5 h-3.5" /> {eyebrow}
      </div>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-3">{subtitle}</p>}
    </motion.div>
  );
}

const EXPERIENCE = [
  {
    company: "General Motors", role: "Paint Operator – MFG", type: "Permanent Part-time",
    location: "Oshawa, ON", dates: "Oct 2025 – Present", icon: Car, color: "var(--neon-amber)",
    bullets: [
      "Moist sanding & surface finishing on body panels to spec.",
      "Inspect painted surfaces and address defects with quality teams.",
      "Maintain a 5S-compliant workstation.",
      "Follow Global Manufacturing System safety standards.",
      "Collaborate with production & maintenance for line uptime.",
    ],
  },
  {
    company: "Boom Chicken", role: "Assistant Chef", type: "Permanent Part-time",
    location: "Oshawa, ON", dates: "Oct 2024 – Present", icon: Flame, color: "var(--neon-violet)",
    bullets: [
      "Support food prep, cooking, and kitchen operations.",
      "Maintain cleanliness and food safety standards.",
      "Assist team members during peak service.",
      "Apply culinary & customer-service skills in a fast-paced setting.",
    ],
  },
  {
    company: "Ontario Tech University", role: "Mechatronics Student / 3D Modeling & Robot",
    location: "Oshawa, ON", dates: "Jul 2023 – Present", icon: GraduationCap, color: "var(--neon-cyan)",
    bullets: [
      "Mechatronics, robotics, CAD, design, and system integration.",
      "3D modeling, prototyping, and robot-related projects.",
      "Develop practical engineering and problem-solving skills.",
    ],
  },
  {
    company: "St. Mary High School Auto Shop", role: "Transportation Mechanic",
    dates: "2022 – 2024", icon: Wrench, color: "var(--neon-blue)",
    bullets: [
      "Vehicle safety operations and inspections.",
      "Fluid checks and oil changes.",
      "Brake safety, tire change, and tire balancing.",
      "Vehicle lifting on 2-post & 4-post hoists.",
      "Engine assembly and mechanical repair practice.",
    ],
  },
  {
    company: "Hidden Acres Camp", role: "Cabin Leader",
    dates: "Jun 2021 – Dec 2023", icon: Users, color: "var(--neon-teal)",
    bullets: [
      "Led groups of campers through activities.",
      "Encouraged participation and teamwork.",
      "Supported camper safety and positive group dynamics.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Career Timeline" title="Experience" subtitle="From the auto shop to the GM paint line." />
        <div className="relative mt-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-violet)] to-[var(--neon-amber)] opacity-40" />
          {EXPERIENCE.map((e, i) => {
            const Icon = e.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, x: left ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative mb-10 md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-16 md:pl-0 ${left ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <div className="glass rounded-2xl p-6 hover-lift group">
                    <div className={`flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-11 h-11 rounded-xl glass-strong grid place-items-center" style={{ boxShadow: `0 0 20px ${e.color}66` }}>
                        <Icon className="w-5 h-5" style={{ color: e.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{e.company}</h3>
                        <p className="text-sm text-[var(--neon-cyan)]">{e.role}</p>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-3 flex flex-wrap gap-x-3 gap-y-1 md:justify-end">
                      <span>{e.dates}</span>
                      {e.location && <span>• {e.location}</span>}
                      {e.type && <span>• {e.type}</span>}
                    </div>
                    <ul className={`mt-4 space-y-1.5 text-sm text-muted-foreground ${left ? "md:text-right" : ""}`}>
                      {e.bullets.map((b) => <li key={b}>• {b}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2" style={{ borderColor: e.color, boxShadow: `0 0 20px ${e.color}` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="relative py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[var(--neon-cyan)]/20 blur-3xl" />
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-violet)] grid place-items-center shadow-neon">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-[var(--neon-cyan)] uppercase tracking-widest">Education</div>
              <h3 className="text-2xl font-bold mt-1">Ontario Tech University</h3>
              <p className="text-muted-foreground">Bachelor of Engineering, Mechatronics Engineering</p>
              <p className="text-sm text-muted-foreground mt-1">Oshawa, Ontario, Canada</p>
            </div>
            <div className="glass rounded-xl px-4 py-3 text-center">
              <div className="text-xs text-muted-foreground">Years</div>
              <div className="font-bold text-lg text-gradient">2023 – 2029</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SKILL_CATS = {
  Engineering: ["Mechatronics", "Mechanical Assembly", "Prototyping", "Ground-up Construction", "Optimising", "Safety Improvements", "Technical Training"],
  Automotive: ["Automotive Safety", "Automotive Repair", "Vehicle Safety", "Vehicle Inspection", "Vehicle Lift Safety", "Lifting Equipment", "Lifting Operations", "Emergency Vehicle Operations", "Maintenance Of Traffic", "Air Balancing", "Winterization"],
  "CAD/CAM": ["AutoCAD Mechanical", "3D CAD", "CAD/CAM", "CAM", "Computer-Aided Design", "Computer-Aided Manufacturing", "Blender", "3D Modeling"],
  "3D Printing": ["3D Printing", "G-Code", "Robot", "Soldering"],
  Culinary: ["Cooking", "Butchery", "Waiting Tables"],
  "Soft Skills": ["Communication", "Camping", "Tree Planting"],
};

function Skills() {
  const cats = ["All", ...Object.keys(SKILL_CATS)];
  const [active, setActive] = useState("All");
  const skills = active === "All"
    ? Object.entries(SKILL_CATS).flatMap(([cat, arr]) => arr.map((s) => ({ s, cat })))
    : (SKILL_CATS as any)[active].map((s: string) => ({ s, cat: active }));

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Toolkit" title="Skills Dashboard" subtitle="Filter by domain. Tap a chip to highlight." />
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${active === c ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] text-primary-foreground shadow-neon" : "glass hover:border-[var(--neon-cyan)]/40"}`}>
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="flex flex-wrap gap-2.5 justify-center mt-10">
          {skills.map(({ s, cat }: { s: string; cat: string }) => (
            <motion.span layout key={s + cat}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 glass rounded-xl text-sm hover:border-[var(--neon-cyan)]/60 hover:shadow-neon hover:-translate-y-0.5 transition cursor-default">
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const CERTS = [
  { img: certTire, title: "Advance Training in a Technique — Tire Change", date: "June 2024", skills: ["Tire Change", "Automotive Safety", "Vehicle Maintenance"] },
  { img: certLift, title: "Vehicle Lift Safety", date: "June 2024", skills: ["Vehicle Lift Safety", "Lifting Equipment", "Automotive Safety"] },
  { img: certVehicle, title: "Sector Specific Vehicle Operation and Safety", date: "June 2024", skills: ["Vehicle Operation", "Vehicle Safety", "Automotive Safety"] },
  { img: certButchery, title: "Advance Training in a Technique — Butchery", date: "January 2024", skills: ["Butchery", "Cooking", "Food Safety"] },
  { img: certCad, title: "CAD/CAM — Computer Aided Design / Manufacturing", date: "May 2022", skills: ["CAD", "CAD/CAM", "CAM", "Computer-Aided Manufacturing"] },
];

function Certifications() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="certs" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Verified Training" title="Certifications & Technical Training" subtitle="Real, issued credentials from the Waterloo Catholic District School Board." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {CERTS.map((c, i) => (
            <motion.button key={c.title} onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-left glass rounded-2xl overflow-hidden hover-lift group border border-white/5">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img src={c.img} alt={c.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gradient-to-br from-[var(--neon-amber)] to-[var(--neon-violet)] grid place-items-center shadow-amber-glow">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold leading-tight">{c.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Waterloo Catholic District School Board • {c.date}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {c.skills.slice(0, 3).map((s) => (
                    <span key={s} className="text-[10px] px-2 py-1 rounded-md bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/20">{s}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--neon-cyan)] group-hover:gap-2.5 transition-all">
                  View Certificate <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md grid place-items-center p-4">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-3xl max-w-4xl w-full overflow-hidden shadow-neon">
            <div className="flex justify-between items-start p-5 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold">{CERTS[active].title}</h3>
                <p className="text-sm text-muted-foreground">Waterloo Catholic District School Board • {CERTS[active].date}</p>
              </div>
              <button onClick={() => setActive(null)} className="p-2 rounded-lg hover:bg-white/10"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-5 bg-white">
              <img src={CERTS[active].img} alt={CERTS[active].title} className="w-full h-auto" />
            </div>
            <div className="p-5 flex flex-wrap gap-2">
              {CERTS[active].skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30">{s}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

const STRENGTHS = [
  { icon: Shield, label: "Automotive Safety" },
  { icon: Printer, label: "3D Printing" },
  { icon: Cuboid, label: "CAD/CAM" },
  { icon: Car, label: "Vehicle Lift Safety" },
  { icon: Scissors, label: "Butchery" },
  { icon: Cpu, label: "Mechatronics" },
  { icon: Users, label: "Team Communication" },
  { icon: Wrench, label: "Mechanical Repair" },
  { icon: Bot, label: "Robotics" },
  { icon: Hammer, label: "Manufacturing" },
];

function Strengths() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Featured" title="Strengths" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
          {STRENGTHS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="glass rounded-2xl p-5 text-center hover-lift group cursor-default">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-violet)]/30 grid place-items-center mb-3 group-hover:shadow-neon transition">
                  <Icon className="w-6 h-6 text-[var(--neon-cyan)]" />
                </div>
                <div className="text-sm font-semibold">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { icon: Printer, title: "3D Printing & Printer Repair", color: "var(--neon-violet)",
    desc: "Building, upgrading, repairing, and maintaining 3D printers. Slicing, print-quality tuning, troubleshooting, G-Code.",
    skills: ["3D Printing", "G-Code", "Slicing", "Repair"] },
  { icon: Car, title: "Vehicle Maintenance & Safety", color: "var(--neon-amber)",
    desc: "Hands-on inspections, fluid & oil, brake safety, tire changing & balancing, lifting on 2/4-post hoists.",
    skills: ["Inspection", "Tire Change", "Vehicle Lift", "Brake Safety"] },
  { icon: Cuboid, title: "CAD/CAM Design", color: "var(--neon-blue)",
    desc: "3D modeling, CAD, CAM programming, and computer-aided manufacturing for precision design and production.",
    skills: ["AutoCAD", "Blender", "CAM", "3D Modeling"] },
  { icon: Bot, title: "Robotics / Mechatronics", color: "var(--neon-cyan)",
    desc: "Robotics, sensors, mechanical systems, system integration, and prototyping coursework & projects.",
    skills: ["Robotics", "Sensors", "Prototyping", "Integration"] },
  { icon: Hammer, title: "Manufacturing & Surface Finishing", color: "var(--neon-teal)",
    desc: "Production-line experience: surface finishing, inspection, 5S, safety standards, continuous improvement.",
    skills: ["5S", "Quality", "GMS", "Finishing"] },
  { icon: ChefHat, title: "Culinary & Butchery Training", color: "var(--neon-violet)",
    desc: "Trained in butchery, food prep, cooking, cleanliness, food safety, and fast-paced kitchen operations.",
    skills: ["Butchery", "Cooking", "Food Safety", "Service"] },
];

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Focus Areas" title="Projects & Specializations" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl p-6 hover-lift group relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition" style={{ background: p.color }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl glass-strong grid place-items-center mb-4" style={{ boxShadow: `0 0 25px ${p.color}55` }}>
                    <Icon className="w-7 h-7" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.skills.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-1 rounded-md glass border border-white/10">{s}</span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--neon-cyan)] group-hover:gap-2.5 transition-all">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Get In Touch" title="Let's Build Something Practical"
          subtitle="Open to engineering opportunities, hands-on technical roles, manufacturing, automotive, 3D printing, and networking." />
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 mt-12">
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${EMAIL}`; }}
            className="glass-strong rounded-3xl p-6 md:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-input border border-white/10 focus:border-[var(--neon-cyan)] focus:outline-none transition" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-input border border-white/10 focus:border-[var(--neon-cyan)] focus:outline-none transition" />
            </div>
            <input required placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-input border border-white/10 focus:border-[var(--neon-cyan)] focus:outline-none transition" />
            <textarea required rows={5} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl bg-input border border-white/10 focus:border-[var(--neon-cyan)] focus:outline-none transition resize-none" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)] text-primary-foreground font-semibold shadow-neon hover:scale-[1.02] transition">
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <div className="space-y-3">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 glass rounded-2xl p-4 hover-lift group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--neon-amber)] to-[var(--neon-violet)] grid place-items-center"><Mail className="w-5 h-5 text-primary-foreground" /></div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-semibold truncate">{EMAIL}</div>
              </div>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-2xl p-4 hover-lift">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-cyan)] grid place-items-center"><Linkedin className="w-5 h-5 text-primary-foreground" /></div>
              <div><div className="text-xs text-muted-foreground">LinkedIn</div><div className="text-sm font-semibold">minh-quang-bui</div></div>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-2xl p-4 hover-lift">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--neon-violet)] to-[var(--neon-amber)] grid place-items-center"><Instagram className="w-5 h-5 text-primary-foreground" /></div>
              <div><div className="text-xs text-muted-foreground">Instagram</div><div className="text-sm font-semibold">@andyvampir1412</div></div>
            </a>
            {/* Replace this with resume file */}
            <a href="#" className="flex items-center gap-3 glass rounded-2xl p-4 hover-lift">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--neon-teal)] to-[var(--neon-blue)] grid place-items-center"><Download className="w-5 h-5 text-primary-foreground" /></div>
              <div><div className="text-xs text-muted-foreground">Resume</div><div className="text-sm font-semibold">Download PDF</div></div>
            </a>
            {/* Replace this with GitHub URL */}
            <a href="#" className="flex items-center gap-3 glass rounded-2xl p-4 hover-lift">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-muted to-secondary grid place-items-center"><Github className="w-5 h-5 text-primary-foreground" /></div>
              <div><div className="text-xs text-muted-foreground">GitHub</div><div className="text-sm font-semibold">Coming soon</div></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-violet)] grid place-items-center font-black text-primary-foreground">MQB</div>
            <div>
              <div className="font-bold">Minh Quang Bui</div>
              <div className="text-xs text-muted-foreground">Mechatronics Engineer in the Making</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Quick Links</div>
          <div className="grid grid-cols-2 gap-1 text-sm">
            {NAV.map((n) => <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">{n.label}</a>)}
          </div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Connect</div>
          <div className="flex gap-2">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-xl grid place-items-center hover:shadow-neon transition"><Linkedin className="w-4 h-4" /></a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-xl grid place-items-center hover:shadow-neon transition"><Instagram className="w-4 h-4" /></a>
            <a href={`mailto:${EMAIL}`} className="w-10 h-10 glass rounded-xl grid place-items-center hover:shadow-neon transition"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Minh Quang Bui. Built with precision in Oshawa, Ontario.
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="dark relative min-h-screen">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Strengths />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
