import {
  Home,
  UsersRound,
  UserRound,
  UserRoundPlus,
  Menu,
  LogOut,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

export default function MobileElement() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(UserContext);
  const [dialogOpen, setDialogOpen] = useState(false);

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
      path: "/profile ",
    },
  ];

  const handleLogoutClose = () => {
    setDialogOpen(false)
  }

  const handleLogoutConfirm = () => {
    logout()
    navigate('/')
  }

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
            <a href="/" className="text-xl font-bold text-foreground">
              Team<span className="text-primary">Trackr</span>{" "}
            </a>
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
          <div className="bg-secondary w-full h-px"></div>

          <span
            className={`mt-2 mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground cursor-pointer`}
            onClick={() => {
              setDialogOpen(true)
            }}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </span>
        </nav>
      </SheetContent>

      <AlertDialog open={dialogOpen} onOpenChange={handleLogoutClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to Logout?</AlertDialogTitle>
            <AlertDialogDescription>
            Logging out will end your current session. You will be logged out from your account and need to log in again to access your account. Are you sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleLogoutClose} className="ring-0">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleLogoutConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </Sheet>
  );
}
