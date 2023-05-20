import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { getLists, getListItems } from "../utils/data.js";

const HomePage = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const { data: listsData } = await getLists();
        const uniqueLists = listsData.filter(
          (list, index, self) =>
            index === self.findIndex((l) => l.list_id === list.list_id)
        );

        const listsWithItems = await Promise.all(
          uniqueLists.map(async (list) => {
            const { data: items } = await getListItems(list.list_id);
            return { ...list, items };
          })
        );

        setLists(listsWithItems);
      } catch (error) {
        console.log("Error fetching lists:", error);
      }
    };

    fetchLists();
  }, []);

  return (
    <div>
      <Header />
      {/* Render other content */}
      <h3 className="text-center text-5xl font-bold p-10">Current Lists</h3>
      <div className="grid flex justify-center">
        {lists.map((list) => (
          <div
            className="container text-center justify-items-center py-3"
            key={list.list_id}
          >
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                href={`/user/${list.user_id}/list/${list.list_id}`}
              >
                {list.list_title}
              </a>
              <ul>
                {list.items.map((item) => (
                  <li key={item.id}>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    {item.list_item}
                  </li>
                ))}
              </ul>
              <a href={`/user/${list.user_id}/list/${list.list_id}/edit`}>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Edit
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
