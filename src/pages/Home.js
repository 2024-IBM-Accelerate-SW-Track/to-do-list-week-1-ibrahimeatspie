import React, { useState, useEffect } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";
import logo from "../assets/circlepfp.jpg";
import AddListingButton from "../component/AddListingButton";
import "./Home.css";
import { useUser } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const { isSignedIn, user, isLoaded } = useUser();
  const { getToken } = useAuth();

  if (isSignedIn) {
    console.log(user);
  }
  // You can define additional state variables using useState if needed

  const addTodo = async (todo) => {
    const response = await fetch("http://localhost:4000/insertTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Assuming you have a token stored in localStorage
        Authorization: `Bearer ${await getToken({ template: "BasicInfo" })}`,
      },
      body: JSON.stringify({ task: todo }),
    });
    console.log("FROM HOME: ", todo);
    let newTodo = { content: todo, id: Math.random() };
    setTodos([...todos, newTodo]);
  };

  useEffect(async () => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/getTasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Assuming you have a token stored in localStorage
          Authorization: `Bearer ${await getToken({ template: "BasicInfo" })}`,
        },
      });
      const data = await response.json();
      console.log(data);
      const todoArray = data.map((todo) => ({
        content: todo.content,
        id: todo.id,
      }));
      setTodos(todoArray);
    };
    await fetchData();
  }, []);

  return (
    <div className="font-opensans h-screen w-screen flex flex-col items-center">
      <div className="w-[100%] max-w-[750px]">
        <div className=" w-[100%] w-full h-[100px] flex flex-row justify-center">
          <div className="w-[80%] flex flex-row justify-between items-center">
            <div className="flex-col text-left">
              <h1 className=" text-3xl font-normal">Hi {user.firstName}</h1>
              <h1 className="text-sm text-gray-500">
                Keep maintaining the todolist :){" "}
              </h1>
              <SignOutButton />
            </div>
            <div className="flex justify-center">
              <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
                <img
                  src={user.imageUrl}
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-light mt-2 flex-grow flex flex-col items-center space-y-3 ">
          <div className="px-4 text-white text-md justify-between flex flex-row w-[80%] bg-gradient-to-br from-purple-500 to-blue-500 h-[60px] rounded-2xl">
            <div className="font-opensans h-full flex items-center ">Today</div>
            <div className="h-full flex items-center">12 jan</div>
          </div>
          <h1 className="text-2xl font-semibold">To-do list</h1>
          <div className="w-[100%] flex flex-col flex-grow items-center space-y-4">
            <Todos todos={todos} />
          </div>
          <AddListingButton addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
