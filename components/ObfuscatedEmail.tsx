'use client'

import { useEffect, useState } from 'react'

interface ObfuscatedEmailProps {
  className?: string
  showIcon?: boolean
}

export default function ObfuscatedEmail({ className = '', showIcon = false }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Decode email on client side only
    const user = 'scottdhjackson'
    const domain = 'gmail.com'
    setEmail(`${user}@${domain}`)
  }, [])

  if (!email) {
    return <span className={className}>Loading...</span>
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={(e) => {
        // Additional layer: construct mailto on click
        e.preventDefault()
        window.location.href = `mailto:${email}`
      }}
    >
      {email}
    </a>
  )
}
