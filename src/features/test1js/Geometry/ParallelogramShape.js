export default function ParallelogramShape({ shapes }) {
  // console.log("shapes:", shapes);
  return (
    <>
      <button
        className="w-[200px] h-[100px] transform skew-x-12 bg-gray-500"
        value={shapes}
      ></button>
    </>
  );
}
