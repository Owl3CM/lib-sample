import '../src/css/index.css'
export * from '../src/my-index.js'
import e from 'react'
const t = ({ label: t = 'Test' }) => {
  const [a, l] = e.useState('')
  return e.createElement(
    'div',
    { className: 'gap-lg row-center m-lg' },
    e.createElement(
      'p',
      { className: 'button', onClick: () => l('') },
      'clear'
    ),
    e.createElement('input', {
      type: 'text',
      className: 'input',
      onChange: (e) => l(e.target.value)
    }),
    e.createElement(
      'p',
      { className: 'row' },
      e.createElement('span', null, t, ': '),
      e.createElement('span', null, a)
    )
  )
}
export { t as Sample }
