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
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "@/redux/features/todo/todoSlice";
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
            <Button className="bg-green-500 px-3 ">
              <MdEdit size={14} />
            </Button>
            <Button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-900 px-3 "
            >
              <MdDelete size={14} />
            </Button>
          </TableCell>
        </TableBody>
      ))}
    </Table>
  );
};

export default TodoList;
