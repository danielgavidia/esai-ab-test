"use client";

import { useEffect, useState } from "react";
import LandingPage from "./x-components/LandingPage";

const Page = () => {
  const [variant, setVariant] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    // Randomly assign "A" or "B" when the page loads
    const randomVariant = Math.random() < 0.5 ? "A" : "B";
    setVariant(randomVariant);
  }, []);

  return (
    <main className="h-screen flex justify-center">
      {variant && <LandingPage variant={variant} />}
    </main>
  );
};

export default Page;
