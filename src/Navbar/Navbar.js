import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { faGoogle } from '@fortawesome/free-solid-svg-icons/faGoogle';
// import {faFacebook} from '@fortawesome/free-solid-svg-icons';


library.add(faPhone,faUser,faAngleDown,faGoogle);




function Navbar() {

  
  return (
<div className="Navbar">
      
<nav class="bg-yellow-300 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">  Verde     </span>
  </a>
  
<div class="flex md:order-2 space-x-4">
      

<button type="button" className="px-4 py-2 font-semibold rounded-full bg-gray-800 text-gray-100">     <FontAwesomeIcon icon="phone" size="xs" />  Help</button>


<button type="button" className="px-4 py-2 font-semibold rounded bg-gray-800 text-gray-100">  <FontAwesomeIcon icon="user" size="xs" />  <FontAwesomeIcon className='ml-2' icon="angle-down"  size="xs" />          </button>


</div>






  
</div>
</nav>


<div className='bg-green-900 flex w-full h-screen'>

<div className='bg-blue-900 w-1/2'>div1

<section class="p-6 bg-gray-100 text-gray-900">
<form novalidate="" action="" class="container flex flex-col mx-auto space-y-12">
		

<div className='flex flex-row space-x-6'>



<fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm bg-gray-50 border-2 border-black">
			
            
                <legend>First Name</legend>
               
               <input  type="text" id="fname" name="fname" />
                    
</fieldset>

<fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm bg-gray-50 border-2 border-black">
			
            
                <legend>Last Name</legend>
               
               <input  type="text" id="fname" name="fname" />
                    
</fieldset>


        </div>




        <div className='flex flex-row space-x-6'>



        <fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm bg-gray-50 border-2 border-black">
			
            
                <legend>Email</legend>
               
               <input  type="text" id="fname" name="fname" />
                    
		</fieldset>

        <fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm bg-gray-50 border-2 border-black">
			
            
                <legend>Phone-No</legend>
               
               <input  type="text" id="fname" name="fname" />
                    
		</fieldset>


        </div>



<div className='flex flex-row space-x-6'>
        
<div className='w-1/2 flex flex-col space-y-2'>

<p className='mr-auto font-bold'>Gender</p>

<div className='flex flex-row space-x-4 pl-8'>

<div class="">
    <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="disabled-radio-1" class="ml-2 text-sm text-black font-bold">Male</label>
</div>
<div class="">
    <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="disabled-radio-2" class="ml-2 text-sm  text-black font-bold">Female</label>
</div>

</div>

    

</div>






<div class="relative w-full">
    <div class="absolute inset-y-0 right-0 flex items-center px-2">
      <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
      <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" for="toggle">show</label>
    </div>
    <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password" id="password" type="password" autocomplete="off"
    />
  </div>

</div>


<div className='space-x-6'>

<div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-2 text-sm  text-black font-bold">Keep me logged in</label>
</div>

</div>


<div className='space-x-6'>

<button className='bg-blue-800  border-2 border-blue-800 font-bold text-white-500 px-16 rounded-lg w-[550px]'>    Sign Up</button>

</div>


<div className='space-x-6'>

<div className='divider text-sm'>

or

</div>

</div>



<div className='space-x-6'>

<div className='flex flex-row justify-center'>

<button className='btn btn-solid-error mx-6'>   <FontAwesomeIcon icon="faGoogle" size="xs" />   Sign Up with Google</button>

<button className='btn btn-solid-primary mx-6'>   Sign Up with Facebook</button>

</div>

</div>



<div className='space-x-6 text-center'>


<p>Already Have an account?  <a className='text-blue-400' href="#">Login</a>   </p>


</div>

		
</form>
</section>







</div>









<div className='bg-red-500 w-1/2'>div2</div>

</div>



</div>




  );
}

export default Navbar;

