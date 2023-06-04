import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function TestFrontendContainer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-teal-200 to-lime-200 ">
      <div className="flex justify-between cursor-pointer p-2">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <i>
              <AiFillHome />
            </i>
            <p>กลับหน้าหลัก</p>
          </div>
        </Link>
        <NavBar />
      </div>

      <div className="w-full h-[600px] flex justify-center items-center gap-4">
        <Link to={"/testCreateButton"}>
          <div className="bg-white w-[250px] h-[100px] p-2 flex flex-col justify-around cursor-pointer">
            <h1 className="font-bold">{t("Test 1")}</h1>
            <p>{t("Laout & Style")}</p>
          </div>
        </Link>

        <Link to={"/testCreateButton"}>
          <div className="bg-white w-[250px] h-[100px] p-2 flex flex-col justify-around cursor-pointer">
            <h1 className="font-bold">{t("Test 2")}</h1>
            <p>{t("Connect && API")}</p>
          </div>
        </Link>

        <Link to={"/testCreateButton"}>
          <div className="bg-white w-[250px] h-[100px] p-2 flex flex-col justify-around cursor-pointer">
            <h1 className="font-bold">{t("Test 3")}</h1>
            <p>{t("Form && Table")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
