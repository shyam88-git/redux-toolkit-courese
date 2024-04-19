import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "@/redux/features/todo/todoSlice";
type RootState = {
  todos: [
    {
      id: string | number;
      name: string;
    }
  ];
};
const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Text</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      {todos?.map((todo) => (
        <TableBody>
          <TableCell className="font-medium">{todo.name}</TableCell>
          <TableCell className="flex items-center space-x-2">
            <Button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-900 px-3 "
            >
              <MdDelete size={14} />
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-green-500 px-3">
                  <MdEdit size={14} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 ">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Edit Todo</h4>
                    <p className="text-sm text-muted-foreground">
                      Change The Todo name
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Name</Label>
                      <Input
                        id="width"
                        className="col-span-2 h-8"
                        value={todo.name}
                        onChange={(e) => e.target.value}
                      />
                      <div className="flex  items-center space-x-2">
                        <Button className="bg-red-500 w-20  ">Close</Button>
                        <Button
                          onClick={() =>
                            dispatch(
                              updateTodo({ id: todo?.id, name: todo?.name })
                            )
                          }
                          className="bg-red-500 w-20  "
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      ))}
    </Table>
  );
};

export default TodoList;
