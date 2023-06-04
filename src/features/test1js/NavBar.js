import React from "react";
import "flowbite";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="flex items-center md:order-2">
        <button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <BiWorld className="text-xl" />
        </button>
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          id="language-dropdown-menu"
        >
          <ul className="py-2 font-medium" role="none">
            <li>
              <button
                onClick={() => changeLanguage("th")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">ภาษาไทย</div>
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">English</div>
              </button>
            </li>
          </ul>
        </div>
        {/* Rest of the code */}
      </div>
    </>
  );
}
