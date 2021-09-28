import React, { createContext, useContext, useState } from 'react'


const TotalContext = createContext<{ total: number } | null>(null)

interface TotalContextInterface {
 total: number
}

export function useTotal() {
 return useContext(TotalContext)
}

export function TotalProvider({ children }: { children: any }): JSX.Element {
 const [total, setTotal] = useState(100)

 const value: TotalContextInterface = {
  total
 }

 return (
  <TotalContext.Provider value={value}>
   {children}
  </TotalContext.Provider>
 )
}


