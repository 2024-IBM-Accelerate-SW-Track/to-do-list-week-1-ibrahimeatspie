import React, { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from "./component/navigation/NavbarComp";

import Home from "./pages/Home";
import { useUser } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { SignOutButton, SignIn } from "@clerk/clerk-react";
import TodoListing from "./component/TodoListing";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="App">
      {isSignedIn ? (
        <Home />
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SignInButton className="px-4 text-white text-md justify-center items-center flex flex-row w-[50%] bg-gradient-to-br from-purple-500 to-blue-500 h-[60px] rounded-2xl" />
          <div data-testid="new-item-textfield"></div>
          <div data-testid="new-item-button"></div>
        </div>
      )}
    </div>
  );
}

// const supabaseInstance = getSupabaseClient();
// const supabaseInstance = createClient(
//   "https://kayckmjwhrjuoqawtrml.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheWNrbWp3aHJqdW9xYXd0cm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5ODIxNDYsImV4cCI6MjAzMzU1ODE0Nn0.m1ZOcXCZoGzCZP0XeObbxKJRNe9RTqx2XIeV_YwhwTA"
// );

export default App;
