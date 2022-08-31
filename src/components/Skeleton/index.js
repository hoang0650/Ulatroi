import React from 'react';
const Skeleton = () => {
  return (
    <div className="border shadow rounded-md p-4w-full max-w-2xl mx-auto p-2 bg-white">
      <div className='flex justify-center'>
      <div></div>
      <div><div className="rounded-full bg-slate-300 h-10 w-10"></div></div>
      <div></div>
      </div>
    <div className="animate-pulse flex space-x-4">
    
      <div className="flex-1 space-y-6 py-1">
      {/* <div className='h-2/4 bg-neutral-300'></div> */}
        <div className="space-y-3">
          <div className='grid grid-cols-12'>
          <div className="h-32 bg-slate-300 rounded col-span-12"></div>

          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="h-2 bg-slate-300 rounded col-span-2"></div>
            <div className="col-span-8"></div>
            <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            <div className="h-2 bg-slate-300 rounded col-span-1"></div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            <div className="col-span-8"></div>
       
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Skeleton;
