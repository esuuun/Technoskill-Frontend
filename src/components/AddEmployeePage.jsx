import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import axios from 'axios';
import HeaderElement from "./elements/HeaderElement";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Table } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function AddEmployeePage() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:8000/employee/add', {
        name,
        division,
        salary,
      });

      if(response.status !== 201) throw new Error("Add employee failed");

      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-background h-screen w-screen flex">
      <DashboardElement />
      <div className="flex flex-col w-screen">
        <HeaderElement/>
      <div className="flex justify-center items-center h-full w-full">
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
                type="Name"
                placeholder="Employee Name"
              />
            </div>
            <div className="grid-gap-2 pb-4">
              <Label htmlFor="division">Gender</Label>
              <Input
                type="Gender"
                placeholder="Gender"
              />
            </div>
            <div className="grid-gap-2 pb-4">
              <Label htmlFor="division">Division</Label>
              <Input
                type="Division"
                placeholder="Division"
              />
            </div>
            <div className="grid-gap-2 pb-4">
              <Label htmlFor="salary">Salary</Label>
              <Input
                type="Salary"
                placeholder="Salary"
              />
            </div>
          </CardContent>
          <CardFooter className="items-center justify-center">
            <Button className="w-full">Add</Button>  
          </CardFooter> 
        </Card>
      </div>
    </div>
  </div>
  );
}
