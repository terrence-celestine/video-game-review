import AuthForm from "@/components/AuthForm";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<p className="text-center text-gray-600">Loading…</p>}>
      <AuthForm mode="register" />
    </Suspense>
  );
}
