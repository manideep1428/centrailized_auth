import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  provider: "google" | "github";
  onClick: () => void;
  children?: React.ReactNode;
}

export function SocialButton({
  provider,
  onClick,
  children,
}: SocialButtonProps) {
  if (provider === "google") {
    return (
      <Button variant="outline" className="w-full" onClick={onClick}>
        {children}
      </Button>
    );
  }

  return (
    <Button variant="outline" className="w-full" onClick={onClick}>
      {children}
    </Button>
  );
}
