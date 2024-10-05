import Card from '@/components/Card'
import React from 'react'

const page = () => {
  return (
    <div className='container px-4 mx-auto grid md:grid-cols-3 grid-cols-1'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default page