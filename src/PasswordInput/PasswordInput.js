import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const onMouseDownShowButton = (e) => {
    e.preventDefault();
    setShowPassword(true);
  };

  const onMouseUpShowButton = (e) => {
    e.preventDefault();
    setShowPassword(false);
  };

  return (
<div class="relative">
       <label class="absolute  ml-[-80px] -mt-1 font-medium text-gray-600 bg-white">First Name</label>
       <input  
          class="block w-full px-8 py-3 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
           placeholder="John"
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-8 py-3 mt-2 text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onMouseDown={(e)=> onMouseDownShowButton(e)}
         onMouseUp={(e)=>onMouseUpShowButton(e)}
          onMouseLeave={(e)=>onMouseUpShowButton(e)}
          className="absolute text-gray-600 top-2 right-2"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    
  );
};

export default PasswordInput;
