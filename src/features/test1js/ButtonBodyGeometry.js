import { Col, Divider, Row } from "antd";
import { useTranslation } from "react-i18next";
import TriangleLeftShape from "./Geometry/TriangleLeftShape";
import TriangleUpShape from "./Geometry/TriangleUpShape";
import TriangleDownShape from "./Geometry/TriangleDownShape";
import TriangleRightShape from "./Geometry/TriangleRightShape";
import SquareShape from "./Geometry/SquareShape";
import CircleShape from "./Geometry/CircleShape";
import OvalShape from "./Geometry/OvalShape";
import TrapezoidShape from "./Geometry/TrapezoidShape";
import RectangleShape from "./Geometry/RectangleShape";
import ParallelogramShape from "./Geometry/ParallelogramShape";
import { useState } from "react";

export default function ButtonBodyGeometry() {
  const { t, i18n } = useTranslation();
  const [position, setPosition] = useState(false);
  const [shapes, setShapes] = useState([
    "SquareShape",
    "CircleShape",
    "OvalShape",
    "TrapezoidShape",
    "RectangleShape",
    "ParallelogramShape"
  ]);

  const onLeftClick = () => {
    const newShapes = [...shapes];
    newShapes.push(newShapes.shift());
    setShapes(newShapes);
  };

  const onRightClick = () => {
    const newShapes = [...shapes];
    newShapes.unshift(newShapes.pop());
    setShapes(newShapes);
  };

  const onChangePosition = () => {
    const newShapes = shapes.concat(shapes.splice(0, 3));
    setShapes(newShapes);
    setPosition(!position);
  };

  const onClickRandom = () => {
    const newShapes = structuredClone(shapes);
    newShapes.sort(() => Math.random() - 0.5);
    setShapes(newShapes);
  };

  return (
    <div className="w-screen">
      <div className="w-[80%] m-auto mt-10">
        {/* ---------Action--------- */}
        <Row className=" m-auto flex justify-center items-center gap-4">
          <Col
            lg={{
              span: 6
            }}
            className="rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78] z-100"
          >
            <div onClick={onLeftClick} className="reletive z-100">
              <TriangleLeftShape />
            </div>
            <div className="w-full z-[0] absolute flex justify-center">
              <p className="rounded-xl bg-[#6eda78] px-2 text-white">
                {t("Move Shape")}
              </p>
            </div>
          </Col>

          <Col
            lg={{
              span: 10
            }}
            className=" rounded-xl bg-white p-2 cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
          >
            <div
              onClick={onChangePosition}
              className="flex items-center justify-around reletive z-100"
            >
              <TriangleUpShape />

              <TriangleDownShape />
            </div>

            <div className="w-full z-[0] absolute flex justify-center">
              <p className="rounded-xl bg-[#6eda78] px-2 text-white">
                {t("Move Position")}
              </p>
            </div>
          </Col>
          <Col
            lg={{
              span: 6
            }}
            className="rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
          >
            <div onClick={onRightClick} className="reletive z-100">
              <TriangleRightShape />
            </div>

            <div className="w-full z-[0] absolute flex justify-center">
              <p className="rounded-xl bg-[#6eda78] px-2 text-white">
                {t("Move Shape")}
              </p>
            </div>
          </Col>
        </Row>

        {/* ---------Shape--------- */}
        <div className="flex flex-col gap-4 mt-10">
          <Row className="flex justify-center items-center gap-4">
            {shapes.map((shape, index) => (
              <Col
                key={index}
                lg={{
                  span: 6
                }}
                className="rounded-xl bg-white p-2 flex justify-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
              >
                {shape === "SquareShape" && (
                  <SquareShape shape={shape} onClickRandom={onClickRandom} />
                )}
                {shape === "CircleShape" && (
                  <CircleShape shape={shape} onClickRandom={onClickRandom} />
                )}
                {shape === "OvalShape" && (
                  <OvalShape shape={shape} onClickRandom={onClickRandom} />
                )}
                {shape === "TrapezoidShape" && (
                  <TrapezoidShape shape={shape} onClickRandom={onClickRandom} />
                )}
                {shape === "RectangleShape" && (
                  <RectangleShape shape={shape} onClickRandom={onClickRandom} />
                )}
                {shape === "ParallelogramShape" && (
                  <ParallelogramShape shape={shape} />
                )}
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
