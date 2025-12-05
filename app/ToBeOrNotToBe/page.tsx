"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

const targetDate = new Date("2026-01-16T20:00:00");

interface TimeLeft {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const now = Date.now();
  const total = targetDate.getTime() - now;

  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
};

interface Milestone {
  emoji: string;
  message: string;
  color: string;
}

const getMilestone = (days: number): Milestone | null => {
  if (days <= 1) {
    return {
      emoji: "🔥",
      message: "Less than 24 hours! The ovens are heating!",
      color: "text-red-400",
    };
  } else if (days <= 7) {
    return {
      emoji: "⚡",
      message: "Final week! Prepare your sacred tools!",
      color: "text-orange-400",
    };
  } else if (days <= 14) {
    return {
      emoji: "⏰",
      message: "Two weeks remaining! Sharpen your skills!",
      color: "text-yellow-400",
    };
  } else if (days <= 30) {
    return {
      emoji: "📅",
      message: "Only 30 days left! Time flies like flour!",
      color: "text-boulange-gold",
    };
  } else if (days <= 60) {
    return {
      emoji: "🌟",
      message: "Two months to go! The dough is rising!",
      color: "text-blue-400",
    };
  } else if (days <= 100) {
    return {
      emoji: "🎯",
      message: "Under 100 days! The countdown intensifies!",
      color: "text-purple-400",
    };
  }
  return null;
};

export default function GamePage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!mounted) {
    return null;
  }

  const hasLaunched = timeLeft.total === 0;
  const milestone = getMilestone(timeLeft.days);

  return (
    <main className="mt-20 flex items-center justify-center px-4 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col justify-center gap-8 md:gap-12">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-medieval text-boulange-gold">
            Le Grand Compte à Rebours
          </h1>
          <p className="text-sm md:text-base text-white/70">
            Countdown to the official CTF launch
          </p>
        </header>

        {milestone && !hasLaunched && (
          <div className="mx-auto max-w-2xl animate-pulse">
            <div className="rounded-xl border border-boulange-gold/30 bg-gradient-to-r from-boulange-gold/10 via-boulange-gold/5 to-boulange-gold/10 backdrop-blur px-4 py-2.5">
              <p className={`text-sm md:text-lg font-medium ${milestone.color} flex items-center justify-center gap-2`}>
                <span className="text-xl">{milestone.emoji}</span>
                <span>{milestone.message}</span>
              </p>
            </div>
          </div>
        )}

        {hasLaunched ? (
          <div className="rounded-2xl border border-boulange-gold/40 bg-boulange-gold/10 backdrop-blur p-8 md:p-12">
            <p className="text-2xl md:text-4xl font-medieval text-boulange-gold animate-pulse">
              🎉 The CTF has officially launched! 🎉
            </p>
            <p className="mt-4 text-base md:text-lg text-white/80">
              Bonne chance, boulanger(e)s! May the sacred sourdough be with you.
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            role="timer"
            aria-live="polite"
            aria-label="Countdown timer"
          >
            {[
              { label: "Days", value: timeLeft.days, ariaLabel: `${timeLeft.days} days` },
              { label: "Hours", value: timeLeft.hours, ariaLabel: `${timeLeft.hours} hours` },
              { label: "Minutes", value: timeLeft.minutes, ariaLabel: `${timeLeft.minutes} minutes` },
              { label: "Seconds", value: timeLeft.seconds, ariaLabel: `${timeLeft.seconds} seconds` },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-boulange-gold/40 bg-black/40 backdrop-blur p-4 md:p-6 transition-all duration-300 hover:border-boulange-gold hover:bg-boulange-gold/5"
                aria-label={item.ariaLabel}
              >
                <span className="text-4xl md:text-6xl font-bold text-boulange-gold tabular-nums transition-all duration-500">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <footer>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Le projet-gizmo disparaîtra
          </p>
        </footer>
      </div>
    </main>
  );
}
