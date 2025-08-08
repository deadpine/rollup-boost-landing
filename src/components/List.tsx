import Image from 'next/image'

interface CaseProps {
  icon: string
  title: string
  description: string
}

export default function Case({ icon, title, description }: CaseProps) {
  return (
  <div className="w-full flex flex-row gap-4 pt-6">  
    <Image
      src={icon}
      alt={icon}
      width={24}
      height={24}
      className="h-6 w-6 pt-[2px]"
    />
    <div>
      <b>{title}</b>
      <p>{description}</p>
    </div>
    
  </div>
  )
}
