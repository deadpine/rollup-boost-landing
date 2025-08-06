import Image from 'next/image'

interface CaseProps {
  builtfor: string
  logo: string
  description: string
  subtitle: string
}

export default function Case({ builtfor, logo, subtitle, description }: CaseProps) {
  return (
    <div className="w-full flex flex-col gap-1 pt-6 border-t border-gray-200 overflow-hidden">  
      <div className="w-full flex flex-col items-center justify-center relative">
        <Image
          src={logo}
          alt={logo}
          width={200}
          height={200}
          className="h-24 w-24"
        />
      </div>
      <p>Built for {builtfor}</p>
      <p>{subtitle}</p>
      <p>{description}</p>
    </div>
  )
}
