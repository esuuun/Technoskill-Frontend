import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/UserContext";
import { ChevronRightIcon, LayoutDashboard, LogIn, LogOut, UsersRound } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const HeroSection = () => {
  const [state, setState] = useState(false);
  const { user } = useContext(UserContext)
  const { logout} = useContext(UserContext)

  const navigation = [
    { title: "Features", path: "#features" },
    { title: "Our Team", path: "#teams" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="/">
        <div href="/" className="flex items-center gap-2 font-semibold">
          <UsersRound className="text-foreground" />
          <span className="text-xl font-bold text-foreground">
            Team<span className="text-primary">Trackr</span>
          </span>
        </div>
      </a>
      <div className="md:hidden">
        <button className="menu-btn" onClick={() => setState(!state)}>
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header>
          <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={`pb-5 md:text-sm ${
              state
                ? "absolute top-0 inset-x-0 bg-card shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1 justify-center items-center  gap-3 space-y-6 md:flex md:space-x-6 md:space-y-0 mb-6">
                  {navigation.map((item, idx) => {
                    return (
                      <li key={idx} className="">
                        <a href={item.path} className="block text-base hover:text-primary">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {user ?
                  <div className="flex gap-5">
                  <Button className="hover:bg-transparent hover:ring-2 ring-ring">
                  <a href="/home" className="flex gap-2 items-center">
                    Dashboard
                    <LayoutDashboard className="h-4 w-4" />
                  </a>
                    </Button>
                    <Button className="text-foreground bg-transparent ring-1 ring-ring hover:bg-secondary" onClick={() => logout()}>
                  <a href="/" className="flex gap-2 items-center">
                    Logout
                    <LogOut className="h-4 w-4" />
                  </a>
                    </Button>
                  </div>
                  : <Button className="">
                  <a href="/login" className="flex gap-2 items-center">
                    Sign in
                    <LogIn className="h-4 w-4" />
                  </a>
                </Button>}
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className=" max-w-screen-xl mx-auto px-4 py-28 gap-12 overflow-hidden md:px-8 md:flex">
                      <div className="flex flex-col text-center md:text-start justify-center md:flex-none space-y-5 max-w-xl ">
                          <div>
              <a
                href="/"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium w-fit"
              >
                <Badge className="px-3 py-1">Try it now !</Badge>
                <p className="flex items-center">
                  Try TeamTrackr now!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a></div>
              <h1 className="text-4xl  font-extrabold sm:text-5xl ">
                Empower Your Team Management with <span className="underline underline-offset-4 decoration-primary">Team<span className="text-primary">Trackr</span></span>
              </h1>
              <p>
              Easily oversee tasks, track performance, and enhance productivity. TeamTrackr helps you keep your team organized and efficient.
              </p>
              <div className="flex justify-center md:justify-normal items-center gap-x-3 sm:text-sm">
                {user ?<Button >
                  <a href="/home" className="flex items-center gap-3">
                    Get started
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </Button>:
                  <Button >
                  <a href="/login" className="flex items-center gap-3">
                    Get started
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </Button>}
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <img
                src="src\assets\img\dashboardImg.png"
                className="max-w-4xl absolute z-10 rounded-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
