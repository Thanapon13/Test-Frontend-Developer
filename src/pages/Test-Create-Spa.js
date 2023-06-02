import { Button, DatePicker, Form, Input, Select, Radio } from "antd";
import { useState } from "react";

export default function TestCreateSpa2() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [value, setValue] = useState(1);
  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-teal-200 to-lime-200">
      {/* Container Top All */}
      <Form
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        className="w-[80%] flex flex-col justify-center items-start m-auto border-2 p-2"
      >
        <div className="w-full flex items-center gap-2">
          <Form.Item label="คำนำหน้า: ">
            <Select
              className="w-24"
              placeholder="คำนำหน้า..."
              options={[{ value: "นาย" }, { value: "นางสาว" }]}
            >
              <Select.Option value="นาย">นาย</Select.Option>
              <Select.Option value="นางสาว">นางสาว</Select.Option>
            </Select>
          </Form.Item>

          <div className="flex flex-grow gap-2">
            <Form.Item label="ชื่อจริง: ">
              <Input className="w-[450px] h-[35px] rounded-md" />
            </Form.Item>

            <Form.Item label="นามสกุล: ">
              <Input className="w-[450px] h-[35px] rounded-md" />
            </Form.Item>
          </div>
        </div>

        <div className="w-full flex gap-6 items-center justify-start">
          <Form.Item label="วันเกิด">
            <DatePicker placeholder="ปี/เดือน/วัน" />
          </Form.Item>

          <Form.Item label="สัญชาติ: " className="w-3/5">
            <Select
              placeholder="--สัญชาติ--"
              options={[{ value: "ไทย" }, { value: "เอเลี่ยน" }]}
            >
              <Select.Option value="ไทย">ไทย</Select.Option>
              <Select.Option value="เอเลี่ยน">เอเลี่ยน</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item label="เลขบัตรประชาชน" className="w-full flex ">
          <div className="w-full flex gap-6 items-center justify-start">
            <Input className="w-1/5 h-[35px] rounded-md" />
            <p>-</p>
            <Input className="w-1/5 h-[35px] rounded-md" />
            <p>-</p>
            <Input className="w-1/5 h-[35px] rounded-md" />
            <p>-</p>
            <Input className="w-1/5 h-[35px] rounded-md" />
            <p>-</p>
            <Input className="w-1/5 h-[35px] rounded-md" />
          </div>
        </Form.Item>

        <Form.Item label="เพศ: " className="w-full">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>ผู้ชาย</Radio>
            <Radio value={2}>ผู้หญิง</Radio>
            <Radio value={3}>ไม่ระบุ</Radio>
          </Radio.Group>
        </Form.Item>

        <div className="w-full flex">
          <Form.Item label="หนังสือเดินทาง" className="w-[50%]">
            <Input className="w-[300px] h-[35px] rounded-md" />
          </Form.Item>
        </div>

        <div className="w-full flex">
          <Form.Item label="เงินเดือนที่คาดหวัง" className="w-[50%]">
            <Input className="w-[300px] h-[35px] rounded-md" />
          </Form.Item>

          <div className="flex items-center gap-20">
            <Form.Item>
              <Button className="bg-white">ล้างข้อมูล</Button>
            </Form.Item>

            <Form.Item>
              <Button className="bg-white">ส่งข้อมูล</Button>
            </Form.Item>
          </div>
        </div>
      </Form>

      {/* Container Bottom All */}
    </div>
  );
}
