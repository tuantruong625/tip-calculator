import React, { createContext, useContext, useState } from 'react'
const TotalContext = createContext<TotalContextInterface | null>(null)
interface TotalContextInterface {
 total: number;
 calculateTotal: (bill: number, people: number) => void;
 setTip: (tip: number) => void;
 setTipAmountPerPerson: (bill: number, people: number,) => void;
 tipSpilt: number;
}

export function useTotal() {
 return useContext(TotalContext)
}

export function TotalProvider({ children }: { children: any }): JSX.Element {
 const [total, setTotal] = useState(0)
 const [selectedTip, setSelectedTip] = useState(0)
 const [tipSpilt, setTipSpilt] = useState(0)

 const calculateTotal = (bill: number, people: number) => {
  setTotal((bill * (selectedTip + 1)) / people)
 }

 const setTip = (tip: number) => {
  setSelectedTip(tip)
 }

 const setTipAmountPerPerson = (bill: number, people: number) => {
  setTipSpilt(bill * (selectedTip) / people)
 }

 const value: TotalContextInterface = {
  total,
  calculateTotal,
  setTip,
  setTipAmountPerPerson,
  tipSpilt
 }

 return (
  <TotalContext.Provider value={value}>
   {children}
  </TotalContext.Provider>
 )
}


