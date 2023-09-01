"use client";
import Link from "next/link";
// import { GoogleIcon, AppleIcon } from "@/util/icons"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [error, setError] = useState(false);

  const session = useSession();
  const router = useRouter();
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Perform form validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 5) {
      setError("Password should be minimum length of 5.");
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const signInResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!signInResponse && !signInResponse.error) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex h-screen ">
      {/* Left Side */}
      <section className=" hidden  bg-black w-[588px] md:flex justify-center items-center   ">
        <h1 className=" font-bold text-7xl text-white ">Board.</h1>
      </section>
      {/* Right Side */}
      <section className=" bg-[#F5F5F5]  w-full px-5 flex flex-col justify-center   ">
        <div className=" flex-none  md:flex justify-center items-center ">
          <div className=" space-y-6">
            <div className="">
              <h2 className=" text-black font-bold text-4xl ">Sign In</h2>
              <p className=" font-lato leading-5 mt-[5px]  ">
                Sign in to your account
              </p>
            </div>
            <div className=" text-[#858585] font-montserrat text-xs flex flex-col md:flex-row md:justify-between items-center w-full md:space-x-5 space-y-5 md:space-y-0 ">
              <button
                onClick={() => signIn("google")}
                className=" py-2 bg-white px-5 rounded-[10px] flex justify-center items-center space-x-[10px] w-full   "
              >
                {/* <GoogleIcon /> */}
                <span className=" block ">Sign in with Google</span>
              </button>
              <button className=" py-2 bg-white px-5 rounded-[10px] flex justify-center items-center space-x-[10px] w-full ">
                {/* <AppleIcon className="  " /> */}
                <span className=" block ">Sign in with Apple</span>
              </button>
            </div>
            <div className=" bg-white  md:w-[385px] p-[30px] font-lato rounded-[20px]  ">
              <form action="" className=" space-y-5 " onSubmit={handleSubmit}>
                <span className=" text-red-500">{error}</span>
                <div className="flex flex-col space-y-[10px] ">
                  <label htmlFor="email" className="font-lato text-black">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    className=" bg-[#F5F5F5]  py-[10px] rounded-[10px] px-4  "
                    placeholder="johndoe@gmail.com"
                    defaultValue="johndoe@gmail.com"
                  />
                </div>
                <div className="flex flex-col space-y-[10px] ">
                  <label htmlFor="password" className=" font-lato text-black ">
                    Password
                  </label>
                  <input
                    type="password "
                    className=" bg-[#F5F5F5] py-[10px] rounded-[10px] px-4 "
                    placeholder="••••••••"
                    name="password"
                    defaultValue="admin"
                  />
                </div>

                <Link href="#" className="text-[#346BD4] block ">
                  Forgot password?
                </Link>
                <button
                  type="submit"
                  className=" bg-black text-white font-montserrat font-bold text-center py-[10px] w-full rounded-[10px] hover:bg-black/80  "
                >
                  Sign In
                </button>
              </form>
            </div>

            <p className=" text-[#858585] text-center w-full ">
              {" "}
              Don’t have an account?{" "}
              <Link href="#" className=" text-[#346BD4] ">
                {" "}
                Register here{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
