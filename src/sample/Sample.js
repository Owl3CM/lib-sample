import React from 'react'

const Sample = () => {
  const [text, setText] = React.useState('')
  return (
    <div className='gap-lg row-center m-lg'>
      <p className='button' onClick={() => setText('')}>
        clear
      </p>
      <input
        type='text'
        className='input'
        onChange={(e) => setText(e.target.value)}
      />
      <p className='row'>
        <span>Text: </span>
        <span>{text}</span>
      </p>
    </div>
  )
}

export default Sample
