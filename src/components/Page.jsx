export default function Page() {

  return (
    <div className="bg-white/70 rounded-xl drop-shadow-lg">
      <div className="w-full bg-gray-300/70 rounded-t-xl">
        <div className="ml-4 ">
          <p className='inline-block text-6xl p-0 text-red-500 hover:text-red-600'>•</p>
          <p className='inline-block text-6xl p-0 text-green-500 hover:text-green-600'>•</p>
          <p className='inline-block text-6xl p-0 text-yellow-500 hover:text-yellow-600'>•</p>
        </div>
      </div>
      <h1 className="p-5 text-6xl font-light">This is some component!</h1>
      <p className="p-5 font-light">oh wow, this is amazing!</p>
    </div>
  )
}