import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
import { useToast } from "./ui/use-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();
  const handleLogin = async () => {

    if (!checkConfirmPassword()) {
      console.error("Passwords do not match");
      toast({
        title: "Password do not match",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/manager/register",
        {
          name,
          password,
        }
      );
      if (response.status !== 200) throw new Error("register failed");
      console.log(response.data);
      toast({
        title: "Account registered!",
        description: "Login with your account now!",
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const checkConfirmPassword = () => {
    return password === confirm;
  };

  return (
    <div className=" bg-background h-screen w-screen flex">
      <div className="flex flex-col w-screen">
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
                <Label htmlFor="Confirmpassword">Confirm Password</Label>
                <Input
                  id="Confirmpassword"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="block text-center">
              <Button onClick={handleLogin} className="w-full mb-2">
                Register
              </Button>
              Already have an account?
              <a href="/login" className="underline">
                Login
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
