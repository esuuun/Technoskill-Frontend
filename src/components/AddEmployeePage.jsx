// ini component buat add employee

import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import axios from "axios";
import HeaderElement from "./elements/HeaderElement";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { motion } from "framer-motion";

export default function AddEmployeePage() {
  const { toast } = useToast(); // ini dipake buat component toast 

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");
  const [salary, setSalary] = useState(null);


  // function buat nge handle add employee
  const handleAddEmployee = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/employee/add`, {
        name: name,
        gender: gender,
        division: division,
        salary: salary,
      });

      if (response.status !== 201) throw new Error("Add employee failed");
      toast({
        title: "Employee Added Successfully!",
        description: "You can now view the employee details on the home screen.",
        action: <ToastAction altText="Go to home page"><a href="/home">Go to home page</a></ToastAction>,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
   
    <div className="bg-background h-full w-full flex">
      <DashboardElement />
      <div className="flex flex-col w-screen">
        <HeaderElement />

        <motion.div animate={{ opacity: 10, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, type: "spring" }} className="flex justify-center items-center h-full w-full">
          <Card className="m-10 w-96">
            <CardHeader className="justify-left items-left">
              <CardTitle className="text-3xl">Add New Employee</CardTitle>
              <CardDescription>
                Enter the employee details below
              </CardDescription>
            </CardHeader>
            <CardContent className="grid-gap-4">
              <div className="grid-gap-2 pb-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Employee Name"
                />
              </div>
              <div className="grid-gap-2 pb-4">
                <Label htmlFor="Gender">Gender</Label>
                <Select onValueChange={(value) => setGender(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid-gap-2 pb-4">
                <Label htmlFor="Division">Division</Label>
                <Input
                  id="Division"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  placeholder="Front End"
                />
              </div>
              <div className="grid-gap-2 pb-4">
                <Label htmlFor="Salary">Salary</Label>
                <Input
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  attributes="none"
                  placeholder="10000000"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="items-center justify-center">
              <Button className="w-full" onClick={handleAddEmployee}>
                Add
              </Button>
            </CardFooter>
          </Card>
          </motion.div>
      </div>
      </div>
  );
}
