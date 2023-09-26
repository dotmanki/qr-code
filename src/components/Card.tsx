const Card = () => {
  return (
    <div className='bg-white w-80 p-4 rounded-2xl shadow-lg flex flex-col justify-between font-outfit'>
      <img src='image-qr-code.png' className='rounded-2xl mb-3'/>  
      <h3 className='p-3 pb-0 font-extrabold text-xl text-center text-heading lg:text-xl'>Improve your front-end skills by building projects</h3>
      <p className='p-3 text-md text-center text-paragraph pb-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>    
    </div>
  )
}

export default Card