import React from 'react';
import './TargetBlock.scss';

const TargetBlock = () => {
  return (
    <section className='target-block-sect'>
      <h3>The JavaScript equivalent is 'map'</h3>
      <label>Description:</label>
      <p>The Map object holds key-value pairs and remembers the
        original insertion order of the keys. Any value (both objects 
        and primitive values) may be used as either a key or a value.</p>
        <hr />
      <code>
        let original = new Map([[1, 'one']])
        let clone = new Map(original)

        console.log(clone.get(1))       // one
        console.log(original === clone) // false (useful for shallow comparison)
      </code>
    </section>
  )
}

export default TargetBlock;