import { Button, DatePicker, Form, Input, Select, Radio } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataUser from "./DataUser";

export default function FormContainer() {
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
  const [mobileMumber, setMobileMumber] = useState("");
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
    // if (
    //   prefix === "" ||
    //   firstName === "" ||
    //   lastName === "" ||
    //   birthday === "" ||
    //   nationality === "" ||
    //   cardId === "" ||
    //   sex === "" ||
    //   mobileMumber === "" ||
    //   mobilePhoneNumber === "" ||
    //   passPort === "" ||
    //   salary === ""
    // ) {
    //   alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    //   return;
    // }

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
      mobileMumber,
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
    setCardId("");
    setSex("");
    setMobileMumber("");
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
    setCardId("");
    setSex("");
    setMobileMumber("");
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
    <>
      <div className="w-full flex justify-center items-start gap-4 flex-wrap rounded-xl mb-10">
        {/* Box Left All */}
        <div className="w-[15%] mt-10">
          <h1 className="font-bold text-2xl">การจัดหน้าฟอร์ม</h1>
        </div>

        {/* Box Center All */}
        <Form
          wrapperCol={{
            span: 14
          }}
          layout="horizontal"
          onFinish={handleAddFormData}
          className="w-[60%]  flex flex-col justify-center items-start flex-wrap border-2 border-black rounded-xl p-2 mt-20"
        >
          <div className="w-full flex items-center gap-2">
            <Form.Item label="คำนำหน้า: ">
              <Select
                className="w-24"
                placeholder="คำนำหน้า..."
                options={[{ value: "นาย" }, { value: "นางสาว" }]}
                onChange={value => setPrefix(value)}
                value={prefix || undefined}
              >
                <Select.Option value="นาย">นาย</Select.Option>
                <Select.Option value="นางสาว">นางสาว</Select.Option>
              </Select>
            </Form.Item>

            <div className="flex flex-grow gap-2">
              <Form.Item label="ชื่อจริง: ">
                <Input
                  className="w-full h-[35px] rounded-md"
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="ชื่อ"
                  value={firstName || undefined}
                />
              </Form.Item>

              <Form.Item label="นามสกุล: ">
                <Input
                  className="w-full h-[35px] rounded-md"
                  onChange={e => setLastName(e.target.value)}
                  value={lastName || undefined}
                  placeholder="นามสกุล"
                />
              </Form.Item>
            </div>
          </div>

          <div className="w-full flex gap-6 items-center justify-start">
            <Form.Item label="วันเกิด">
              <DatePicker
                placeholder="ปี/เดือน/วัน"
                onChange={value => setBirthday(value)}
                value={birthday}
              />
            </Form.Item>

            <Form.Item label="สัญชาติ: " className="w-3/5">
              <Select
                onChange={value => setNationality(value)}
                value={nationality || undefined} // เพิ่ม || undefined เพื่อให้ placeholder ทำงาน
                placeholder="--กรุณาเลือก--"
                options={[{ value: "ไทย" }, { value: "เอเลี่ยน" }]}
              >
                <Select.Option value="ไทย">ไทย</Select.Option>
                <Select.Option value="เอเลี่ยน">เอเลี่ยน</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item label="เลขบัตรประชาชน" className="w-full flex">
            <div
              className="w-full flex gap-6 items-center justify-start"
              onChange={e => setCardId(e.target.value)}
              value={cardId}
            >
              <Input
                className="w-1/5 h-[35px] rounded-md"
                value={number1}
                placeholder="1"
                onChange={handleNumber1Change}
              />
              <p>-</p>
              <Input
                className="w-1/5 h-[35px] rounded-md"
                value={number2}
                placeholder="111"
                onChange={handleNumber2Change}
              />
              <p>-</p>
              <Input
                className="w-1/5 h-[35px] rounded-md"
                value={number3}
                placeholder="111"
                onChange={handleNumber3Change}
              />
              <p>-</p>
              <Input
                className="w-1/5 h-[35px] rounded-md"
                value={number4}
                placeholder="111"
                onChange={handleNumber4Change}
              />
              <p>-</p>
              <Input
                className="w-1/5 h-[35px] rounded-md"
                value={number5}
                placeholder="111"
                onChange={handleNumber5Change}
              />
            </div>
          </Form.Item>

          <Form.Item label="เพศ: " className="w-full">
            <Radio.Group
              onChange={e => setSex(e.target.value)}
              value={sex}
              defaultValue={undefined}
            >
              <Radio value="ชาย">ชาย</Radio>
              <Radio value="หญิง">หญิง</Radio>
              <Radio value="ไม่ระบุ">ไม่ระบุ</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="หมายเลขโทรศัพท์มือถือ: " className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-1/5">
                <Select
                  style={{ width: "100%" }}
                  onChange={value => setMobileMumber(value)}
                  value={mobileMumber}
                >
                  <Select.Option value="09">09</Select.Option>
                  <Select.Option value="66">66</Select.Option>
                </Select>
              </div>

              <p>-</p>
              <Input
                className="w-full h-[35px] rounded-md"
                placeholder="000000000"
                onChange={e => setMobilePhoneNumber(e.target.value)}
                value={mobilePhoneNumber}
              />
            </div>
          </Form.Item>

          <div className="w-full flex">
            <Form.Item label="หนังสือเดินทาง" className="w-[50%]">
              <Input
                className="w-full h-[35px] rounded-md"
                onChange={e => setPassPort(e.target.value)}
                value={passPort}
              />
            </Form.Item>
          </div>

          <div className="w-full flex flex-wrap">
            <Form.Item label="เงินเดือนที่คาดหวัง" className="w-[50%]">
              <Input
                className="w-full h-[35px] rounded-md"
                onChange={e => setSalary(e.target.value)}
                value={salary}
              />
            </Form.Item>

            <div className="flex w-[50%] items-center justify-center gap-14">
              <Form.Item>
                <Button className="bg-white" onClick={onClickClearForm}>
                  ล้างข้อมูล
                </Button>
              </Form.Item>

              <Form.Item>
                <Button className="bg-white" htmlType="submit">
                  ส่งข้อมูล
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>

        {/* Box Left All */}
        <div className="w-[15%] mt-10 flex flex-col">
          <Form.Item className="ml-auto">
            <Select
              placeholder="เลือกภาษา"
              options={[{ value: "Thai" }, { value: "English" }]}
            >
              <Select.Option value="Thai">Thai</Select.Option>
              <Select.Option value="English">English</Select.Option>
            </Select>

            <div className=" flex flex-col items-end gap-2 mt-2">
              <Link to="/">
                <Button className="bg-white">หน้าหลัก</Button>
              </Link>
              <Link to="/">
                <Button className="bg-white">Test 1</Button>
              </Link>
            </div>
          </Form.Item>
        </div>

        <DataUser
          formDatas={formDatas}
          deleteFormDatas={deleteFormDatas}
          deleteFormDatasAll={deleteFormDatasAll}
          setFormDatas={setFormDatas}
        />
      </div>
    </>
  );
}
