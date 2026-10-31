"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Camera,
  Mic,
  ShieldCheck,
  Palette,
  Play,
  Pause,
  Star,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

// TypeScript Interfaces
interface PreviewCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  img: string;
  type: string;
}

interface SlideData {
  id: string;
  tag: string;
  badgeIcon: LucideIcon;
  headline: string;
  subtext: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  stats: { primary: string; label: string };
  bgImage: string;
  previewGrid: PreviewCard[];
}

// Mock Data for the 3 Dynamic Marketplace Banner Slides
const SLIDES: SlideData[] = [
  {
    id: "slide-1",
    tag: "Film & Photography Hubs",
    badgeIcon: Camera,
    headline: "Book World-Class Cyc Walls & Cinema Sound Stages",
    subtext:
      "Connect directly with studio hosts. Access high-ceiling sound stages, pre-lit infinity cyc walls, and cinema-grade gear setups with transparent hourly pricing.",
    primaryCtaText: "Explore Studios",
    primaryCtaLink: "/studios?category=film-photo",
    secondaryCtaText: "Host Your Space",
    secondaryCtaLink: "/studios/host",
    stats: { primary: "1,200+", label: "Verified Stage Hours Booked" },
    bgImage:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=2000",
    previewGrid: [
      {
        id: "p1-1",
        title: "Pro White Cyc Wall",
        subtitle: "3-Wall Seamless Curve • 3,000 sq ft",
        badge: "Top Rated",
        img: "https://images.unsplash.com/photo-1789776056309-e8d004c7dbd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        type: "tall"
      },
      {
        id: "p1-2",
        title: "Blackout Sound Stage",
        subtitle: "Grid Height 18ft • Silent AC",
        badge: "Cinema Ready",
        img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
        type: "medium"
      },
      {
        id: "p1-3",
        title: "Daylight Loft Studio",
        subtitle: "South-Facing Windows • Vintage Prop Set",
        badge: "Natural Light",
        img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800",
        type: "medium"
      }
    ]
  },
  {
    id: "slide-2",
    tag: "Audio & Music Suites",
    badgeIcon: Mic,
    headline: "Reserve Acoustic Podcast Lounges & Recording Suites",
    subtext:
      "Engineered for audio perfection. Inspect real-time availability for isolated vocal booths, Dolby Atmos mixing rooms, and multi-cam podcast lounges.",
    primaryCtaText: "Explore Audio Suites",
    primaryCtaLink: "/studios?category=audio-music",
    secondaryCtaText: "Host Your Space",
    secondaryCtaLink: "/studios/host",
    stats: { primary: "99.8%", label: "Host Availability Accuracy" },
    bgImage:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000",
    previewGrid: [
      {
        id: "p2-1",
        title: "Broadcaster Podcast Lounge",
        subtitle: "Shure SM7B Setup • 4-Person Console",
        badge: "4-Cam Ready",
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
        type: "tall"
      },
      {
        id: "p2-2",
        title: "Analog Recording Suite",
        subtitle: "Neve Console • Vocal Isolation Booth",
        badge: "Acoustic Treated",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
        type: "medium"
      },
      {
        id: "p2-3",
        title: "Mastering & Control Room",
        subtitle: "Genelec Monitors • Custom Bass Traps",
        badge: "Dolby Atmos",
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
        type: "medium"
      }
    ]
  },
  {
    id: "slide-3",
    tag: "Art & Production Hubs",
    badgeIcon: Palette,
    headline: "Discover Inspiring Art Workshops & Creative Spaces",
    subtext:
      "From ceramics and fashion design ateliers to immersive art gallery installations. Book flexible studio slots with transparent pricing and instant confirmations.",
    primaryCtaText: "Explore All Studios",
    primaryCtaLink: "/studios?category=art-workshop",
    secondaryCtaText: "Host Your Space",
    secondaryCtaLink: "/studios/host",
    stats: { primary: "4.95 ★", label: "Average Creator Rating" },
    bgImage:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=2000",
    previewGrid: [
      {
        id: "p3-1",
        title: "Open-Plan Art Atelier",
        subtitle: "Industrial Windows • High Ceiling Easels",
        badge: "Flex Space",
        img: "https://images.unsplash.com/photo-1769974672311-bf0cee23b894?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        type: "tall"
      },
      {
        id: "p3-2",
        title: "Sculpture & Craft Workshop",
        subtitle: "Heavy Duty Workbenches • Power Hookups",
        badge: "Maker Hub",
        img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
        type: "medium"
      },
      {
        id: "p3-3",
        title: "Fashion & Textile Loft",
        subtitle: "Pattern Tables • Mannequins Included",
        badge: "Design Lab",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        type: "medium"
      }
    ]
  }
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const SLIDE_DURATION = 6000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, SLIDE_DURATION);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const activeSlideData = SLIDES[currentSlide];
  const BadgeIcon = activeSlideData.badgeIcon;

  return (
    <section 
      className="relative w-full bg-white text-slate-900 overflow-hidden py-12 lg:py-20 select-none border-b border-slate-100"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Background Ambient */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <Image
          src={activeSlideData.bgImage}
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover filter blur-3xl scale-105"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
        
        {/* TOP HEADER & NAVIGATION BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          
          {/* Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium tracking-wide">
              <BadgeIcon className="w-4 h-4 text-slate-700" />
              {activeSlideData.tag}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" /> Verified Host Marketplace
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="text-xs font-mono font-medium text-slate-500">
              <span className="text-slate-900 font-bold">0{currentSlide + 1}</span> / 0{SLIDES.length}
            </div>

            <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-200">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-6 bg-slate-900" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}

            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-700 border border-slate-200 transition-all"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-slate-50 hover:bg-slate-900 hover:text-white text-slate-700 border border-slate-200 transition-all"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-600 uppercase bg-slate-100 px-3 py-1 rounded-md w-fit">
              <Sparkles className="w-3.5 h-3.5" /> Peer-To-Peer Booking Platform
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {activeSlideData.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {activeSlideData.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={activeSlideData.primaryCtaLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                {activeSlideData.primaryCtaText}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={activeSlideData.secondaryCtaLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-300 transition-all"
              >
                {activeSlideData.secondaryCtaText}
              </Link>
            </div>

            {/* Metrics */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {activeSlideData.stats.primary}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {activeSlideData.stats.label}
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="relative inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Avatar" fill sizes="28px" className="object-cover" />
                  </div>
                  <div className="relative inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Avatar" fill sizes="28px" className="object-cover" />
                  </div>
                  <div className="relative inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Avatar" fill sizes="28px" className="object-cover" />
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  <span className="text-slate-800 font-semibold block">Trusted by Creators</span>
                  Filmmakers, Photographers & Podcasters
                </div>
              </div>
            </div>

          </div>

          {/* Right Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3 items-end">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <div className="relative group h-65 sm:h-75 rounded-[28px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  src={activeSlideData.previewGrid[0].img}
                  alt={activeSlideData.previewGrid[0].title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  {activeSlideData.previewGrid[0].badge}
                </div>
                <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4 transition-opacity">
                  <h3 className="text-white font-semibold text-sm">
                    {activeSlideData.previewGrid[0].title}
                  </h3>
                  <p className="text-slate-200 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {activeSlideData.previewGrid[0].subtitle}
                  </p>
                </div>
              </div>

              <div className="h-32.5 rounded-[28px] bg-slate-100 border border-slate-200 p-4 flex flex-col justify-between">
                <ShieldCheck className="w-5 h-5 text-slate-700" />
                <div>
                  <div className="text-base font-bold text-slate-900">Instant Booking</div>
                  <p className="text-slate-500 text-xs mt-0.5">Transparent hourly rates.</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 sm:-translate-y-5">
              <div className="relative group h-47.5 sm:h-52.5 rounded-[28px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  src={activeSlideData.previewGrid[1].img}
                  alt={activeSlideData.previewGrid[1].title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  {activeSlideData.previewGrid[1].badge}
                </div>
                <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-3.5 transition-opacity">
                  <h3 className="text-white font-semibold text-xs">
                    {activeSlideData.previewGrid[1].title}
                  </h3>
                  <p className="text-slate-200 text-[11px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {activeSlideData.previewGrid[1].subtitle}
                  </p>
                </div>
              </div>

              <div className="relative group h-45 sm:h-50 rounded-[28px] overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <Image
                  src={activeSlideData.previewGrid[2].img}
                  alt={activeSlideData.previewGrid[2].title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                />
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-slate-200">
                  {activeSlideData.previewGrid[2].badge}
                </div>
                <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-3.5 transition-opacity">
                  <h3 className="text-white font-semibold text-xs">
                    {activeSlideData.previewGrid[2].title}
                  </h3>
                  <p className="text-slate-200 text-[11px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {activeSlideData.previewGrid[2].subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
              <div className="h-52.5 sm:h-60 rounded-[28px] bg-slate-900 text-white p-4 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-white">
                    <Star className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded-full">
                    Host
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">List Your Space</h4>
                  <p className="text-slate-400 text-xs mt-1">Turn your studio downtime into revenue.</p>
                  <Link
                    href="/studios/host"
                    className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-medium text-xs transition-colors"
                  >
                    Become a Host
                  </Link>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-slate-900 transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}