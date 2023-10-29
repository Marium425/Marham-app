import React from 'react'

const Login = () => {
    return (
        <div class="LogIn">
            <div className='flex mt-3 w-full h-screen bg-green-900'>
                <div className='flex flex-col w-1/2 bg-white '>
                    <div className='w-2/3 h-3/4 bg-white mx-auto my-auto'>
                        <div className='flex'>
                            <label className='text-blue-700 font-bold text-3xl'>Log In</label>
                        </div>
                        <div className="relative mt-7">
                            <label className="absolute max-xl:ml-[-160px] max-lg:ml-[-135px] ml-[-200px] -mt-2 text-sm font-semibold  bg-white text-blue-400">Email</label>
                            <input type="text" className="block w-full pt-3.5 px-8 py-3.5 mt-2 text-sm placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your Email" />
                        </div>
                        <div className="relative mt-5">
                            <label className="absolute max-xl:ml-[-160px] max-lg:ml-[-135px] ml-[-200px] -mt-2 text-sm font-semibold  bg-white text-blue-400">Password</label>
                            <input type="text" className="block w-full pt-3.5 px-8 py-3.5 mt-2 text-sm placeholder-blue-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your Password" />
                        </div>
                        <div className="flex flex-row w-full mt-4 px-6 max-lg:px-1 max-lg:bg-red-500">
                            <input id="disabled-radio-1" type="checkbox" value="" name="disabled-radio" className="mt-[2px] w-4 h-4 max-xl:w-3 max-xl:h-3  text-blue-400  bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2" />
                            <label for="disabled-radio-1" class="ml-2 max-xl:ml-0 max-xl:text-xs text-sm text-blue-400 font-normal">Keep Me Logged In</label>
                            <label class="ml-36 max-xl:ml-20 max-lg:ml-16 max-xl:text-xs text-sm text-blue-400 font-normal underline cursor-pointer">Forgot Password?</label>
                        </div>
                        <button className='bg-blue-900 mt-5 w-full mr-auto ml-auto border-2 border-blue-800 font-bold text-white-500 px-16 py-1.5 rounded-full text-bold text-white tracking-widest'>Log In</button>
                        <div class="divider mt-6 divider-horizontal w-full h-0 ml-auto mr-auto text-md text-black">or</div>
                        <button type="button" class="btn mt-4 w-full gap-4 text-center rounded-full px-10 bg-[#ca493d] ">
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
                            <a href="#" class="btn mt-4 w-full gap-3 text-center bg-blue-600 text-white px-9 transition-colors duration-200 transform border rounded-full  ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <span class="text-sm text-white ">Sign up with Facebook</span></a>
                        </div>
                        <div className='pt-3'>
                            <label className="text-sm text-blue-400 font-normal ">Don't Have An Account? <span className='text-sm text-blue-400 font-bold underline cursor-pointer'>Sign Up</span></label>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 bg-red-500'>div2</div>
            </div>
        </div>
    )
}

export default Login