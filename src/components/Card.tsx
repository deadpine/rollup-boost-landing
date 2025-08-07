import Image from 'next/image'

interface CardProps {
  title: string
  image: string
  description: string
}

export default function Card({ title, image, description }: CardProps) {
  return (
    <div className="w-full flex flex-col gap-16 p-8 overflow-hidden">  
      
      <p>{title}</p>
      
      <div className="w-full flex flex-col items-center justify-center relative">
        <Image
          src={image}
          alt={image}
          width={200}
          height={200}
          className="h-70 w-auto"
        />
      </div>

      <p>{description}</p>
    </div>
  )
}
