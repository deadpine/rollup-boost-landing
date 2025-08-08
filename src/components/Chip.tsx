interface Chip {
  label: string
}

export default function Chip({ label }: Chip) {
  return (
  <div className="w-fit px-5 py-3 bg-[#272A22] shadow-lg rounded-full">  
    <p className="font-mono font-medium text-sm text-white uppercase">
      {label}
    </p>
  </div>
  )
}
