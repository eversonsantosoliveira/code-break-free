import { CHECKOUT_URL } from "@/lib/checkout";
import { cn } from "@/lib/utils";

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function CheckoutButton({ children, className, ariaLabel }: CheckoutButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-center",
        "text-sm font-extrabold uppercase tracking-wide sm:text-base",
        "bg-gold text-gold-foreground shadow-gold",
        "transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      {children}
    </a>
  );
}
