import React, { useState } from 'react'
import world from "../img/world.jpg"
import ZipCodeInfo from './ZipCodeInfo';
function Home() {
  const [isFocus, setIsFocus] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const submit = () => {
    setIsSubmited(true);
  }
  const clear = () => {
    setPincode("");
    setIsSubmited(false);
  }
  return (
    <div className='w-screen h-screen relative overflow-hidden flex justify-between scrollbar-none'>
      <img src={world} className='w-full h-full object-cover absolute top-0 left-0' />
      
      <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
          <p className='text-3xl font-semibold text-headingColor'>Welcome</p>
          <p className='text-xl text-textColor -mt-6'>Enter the pincode</p>
          <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
            <div className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${isFocus ? "shadow-md shadow-red-400": "shadow-none"}`}>
              <input className='w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none' type="number" placeholder='Enter Pincode' value={pincode} onChange={(e) => {setPincode(e.target.value); setIsSubmited(false)} } onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}  />
            </div>
            <div className='w-full flex justify-around'>
               <button type="button" onClick={submit}
                   className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
                      submit
                 </button>
                 <button type="button" onClick={clear}
                   className="bg-gradient-to-br from-blue-400 to-red-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
                      clear
                 </button>
            </div>

          </div>
      </div>
      {
        isSubmited && <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6'>
            <ZipCodeInfo pincode={pincode} />
        </div>
      }
    </div>
  )
}

export default Home