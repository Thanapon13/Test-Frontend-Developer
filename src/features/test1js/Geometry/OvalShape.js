export default function OvalShape({ shape, onClickRandom }) {
  // console.log("shape[02]", shape);
  return (
    <>
      <div
        className=" w-[200px] h-[100px] bg-gray-500 rounded-full"
        onClick={onClickRandom}
        value={shape}
      ></div>
    </>
  );
}
