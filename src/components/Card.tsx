import Image from 'next/image'
import Chip from './Chip'

interface CardProps {
  title: string
  image: string
  description: string
}

export default function Card({ title, image, description }: CardProps) {
  return (
    <div className="w-full flex flex-col items-center gap-12 p-8 overflow-hidden">  
      
      <Chip label={title} />
      
      <div className="w-full flex flex-col items-center justify-center relative">
        <Image
          src={image}
          alt={image}
          width={200}
          height={200}
          className="h-72 w-auto"
        />
      </div>

      <p>{description}</p>
    </div>
  )
}
