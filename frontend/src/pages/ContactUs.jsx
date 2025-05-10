import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import UserLayout from '../component/UserLayout';
function ContactUs() {
  return (
    <>
    <UserLayout>
   <div className="flex items-center justify-center " style={{ height: "calc(85vh - 70px)" }}>
      {/* <div className="bg-blue-500 text-white p-8 rounded-xl text-2xl">
        Main Center Div
      </div> */}
      <div className=" mx-auto mt-10   bg-white  shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-center  bg-green-500 text-white p-2">Get In Touch With Us Now!</h2>
     <div className='grid grid-cols-2 text-center '>
        <div className='p-12 border-b-1 border-r-1'>
            <p><CallIcon sx={{ fontSize: 40 }}/></p>
            <p className='font-semibold text-xl mt-2 mb-2'>Phone Number</p>
            <p>+92 312 421 4211</p>
        </div>
    
        <div className='p-12 border-b-1'>
            <p><EmailIcon sx={{ fontSize: 40 }}/></p>
            <p className='font-semibold text-xl mt-2 mb-2'>Email</p>
            <p>MinahilTahir@gmail.com</p>
        </div>
        <div className='p-12 border-r-1'>
            <p><AddLocationIcon sx={{ fontSize: 40 }}/></p>
            <p className='font-semibold text-xl mt-2 mb-2'>Location</p>
            <p>Comsats university islambad</p>
        </div>
        <div className='p-12'>
            <p><AccessTimeFilledIcon sx={{ fontSize: 40 }}/></p>
            <p className='font-semibold text-xl mt-2 mb-2'>Working Hours</p>
            <p>Monday to Friday</p>
            <p>09:00Am to 06:00PM</p>
        </div>
     </div>
    </div>
    </div>
 
</UserLayout>
    </>
  )
}

export default ContactUs
