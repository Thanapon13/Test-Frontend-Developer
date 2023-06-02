import "flowbite";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center gap-10 items-center m-auto border-2 bg-red-200">
        {/* Header */}
        <h1 className="text-2xl">
          Test ตำแหน่ง Frontend Developer (บริษัท สวิฟท์ ไดนามิคส์ จำกัด)
        </h1>

        {/* Button */}
        <div className="flex">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Test 1. Frontend (React)
          </button>

          <Link to={"/testCreateSpa2"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Test 2. สร้าง SPA (single page application)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
