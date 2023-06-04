import { Col, Row } from "antd";
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
  const [shapes, setShapes] = useState(["a", "b", "c", "d", "e", "f"]);
  console.log("shapes:", shapes);

  const onLeftClick = () => {
    const newShapes = [...shapes];
    newShapes.push(newShapes.shift());
    setShapes(newShapes);
  };

  return (
    <div className="w-screen">
      <div className="w-[80%] m-auto">
        {/* ---------Action--------- */}
        <Row className=" m-auto flex justify-center items-center gap-4">
          <Col
            lg={{
              span: 6
            }}
            className="rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
          >
            <div onClick={onLeftClick}>
              <TriangleLeftShape />
            </div>
          </Col>
          <Col
            lg={{
              span: 10
            }}
          >
            <div className="rounded-xl bg-white p-2 flex items-center justify-around cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]">
              <TriangleUpShape />

              <TriangleDownShape />
            </div>
          </Col>
          <Col
            lg={{
              span: 6
            }}
            className="rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
          >
            <TriangleRightShape />
          </Col>
        </Row>

        {/* ---------Shape--------- */}
        <div className="flex flex-col gap-4 mt-10">
          <Row className="flex justify-end items-center gap-4 mr-8">
            <Col
              lg={{
                span: 6
              }}
              className="rounded-xl bg-white p-2 flex justify-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
            >
              <SquareShape shapes={shapes[0]} />
            </Col>

            <Col
              lg={{
                span: 6
              }}
              className="rounded-xl bg-white p-2 flex items-center justify-around cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
            >
              <CircleShape shapes={shapes[1]} />
            </Col>
            <Col
              lg={{
                span: 6
              }}
              className=" rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
            >
              <OvalShape shapes={shapes[2]} />
            </Col>
          </Row>

          <Row className="flex justify-center items-center gap-4">
            <Col
              lg={{
                span: 6
              }}
              className="rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
            >
              <TrapezoidShape shapes={shapes[3]} />
            </Col>
            <Col
              lg={{
                span: 6
              }}
              className="rounded-xl bg-white p-2 flex items-center justify-around cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
            >
              <RectangleShape shapes={shapes[4]} />
            </Col>
            <Col
              lg={{
                span: 6
              }}
              className=" rounded-xl bg-white p-2 text-center cursor-pointer hover:bg-[#ffa200] active:bg-[#6eda78]"
            >
              <ParallelogramShape shapes={shapes[5]} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
