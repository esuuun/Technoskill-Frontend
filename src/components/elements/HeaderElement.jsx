import { User2 } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileElement from "./MobileElement";
import { ModeToggle } from "./ModeToggle";

function HeaderElement() {
  return (
    <div className="flex md:justify-end justify-between mx-10 items-center h-fit pt-5 ">
          <MobileElement/>
      <div className="flex gap-3 md:gap-6">
        <ModeToggle/>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
    </div>
  );
}

export default HeaderElement;
