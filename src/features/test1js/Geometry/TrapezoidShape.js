export default function TrapezoidShape({ shape, onClickRandom }) {
  // console.log("shape[03]", shape);
  return (
    <>
      <div
        className="w-[200px] h-0 border-l-[25px] border-l-transparent border-b-[85px] border-b-gray-500 border-r-[25px] border-r-transparent"
        value={shape}
        onClick={onClickRandom}
      ></div>
    </>
  );
}
