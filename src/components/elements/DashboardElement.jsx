import {
  Home,
  UsersRound,
  UserRound,
  UserRoundPlus,
  LogIn,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import HeaderElement from "./HeaderElement";

export default function DashboardElement() {
  const navigate = useNavigate();
  const location = useLocation();

  const MenuList = [
    {
      name: "Home",
      Icon: Home,
      path: "/home",
    },
    {
      name: "Add Employee",
      Icon: UserRoundPlus,
      path: "/add-employee",
    },
    {
      name: "Profile",
      Icon: UserRound,
      path: "/profile",
    },
    {
      name: "Login",
      Icon: LogIn,
      path: "/login",
    },
  ];

  return (
      
      <aside className="hidden border-r bg-muted/40 md:block w-72">
        <div className="flex h-screen max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div href="/" className="flex items-center gap-2 font-semibold">
              <UsersRound className="text-foreground" />
              <span className="text-xl font-bold text-foreground">Employee</span>
            </div>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {MenuList.map((menu, index) => {
                const isActive = location.pathname === menu.path;

                return (
                  <div
                    key={index}
                    href={menu.path}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer ${
                      isActive && "bg-muted text-primary"
                    }`}
                    onClick={() => navigate(menu.path)}
                  >
                    <menu.Icon className="h-4 w-4" />
                    <span>{menu.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>
          <div className="mt-auto p-4"></div>
        </div>
      </aside>
  );
}
