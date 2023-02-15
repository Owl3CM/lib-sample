import React from 'react'

export const Icons = (Key, className = 'icon') => {
  return <img src={Icons[Key]} className={className} />
}

const Svgs = {
  Logo: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ padding: 20, maxHeight: 200, marginBottom: 20 }}
      height='40vh'
      viewBox='0 0 544.22 544.22'
    >
      <path
        className='fill-logo'
        d='M630.79,247.24H360A136.67,136.67,0,0,0,223.18,383.8V654.69A136.66,136.66,0,0,0,359.74,791.46H630.62A136.66,136.66,0,0,0,767.4,654.91V384A136.69,136.69,0,0,0,630.79,247.24Zm-.2,477a62.62,62.62,0,0,1-51.39-51.4h37.27a26.59,26.59,0,0,0,49,0h37.28A62.62,62.62,0,0,1,630.59,724.22Z'
        transform='translate(-223.18 -247.24)'
      />
      <g id='Layer_4' data-name='Layer 4'>
        <path
          className='fill-prim'
          d='M639.69,522.41A62.6,62.6,0,0,0,583,611.62H543.82V523h-36V662.67h0a27.23,27.23,0,0,1-27.2,27.19v36a63.3,63.3,0,0,0,63.22-63h0V647.64h95.87a62.62,62.62,0,0,0,0-125.23Zm0,89.21h0A26.59,26.59,0,1,1,666.28,585,26.62,26.62,0,0,1,639.68,611.62Z'
          transform='translate(-223.18 -247.24)'
        />
        <path
          className='fill-prim'
          d='M349.51,689.81a26.62,26.62,0,0,1-26.59-26.59h-36A62.69,62.69,0,0,0,349,725.83v0h63.15v-36H349.51Z'
          transform='translate(-223.18 -247.24)'
        />
        <circle className='fill-prim' cx='239.38' cy='421.39' r='18.01' />
        <path
          className='fill-prim'
          d='M444,523v61.42h0a27.18,27.18,0,0,1-27.19,27.19H349.51a26.62,26.62,0,0,1-26.59-26.44h0a26.59,26.59,0,0,1,53.18,0h36a62.62,62.62,0,0,0-125.23-.15h0A62.69,62.69,0,0,0,349,647.66h67.78A63.21,63.21,0,0,0,480,584.46h0V523Z'
          transform='translate(-223.18 -247.24)'
        />
      </g>
      <path
        fill='#2d2d35'
        opacity={0.5}
        d='M702.71,672.82a62.62,62.62,0,0,1-123.51,0h37.27a26.59,26.59,0,0,0,49,0Z'
        transform='translate(-223.18 -247.24)'
      />
    </svg>
  ),

  BalanceLink: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ fill: 'var(--blue)' }}
      viewBox='0 0 24 24'
      height={20}
    >
      <path d='M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z'></path>
    </svg>
  )
}

const Icon = (props) => {
  return <ima props />
}

export default Svgs

const ICONS = {
  Persion: '/public/icons/user.png',
  Password: '/public/icons/password.png',
  Phone: '/public/icons/phone.png'
}
