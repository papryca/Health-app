import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faCheck} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

const Instruction = () => {
  const [isVisible, setIsVisible] = useState(true);

  function hideAdvertisement() {
    setIsVisible(false);
  }

  return (
    <>
      {isVisible && (
        <div className='bg-purple-medium rounded-lg p-3 mb-5 relative dark:bg-article-background-dark'>
          <p className='text-sm text-gray-dark dark:text-white'>LETS START</p>
          <p className='text-base dark:text-white' >4 steps to be aware :)</p>
          <button className="w-6 h-6 text-gray-dark absolute top-4 right-4 dark:text-white">
            <FontAwesomeIcon icon={faXmark} className='m-auto' onClick={hideAdvertisement}/>
          </button>
          <p className="h-2 bg-red rounded-full my-2"></p>
          <div className='my-2 flex space-x-4'>
            <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
            <p className='text-base text-gray-dark line-through decoration-purple decoration-2 dark:dark:text-gray-soft'>Upload a bill</p>
          </div>
          <div className='my-2 flex space-x-4'>
            <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
            <p className='text-base text-gray-dark line-through decoration-purple decoration-2 dark:text-gray-soft'>Check your bill
              payment</p>
          </div>
          <div className='my-2 flex space-x-4'>
            <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
            <p className='text-base text-gray-dark line-through decoration-purple decoration-2 dark:text-gray-soft'>Add your next
              appointment</p>
          </div>
          <div className='my-2 flex space-x-4'>
            <FontAwesomeIcon icon={faCheck} className='m-0  p-1 w-3 h-3 rounded-full bg-purple text-white '/>
            <p className='text-base text-gray-dark line-through decoration-purple decoration-2 dark:text-gray-soft'>Yoy are aware</p>
          </div>
        </div>
      )}
    </>

  );
};

export default Instruction;
