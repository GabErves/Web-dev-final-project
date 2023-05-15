"use client";
import Header from "@/components/Header";
import React from "react";
import Login from "./Login";
import "../app/globals.css";
import { useState } from "react";
import { registerUser } from "../utils/data";
import { useReducer } from "react";
import { useRouter } from "next/navigation";

const UserList = () => {
  return (
    <>
      <p>User Page</p>
    </>
  );
};

export default UserList;
