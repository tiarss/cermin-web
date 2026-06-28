import Link from "next/link";
import { AuthShell } from "../modules/AuthShell";
import { LoginForm } from "../modules/LoginForm";

export function LoginView() {
  return (
    <AuthShell
      footer={
        <>
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="font-semibold text-warm-accent transition-colors hover:text-warm-ink"
          >
            Daftar di Cermin
          </Link>
        </>
      }
      intro="Selamat kembali"
      title="Masuk ke ruangmu."
    >
      <LoginForm />
    </AuthShell>
  );
}
