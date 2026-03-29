import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  mode: "Online" | "In-Person" | "Hybrid";
  preview: string;
  fullDescription: string;
  tags: string[];
  img: string;
  category: "innovation" | "mentorship" | "celebration" | "civic";
}

const events: Event[] = [
  {
    id: "innovation-maseno",
    title: "Innovation and Collaboration",
    location: "Maseno University",
    date: "NOV 2025",
    mode: "In-Person",
    preview: "A collaborative engagement where we interacted with young innovators.",
    fullDescription: "This landmark event at Maseno University brought together over 150 young innovators, entrepreneurs, and thought leaders. We facilitated dynamic workshops on emerging technologies, startup ecosystems, and collaborative innovation. Participants networked with industry leaders and left with actionable insights and new partnership opportunities.",
    tags: ["Innovation", "Networking", "Technology"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "innovation",
  },
  {
    id: "mentorship-nyamgun",
    title: "Student Mentorship",
    location: "Nyamgun Secondary - Seme",
    date: "OCT 2025",
    mode: "In-Person",
    preview: "Mentors, workshops and group coaching sessions for leaders.",
    fullDescription: "Our mentorship program at Nyamgun Secondary School reached 120 students through intensive mentorship sessions, interactive workshops, and group coaching. We covered topics including academic excellence, career planning, leadership skills, and personal development. Each student was paired with a mentor for one-on-one guidance.",
    tags: ["Mentorship", "Leadership", "Youth"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "mentorship",
  },
  {
    id: "anniversary-livingworld",
    title: "UPYA Anniversary Celebration",
    location: "Living World Children's Home - Seme",
    date: "APRIL 2025",
    mode: "In-Person",
    preview: "Celebrating a year of existence and impact.",
    fullDescription: "UPYA marked its anniversary with a vibrant celebration at Living World Children's Home. The event featured inspiring stories from youth whose lives have been transformed through our programs, live performances, awards recognizing outstanding contributors, and a community service initiative. We reflected on our achievements and recommitted to our mission.",
    tags: ["Celebration", "Community", "Impact"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "celebration",
  },
  {
    id: "civic-education-kisumu",
    title: "Civic Education",
    location: "Kisumu County Assembly",
    date: "MAY 2024",
    mode: "Hybrid",
    preview: "Youth mentorship and civic education trip to governance.",
    fullDescription: "We organized an impactful civic education program that took 200 youth to the Kisumu County Assembly. Participants engaged with county legislators, observed assembly proceedings, and participated in hands-on workshops on governance, civic participation, and youth advocacy. The program equipped young people with essential knowledge about democratic processes.",
    tags: ["Civic", "Governance", "Education"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=75",
    category: "civic",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    innovation: "bg-blue-100 text-blue-700",
    mentorship: "bg-purple-100 text-purple-700",
    celebration: "bg-pink-100 text-pink-700",
    civic: "bg-green-100 text-green-700",
  };
  return colors[category] || "bg-accent text-charcoal";
};

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    innovation: "Innovation",
    mentorship: "Mentorship",
    celebration: "Celebration",
    civic: "Civic",
  };
  return labels[category] || "Event";
};

const UpcomingEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  return (
    <>
      <section className="py-[100px] px-6 md:px-[60px] bg-gradient-to-b from-white to-slate-50" id="upcoming-events">
      {/* <section className="py-[100px] px-6 md:px-[60px] bg-[#1a3a2a]" id="upcoming-events"> */}
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4 justify-center">
                <span className="w-5 h-0.5 bg-primary" />
             {/* <div className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[2px] uppercase mb-4 justify-center">
                <span className="w-5 h-0.5 bg-accent" /> */}
                Upcoming Events
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">
              {/* <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-white tracking-[-1.5px] mb-4"> */}
                Join Our Movement
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-[16.5px] text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
              {/* <p className="text-[16.5px] text-white/70 leading-relaxed max-w-[600px] mx-auto"> */}
                Be part of transformative events where we bring together young innovators, mentors, and community leaders.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
            // {currentEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={(i % 3) * 0.1}>
                <div className="group rounded-[20px] overflow-hidden border border-border bg-card transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(26,140,78,0.12)] hover:border-primary h-full flex flex-col">
                {/* <div className="group rounded-[20px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(26,140,78,0.2)] hover:border-accent h-full flex flex-col"> */}
                  {/* Event Header with Image */}
                  <div className="h-[180px] relative overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
                    
                    {/* Category Badge */}
                    <span className={`absolute top-3 left-3 z-[2] ${getCategoryColor(event.category)} px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase`}>
                      {getCategoryLabel(event.category)}
                    </span>

                    {/* Date Badge */}
                    <div className="absolute bottom-3 right-3 z-[2] bg-yellow-400 text-charcoal font-bold px-3 py-1 rounded-lg text-xs">
                    {/* <div className="absolute bottom-3 right-3 z-[2] bg-accent text-charcoal font-bold px-3 py-1 rounded-lg text-xs"> */}
                      {event.date}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-head text-[16px] font-bold text-charcoal mb-2 line-clamp-2">
                    {/* <h3 className="font-head text-[16px] font-bold text-white mb-2 line-clamp-2"> */}
                      {event.title}
                    </h3>

                    {/* Event Metadata */}
                    <div className="space-y-1 mb-3 text-xs text-muted-foreground">
                    {/* <div className="space-y-1 mb-3 text-xs text-white/70"> */}
                      <div className="flex items-center gap-1">
                        <span>📅</span>
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>📍</span>
                        <span className="font-semibold line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🔴</span>
                        <span className={`font-semibold ${event.mode === "Online" ? "text-blue-600" : event.mode === "In-Person" ? "text-green-600" : "text-purple-600"}`}>
                        {/* <span className={`font-semibold ${event.mode === "Online" ? "text-blue-400" : event.mode === "In-Person" ? "text-green-400" : "text-purple-400"}`}> */}
                          {event.mode}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((tag) => (
                        <span key={tag} className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-semibold">
                        {/* <span key={tag} className="inline-block bg-accent/20 text-accent px-2 py-0.5 rounded text-[10px] font-semibold"></span> */}
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {/* <p className="text-xs text-white/60 mb-4 line-clamp-2 flex-grow"></p> */}
                      {event.preview}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm transition-all duration-300 hover:gap-3 hover:text-primary-mid mt-auto"
                    //className="inline-flex items-center gap-2 text-accent font-semibold text-sm transition-all duration-300 hover:gap-3 hover:text-accent/80 mt-auto"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <button className="bg-accent text-charcoal px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg">
              View All Events →
            </button>
          </div> */}
          {/* Pagination */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold transition-all duration-300 hover:bg-accent hover:text-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === i
                      ? "bg-accent text-charcoal"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold transition-all duration-300 hover:bg-accent hover:text-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEventsSection;
