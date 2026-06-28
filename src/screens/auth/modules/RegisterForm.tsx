import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { AuthDivider } from "./AuthDivider";
import { OAuthButtons } from "./OAuthButtons";

export function RegisterForm() {
  return (
    <div className="mt-8 space-y-6">
      <p className="leading-7 text-warm-ink/65">
        Buat ruang pribadi untuk mulai menulis, menerima pantulan lembut, dan
        menyimpan jejak emosi dari waktu ke waktu.
      </p>

      <form className="space-y-5">
        <TextField id="register-name" label="Nama" placeholder="Nama kamu" />
        <TextField
          id="register-email"
          label="Email"
          placeholder="nama@email.com"
          type="email"
        />
        <TextField
          helperText="Gunakan minimal 8 karakter saat logic auth sudah diaktifkan."
          id="register-password"
          label="Password"
          placeholder="Buat password"
          type="password"
        />

        <Button>Buat akun</Button>
      </form>

      <AuthDivider />
      <OAuthButtons />
    </div>
  );
}
