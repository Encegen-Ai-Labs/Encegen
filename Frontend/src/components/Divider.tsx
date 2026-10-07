// components/Divider.tsx

interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div
      className={`component-divider ${className}`}
      aria-hidden="true"
    />
  )
}