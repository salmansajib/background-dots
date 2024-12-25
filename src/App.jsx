import BackgroundDots from "./components/BackgroundDots";

function App() {
  return (
    <div>
      <div className="relative bg-neutral-100 min-h-screen flex items-center justify-center">
        <BackgroundDots
          dotColor="#e5e5e5"
          dotSize={1.5}
          spacing={20}
          className="absolute inset-0 z-0"
        />

        <div className="relative z-10 text-center mt-10 text-gray-600">
          <h1 className="text-6xl font-bold">Welcome to My App</h1>
          <p className="text-xl mt-4">
            Enjoy the perfectly aligned dotted background!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
