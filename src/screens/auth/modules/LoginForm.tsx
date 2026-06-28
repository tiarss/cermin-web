import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { AuthDivider } from "./AuthDivider";
import { OAuthButtons } from "./OAuthButtons";

export function LoginForm() {
  return (
    <div className="mt-8 space-y-6">
      <p className="leading-7 text-warm-ink/65">
        Masuk untuk melanjutkan jurnal, melihat arsip refleksi, dan menjaga
        percakapan dengan diri sendiri tetap tersimpan.
      </p>

      <form className="space-y-5">
        <TextField
          id="login-email"
          label="Email"
          placeholder="nama@email.com"
          type="email"
        />
        <TextField
          id="login-password"
          label="Password"
          placeholder="Masukkan password"
          type="password"
        />

        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm font-semibold text-warm-accent transition-colors hover:text-warm-ink"
          >
            Lupa password?
          </a>
        </div>

        <Button>Masuk ke Cermin</Button>
      </form>

      <AuthDivider />
      <OAuthButtons />
    </div>
  );
}
