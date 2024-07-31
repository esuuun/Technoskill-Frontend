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
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:8000/employee/add', {
        name,
        gender,
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
<<<<<<< HEAD
                <Input
                  id="Name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Employee Name"
=======
              <Input
                type="Name"
                // placeholder="Ulil"
>>>>>>> c0ed7b8a56d8efb5fd33e525e7c836c06ab02e7e
              />
            </div>
            <div className="grid-gap-2 pb-4">
              <Label htmlFor="Gender">Gender</Label>
              <Input
<<<<<<< HEAD
                id="Gender"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
=======
                type="Gender"
                // placeholder="Laki-laki"
>>>>>>> c0ed7b8a56d8efb5fd33e525e7c836c06ab02e7e
              />
            </div>
            <div className="grid-gap-2 pb-4">
              <Label htmlFor="Division">Division</Label>
              <Input
<<<<<<< HEAD
                id="Division"
                  placeholder="Division"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
=======
                type="Division"
                // placeholder="Front End"
>>>>>>> c0ed7b8a56d8efb5fd33e525e7c836c06ab02e7e
              />
            </div>
            <div className="grid-gap-2 pb-4">
              <Label htmlFor="Salary">Salary</Label>
              <Input
<<<<<<< HEAD
                id="Salary"
                  placeholder="Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
=======
                type="Salary"
                // placeholder="Rp10.000.000,00"
>>>>>>> c0ed7b8a56d8efb5fd33e525e7c836c06ab02e7e
              />
            </div>
          </CardContent>
          <CardFooter className="items-center justify-center">
            <Button className="w-full"  onClick={handleAddEmployee}>Add</Button>  
          </CardFooter> 
        </Card>
      </div>
    </div>
  </div>
  );
}
