import { useState } from "react";

import DashboardElement from "./elements/DashboardElement";

import employeeIcon from "../assets/employee.svg";
import HeaderElement from "./elements/HeaderElement";
import { Button } from "./ui/button";
import { SquareUserRound, UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function MyInfoPage() {
  const [name, setName] = useState("");
  return (
    <div className="bg-background h-screen w-screen flex">
      <DashboardElement />
      <div className="flex flex-col w-screen">
        <HeaderElement/>
      <div className="flex justify-center items-center w-full h-full">
        <Card className="m-10 w-96">
          <CardHeader className="items-center justify-center">
            <SquareUserRound className="w-64 h-64"/>
            <CardTitle className="text-2xl">My Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">Name</p>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
