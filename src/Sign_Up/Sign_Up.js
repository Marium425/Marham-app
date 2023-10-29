import PasswordInput from "../PasswordInput/PasswordInput";
import Country from "../Country_Code/country";

export default function Sign_Up(){


 

    return(



<div className='flex w-full h-[635px] bg-white'>

<div className='w-1/2  h-[635px]'>

  <section class="p-6 bg-white ">
    <h2 className="mt-2 text-3xl font-bold text-left text-blue-400 ml-9">Create Account</h2>
    <form novalidate="" action="" class="container flex flex-col mx-auto space-y-6 mt-10">
  

      <div className='flex flex-row pl-8 space-x-20 '>

        {/* <fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm  border-2 border-black">


          <legend>First Name</legend>

          <input type="text" id="fname" name="fname"  />

        </fieldset> */}

        {/* <fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm  border-2 border-black">


          <legend>Last Name</legend>

          <input type="text" id="fname" name="fname" />

        </fieldset> */}


<div class="relative">
       <label class="absolute  ml-[-80px] -mt-1 text-sm font-semibold  bg-white text-blue-400">First Name</label>
       <input type="text" class="block placeholder:text-xs w-full pt-3.5 px-8 py-3.5 mt-2 text-sm placeholder-blue-400 text-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your First Name"/>
    </div>


    
<div class="relative">
       <label class="absolute  ml-[-80px] -mt-1 text-sm font-semibold  bg-white text-blue-400">Last Name</label>
       <input type="text" class="block w-full placeholder:text-xs pt-3.5 px-8 py-3.5 mt-2 text-blue-400 text-sm placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your Last Name"/>
    </div>

      </div>




      <div className='flex flex-row pl-8 space-x-20'>


        
<div class="relative">
       <label class="absolute  ml-[-80px] -mt-1 text-sm font-semibold  bg-white text-blue-400">Email</label>
       <input type="email" class="block w-full placeholder:text-xs  pt-3.5 px-8 py-3.5 mt-2 text-sm text-blue-400 placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your Email"/>
    </div>




    <div class="relative">
       <label class="absolute  ml-[-80px] -mt-1 text-sm font-semibold  bg-white text-blue-400">Phone Number</label>
    
       <input type="text" class="block w-full pt-3.5  placeholder:pl-12  placeholder:text-[12px] px-8 py-3.5 mt-2 text-sm text-blue-400 placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Phone Number"/>
       <Country/>
    </div>

        {/* <fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm  border-2 border-black">


          <legend>Email</legend>

          <input type="text" id="fname" name="fname" className='bg-transparent' />

        </fieldset> */}

        {/* <fieldset class="grid grid-cols-2 gap-6 pl-6 rounded-md shadow-sm  border-2 border-black">


          <legend>Phone-No</legend>

          <input type="text" id="fname" name="fname" />

        </fieldset> */}


      </div>


      <div className='flex flex-row pl-8 space-x-24 '>

        <div className='flex flex-col space-y-3 '>

          <p className='mr-auto font-bold text-blue-400'>Gender</p>

          <div className='flex flex-row pl-12 space-x-8'>

            <div class="">
              <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-400  bg-white border-gray-300 focus:ring-blue-700   " />
              <label for="disabled-radio-1" class="ml-2 text-sm text-blue-400 font-bold">Male</label>
            </div>
            <div class="">
              <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-400 bg-white  focus:ring-blue-700   " />
              <label for="disabled-radio-2" class="ml-2 text-sm font-bold text-blue-400">Female</label>
            </div>

          </div>



        </div>





{/* 
       <div class="relative w-full">
          <div class="absolute inset-y-0 right-0 flex items-center px-2">
            <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
            <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" for="toggle">show</label>
          </div>
          <input class="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password" id="password" type="password" autocomplete="off"
          />
        </div>  */}
        
        
         <PasswordInput/>

{/* <div class="relative  ">
       <label class="absolute  ml-[-80px] -mt-1 text-sm font-semibold  bg-white text-blue-400">Password</label>
       <input type="password" class="block w-full pt-3.5 px-8 py-3.5 mt-2 text-sm placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John"/>
    </div> */}

        


    


      </div>


      <div className='flex flex-row pl-8 '>

        {/* <div class="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
          <label for="default-checkbox" class="ml-2 text-sm  text-black font-bold">Keep me logged in</label>
        </div> */}

<div>
	<label class="flex cursor-pointer gap-2">
		<input type="checkbox" class="checkbox" />
		<span className="text-blue-400">Remember me?</span>
	</label>
</div>

      </div>


      <div className='flex flex-row pl-8 '>

        <button className='bg-blue-800  border-2 border-blue-800 font-bold text-white-500 px-16 py-1.5 rounded-full w-[570px] text-bold text-white'>   Sign Up</button>

      </div>


      <div className='flex flex-row pl-8'>

      <div class="divider divider-horizontal w-4/5 h-0  text-md text-gray-600">or</div>
       
      </div>



      <div className='flex flex-row pl-8'>

        <div className='flex flex-row justify-center space-x-16 space-y-0'>
{/* 
          <button className='mx-6 btn btn-solid-error'>    Sign Up with Google</button> */}

<button type="button" class="btn gap-4 text-center rounded-full px-10 bg-[#ca493d] ">
				<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 48 48" enablebackground="new 0 0 48 48" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
					<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
					<path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
					<path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
					<path
						fill="#1976D2"
						d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
				</svg>
				<span>Sign up with google</span>
			</button>

            <div>  
    <a href="#" class="btn gap-3  text-center bg-blue-600 text-white px-9 transition-colors duration-200 transform border rounded-full  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
        <span class="text-sm text-white ">Sign up with Facebook</span></a>
</div>

        </div>

      </div>



      <div className='flex flex-row w-11/12 '>


        <p className="ml-auto mr-auto text-blue-400">Already Have an account?      <a className='font-semibold text-blue-600 underline' href="#">Login</a>   </p>


      </div>


    </form>
  </section>







</div>









<div className='flex items-center justify-center w-1/2  h-[89.7%]'>



<div className="w-11/12 h-full mt-16 mr-auto">

<img src="https://wikibio.in/wp-content/uploads/2023/08/Kashaf-Ali-while-studying-at-The-Lyceum-School-Karachi.jpg" className="w-4/5 h-full"/> 
    
</div>




    
</div>

</div>






    )
}