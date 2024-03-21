import React, { useRef, useEffect } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "green";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  /* context.beginCanvas();
  context.moveTo(0, 0);
  context.lineTo(500, 500);
  context.stroke(); */

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default CanvasComponent;
