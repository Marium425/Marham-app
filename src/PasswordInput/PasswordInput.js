import { useState } from "react";

export default function PasswordInput() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="container relative w-full mx-auto ">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        SHOW
      </button>
    </div>
  );
}
