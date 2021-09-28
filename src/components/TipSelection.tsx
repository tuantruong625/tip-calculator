

const TipSelection = ({ tipOptions }: { tipOptions: string[] }): JSX.Element => {
 return (
  <>
   {
    tipOptions.map((options) => (
     <div className="bg-gray-400">
      {options}
     </div>
    ))
   }
  </>
 )
}

export default TipSelection