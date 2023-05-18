"use client";
import LoggedInHeader from "@/components/LoggedInHeader";
import React from "react";
import Login from "./Login";
import "../app/globals.css";
import { useState, useEffect } from "react";
import { registerUser } from "../utils/data";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, logoutUser } from "../utils/data.js";

const Profile = () => {
  const [localUsername, setLocalUsername] = useState("");
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data, error } = await getCurrentUser();

      if (data) {
        setLocalUsername(data.ListoMeta?.username || "");
      } else {
        console.log("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);
  return (
    <>
      <LoggedInHeader />
      <h3 className="text-start text-5xl p-10">Hello {localUsername}!</h3>
      <h3 className="text-center text-2xl font-bold">Your Lists</h3>
    </>
  );
};

export default Profile;
