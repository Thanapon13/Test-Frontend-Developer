import { Button, Checkbox, Drawer, Form, Input, Select } from "antd";
import { useState } from "react";
import { GoFileDirectory } from "react-icons/go";

export default function DataUser({
  formDatas,
  deleteFormDatas,
  deleteFormDatasAll,
  setFormDatas
}) {
  const [currentFormDatas, setCurrentFormDatas] = useState({});

  console.log("formDatassss", formDatas);

  const handleEditFormChange = (field, value) => {
    setCurrentFormDatas({
      ...currentFormDatas,
      [field]: value
    });
    console.log("currentFormDatas", currentFormDatas);
  };

  const handleUpdateFormData = (id, updatedFormData) => {
    if (!id) {
      console.error("No id provided for updating form data");
      return;
    }

    const updatedItems = formDatas.map(item => {
      return item.id === id ? updatedFormData : item;
    });

    setFormDatas(updatedItems);
  };

  const handleEditSubmit = () => {
    console.log("currentFormDatas", currentFormDatas);
    handleUpdateFormData(currentFormDatas.id, {
      ...currentFormDatas
    });
  };

  const [selectAll, setSelectAll] = useState(false);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-[90%] flex flex-col gap-2 m-auto">
        {/* Container Top All */}
        <div>
          <Checkbox className="text-" onClick={() => setSelectAll(true)}>
            เลือกทั้งหมด
          </Checkbox>
          {selectAll && (
            <Button className="bg-white" onClick={deleteFormDatasAll}>
              ลบทั้งหมด
            </Button>
          )}
        </div>

        {/* Container Bottom All */}
        <div className="bg-white">
          <div className="flex justify-between items-center border-2 p-2">
            <div className="flex-1 text-center border-r-2">
              <h1>Id</h1>
            </div>
            <div className="flex-1 text-center border-r-2">
              <h1>ชื่อ</h1>
            </div>
            <div className="flex-1 text-center  border-r-2">
              <h1>เพศ</h1>
            </div>
            <div className="flex-1 text-center  border-r-2">
              <h1>หมายเลขโทรศัพท์มือถือ</h1>
            </div>
            <div className="flex-1 text-center  border-r-2">
              <h1>สัญชาติ</h1>
            </div>
            <div className="flex-1 text-center">
              <h1>จัดการ</h1>
            </div>
          </div>

          {formDatas.length === 0 ? (
            <div className="bg-white h-[400px] flex flex-col justify-center items-center">
              <i className="text-6xl">
                <GoFileDirectory />
              </i>
              <h1 className="text-2xl">ยังไม่มีข้อมูล</h1>
            </div>
          ) : (
            <div className="bg-white h-[400px] ">
              {formDatas.map((item, idx) => (
                <div
                  key={idx}
                  className="flex  justify-start items-start p-2 border-b-2"
                >
                  <div className="flex-1 text-center">
                    <h1>{item.id}</h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>
                      {item.prefix} {item.firstName} {item.lastName}
                    </h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>{item.sex}</h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>
                      {item.mobileMumber}-{item.mobilePhoneNumber}
                    </h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>{item.nationality}</h1>
                  </div>
                  <div className="flex items-center justify-around flex-1">
                    <Button className="bg-white" onClick={showDrawer}>
                      Edit
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={() => deleteFormDatas(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Drawer
        title="แก้ไขข้อมูลส่วนตัว"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="w-full flex items-center gap-2 flex-wrap">
          <Form.Item label="คำนำหน้า: ">
            <Select
              className="w-24"
              placeholder="คำนำหน้า..."
              options={[{ value: "นาย" }, { value: "นางสาว" }]}
              value={currentFormDatas.prefix}
              onChange={value => handleEditFormChange("prefix", value)}
            >
              <Select.Option value="นาย">นาย</Select.Option>
              <Select.Option value="นางสาว">นางสาว</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="ชื่อจริง: ">
            <Input
              className="w-full h-[35px] rounded-md"
              placeholder="ชื่อ"
              value={currentFormDatas.firstName}
              onChange={e => handleEditFormChange("firstName", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="นามสกุล: ">
            <Input
              className="w-full h-[35px] rounded-md"
              placeholder="นามสกุล"
              value={currentFormDatas.lastName}
              onChange={e => handleEditFormChange("lastName", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="หมายเลขโทรศัพท์มือถือ: " className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-1/5">
                <Select
                  style={{ width: "100%" }}
                  value={currentFormDatas.mobileMumber}
                  onChange={value =>
                    handleEditFormChange("mobileMumber", value)
                  }
                >
                  <Select.Option value="09">09</Select.Option>
                  <Select.Option value="66">66</Select.Option>
                </Select>
              </div>

              <p>-</p>
              <Input
                className="w-full h-[35px] rounded-md"
                placeholder="000000000"
                value={currentFormDatas.mobilePhoneNumber}
                onChange={e =>
                  handleEditFormChange("mobilePhoneNumber", e.target.value)
                }
              />
            </div>
          </Form.Item>

          <Form.Item label="สัญชาติ: " className="w-3/5">
            <Select
              placeholder="--กรุณาเลือก--"
              options={[{ value: "ไทย" }, { value: "เอเลี่ยน" }]}
              value={currentFormDatas.nationality}
              onChange={value => handleEditFormChange("nationality", value)}
            >
              <Select.Option value="ไทย">ไทย</Select.Option>
              <Select.Option value="เอเลี่ยน">เอเลี่ยน</Select.Option>
            </Select>
          </Form.Item>

          <div className="w-full flex items-center justify-center gap-6">
            <Form.Item>
              <Button className="bg-white" onClick={() => handleEditSubmit()}>
                save
              </Button>
            </Form.Item>

            <Form.Item>
              <Button className="bg-white" htmlType="submit">
                cancel
              </Button>
            </Form.Item>
          </div>
        </div>
      </Drawer>
    </>
  );
}
