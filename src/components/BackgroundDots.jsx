/* eslint-disable react/prop-types */
function BackgroundDots({
  dotColor = "#3498db",
  dotSize = 5,
  spacing = 20,
  className = "",
}) {
  return (
    <div
      className={`dots-background ${className}`}
      style={{
        background: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    ></div>
  );
}

export default BackgroundDots;
