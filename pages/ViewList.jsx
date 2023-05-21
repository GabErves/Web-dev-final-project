"use client";
import React, { useState, useEffect } from "react";
import "../app/globals.css";
import "./pages.css";
import LoggedInHeader from "@/components/LoggedInHeader";
import { getListItems, getCurrentID, ifOwnList } from "../utils/data";
import { Container } from "react-bootstrap";
import { useRouter } from "next/navigation";

// ...

const ViewList = ({ list_id, user_id }) => {
  const [listItems, setListItems] = useState([]);
  const [listTitle, setListTitle] = useState("");
  const [listAuthor, setListAuthor] = useState("");
  const [localID, setLocalID] = useState("");
  
  const router = useRouter();
  
  const checkSwitch = (is_checked) => {
    if (is_checked === true) {
      return "line-through ch w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
    } else {
      return "ch w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
    }
  };
  
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data: items } = await getListItems(list_id);
        var allItems = [];
        var title = new Set();
        var author = new Set();

        items.forEach((item) => {
          title.add(item.list_title);
          author.add(item.username);

          allItems.push({
            item: item.list_item,
            check: item.is_checked,
          });
        });

        setListTitle(title);
        setListAuthor(author);
        setListItems(allItems);
      } catch (error) {
        console.log("Error fetching lists:", error);
      }
    };
    fetchLists();
  }, [list_id]);

  return (
    <>
      <div>
        <LoggedInHeader />
        <h3 className="text-center text-5xl font-bold p-10">List Viewer</h3>
        <div className="grid flex justify-center">
          <div className="max-w-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {listTitle}
            </h5>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              By: {listAuthor}
            </h3>

            {listItems.map((listItem, index) => (
              <li
                key={index}
                className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 list-none"
              >
                <div className="flex items-center pl-3">
                  <input
                    id={`list-item-${index}`}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`list-item-${index}`}
                    className={`${checkSwitch(
                      listItem.check
                    )} w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
                  >
                    {listItem.item}
                  </label>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() =>
                      router.push(`/user/${user_id}/list/${list_id}/edit`)
                    }
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewList;
