import React, { useState } from "react";
import "../app/globals.css";
import "./pages.css";
import LoggedInHeader from "@/components/LoggedInHeader";
const EditList = ({ list_id }) => {
  const [listItems, setListItems] = useState(["", ""]);

  const handleAddItem = ({ list_id }) => {
    setListItems([...listItems, ""]);
  };

  const handleRemoveItem = (index) => {
    const updatedListItems = [...listItems];
    updatedListItems.splice(index, 1);
    setListItems(updatedListItems);
  };

  return (
    <>
      <div>
        <LoggedInHeader />
        <h3 className="text-center text-5xl font-bold p-10">List Editer</h3>
        <div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Paris Travel Itinerary 🇫🇷🥐
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                @gabby
              </h3>

              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="vue-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    See the Eiffel Tower
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="react-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Go to the Louvre Museum to see Mona Lisa
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="angular-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Go to the Musée Yves Saint Laurent Paris
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Visit the Parc des Buttes-Chaumont
                  </label>
                </div>
              </li>
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-stone-700 rounded-lg hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 dark:bg-blue-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
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
                    List Title
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
