import Button from "./Button";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 bg-white">
      
      {/* Logo → Mobile only */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="w-10"></div>
        <img src={logo} alt="logo" className="h-10" />
        <div className="flex flex-col leading-tight">
          <span className="text-base font-bold">Glamorous</span>
          <span className="text-xs font-medium text-gray-500">
            For Brand
          </span>
        </div>
      </div>

      {/* Button → Always same position */}
      <div className="ml-auto">
        <Button text="Continue" />
      </div>

    </header>
  );
}