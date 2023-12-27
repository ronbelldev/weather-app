'use client'
import React, { useState } from 'react'
import Input from '@/app/components/Input'

export default function Home() {
  const [data, setData] = useState(null)
  // const [isPending, setIsPending] = useState(false)


  const onSearchCity = city => {
      setData(data)
      fetch('http://localhost:3001/api/getWeather?' +  new URLSearchParams({ city }))
          .then(res => res.json())
          .then(data => console.log("data: ", data))
  }

  return (
    <div className='home'>
      <Input onChange={onSearchCity} />
          {/*{isPending && <div>Loading....</div>}*/}
          {/*{error && <div>{error}</div>}*/}
      {data && data.map((name) =>  console.log("name: ", name) || <div>fsf</div>)}
    </div>
  )
}
