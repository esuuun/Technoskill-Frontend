// ini component home page

import DashboardElement from "./elements/DashboardElement";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderElement from "./elements/HeaderElement";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DollarSignIcon, MoreHorizontalIcon, Search, UsersIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editOpen, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast(); 
  const navigate = useNavigate();

  // function buat nge fetch semua data employee di data base 
  const handleHomePage = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employee/");
      console.log(response.data);
      
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleHomePage();
  }, []);

  // function buat nge delete employe
  function handleDeleteClick(employe) {
    setSelectedEmployee(employe); 
    setDialogOpen(true);
  }

  function handleDeleteClose() {
    setSelectedEmployee(null);
    setDialogOpen(false);
  }

  async function handleDeleteConfirm() {
    try {
      const response = await axios.delete(
        `http://localhost:8000/employee/${selectedEmployee.id}`
      );
      console.log(response.data);
      handleHomePage(); //biar ke refresh
      toast({
        title: "Employee Deleted Succesfully!",
        description:
          "The employee has been removed. You can no longer view their details on the home screen.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Your username or password is incorect.",
      });
      console.error(error);
    } finally {
      setDialogOpen(false);
    }
  }

  // function buat edit employee
  function handleEditClick(employe) {
    setSelectedEmployee(employe);
    setEdit(true);
  }

  function handleEditClose() {
    setSelectedEmployee(null);
    setEdit(false);
  }

  async function handleEditConfirm() {
    try {
      const response = await axios.put(
        `http://localhost:8000/employee/${selectedEmployee.id}`,
        {
          name: selectedEmployee.name,
          gender: selectedEmployee.gender,
          division: selectedEmployee.division,
          salary: selectedEmployee.salary,
        }
      );
      console.log(response.data);
      handleHomePage(); //refresh lagi
      toast({
        title: "Employee succesfully edited!",
        description: "Your selected employee now has edited from our server ",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Your username or password is incorect.",
      });
    } finally {
      setEdit(false);
    }
  }

  // function buat jadiin salary ke rupiah
  const formatCurrency = (amount) => {
    return parseInt(amount).toLocaleString("id-ID");
  };

  // function buat nge handle input kalau di edit
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSelectedEmployee((prev) => ({
      ...prev,
      [id]: value,
    }));
    console.log(selectedEmployee);
  };

  // function buat nge handle select kalau di edit
  const handleSelectChange = (value) => {
    setSelectedEmployee((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  // function buat nge pass id dari employee ke route details employee
  const handleEmployeeClick = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };

  // function buat nge search employee
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = searchQuery
    ? data.filter((employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data;
  
  // ini total employee
  const totalEmployee = data.length
  // ini total salary dari semua employee
  const totalSalary = data.reduce((sum, employee) => sum + parseInt(employee.salary), 0);

  return (
    <div className="flex bg-background">
      <DashboardElement />
      
      {/* Total employee and salary */}
      <div className="flex flex-col w-screen ">
        <HeaderElement />
        <div className="mx-10 flex gap-3 flex-wrap md:gap-10 justify-center md:justify-normal mt-10 md:mt-0">
        <Card className='w-fit'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-8">
              <CardTitle className="text-sm font-medium">
                Total Employee
              </CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalEmployee}</div>
              <p className="text-xs text-muted-foreground">
                Total employee of this company
              </p>
            </CardContent>
          </Card>
          <Card className='w-fit'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-8">
              <CardTitle className="text-sm font-medium">
                Total Salary
              </CardTitle>
              <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp{formatCurrency(totalSalary)}</div>
              <p className="text-xs text-muted-foreground">
                Total salary of all the employee
              </p>
            </CardContent>
          </Card>
        </div>

        {/* List Semua Employee GEGE */}
        
        <Card className="m-10">
          <ScrollArea className="h-screen w-full rounded-md border">
            <CardHeader>
              <CardTitle className="text-3xl">Employees</CardTitle>
              <CardDescription>Manage your employee.</CardDescription>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  type="search"
                  onChange={handleSearchChange}
                  placeholder="Search employee..."
                  className="block w-full p-4 pl-10 text-sm text-foreground bg-background border border-muted rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Division
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Salary
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((employe, index) => (
                    <TableRow key={index}>
                      <TableCell className="hidden sm:table-cell">
                        <Avatar>
                          {employe.gender === "Male" ? (
                            <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                          ) : (
                            <AvatarImage src="https://ui.shadcn.com/avatars/05.png" />
                          )}
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-medium text-foreground hover:text-primary hover:bg-transparent hover:no-underline"
                          onClick={() => handleEmployeeClick(employe.id)}
                        >
                          {employe.name}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Badge>Active</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {employe.division}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        Rp{formatCurrency(employe.salary)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => handleEditClick(employe)}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDeleteClick(employe)}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </ScrollArea>
        </Card>
      </div>

      {/* Delete Dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={handleDeleteClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Warning: Permanent Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              This action will permanently delete data for the selected employee
              and cannot be undone. Please confirm that you wish to proceed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDeleteClose} className="ring-0">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={handleEditClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogDescription>
              Make changes to your employe. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <label htmlFor="name">Name</label>
              <Input
                value={selectedEmployee?.name || ""}
                id="name"
                onChange={handleInputChange}
                className="w-full"
              />

              <label htmlFor="gender">Gender</label>

              <Select id="gender" onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={selectedEmployee?.gender || ""} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>

              <label htmlFor="division">Division</label>
              <Input
                value={selectedEmployee?.division || ""}
                id="division"
                onChange={handleInputChange}
                className="w-full"
              />

              <label htmlFor="salary">Salary</label>
              <Input
                type="number"
                placeholder={selectedEmployee?.salary || 0}
                id="salary"
                onChange={handleInputChange}
                className="w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleEditConfirm}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// const data = [
//   {
//     name: "ABC",
//     div: "HR",
//     salary: "Rp 5000",
//     status: "Active",
//     avatar: "https://ui.shadcn.com/avatars/03.png",
//   },
//   {
//     name: "JHK",
//     div: "HR",
//     salary: "Rp 5000",
//     status: "Active",
//     avatar: "https://ui.shadcn.com/avatars/01.png",
//   },
//   {
//     name: "POI",
//     div: "HR",
//     salary: "Rp 5000",
//     status: "Deactive",
//     avatar: "https://ui.shadcn.com/avatars/05.png",
//   },
//   {
//     name: "KKK",
//     div: "HR",
//     salary: "Rp 5000",
//     status: "Deactive",
//     avatar: "https://ui.shadcn.com/avatars/02.png",
//   },
// ];
