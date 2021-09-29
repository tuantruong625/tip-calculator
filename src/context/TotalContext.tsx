import React, { createContext, useContext, useEffect, useState } from 'react'
const TotalContext = createContext<TotalContextInterface | null>(null)
interface TotalContextInterface {
 total: number;
 calculateTotal: (bill: number, people: number) => void;
 setTip: (tip: number) => void;
}

export function useTotal() {
 return useContext(TotalContext)
}

export function TotalProvider({ children }: { children: any }): JSX.Element {
 const [total, setTotal] = useState(0)
 const [selectedTip, setSelectedTip] = useState(0)

 const calculateTotal = (bill: number, people: number) => {
  setTotal((bill * (selectedTip + 1)) / people)
 }

 const setTip = (tip: number) => {
  setSelectedTip(tip)
 }

 const value: TotalContextInterface = {
  total,
  calculateTotal,
  setTip
 }

 return (
  <TotalContext.Provider value={value}>
   {children}
  </TotalContext.Provider>
 )
}


