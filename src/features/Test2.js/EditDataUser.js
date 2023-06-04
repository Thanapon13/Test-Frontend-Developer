import { Button, Drawer, Form, Input, Select } from "antd";
import InputName from "../../components/InputName";
export default function EditDataUser({
  onClose,
  currentFormData,
  handleEditFormChange,
  handleEditSubmit,
  open
}) {
  return (
    <>
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
              value={currentFormData.prefix}
              onChange={value => handleEditFormChange("prefix", value)}
            >
              <Select.Option value="นาย">นาย</Select.Option>
              <Select.Option value="นางสาว">นางสาว</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="ชื่อจริง: ">
            <InputName
              placeholder="ชื่อ"
              value={currentFormData.firstName}
              onChange={e => handleEditFormChange("firstName", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="นามสกุล: ">
            <InputName
              placeholder="นามสกุล"
              value={currentFormData.lastName}
              onChange={e => handleEditFormChange("lastName", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="หมายเลขโทรศัพท์มือถือ: " className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-1/5">
                <Select
                  style={{ width: "100%" }}
                  value={currentFormData.countryCode}
                  onChange={value => handleEditFormChange("countryCode", value)}
                >
                  <Select.Option value="11">+11</Select.Option>
                  <Select.Option value="22">+22</Select.Option>
                  <Select.Option value="33">+33</Select.Option>
                  <Select.Option value="66">+66</Select.Option>
                </Select>
              </div>

              <p>-</p>
              <Input
                className="w-full h-[35px] rounded-md"
                placeholder="000000000"
                value={currentFormData.mobilePhoneNumber}
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
              value={currentFormData.nationality}
              onChange={value => handleEditFormChange("nationality", value)}
            >
              <Select.Option value="ไทย">ไทย</Select.Option>
              <Select.Option value="เอเลี่ยน">เอเลี่ยน</Select.Option>
            </Select>
          </Form.Item>

          <div className="w-full flex items-center justify-center gap-6">
            <Form.Item>
              <Button className="bg-white" onClick={handleEditSubmit}>
                save
              </Button>
            </Form.Item>

            <Form.Item>
              <Button className="bg-white" htmlType="submit" onClick={onClose}>
                cancel
              </Button>
            </Form.Item>
          </div>
        </div>
      </Drawer>
    </>
  );
}
