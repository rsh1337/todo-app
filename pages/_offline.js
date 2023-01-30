import { useEffect, useState } from "react";
import Header from "../components/header";
import Task from "../components/task";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@chakra-ui/react";
import CreateTaskModal from "../components/createtask";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (storedTasks) {
        console.log(storedTasks);
        setTasks(storedTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: newTaskName,
      details: newTaskDetails,
      checked: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
    setNewTaskDetails("");
  };

  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditSubmit = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        task.name = newTaskName;
        task.details = newTaskDetails
      }
      console.log(task.checked);
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCheck = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        task.checked = !task.checked;
      }
      console.log(task.checked);
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteChecked = () => {
    const updatedTasks = tasks.filter((task) => !task.checked);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="bg-[#FCFCFC] h-screen w-screen">
      <div className="top-0 sticky">
      <h1 className="flex justify-center items-center bg-red-400">You are offline</h1>
        <Header />
      </div>
      <div className="hidden md:flex flex-row ml-10 mt-5 gap-4">
        <CreateTaskModal handleSubmit_create={handleSubmit} newTaskName_create={newTaskName} newTaskDetails_create={newTaskDetails} setNewTaskDetails_create={setNewTaskDetails} setNewTaskName_create={setNewTaskName} />
        <button
          className="bg-[#F6F6F6] rounded-lg p-2 flex flex-row items-center gap-2 text-sm"
          onClick={handleDeleteChecked}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 16.16L10.04 12.2M13.96 12.24L10 16.2M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 4.02C19.33 4.2 21 5.43 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44 4.67 4.2 8 4.02"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Delete Checked
        </button>
      </div>
      <div className="fixed bottom-0 right-0 md:hidden">
        <Popover>
          {({ isOpen }) => (
            <>
              <PopoverTrigger>
                <button className="mr-6 mb-10 bg-[#F6F6F6] rounded-full p-3">
                  {isOpen ? (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.95"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.92 15.05L13.4 8.53C12.63 7.76 11.37 7.76 10.6 8.53L4.07996 15.05"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent
                width={"full"}
                bg="#FCFCFC"
                border={0}
                shadow={0}
                gap={2}
              >
                <button
                  className="bg-[#F6F6F6] rounded-full p-3"
                  onClick={handleDeleteChecked}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 16.16L10.04 12.2M13.96 12.24L10 16.2M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 4.02C19.33 4.2 21 5.43 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44 4.67 4.2 8 4.02"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <CreateTaskModal handleSubmit_create={handleSubmit} newTaskName_create={newTaskName} newTaskDetails_create={newTaskDetails} setNewTaskDetails_create={setNewTaskDetails} setNewTaskName_create={setNewTaskName} />
              </PopoverContent>
            </>
          )}
        </Popover>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-[7rem] md:mr-[7rem]">
        {tasks.map((task, index) => (
          <div className="mt-5 mb-10" key={index}>
            <Task
              name={task.name}
              details={task.details}
              deletetask={() => handleRemove(index)}
              checked={task.checked}
              ischecked={() => handleCheck(index)}
              editingTask={() => handleEdit(index)}
              handleEditSubmit_edit={() => handleEditSubmit(index)}
              newTaskName_edit={newTaskName}
              newTaskDetails_edit={newTaskDetails}
              setNewTaskDetails_edit={setNewTaskDetails}
              setNewTaskName_edit={setNewTaskName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
