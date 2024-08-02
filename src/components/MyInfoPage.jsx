// ini component info dari manager yang login

import { useContext, useEffect, useState } from "react";

import DashboardElement from "./elements/DashboardElement";

import HeaderElement from "./elements/HeaderElement";
import { Loader2, UserRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function MyInfoPage() {
  const { user } = useContext(UserContext); // ini buat ngambil user yang lagi login
  const [data, setData] = useState(null);

  // function buat nge handle fetch nama dari user yang lagi login
  const handleProfilePage = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/manager/${user.name}`
      );
      console.log(response.data);
      setData(response.data.name);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleProfilePage();
  });

  return (
    <div className="bg-background h-screen w-screen flex">
      <DashboardElement />
      <div className="flex flex-col w-screen">
        <HeaderElement />
        <div className="flex justify-center items-center w-full h-full">
          <Card className="m-10 w-96 bg-gradient-to-b from-card to-secondary">
            <CardHeader className="items-center justify-center">
              <Avatar className="h-24 w-24 border-2 border-primary">
                <AvatarFallback>
                <UserRound size={60}/>
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">My Information</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              {data ? (
                <Input
                  readOnly
                  className="text-center bg-card font-semibold text-xl"
                  value={data}
                ></Input>
              ) : (
                <Loader2 className="animate-spin " />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
