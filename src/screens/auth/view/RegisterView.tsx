import Link from "next/link";
import { AuthShell } from "../modules/AuthShell";
import { RegisterForm } from "../modules/RegisterForm";

export function RegisterView() {
  return (
    <AuthShell
      footer={
        <>
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="font-semibold text-warm-accent transition-colors hover:text-warm-ink"
          >
            Masuk ke Cermin
          </Link>
        </>
      }
      intro="Mulai mencoba"
      title="Buat ruang menulismu."
    >
      <RegisterForm />
    </AuthShell>
  );
}
