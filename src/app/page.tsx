import Image from "next/image";

export default function Home() {
  return (
    // <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <main className="font-sans flex flex-col items-center sm:items-start space-y-10 px-8">
      
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <h1>
            Upgrade your rollups across performance, programmability, and decentralization.
          </h1>
          <p>
            used by leading projects
          </p>
          <div className="flex gap-4">
            <Image 
              src="/base.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
            <Image 
              src="/unichain.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
            <Image 
              src="/world.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
            <Image 
              src="/optimism.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
          </div>
        </div>
        <Image 
          src="/hero.png" 
          alt="" 
          width={500} 
          height={500} 
          className="w-120 max-w-fill h-auto mx-auto"
        />
      </section>

    </main>
    
  );
}
