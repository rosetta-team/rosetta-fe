import React from 'react';
import '../../styles/SourceMethod.scss';

const SourceMethod = () => {
  return (
    <section className='method-top-sect'>
      <section className='source-method-name'>
        <h3>Method you want translated: Method Title</h3>
      </section>
      <section className='method-mid-section'>
        <p>Description: "The Array.from() method creates a 
          new, shallow-copied Array instance from an array-like 
          or iterable object.</p>
          <div className='syntax-div'>
          <p>Syntax: Array.from(arrayLike [, mapFn [, thisArg]])\n</p>
          </div>
      </section>
      <section className='method-bottom-sect'>
        <div>
          <p>Snippet: console.log(Array.from('foo'));
            \n// expected output: Array [\"f\", \"o\", \"o\"]\n\n
            console.log(Array.from([1, 2, 3], x => x + x));\n// expected
             output: Array [2, 4, 6]\n</p>
        </div>
      </section>
    </section>
  )
}

export default SourceMethod;