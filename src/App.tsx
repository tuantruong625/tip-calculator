import './App.css';
import BaseHeader from './components/BaseHeader';
import BaseInput from './components/BaseInput';
import TipSelection from './components/TipSelection';

function App() {
  // const options: number[] = [0.05]
  const options: number[] = [0.05, 0.10, 0.15, 0.25, 0.50]
  return (
    <div style={{ backgroundColor: '#b9dee2' }} className="container h-screen mx-auto max-w-4xl flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-self-center" style={{ backgroundColor: '#b9dee2' }}>
        <BaseHeader title="splitter" />

        <div className="col-span-2 bg-gray-50 p-5 rounded-lg grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <BaseInput label="bill" icon="$" />

            <TipSelection tipOptions={options} />

            <BaseInput label="number of people" icon="$" />
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
                  $0.00
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