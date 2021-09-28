const BaseInput = ({ label, icon, ...props }: { label: string, icon?: string }): JSX.Element => {
 return (
  <label htmlFor="bill" className="flex flex-col text-gray-700 font-medium capitalize py-4">
   {label}
   <div className="flex items-center">
    <span className="absolute pl-3">{icon}</span>
    <input type="text" name="bill" className="py-3 px-8 rounded-lg text-right w-full" {...props} />
   </div>
  </label>
 )
}

export default BaseInput