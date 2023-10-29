import React, { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faEye,faEyeSlash)

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
       <label class="absolute  ml-[-80px] -mt-1 text-sm font-semibold  bg-white text-blue-400">Password</label>
       <input  
          class="block w-full px-8 py-3 mt-2 text-base placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none "
           placeholder=""
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full pt-3.5 px-8 py-3.5 mt-2 text-sm text-blue-400 placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
        />
        <button
          onMouseDown={(e)=> onMouseDownShowButton(e)}
         onMouseUp={(e)=>onMouseUpShowButton(e)}
          onMouseLeave={(e)=>onMouseUpShowButton(e)}
          className="absolute text-gray-600 top-2 right-2"
        >
          {showPassword ?  <FontAwesomeIcon icon="eye-slash" size="md" className='mt-4'/> :  <FontAwesomeIcon icon="eye" size="md" className='mt-4'/>}
          
        </button>
      </div>
    
  );
};

export default PasswordInput;
