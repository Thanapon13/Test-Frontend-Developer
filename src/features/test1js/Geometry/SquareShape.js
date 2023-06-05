export default function SquareShape({ shape, onClickRandom }) {
  // console.log("shape[0]", shape);

  return (
    <>
      <div
        className="w-[100px] h-[100px] bg-gray-500"
        value={shape}
        onClick={onClickRandom}
      ></div>
    </>
  );
}
