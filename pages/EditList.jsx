import React, { useState } from "react";
import "../app/globals.css";
import "./pages.css";
import LoggedInHeader from "@/components/LoggedInHeader";
const EditList = (props) => {
  const [listItems, setListItems] = useState(["", ""]);
  const list_id = props.list_id;
  const handleAddItem = ({ list_id }) => {
    setListItems([...listItems, ""]);
  };

  const handleRemoveItem = (index) => {
    const updatedListItems = [...listItems];
    updatedListItems.splice(index, 1);
    setListItems(updatedListItems);
  };

  // return <div>{JSON.stringify(props)}</div>;

  return (
    <>
      <div>
        <LoggedInHeader />
        <h3 className="text-center text-5xl font-bold p-10">List Editor</h3>
        <form className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Edit List
            </h2>
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Edit Title
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type List Title"
                    required=""
                  />
                </div>
                {listItems.map((item, index) => (
                  <div key={index} className="sm:col-span-2">
                    <label
                      htmlFor="large-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >{`List Item ${index + 1}`}</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter List Content"
                        value={item}
                        onChange={(e) => {
                          const updatedListItems = [...listItems];
                          updatedListItems[index] = e.target.value;
                          setListItems(updatedListItems);
                        }}
                        required=""
                      />
                      {index >= 2 && (
                        <button
                          type="button"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-600 hover:text-red-800 focus:text-red-800 focus:outline-none"
                          onClick={() => handleRemoveItem(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none"
                    onClick={handleAddItem}
                  >
                    + Add More
                  </button>
                </div>
              </div>
              <div className="padd2">
                <button
                  type="submit"
                  className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
                >
                  Edit List
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditList;