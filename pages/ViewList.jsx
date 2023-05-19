"use client";
import React, { useState, useEffect } from "react";
import "../app/globals.css";
import "./pages.css";
import LoggedInHeader from "@/components/LoggedInHeader";
import { getListItems } from "../utils/data.js";
import { Container } from "react-bootstrap";
const ViewList = ({ list_id }) => {
  const [listItems, setListItems] = useState({});
  const [listTitle, setListTitle] = useState("");
  const [listAuthor, setListAuthor] = useState("");

  const checkSwitch = (is_checked) => {
    if (is_checked === true) {
      return "line-through ch w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300";
    }
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data: items } = await getListItems(list_id);
        var allItems = {};
        var title = new Set();
        var author = new Set();

        //Adds list items in a 2D dictionary
        //Format: listItems[order][list_item or check]
        items.forEach((item) => {
          //Add title and author
          title.add(item.list_title);
          author.add(item.username);

          if (!allItems[item.order]) {
            allItems[item.order] = {
              item: item.list_item,
              check: item.is_checked,
            };
          } else {
            allItems[item.order].item = item.list_item;
            allItems[item.order].check = item.is_checked;
          }
        });

        //Set respective variables
        setListTitle(title);
        setListAuthor(author);
        setListItems(allItems);
      } catch (error) {
        // Handle the error
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

            {Object.entries(listItems).map(([order, listItem]) => (
              <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center pl-3">
                  {/* <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  key={order}
                  for="vue-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {listItem.item}
                </label> */}
                  <p
                    className={`${checkSwitch(
                      listItem.is_checked
                    )} ch w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
                  >
                    {listItem.item}
                  </p>
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
