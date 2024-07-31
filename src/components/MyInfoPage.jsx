import { useState } from "react";

import DashboardElement from "./elements/DashboardElement";

import employeeIcon from "../assets/employee.svg";
import HeaderElement from "./elements/HeaderElement";
import { Button } from "./ui/button";
import { SquareUserRound, UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useLocation } from "react-router-dom";

export default function MyInfoPage() {
  const location = useLocation()
  const { userData } = location.state || {};
  // const [name, setName] = useState(userData.name);
  console.log(userData)
  return (
    <div className="bg-background h-screen w-screen flex">
      <DashboardElement />
      <UserRound/>
      <div className="flex flex-col w-screen">
        <HeaderElement/>
      <div className="flex justify-center items-center w-full h-full">
        <Card className="m-10 w-96">
          <CardHeader className="items-center justify-center">
            <SquareUserRound className="w-64 h-64"/>
            <CardTitle className="text-2xl">My Information</CardTitle>
          </CardHeader>
          <CardContent>
              <p className="">{userData[0].name}</p>
          </CardContent>
        </Card>
      </div>

      
      <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white">
        <img src={employeeIcon} className="w-[240px] mx-auto mt-24" />

        <p className="text-[30px] mx-auto mt-20">My Info</p>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
