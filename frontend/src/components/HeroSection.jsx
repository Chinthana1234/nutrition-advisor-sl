import { useState, useEffect } from 'react';
import { heroMetrics } from '../data/uiData.js';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1920&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-2xl flex flex-col justify-center">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'w-6 sm:w-8 bg-emerald-400'
                : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    <div className="relative z-10 mx-auto max-w-6xl w-full grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[3fr,2fr] px-2 sm:px-4">
      <div>
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-300 font-medium">Sri Lankan AI</p>
        <h1 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
          Scan your meal, get smart nutrition guidance built for our plates.
        </h1>
        <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-100 font-medium">
          From red rice to kottu, the Nutrition Advisor coach understands your staples,
          balances macros, and keeps sugar in check.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            className="w-full sm:w-auto rounded-full bg-emerald-500 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-xl active:bg-emerald-700"
          >
            Start free analysis
          </button>
          <button
            type="button"
            className="w-full sm:w-auto rounded-full border-2 border-emerald-400 bg-emerald-400/10 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-emerald-100 transition-all hover:bg-emerald-400/20 hover:border-emerald-300 hover:text-white active:bg-emerald-400/30"
          >
            Watch demo
          </button>
        </div>
      </div>

      <div className="relative flex flex-col gap-3 sm:gap-4 rounded-2xl sm:rounded-[28px] bg-white/10 p-4 sm:p-6 shadow-inner backdrop-blur mt-4 lg:mt-0">
        <div className="rounded-xl sm:rounded-2xl bg-white/15 p-3 sm:p-4 shadow hover:bg-white/20 transition-colors cursor-pointer">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-300 font-medium">
            Today's smart tip
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold text-white">
            Pair tonight's rice with gotukola sambol to lower the sugar spike.
          </p>
        </div>
        <div className="rounded-xl sm:rounded-2xl bg-white/15 p-3 sm:p-4 shadow hover:bg-white/20 transition-colors cursor-pointer">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-300 font-medium">Coach reply</p>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-100">
            "Your hydration is 0.3L behind. Sip king coconut or plain water before 4PM."
          </p>
        </div>
        <div className="rounded-xl sm:rounded-2xl bg-white/15 p-3 sm:p-4 shadow hover:bg-white/20 transition-colors cursor-pointer">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-300 font-medium">Live balance</p>
          <div className="mt-3 sm:mt-4 flex items-end gap-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">1,520</span>
            <span className="text-xs sm:text-sm text-slate-200">/ 2,050 kcal</span>
          </div>
          <div className="mt-3 sm:mt-4 h-2 rounded-full bg-white/20">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 mx-auto max-w-6xl mt-6 sm:mt-8 md:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4">
      {heroMetrics.map(metric => (
        <div
          key={metric.label}
          className="rounded-xl sm:rounded-2xl border border-emerald-400/30 bg-white/10 p-3 sm:p-4 backdrop-blur hover:bg-white/15 hover:border-emerald-400/50 transition-all cursor-pointer"
        >
          <p className="text-base sm:text-lg font-bold text-white">{metric.value}</p>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-300 font-medium">{metric.label}</p>
          <p className="text-[10px] sm:text-xs text-slate-200">{metric.detail}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default HeroSection;

