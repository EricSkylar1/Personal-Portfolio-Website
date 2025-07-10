"use client";

import React, { useEffect, useState } from "react";

interface LoadingOverlayProps {
  visible: boolean;
}

export default function LoadingOverlay({ visible }: LoadingOverlayProps) {
  const [showPointerEvents, setShowPointerEvents] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowPointerEvents(true);
    } else {
      // Wait for 2500ms (fade duration) before disabling pointer events
      const timeout = setTimeout(() => setShowPointerEvents(false), 2500);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-opacity-90 transition-opacity duration-[1500ms] ${
        visible ? "opacity-100" : "opacity-0"
      } ${showPointerEvents ? "" : "pointer-events-none"}`}
      aria-live="polite"
      aria-busy={visible}
      role="alert"
    >
      {/* Spinner */}
      <div className="w-24 h-24 border-4 border-t-red-900 border-red-400 rounded-full animate-spin mb-6 shadow-[0_0_20px_rgba(220,38,38,0.7)]"></div>

      {/* Loading Text */}
      <div className="text-red-400 text-xl tracking-wide select-none">
        Loading...
      </div>
    </div>
  );
}
