import LoginForm from "@/components/my-component/auth/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-sky-300/50 to-sky-100/10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-sky-800">Hallaw App</h1>
        <h2 className="text-xl text-gray-700">Login to your account</h2>
      </div>
      <div className="bg-white p-8 shadow-2xl rounded-2xl mx-[5em]">
        <LoginForm />
      </div>
      <p className="mt-4 text-gray-500">
        Don’t have an account?{" "}
        <a href="#" className="text-sky-500 hover:text-sky-600">
          Sign up
        </a>
      </p>
    </main>
  );
}
