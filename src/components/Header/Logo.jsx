export default function Logo() {
  return (
    <a href="#" className="flex justify-between content-center gap-4">
      <img alt="logo" className="" src="/logo.png" width="50" height="50" />
      <h1 className="hidden sm:grid text-xl md:text-2xl grid place-content-center font-bold leading-6 text-white">
        MovieBox
      </h1>
    </a>
  );
}
