import { Input } from "antd";
export default function InputName({ onChange, placeholder, value }) {
  return (
    <>
      <Input
        className="w-full h-[35px] rounded-md"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}
