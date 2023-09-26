const Card = () => {
  return (
    <div className='bg-white w-96 p-4 rounded-2xl shadow-lg flex flex-col justify-between'>
      <img src='image-qr-code.png' className='rounded-2xl'/>  
      <h3 className='p-3 pb-0 font-bold text-lg text-center text-heading lg:text-2xl'>Improve your front-end skills by building projects</h3>
      <p className='p-3 text-center text-paragraph lg:text-lg pb-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>    
    </div>
  )
}

export default Card