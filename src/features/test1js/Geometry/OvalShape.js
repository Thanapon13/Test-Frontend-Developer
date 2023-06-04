export default function OvalShape({ shapes }) {
  // console.log("shapes", shapes);
  return (
    <>
      <div
        className=" w-[200px] h-[100px] bg-gray-500 rounded-full"
        value={shapes}
      ></div>
    </>
  );
}
