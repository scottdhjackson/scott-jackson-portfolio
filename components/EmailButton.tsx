'use client'

interface EmailButtonProps {
  className?: string
  children: React.ReactNode
}

export default function EmailButton({ className, children }: EmailButtonProps) {
  const handleClick = () => {
    const user = 'scottdhjackson'
    const domain = 'gmail.com'
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
