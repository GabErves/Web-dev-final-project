"use client";
import React from "react";
import '../app/globals.css';
import './pages.css';
import LoggedInHeader from "@/components/LoggedInHeader";

const CreateList = () => {
  return <div>
  <LoggedInHeader/>
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create a New List</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">List Title</label>
                  <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type List Title" required=""/>
             </div>
             <div class="sm:col-span-2">
                  <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First List Item</label>
                  <input type="text" name="name" id="large-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter List Content" required=""/>
              </div>
              <div class="sm:col-span-2">
                  <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Second List Item</label>
                  <input type="text" name="name" id="large-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter List Content" required=""/>
              </div>
              <div class="sm:col-span-2">
                  <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Third List Item</label>
                  <input type="text" name="name" id="large-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter List Content" required=""/>
              </div>
              <div class="sm:col-span-2">
                  <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fourth List Item</label>
                  <input type="text" name="name" id="large-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter List Content" required=""/>
              </div>
             
          </div>
          <div className="padd2">
          <button
                  type="submit"
                  className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
                >
                  Create List
                </button>
                </div>
      </form>
  </div>
</section>
  </div>;
};

export default CreateList;
