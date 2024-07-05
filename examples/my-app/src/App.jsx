import { useState, useEffect } from 'react'
import { MultipleSequenceAlignment } from 'react-bio-viz';

function App() {
  // Initialize two state variables for holding the orthogroup identifier and MSA object
  const [orthogroupId, setOrthogroupId] = useState(1);
  const [msa, setMsa] = useState([{header: 'placeholder', sequence: 'placeholder'}]);

  // Fetch the MSA json from an external source everytime the orthogroup identifier changes
  useEffect(() => {
    const url = `https://raw.githubusercontent.com/holmrenser/introduction_to_react/main/data/${orthogroupId}.json`;
    fetch(url)
      .then(response => response.json())
      .then(msa => setMsa(msa));
  }, [orthogroupId])

  // Build dynamic HTML in the return block
  return (
    <>
      <h1 className='is-size-1'>Orthogroup <input
        className='input'
        id='orthogroup-select'
        type='number'
        min='1'
        max='5'
        value={orthogroupId}
        onChange={({ target: { value } }) => {
          setOrthogroupId(value)
        }}
      /></h1>
      <h4 className='is-size-4'>{`This orthogroup has ${msa.length} sequences and ${msa[0].sequence.length} characters`}</h4>
      
      <MultipleSequenceAlignment msa={msa} width={750}/>
      <h5 className='is-size-5'>Overview</h5>
      <MultipleSequenceAlignment
        msa={msa}
        rowHeight={2}
        width={750}
        colWidth={750 / msa[0].sequence.length}
        showText={false}
        showRowHeader={false}
      />
    </>
  )
}

export default App
