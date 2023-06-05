export default function RectangleShape({ shape, onClickRandom }) {
  // console.log("shapes[04]:", shape);
  return (
    <>
      <div
        className="w-[200px] h-[100px] bg-gray-500"
        value={shape}
        onClick={onClickRandom}
      ></div>
    </>
  );
}
