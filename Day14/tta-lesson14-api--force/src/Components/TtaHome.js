import React from 'react'

export default function TtaHome() {
 return (
     <div className="container mt-5">
       {/* Banner với hình nền đẹp */}
       <div 
         className="banner rounded shadow-lg mb-4"
         style={{
           backgroundImage: "url('https://i.pinimg.com/736x/c5/21/81/c52181f5212108d03720d77bdc81955a.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           height: '400px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           color: 'white',
           textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
           borderRadius: '12px'
         }}
       >
         <h1 className="display-4">Chào mừng đến với Hệ thống Quản Lý</h1>
       </div>
 
       {/* Nội dung giới thiệu */}
       <div className="text-center mb-4">
         <p className="lead">
           Hệ thống giúp quản lý thông tin sinh viên dễ dàng, nhanh chóng và hiệu quả.
         </p>
       </div>
 
    
     </div>
  )
}
