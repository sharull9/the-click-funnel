import React from "react";
import { cn } from "../lib/utils";

export default function Heading({ children, className, as = "h1" }) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "text-2xl md:text-4xl lg:text-7xl font-bold text-black mb-4",
        className
      )}
    >
      {children}
    </Comp>
  );
}
