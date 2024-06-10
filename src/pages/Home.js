import React, { Component } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";
import logo from "../assets/circlepfp.jpg";
import AddListingButton from "../component/AddListingButton";
import { Link } from "react-router-dom";

//Import hte home.css file
import "./Home.css";

class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
      // create your empty list here call it todos.
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    console.log("FROM HOME: ", todo);
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.

    // todo.id = Math.random();

    // An array that contains the current array and the new todo item
    let new_list = [...this.state.todos, { content: todo, id: Math.random() }];
    // Updates the local state with the new array.
    this.setState({
      todos: new_list,
    });
  };
  render() {
    return (
      <div className="font-opensans h-screen w-screen flex flex-col items-center">
        <div className="w-[100%] max-w-[750px]">
          <div className=" w-[100%] w-full h-[100px] flex flex-row justify-center">
            <div className="w-[80%] flex flex-row justify-between items-center">
              {/* this is the intro section */}
              <div className="flex-col text-left">
                <h1 className=" text-3xl font-normal">Hi!</h1>
                <h1 className="text-sm text-gray-500">
                  Keep maintaining the todolist :){" "}
                </h1>
                <Link to="/about">
                  <button>About me</button>
                </Link>
              </div>

              {/* this is the pfp section */}
              <div className="flex justify-center">
                <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
                  <img
                    src={logo}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-light mt-2 flex-grow flex flex-col items-center space-y-3 ">
            <div className="px-4 text-white text-md justify-between flex flex-row w-[80%] bg-gradient-to-br from-purple-500 to-blue-500 h-[60px] rounded-2xl">
              <div className="font-opensans h-full flex items-center ">
                Today
              </div>
              <div className="h-full flex items-center">12 jan</div>
            </div>
            <h1 className="text-2xl font-semibold">To-do list</h1>
            <Todos todos={this.state.todos} />
            {/* <Todos todos={this.state.todos} />
          <AddTodo addTodo={this.addTodo} /> */}
            <AddListingButton addTodo={this.addTodo} />
          </div>
          {/* <div class="fixed bottom-4 right-4">
          <button class="w-[75px] h-[75px] bg-gradient-to-br from-purple-500 to-blue-500 text-2xl text-white font-bold rounded-full shadow-lg">
            +
          </button>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
