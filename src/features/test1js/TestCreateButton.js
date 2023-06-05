import { AiFillHome } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ButtonBodyGeometry from "./ButtonBodyGeometry";
import Navbar from "../../components/Navbar";

export default function TestCreateButton() {
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-teal-200 to-lime-200 ">
      <div className="flex justify-between cursor-pointer p-2">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <i className="text-xl">
              <AiFillHome />
            </i>
            <h1 className="text-2xl font-bold"> {t("Layout & Style")}</h1>
          </div>
        </Link>
        <Navbar
          onClick1={() => changeLanguage("th")}
          language1={"ไทย"}
          language2={"English"}
          onClick2={() => changeLanguage("en")}
        />
      </div>

      <ButtonBodyGeometry />
    </div>
  );
}
