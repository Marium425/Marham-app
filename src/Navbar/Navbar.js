import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// import { faGoogle } from '@fortawesome/free-solid-svg-icons/faGoogle';
// import {faFacebook} from '@fortawesome/free-solid-svg-icons';


library.add(faPhone, faUser, faAngleDown);




function Navbar() {


  return (
    <div className="Navbar">

      <nav class=" border-gray-200 bg-black">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">  Verde     </span>
          </a>

          <div class="flex md:order-2 space-x-4">


            <button type="button" className="px-4 py-2 font-semibold text-gray-100 bg-gray-800 rounded-full">     <FontAwesomeIcon icon="phone" size="xs" />  Help</button>


            <button type="button" className="px-4 py-2 font-semibold text-gray-100 bg-gray-800 rounded">  <FontAwesomeIcon icon="user" size="xs" />  <FontAwesomeIcon className='ml-2' icon="angle-down" size="xs" />          </button>


          </div>







        </div>
      </nav>


</div>


  );
}

export default Navbar;

