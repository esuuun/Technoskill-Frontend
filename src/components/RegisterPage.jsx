import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardElement from "./elements/DashboardElement";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import HeaderElement from "./elements/HeaderElement";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:8000/manager/login", {
        name,
        password,
      });
      if (response.status !== 200) throw new Error("Login failed");
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" bg-background h-screen w-screen flex">
      {/* <DashboardElement /> */}
      <div className="flex flex-col w-screen">
        {/* <HeaderElement/> */}
      <div className="flex justify-center items-center w-full h-full">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>
              Enter your username below to register your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                  id="username"
                  type="text"
                  placeholder="berakmantap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
            </div>
          </CardContent>
          <CardFooter className='block text-center'>
              <Button onClick={handleLogin} className="w-full mb-2">Register</Button>
              Dont have an account?
              <a href="/login" className="underline">Login</a>
          </CardFooter>
        </Card>
        </div>
        </div>
    </div>
  );
}
