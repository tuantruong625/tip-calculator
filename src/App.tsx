import React, { useEffect, useState } from 'react';
import './App.css';
import BaseHeader from './components/BaseHeader';
import BaseInput from './components/BaseInput';
import TipSelection from './components/TipSelection';
import { useTotal } from './context/TotalContext';

function App() {
  const options: number[] = [0.05, 0.10, 0.15, 0.25, 0.50]
  const value = useTotal()

  const [total, setTotal] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(2)
  const [bill, setBill] = useState<number>(0)

  useEffect(() => {
    // setTotal((bill * tip) / people)
  }, [bill, total, people])

  return (
    <div style={{ backgroundColor: '#b9dee2' }} className="container h-screen mx-auto max-w-4xl flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-self-center" style={{ backgroundColor: '#b9dee2' }}>
        <BaseHeader title="splitter" />

        <div className="col-span-2 bg-gray-50 p-5 rounded-lg grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <BaseInput label="bill" icon="$" value={bill} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBill(+e.target.value)} />

            <TipSelection tipOptions={options} tip={tip} />

            <BaseInput label="number of people" icon="$" value={people} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPeople(+e.target.value)} />
          </div>

          <div className="bg-green-800 rounded-lg p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-100">Tip Amount</p>
                  <p className="text-green-200">/ person</p>
                </div>

                <p className="text-4xl text-green-400">
                  $0.00
                </p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-gray-100">Total</p>
                  <p className="text-green-200">/ person</p>
                </div>

                <p className="text-4xl text-green-400">
                  ${value?.total}
                </p>
              </div>
            </div>

            <button className="bg-green-700 w-full py-3 mt-8 md:mt-0 text-green-600 rounded-md">reset</button>
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;