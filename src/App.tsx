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

          <div className="bg-green-800 rounded-lg">
            hi
          </div>
        </div>

      </div>
    </div >
  );
}

export default App;