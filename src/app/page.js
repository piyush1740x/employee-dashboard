"use client"
import EmpCard from '@/components/EmpCard'
import Model from '@/components/Model'
import SearchBaar from '@/components/SearchBaar'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='p-6 relative'>
      {/* <Model/> */}
      <SearchBaar setSearchQuery={setSearchQuery}/>
      <EmpCard searchQuery={searchQuery}/>
    </div>
  )
}

export default page