'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  return (
    <div className="flex justify-between mb-4 items-center gap-4">
      <button
        onClick={() => router.push('/')}
        className="text-xl font-bold"
      >
        QuickPick
      </button>

      <button
        onClick={() => router.push('/submit')}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Product
      </button>

      <input
        className="w-[50%] p-2 border rounded"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          router.push(`/?search=${e.target.value}`)
        }}
      />
    </div>
  )
}
