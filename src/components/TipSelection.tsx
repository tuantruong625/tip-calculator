import React, { useEffect, useState } from 'react';

const TipSelection = ({ tipOptions, tip }: { tipOptions: number[], tip: number | undefined }): JSX.Element => {
 const [selectedTip, setSelectedTip] = useState<number>(0)

 return (
  <div className="grid grid-cols-2 md:grid-cols-3 pt-5 gap-2">
   {
    tipOptions.map((options, index) => (
     <button key={index} onClick={() => (options)} className="bg-green-700 hover:bg-green-300 hover:text-gray-800 py-2 px-6 rounded-md text-gray-100 col-span-1">
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