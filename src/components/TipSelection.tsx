import React, { useEffect, useState } from 'react';
import { useTotal } from '../context/TotalContext';

const TipSelection = ({ tipOptions }: { tipOptions: number[] }): JSX.Element => {
 const value = useTotal()

 return (
  <div className="grid grid-cols-2 md:grid-cols-3 pt-5 gap-2">
   {
    tipOptions.map((options, index) => (
     <button key={index} onClick={() => value?.setTip(options)} className="bg-green-700 hover:bg-green-300 hover:text-gray-800 py-2 px-6 rounded-md text-gray-100 col-span-1">
      {options * 100}%
     </button>
    ))
   }
   <button className="bg-gray-100 hover:bg-green-300 hover:text-gray-800 py-2 px-6 rounded-md text-gray-700 col-span-1">
    Custom
   </button>
  </div>
 )
}

export default TipSelection