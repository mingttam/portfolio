"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  animate = false,
  delay = 0,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  animate?: boolean;
  delay?: number;
}) {
  const [currentValue, setCurrentValue] = React.useState(animate ? 0 : value);

  React.useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setCurrentValue(value);
      }, delay * 1000 + 100);

      return () => clearTimeout(timeout);
    }
  }, [animate, value, delay]);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1",
          animate ? "transition-all duration-1000 ease-out" : "transition-all"
        )}
        style={{ transform: `translateX(-${100 - (currentValue || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
