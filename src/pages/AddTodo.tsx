import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { addTodo } from "../redux/features/todo/todoSlice";
import TodoList from "./TodoList";

const AddTodo = () => {
  const formSchema = z.object({
    name: z.string().min(2, "Minimun 2 character is required"),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (values: FormSchemaType) => {
    dispatch(addTodo(values.name));
    form.reset();
  };

  return (
    <>
      <div className=" ml-24 flex items-center space-x-11 py-6 px-12 my-14 bg-slate-700 w-[600px] ">
        <Form {...form}>
          <form
            className="flex item-center space-x-10"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-gray-50 border px-32   w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Text here"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="border border-slate-200 bg-blue-900 px-5 py-2 text-white cursor-pointer mt-2 hover:bg-black hover:text-white "
            >
              {" "}
              Add Todo
            </Button>
          </form>
        </Form>
      </div>
      <TodoList />
    </>
  );
};

export default AddTodo;
