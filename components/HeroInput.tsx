import React from 'react'
import LinkInput from './LinkInput'

function HeroInput() {
  return (
    <div className='bg-base-200 rounded-md py-10'>
        <div>
            <h1 className='text-center  text-2xl font-semibold w-2/3 mx-auto text-base-content'>
                Find random comment from any youtube video, <span className='underline '>for free!</span>
            </h1>
        </div>
        <div>
            <LinkInput/>

        </div>
    </div>
  )
}

export default HeroInput