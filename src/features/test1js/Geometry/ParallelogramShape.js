export default function ParallelogramShape({ shape, onClickRandom }) {
  // console.log("shapes[05]:", shape);
  return (
    <>
      <div
        className="w-[200px] h-[100px] transform skew-x-12 bg-gray-500"
        value={shape}
        onClick={onClickRandom}
      ></div>
    </>
  );
}
