"use client"; // Mark this as a Client Component

import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation"; // Correct hook for Next.js 13+ App Router

function Hero() {
  const { isSignedIn } = useUser();  // Get the user's authentication status
  const router = useRouter();        // To programmatically navigate

  const handleGetStarted = () => {
    if (isSignedIn) {
      // If the user is signed in, navigate to the dashboard
      router.push("/dashboard");
    } else {
      // If the user is not signed in, navigate to the signup page
      router.push("/sign-up");
    }
  };

  return (
    <section className="bg-blue-200">
      <div className="mx-auto max-w-screen-xl px-4 py-10 flex h-screen items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Prepare Yourself
            <strong className="font-extrabold text-indigo-500 sm:block">
              For Interviews
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
          The More you prepare, the less mistake you make
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block w-full rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
