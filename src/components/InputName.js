import { Input } from "antd";
export default function InputName({ onChange, placeholder, value, style }) {
  return (
    <>
      <Input
        className="w-full h-[35px] rounded-md"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        style={style}
      />
    </>
  );
}
