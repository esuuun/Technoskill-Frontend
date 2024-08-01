import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Loader2Icon } from "lucide-react";

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/employee/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  if (!employee) {
    return <div className="flex justify-center w-screen h-screen items-center"><Loader2Icon className="animate-spin" size={40}/></div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-2xl m-10">
        <CardHeader>
          <CardTitle className="text-3xl">Employee Details</CardTitle>
          <CardDescription>View employee details below</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row p-6 items-center">
            <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32">
                    <AvatarImage src={employee.gender === "Male" ? "https://ui.shadcn.com/avatars/02.png" : "https://ui.shadcn.com/avatars/05.png"} />
                    <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center">{employee.name}</h2>
                <Badge>{employee.status || "Active"}</Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:px-20 w-full text-xl">
                <div>
                    <p className="font-semibold">Gender:</p>
                    <p>{employee.gender}</p>
                </div>
                <div>
                    <p className="font-semibold">Division:</p>
                    <p>{employee.division}</p>
                </div>
                <div>
                    <p className="font-semibold">Salary:</p>
                    <p>Rp{parseInt(employee.salary).toLocaleString("id-ID")}</p>
                </div>
                <div>
                    <p className="font-semibold">Employee ID:</p>
                    <p>{employee.id}</p>
                </div>
            </div>
            </CardContent>
        <CardFooter className="flex justify-center py-6">
          <Button onClick={() => navigate("/home")}>Back to Home</Button>
        </CardFooter>
      </Card>
    </div>
  );
}