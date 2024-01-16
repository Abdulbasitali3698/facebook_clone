import Image from 'next/image'

export default function Home() {
  return (
    <main  >
      <div>
      <div className=' container mt-48 flex mx-auto items-center justify-center'>
        <div className='left w-1/2 mx-14'>
          <img className='w-60' src="/download.png" alt="image"  />
          <p className='text-xl '>Facebook helps you connect and </p>
          <p className='text-xl'>share with the people in your life</p>
        </div>    
        <div className='right flex flex-col bg-white p-8 rounded-lg w-1/4 border-2'>
        <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type="text" placeholder='Email address or phone number' />
        <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type="password" placeholder='Password' />
        <button className='btn bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold '>Log In</button>
        <span className='text-blue-600 text-sm my-2 text-center cursor-pointer hover:underline'>Forgotten Password?</span>
        <hr className='my-2' />
        <button className='btn bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit '>Create New Account </button>
        </div>
      </div>
      </div>
    </main>
  )
}
