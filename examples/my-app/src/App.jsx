import { useState, useEffect } from 'react'
import { MultipleSequenceAlignment } from 'react-bio-viz';

function OrthogroupSelection({ orthogroupId, setOrthogroupId }) {
  return (
    <input
      className='input'
      id='orthogroup-select'
      type='number'
      min='1'
      max='5'
      value={orthogroupId}
      onChange={({ target: { value } }) => {
        setOrthogroupId(value)
      }}
    />
  )
}

function App() {
  const [orthogroupId, setOrthogroupId] = useState(1);
  const [msa, setMsa] = useState([{header: 'placeholder', sequence: 'placeholder'}]);

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/holmrenser/introduction_to_react/main/data/${orthogroupId}.json`;
    fetch(url)
    .then(response => response.json())
    .then(msa => setMsa(msa));
  }, [orthogroupId])

  return (
    <>
      <h1 className='is-size-1'>{`Orthogroup ${orthogroupId}`}</h1>
      <h4 className='is-size-4'>{`This orthogroup has ${msa.length} sequences`}</h4>
      <OrthogroupSelection orthogroupId={orthogroupId} setOrthogroupId={setOrthogroupId}/>
      <MultipleSequenceAlignment msa={msa} showRowHeader={true}/>
    </>
  )
}

export default App
