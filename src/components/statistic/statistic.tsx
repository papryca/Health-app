import React from "react";
import coins from "@assets/images/coins.svg";

const Statistic = () => {
  return (

    <div className=' rounded-lg p-3 mt-6 relative dark:bg-article-background-dark md:flex md:justify-between md:gap-3 lg:flex lg:flex-col lg:w-2/6 xl:flex xl:flex-col xl:w-2/6'>
      <div className='md:w-1/3 lg:w-full sm:mt-10'>
        <div className="p-4 bg-white shadow-lg w-full rounded-2xl dark:bg-article-background-dark">
          <div className="flex items-center">
            <svg width="40" fill="currentColor" height="40"
                 className="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white"
                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"/>
            </svg>
            <p className="ml-2 text-md text-gray-dark font-semibold dark:text-white">Finance</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="my-4 text-3xl font-bold text-left text-gray-dark dark:text-white">12,500<span
              className="text-sm">$</span></p>
            <div className="flex items-center text-sm text-green-bright">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"/>
              </svg>
              <span>5.5%</span>
              <span className="text-gray-soft">vs last month</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-4 text-center bg-white border-t-4 border-indigo-500 rounded-2xl shadow w-84 mt-8 dark:bg-article-background-dark lg:w-full md:w-1/3 md:m-0">
        <div className="overflow-hidden">
          <div className="mb-8 text-2xl font-medium text-gray-800 dark:text-white xl:text-4xl">
            Premium
          </div>
          <div className="mb-10 text-sm font-light leading-loose">
            <div className="font-bold text-gray-800 dark:text-white xl:text-2xl">
              5000 clients
            </div>
            <div className='dark:text-white xl:text-xl'>
              All features
            </div>
            <div className='dark:text-white xl:text-xl'>
              Free support
            </div>
          </div>
          <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-white xl:text-4xl">
            <span>
                249 $
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            / month
          </div>
          <div className="px-4 mt-8">
            <button type="button"
                    className="py-2 px-4  bg-purple hover:bg-purple-soft focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Start
            </button>
          </div>
        </div>
      </div>
      <div className='lg:w-full md:w-1/3'>
        <img src={coins} alt="Coins image" className=""/>
      </div>
    </div>
  );
};

export default Statistic;
