"use client";

import { useEffect, useState } from "react";
import VariantA from "./x-components/VariantA";
import VariantB from "./x-components/VariantB";

const Page = () => {
  const [variant, setVariant] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    // Randomly assign "A" or "B" when the page loads
    const randomVariant = Math.random() < 0.5 ? "A" : "B";
    setVariant(randomVariant);
  }, []);

  return (
    <main className="h-screen flex justify-center items-center bg-gray-100">
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === null && <div>Loading...</div>}
    </main>
  );
};

export default Page;
