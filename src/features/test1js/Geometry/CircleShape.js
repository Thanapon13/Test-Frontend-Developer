export default function CircleShape({ shapes }) {
  console.log("--shapes[1]--", shapes);
  return (
    <>
      <div
        className=" w-[100px] h-[100px] bg-gray-500 rounded-full"
        value={shapes}
      ></div>
    </>
  );
}
