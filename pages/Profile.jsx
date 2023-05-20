"use client"
import React, { useState, useEffect } from "react";
import LoggedInHeader from "../components/LoggedInHeader";
import Link from "next/link";
import { getLists, ifOwnList, getListItems } from "../utils/data.js";

const Profile = ({ user_id }) => {
  const [localUsername, setLocalUsername] = useState("");
  const [localLists, setLocalLists] = useState([]);

  const fetchLists = async () => { 
    try {
      const { data: lists } = await getLists(user_id);
  
      // Remove duplicate entries by filtering unique list IDs
      const uniqueLists = lists.filter(
        (list, index, self) =>
          index === self.findIndex((l) => l.list_id === list.list_id)
      );
  
      const listsWithItems = await Promise.all(
        uniqueLists.map(async (list) => {
          const { data: items } = await getListItems(list.list_id);
          console.log(`Items for list ${list.list_id}:`, items); // Log the items
          return { ...list, items };
        })
      );
  
      setLocalLists(listsWithItems);
    } catch (error) {
      console.log("Error fetching lists:", error);
    }
  };
  
  useEffect(() => {
    fetchLists();
  }, [user_id]);
  
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
      <h3 className="text-center text-5xl font-bold p-10">Current Lists</h3>
      <div className="grid flex justify-center">
        {localLists.map((list) => (
          <div className="container text-center justify-items-center py-3">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                key={list.list_id}
                href={`${checkListOwner(list.list_id)}`}
              >
                {list.list_title}
              </Link>
              <ul>
                {list.items.map((item) => (
                  <li key={item.id}>
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    {item.list_item}
                  </li>
                ))}
              </ul>
            <a href="/EditList">
              <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit</button>
            </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
