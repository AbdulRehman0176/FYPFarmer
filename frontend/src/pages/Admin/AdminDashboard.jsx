import React from 'react'
import AdminLayout from '../../component/AdminComponent/AdminLayout'

function AdminDashboard() {
  return (
    <AdminLayout>
      
  <div className='grid grid-cols-3 text-center gap-5 m-7 p-4 '>
    <div className=' bg-[#e9fcd4] p-12 font-semibold rounded-4xl'>
        <p><i className="ri-user-line text-[#229a16] text-5xl p-4 bg-[#d2f1be] rounded-full "></i></p>
        <p className='mt-10 text-2xl text-[#08660d]'>363</p>
        <p className='mt-1 text-xl text-[#62a25d]'>Total user</p>
    </div>
    <div className=' bg-[#d0f2ff] p-12 font-semibold rounded-4xl'>
        <p><i className="ri-user-line text-[#0f56b8] text-5xl p-4 bg-[#acd5f2] rounded-full "></i></p>
        <p className='mt-10 text-2xl text-[#04297a]'>363</p>
        <p className='mt-1 text-xl text-[#4f73ac]'>Total user</p>
    </div>
    <div className=' bg-[#ffe7d9] p-12 font-semibold rounded-4xl'>
        <p><i className="ri-user-line text-[#b82337] text-5xl p-4 bg-[#f2c2bb] rounded-full "></i></p>
        <p className='mt-10 text-2xl text-[#7a0c2e]'>363</p>
        <p className='mt-1 text-xl text-[#ab5d6e]'>Total user</p>
    </div>
    <div className=' bg-red-100 p-12 font-semibold rounded-4xl'>
        <p><i className="ri-user-line text-amber-300 text-5xl p-4 bg-red-50 rounded-full "></i></p>
        <p className='mt-10 text-2xl'>363</p>
        <p className='mt-1 text-xl'>Total user</p>
    </div>
    <div className=' bg-red-100 p-12 font-semibold rounded-4xl'>
        <p><i className="ri-user-line text-amber-300 text-5xl p-4 bg-red-50 rounded-full "></i></p>
        <p className='mt-10 text-2xl'>363</p>
        <p className='mt-1 text-xl'>Total user</p>
    </div>
    <div className=' bg-red-100 p-12 font-semibold rounded-4xl'>
        <p><i className="ri-user-line text-amber-300 text-5xl p-4 bg-red-50 rounded-full "></i></p>
        <p className='mt-10 text-2xl'>363</p>
        <p className='mt-1 text-xl'>Total user</p>
    </div>
</div>

    </AdminLayout>
  )
}

export default AdminDashboard
