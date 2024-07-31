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
  CardFooter,
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
import { MoreHorizontalIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle, } from "./ui/alert-dialog";
import {  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle} from "./ui/dialog";
import { Input } from "./ui/input";

export default function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editOpen, setEdit] = useState(false)
  const [data, setData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  // DELETE EMPLOYEE
  function handleDeleteClick(employe) {
    setSelectedEmployee(employe)
    setDialogOpen(true);
  }

  function handleDeleteClose() {
    setDialogOpen(false);
  }

  function handleDeleteConfirm() {
    
  }

  // EDIT EMPLOYEE

  function handleEditClick(employe) {
    setSelectedEmployee(employe)
    setEdit(true)
  }

  function handleEditClose() {
    setEdit(false)
  }

  function handleEditConfirm() {
    
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

  return (
    <div className="flex bg-background">
      <DashboardElement />
      <div className="flex flex-col w-screen ">
        <HeaderElement />
        <Card className="m-10">
          <CardHeader>
            <CardTitle>Employees</CardTitle>
            <CardDescription>Manage your employee.</CardDescription>
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
                  <TableHead className="hidden md:table-cell">Salary</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((employe, index) => (
                  <TableRow key={index}>
                    <TableCell className="hidden sm:table-cell">
                      <Avatar>
                        {employe.gender === 'Male' ? <AvatarImage src='https://ui.shadcn.com/avatars/02.png' /> :
                        <AvatarImage src='https://ui.shadcn.com/avatars/05.png' />
                        }
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">
                      {employe.name}
                    </TableCell>
                    <TableCell>
                      <Badge>Active</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {employe.division}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {employe.salary}
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
                          <DropdownMenuItem onClick={() => handleEditClick(employe)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDeleteClick(employe)}>
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
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> employees
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Delete Dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={handleDeleteClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              employee and remove your employe data from our servers.
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
              <Input value={selectedEmployee?.name || ''} id='name' className="w-full" />

              <label htmlFor="gender">Gender</label>
              <Input value={selectedEmployee?.gender || ''}  id='gender' className="w-full" />
              
              <label htmlFor="division">Division</label>
              <Input value={selectedEmployee?.division || ''}  id='division' className="w-full" />

              <label htmlFor="salary">Salary</label>
              <Input value={selectedEmployee?.salary || '0'}  id='salary' className="w-full" />
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
