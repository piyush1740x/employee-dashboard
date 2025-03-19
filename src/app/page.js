"use client"
import EmpCard from '@/components/EmpCard'
import SearchBaar from '@/components/SearchBaar'
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='p-6'>
      <SearchBaar setSearchQuery={setSearchQuery}/>
      <EmpCard searchQuery={searchQuery}/>
    </div>
  )
}

export default page