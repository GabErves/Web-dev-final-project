import React, { useState, useEffect } from "react";
import "../app/globals.css";
import "./pages.css";
import LoggedInHeader from "@/components/LoggedInHeader";

const EditList = (props) => {
  const [title, setTitle] = useState("");
  const [listItems, setListItems] = useState([]);
  const [numItems, setNumItems] = useState(listItems.length);

  const list_id = props.list_id;

  // Simulated fetch of existing list data
  useEffect(() => {
    const fetchListData = async () => {
      try {
        // Simulated API call to fetch list data by list_id
        const listData = await fetchListDataById(list_id);
        setTitle(listData.title);
        setListItems(listData.items);
        setNumItems(listData.items.length);
      } catch (error) {
        console.log("Error fetching list data:", error);
      }
    };

    fetchListData();
  }, [list_id]);

  const handleAddItem = () => {
    setNumItems(numItems + 1);
    setListItems([...listItems, ""]);
  };

  const handleRemoveItem = (index) => {
    setNumItems(numItems - 1);
    const updatedListItems = [...listItems];
    updatedListItems.splice(index, 1);
    setListItems(updatedListItems);
  };

  const handleEditList = (e) => {
    e.preventDefault();

    // Simulated API call to update the list
    updateListData(list_id, title, listItems)
      .then(() => {
        console.log("List updated successfully!");
        // Do something after the list is updated, e.g., show a success message
      })
      .catch((error) => {
        console.log("Error updating list:", error);
        // Handle the error, e.g., show an error message
      });
  };

  // Simulated API call to fetch list data by list_id
  const fetchListDataById = async (list_id) => {
    // Simulated delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated list data
    const listData = {
      title: "My favorite movies",
      items: ["Clueless", "The Menu"],
    };

    return listData;
  };

  // Simulated API call to update the list
  const updateListData = async (list_id, title, listItems) => {
    // Simulated delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated success or failure
    const success = true; // Set this based on the actual response from the API

    if (success) {
      // Return a promise that resolves when the update is successful
      return Promise.resolve();
    } else {
      // Return a promise that rejects with an error when the update fails
      return Promise.reject(new Error("Failed to update list"));
    }
  };

  return (
    <>
      <div>
        <LoggedInHeader />
        <h3 className="text-center text-5xl font-bold p-10">List Editor</h3>
        <form className="bg-white dark:bg-gray-900" onSubmit={handleEditList}>
          {/* ... */}
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Edit List
            </h2>
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="listItems"
                className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-300"
              >
                Items
              </label>
              {Array.from({ length: numItems }).map((_, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={listItems[index] || ""}
                    onChange={(e) => {
                      const updatedListItems = [...listItems];
                      updatedListItems[index] = e.target.value;
                      setListItems(updatedListItems);
                    }}
                  />
                  <button
                    type="button"
                    className="ml-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none"
                onClick={handleAddItem}
              >
                Add More +
              </button>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Update List
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditList;
