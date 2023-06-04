import { createContext, useEffect, useState } from "react";

export const FormDataUserContext = createContext();

export default function FormDataUserContextProvider({ children }) {
  // getting the values of local storage
  const getFormDatas = () => {
    const data = localStorage.getItem("formDatas");

    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // main array
  const [formDatas, setFormDatas] = useState(getFormDatas());
  //   console.log("formDatas:", formDatas);

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  // input field states
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [cardId, setCardId] = useState("");
  const [sex, setSex] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobilePhoneNumber, setMobilePhoneNumber] = useState("");
  const [passPort, setPassPort] = useState("");
  const [salary, setSalary] = useState("");

  const handleCardIdChange = () => {
    const newCardId = `${number1}-${number2}-${number3}-${number4}-${number5}`;
    setCardId(newCardId);
  };

  const handleNumber1Change = e => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(value) && value.length <= 1) {
      setNumber1(value);
      handleCardIdChange();
    }
  };

  const handleNumber2Change = e => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(value) && value.length <= 3) {
      setNumber2(value);
      handleCardIdChange();
    }
  };

  const handleNumber3Change = e => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(value) && value.length <= 3) {
      setNumber3(value);
      handleCardIdChange();
    }
  };

  const handleNumber4Change = e => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(value) && value.length <= 3) {
      setNumber4(value);
      handleCardIdChange();
    }
  };

  const handleNumber5Change = e => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;

    if (regex.test(value) && value.length <= 3) {
      setNumber5(value);
      handleCardIdChange();
    }
  };

  // update local storage when formDatas change
  useEffect(() => {
    localStorage.setItem("formDatas", JSON.stringify(formDatas));
  }, [formDatas]);

  //form submit
  const handleAddFormData = () => {
    // เช็คว่าง user ใส่ข้อมูลครบไหม
    if (
      prefix === "" ||
      firstName === "" ||
      lastName === "" ||
      birthday === "" ||
      nationality === "" ||
      cardId === "" ||
      sex === "" ||
      countryCode === "" ||
      mobilePhoneNumber === "" ||
      passPort === "" ||
      salary === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // create
    let form = {
      id: formDatas.length + 1,
      prefix,
      firstName,
      lastName,
      birthday,
      nationality,
      cardId,
      sex: sex === "ชาย" ? "ชาย" : sex === "หญิง" ? "หญิง" : "ไม่ระบุ",
      countryCode,
      mobilePhoneNumber,
      passPort,
      salary
    };

    setFormDatas([...formDatas, form]);
    setPrefix("");
    setFirstName("");
    setLastName("");
    setBirthday("");
    setNationality("");
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setNumber4("");
    setNumber5("");
    setSex("");
    setCountryCode("");
    setMobilePhoneNumber("");
    setPassPort("");
    setSalary("");
  };

  // ล้างข้อมูล
  const onClickClearForm = () => {
    setPrefix("");
    setFirstName("");
    setLastName("");
    setBirthday("");
    setNationality("");
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setNumber4("");
    setNumber5("");
    setSex("");
    setCountryCode("");
    setMobilePhoneNumber("");
    setPassPort("");
    setSalary("");
  };

  // delete book from LS
  const deleteFormDatas = id => {
    const filteredFormDatas = formDatas.filter(element => {
      return element.id !== id;
    });
    setFormDatas(filteredFormDatas);
  };

  // Delet all
  const deleteFormDatasAll = () => {
    setFormDatas([]);
  };

  return (
    <FormDataUserContext.Provider
      value={{
        handleAddFormData,
        prefix,
        setPrefix,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        birthday,
        setBirthday,
        nationality,
        setNationality,
        cardId,
        setCardId,
        sex,
        setSex,
        countryCode,
        setCountryCode,
        mobilePhoneNumber,
        setMobilePhoneNumber,
        passPort,
        setPassPort,
        salary,
        setSalary,
        number1,
        number2,
        number3,
        number4,
        number5,
        handleNumber1Change,
        handleNumber2Change,
        handleNumber3Change,
        handleNumber4Change,
        handleNumber5Change,
        onClickClearForm,
        formDatas,
        setFormDatas,
        deleteFormDatas,
        deleteFormDatasAll
      }}
    >
      {children}
    </FormDataUserContext.Provider>
  );
}
