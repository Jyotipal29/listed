"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ApplesIcon, GooglesIcon } from "./component/Buttons";
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

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="flex h-screen ">
      <section className=" hidden  bg-black w-[588px] md:flex justify-center items-center   ">
        <h1 className=" font-bold text-7xl text-white ">Board.</h1>
      </section>
      <section className=" bg-[#F5F5F5]  w-full px-5 flex flex-col justify-center   ">
        <div className=" flex-none  md:flex justify-center items-center ">
          <div className=" space-y-6">
            <div className="">
              <h2 className=" text-black font-bold text-4xl ">Sign In</h2>
              <p className="  leading-5 mt-[5px]  ">Sign in to your account</p>
            </div>
            <div className=" text-[#858585]  text-xs flex flex-col md:flex-row md:justify-between items-center w-full md:space-x-5 space-y-5 md:space-y-0 ">
              <button
                onClick={() => signIn("google")}
                className=" py-2 bg-white px-5 rounded-[10px] flex justify-center items-center space-x-[10px] w-full   "
              >
                <GooglesIcon />
                <span className=" block ">Sign in with Google</span>
              </button>
              <button className=" py-2 bg-white px-5 rounded-[10px] flex justify-center items-center space-x-[10px] w-full ">
                <ApplesIcon />
                <span className=" block ">Sign in with Apple</span>
              </button>
            </div>
            <div className=" bg-white  md:w-[385px] p-[30px]  rounded-[20px]  ">
              <form action="" className=" space-y-5 " onSubmit={handleSubmit}>
                <span className=" text-red-500">{error}</span>
                <div className="flex flex-col space-y-[10px] ">
                  <label htmlFor="email" className=" text-black">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    className=" bg-[#F5F5F5]  py-[10px] rounded-[10px] px-4  "
                    placeholder="jyoti@gmail.com"
                    defaultValue="jyoti@gmail.com"
                  />
                </div>
                <div className="flex flex-col space-y-[10px] ">
                  <label htmlFor="password" className="  text-black ">
                    Password
                  </label>
                  <input
                    type="password "
                    className=" bg-[#F5F5F5] py-[10px] rounded-[10px] px-4 "
                    name="password"
                    defaultValue="jyoti"
                  />
                </div>

                <button className="text-[#346BD4] block ">
                  Forgot password?
                </button>
                <button
                  type="submit"
                  className=" bg-black text-white  font-bold text-center py-[10px] w-full rounded-[10px] hover:bg-black/80  "
                >
                  Sign In
                </button>
              </form>
            </div>

            <p className=" text-[#858585] text-center w-full ">
              {" "}
              Don’t have an account?{" "}
              <button className=" text-[#346BD4] "> Register here </button>{" "}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
