"use client";
import LoggedInHeader from "../components/LoggedInHeader";
import React from "react";
import Login from "./Login";
import Link from "next/link";
import "../app/globals.css";
import { useState, useEffect } from "react";
import { registerUser } from "../utils/data";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import {
  getCurrentUser,
  logoutUser,
  getLists,
  ifOwnList,
} from "../utils/data.js";

//Is now specific by user_id.
const Profile = ({ user_id }) => {
  const [localUsername, setLocalUsername] = useState("");
  const [localLists, setLocalLists] = useState({});

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data: lists } = await getLists(user_id);

        var allLists = {};

        //Adds list_ids as keys in a dictionary with their respective titles
        lists.forEach((item) => {
          allLists[item.list_id] = item.list_title;
        });

        //Update localLists
        setLocalLists(allLists);
      } catch (error) {
        // Handle the error
        console.log("Error fetching lists:", error);
      }
    };
    fetchLists();
  }, [user_id]);

  //Reroutes user to editing page, if its their list
  const checkListOwner = (key) => {
    if (ifOwnList(key, user_id)) {
      return `/user/${user_id}/list/${key}/edit`;
    } else {
      return `/user/${user_id}/list/${key}`;
    }
  };

  return (
    <>
      <LoggedInHeader />
      {/* <h3 className="text-start text-5xl p-10">Hello {localUsername}!</h3> */}
      <h3 className="text-center text-5xl font-bold p-10">Current Lists</h3>
      {/* <p>{localLists}</p> */}
      <div className="grid flex justify-center">
        {Object.entries(localLists).map(([key, value]) => {
          return (
            <>
              <div className="container text-center justify-items-center py-3">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    key={key}
                    href={`${checkListOwner(key)}`}
                  >
                    {value}
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* {Object.keys(localLists).forEach((id) => {
        return <p>{localLists[id]}</p>;
      })} */}
    </>
  );
};

export default Profile;
