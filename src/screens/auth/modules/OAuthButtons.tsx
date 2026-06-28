import { Button } from "@/components/ui/Button";
import { oauthProviders } from "../constants";

export function OAuthButtons() {
  return (
    <div className="grid gap-3">
      {oauthProviders.map((provider) => (
        <Button key={provider.label} variant="oauth">
          <span className="flex size-8 items-center justify-center rounded-full border border-warm-border bg-warm-paper font-serif text-lg font-semibold italic text-warm-ink">
            {provider.mark}
          </span>
          <span>{provider.label}</span>
        </Button>
      ))}
    </div>
  );
}
