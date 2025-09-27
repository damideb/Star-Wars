import React from 'react';

export default function MetricCard({metric}:{
    metric:{
        category:string;
        amount:number;
        color:string
    }
}) {
  return (
    <div className=" bg-white w-full rounded-[10px] shadow drop-shadow-lg px-5 py-7 md:max-w-[308px]">
      <div className=" flex justify-between">
        <h3 className=' font-bold text-muted-gray'>{metric.category}</h3>
        <div
          style={{
            backgroundColor: metric.color,
          }}
          className="  block w-6.5 h-6.5 rounded-[5px]"
        />
      </div>

      <div className=' mt-7'>
        <h3 className=' font-bold leading-1 text-muted-gray'>{metric.amount}</h3>
        <span className=" text-[9px] text-[#00992B]">
          20 More than than yesterday
        </span>
      </div>
    </div>
  );
}
