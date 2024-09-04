import { useState } from "react";
import "./nerd-font.css";

const DIRECTIONS = ["EAST", "SOUTH", "WEST", "NORTH"];
const DIMENSION = 5;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 0 });

  const rotateAnticlockwise = () => {
    setPosition({
      ...position,
      direction: (position.direction + 3) % 4,
    });
  };

  const rotateClockwise = () => {
    setPosition({
      ...position,
      direction: (position.direction + 1) % 4,
    });
  };

  const moveForward = () => {
    let { x, y, direction } = position;

    switch (DIRECTIONS[direction]) {
      case "EAST":
        x = Math.min(DIMENSION - 1, x + 1);
        break;
      case "SOUTH":
        y = Math.min(DIMENSION - 1, y + 1);
        break;
      case "WEST":
        x = Math.max(0, x - 1);
        break;
      case "NORTH":
        y = Math.max(0, y - 1);
        break;
      default:
        break;
    }

    setPosition({
      ...position,
      x: x,
      y: y,
    });
  };

  return (
    <>
      <h1>Robot Simulator</h1>
      <div className="buttons">
        <button onClick={rotateAnticlockwise}>Rotate Anticlockwise</button>
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateClockwise}>Rotate Clockwise</button>
      </div>
      <div className="grid">
        {[...Array(DIMENSION)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(DIMENSION)].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${
                  position.x === colIndex && position.y === rowIndex
                    ? "robot"
                    : ""
                }`}
              >
                {position.x === colIndex && position.y === rowIndex ? (
                  <i
                    className={`nf nf-fa-${DIRECTIONS[position.direction]}`}
                  ></i>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
