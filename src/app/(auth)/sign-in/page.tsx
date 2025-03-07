import Link from "next/link";

import { UserAuthForm } from "./_components/UserAuthForm";

export default function SignIn2() {
  return (
    <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Ms & M Consulting
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-left mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">Bienvenido</h1>
            <p className="text-sm text-muted-foreground">
              Ingrese su correo electrónico y contraseña a continuación para iniciar sesión en su cuenta
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            ¿No puedes iniciar sesión?{" "}
            <Link href="/" className="underline underline-offset-4 hover:text-primary font-semibold">
              Contáctanos
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
