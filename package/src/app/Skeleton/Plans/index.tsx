const PlansSkeleton = () => {
  return (
    <>
      <div>
        <div
          role='status'
          className='max-w-sm animate-pulse bg-white rounded-2xl p-10 shadow-lg'>
          <div className='h-2 w-24 bg-gray-200 rounded-full mb-4'></div>
          <div className='h-10 bg-gray-200 rounded-full  max-w-[360px] my-10'></div>

          <div className='h-2 w-48 bg-gray-200 rounded-full  mb-2.5'></div>
          <div className='h-2 w-20 bg-gray-200 rounded-full  max-w-[330px] mb-2.5'></div>
          <div className='h-2 w-56 bg-gray-200 rounded-full  max-w-[300px] mb-2.5'></div>

          <div className="my-10">
            <div className='h-2 bg-gray-200 rounded-full  mb-2.5'></div>
            <div className='h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5'></div>
            <div className='h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5'></div>
            <div className='h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5'></div>
            <div className='h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5'></div>
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </>
  )
}

export default PlansSkeleton
