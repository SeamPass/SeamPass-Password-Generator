"use client";

declare global {
  interface Window {
    gtag: (command: "event", action: string, parameters: Record<string, unknown>) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (action: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, parameters);
    }
  };

  const trackPasswordGeneration = (type: "random" | "memorable") => {
    trackEvent("password_generated", {
      password_type: type,
      event_category: "password_generator",
    });
  };

  const trackPasswordCopy = () => {
    trackEvent("password_copied", {
      event_category: "password_generator",
    });
  };

  const trackPasswordStrength = (strength: string) => {
    trackEvent("password_strength_analyzed", {
      strength_level: strength,
      event_category: "password_generator",
    });
  };

  return {
    trackEvent,
    trackPasswordGeneration,
    trackPasswordCopy,
    trackPasswordStrength,
  };
};
