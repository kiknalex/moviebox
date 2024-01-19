export default function Logo() {
  return (
    <div className="flex justify-between content-center gap-4">
      <img alt="logo" src="src\assets\logo.png" width="50" height="50" />
      <h1 className="grid place-content-center text-2xl font-bold leading-6 text-white">
        MovieBox
      </h1>
    </div>
  );
}
