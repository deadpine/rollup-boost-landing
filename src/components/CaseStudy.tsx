import Image from 'next/image'

interface CaseProps {
  builtfor: string
  logo: string
  description: string
  subtitle: string
}

export default function Case({ builtfor, logo, subtitle, description }: CaseProps) {
  return (
    <div className="w-full flex flex-col gap-8 p-2 md:p-8 overflow-hidden">  
      <div className="w-full flex flex-col items-center justify-center relative">
        <Image
          src={logo}
          alt={logo}
          width={200}
          height={200}
          className="h-24 w-24"
        />
      </div>
      <div>
      <h2 className="text-stone-800 text-center font-semibold text-3xl font-degular pb-2">
        Built for <span className="underline underline-offset-6">{builtfor}</span>
      </h2>
      <h3 className="text-stone-800 text-center font-semibold text-xl font-degular">
        {subtitle}
      </h3>
      </div>
      
      <p>{description}</p>

    </div>
  )
}
