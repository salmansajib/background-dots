import BackgroundDots from "./components/BackgroundDots";

function App() {
  return (
    <div>
      <main>
        <div className="relative bg-neutral-100 min-h-screen flex items-center justify-center">
          <BackgroundDots
            dotColor="#e5e5e5"
            dotSize={1.5}
            spacing={20}
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 text-center mt-10 p-4">
            <h1 className="text-6xl font-bold text-gray-900">
              Welcome to My App
            </h1>
            <p className="text-lg mt-4 text-gray-500">
              Enjoy the perfectly aligned dotted background!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
