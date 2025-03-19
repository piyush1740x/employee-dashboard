"use client"
import EmpCard from '@/components/EmpCard'
import SearchBaar from '@/components/SearchBaar'
import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='p-6 relative'>
      <SearchBaar setSearchQuery={setSearchQuery}/>
      <EmpCard searchQuery={searchQuery}/>
    </div>
  )
}

export default Page