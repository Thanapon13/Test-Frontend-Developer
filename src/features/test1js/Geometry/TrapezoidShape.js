export default function TrapezoidShape({ shapes }) {
  // console.log("shapes", shapes);
  return (
    <>
      <button
        className="w-[200px] h-0 border-l-[25px] border-l-transparent border-b-[85px] border-b-gray-500 border-r-[25px] border-r-transparent"
        value={shapes}
      ></button>
    </>
  );
}
