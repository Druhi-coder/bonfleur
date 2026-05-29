import { MessageCircle } from "lucide-react";

const WA_NUMBER = "919460826353";

export function whatsappLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppButton({
  message = "Hi Bonfleur! I'd like to know more about your plants.",
  children,
  variant = "solid",
  className = "",
}: {
  message?: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5";
  const styles = {
    solid:
      "bg-[var(--color-leaf-deep)] text-[var(--color-cream)] hover:bg-[var(--color-leaf)] shadow-[0_8px_24px_-12px_oklch(0.3_0.07_150/0.5)]",
    outline:
      "border border-[var(--color-leaf-deep)] text-[var(--color-leaf-deep)] hover:bg-[var(--color-leaf-deep)] hover:text-[var(--color-cream)]",
    ghost:
      "text-[var(--color-leaf-deep)] hover:text-[var(--color-blossom)]",
  }[variant];

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children ?? "Order on WhatsApp"}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hi Bonfleur! I'd like to order a plant.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-leaf-deep)] text-[var(--color-cream)] shadow-lg transition-all hover:scale-110 hover:bg-[var(--color-blossom)]"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
