import { useState } from "react";
import "./nerd-font.css";

const DIRECTIONS = ["EAST", "SOUTH", "WEST", "NORTH"];
const DIMENSION = 5;

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 0 });
  return (
    <>
      <h1>Robot Simulator</h1>
      <div className="buttons">
        <button>Rotate Left</button>
        <button>Move Forward</button>
        <button>Rotate Right</button>
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
