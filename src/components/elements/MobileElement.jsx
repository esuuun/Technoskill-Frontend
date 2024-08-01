import {
  Home,
  UsersRound,
  UserRound,
  UserRoundPlus,
  LogIn,
  Menu,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileElement() {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <span href="/" className="flex items-center gap-2 font-semibold mb-3">
            <UsersRound className="text-foreground" />
            <a href="/" className="text-xl font-bold text-foreground">Team<span className="text-primary">Trackr</span> </a>
          </span>
          {MenuList.map((menu, index) => {
            const isActive = location.pathname === menu.path;

            return (
              <span
                key={index}
                href={menu.path}
                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer ${
                  isActive && "bg-muted text-primary"
                }`}
                onClick={() => navigate(menu.path)}
              >
                <menu.Icon className="h-5 w-5" />
                {menu.name}
              </span>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
