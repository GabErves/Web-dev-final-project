"use client";
import LoggedInHeader from "@/components/LoggedInHeader";
import React from "react";
import Login from "./Login";
import "../app/globals.css";
import { useState } from "react";
import { registerUser } from "../utils/data";
import { useReducer } from "react";
import { useRouter } from "next/navigation";

const User = () => {
  return (
    <>
      <LoggedInHeader />
      <h3 className="text-center text-2xl font-bold">Your Lists</h3>
    </>
  );
};

export default User;