import { UserContext } from "@/context/UserContext";
import {
  Home,
  UsersRound,
  UserRound,
  UserRoundPlus,
  LogOut,
} from "lucide-react";
import { useContext, useState } from "react";
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

import { useLocation, useNavigate } from "react-router-dom";

export default function DashboardElement() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
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
      path: "/profile",
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
      
      <aside className="hidden border-r bg-muted/40 md:block w-72">
        <div className="flex h-screen max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div href="/" className="flex items-center gap-2 font-semibold">
              <UsersRound className="text-foreground" />
              <a href='/' className="text-xl font-bold text-foreground">Team<span className="text-primary">Trackr</span></a>
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
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground cursor-pointer ${
                      isActive && "bg-muted text-primary"
                    }`}
                    onClick={() => navigate(menu.path)}
                  >
                    <menu.Icon className="h-4 w-4" />
                    <span>{menu.name}</span>
                  </div>
                );
              })}
            <div className="bg-secondary w-full h-px"></div>
            <div
                    className={`mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground cursor-pointer`}
                    onClick={()=>setDialogOpen(true)}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </div>
            </nav>
          </div>
          <div className="mt-auto p-4"></div>
      </div>
      
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

      </aside>
  );
}
