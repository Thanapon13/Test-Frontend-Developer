export default function CircleShape({ shape, onClickRandom }) {
  // console.log("--shape[1]--", shape);
  return (
    <>
      <div
        className=" w-[100px] h-[100px] bg-gray-500 rounded-full"
        value={shape}
        onClick={onClickRandom}
      ></div>
    </>
  );
}
