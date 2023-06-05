import { useTranslation } from "react-i18next";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function TestFrontendContainer() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const ButtonTest1 = async () => {
    navigate("/testCreateButton");
    navigate(0);
  };

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-teal-200 to-lime-200 ">
      <div className="flex justify-between cursor-pointer p-2">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <i>
              <AiFillHome />
            </i>
            <p>{t("Home Page")}</p>
          </div>
        </Link>
        <Navbar
          onClick1={() => changeLanguage("th")}
          language1={"ภาษาไทย"}
          language2={"English"}
          onClick2={() => changeLanguage("en")}
        />
      </div>

      <div className="w-full h-[600px] flex justify-center items-center gap-4">
        <div
          className="bg-white w-[250px] h-[100px] p-2 flex flex-col justify-around cursor-pointer"
          onClick={ButtonTest1}
        >
          <h1 className="font-bold">{t("Test 1")}</h1>
          <p>{t("Laout & Style")}</p>
        </div>

        <div
          className="bg-white w-[250px] h-[100px] p-2 flex flex-col justify-around cursor-pointer"
          onClick={ButtonTest1}
        >
          <h1 className="font-bold">{t("Test 2")}</h1>
          <p>{t("Connect && API")}</p>
        </div>

        <div
          className="bg-white w-[250px] h-[100px] p-2 flex flex-col justify-around cursor-pointer"
          onClick={ButtonTest1}
        >
          <h1 className="font-bold">{t("Test 3")}</h1>
          <p>{t("Form && Table")}</p>
        </div>
      </div>
    </div>
  );
}
