import Card from "@/components/Card";
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
              src="/images/base.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
            <Image 
              src="/images/unichain.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
            <Image 
              src="/images/world.png" 
              alt="" 
              width={88} 
              height={88} 
              className="w-22 h-22"
            />
            <Image 
              src="/images/optimism.png" 
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

      <section className="w-full gap-5 items-center">
        <div>
          <h2>
            Verifiable priority ordering within each Flashblock, giving greater guarantees to users and allowing applications to internalize their MEV.
          </h2>
          <p>
            In its final form, this extension model  the unique properties of TEEs will allow rollups to harmonize two previously opposing. The unique properties of TEEs will allow rollups to harmonize two.
          </p>
        </div>
        <div className="grid grid-cols-4">
          <Card 
            title="Decentralization"
            image="/images/decentralization.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Transaction Inclusion"
            image="/images/transaction-inclusion.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Encrypted Mempool"
            image="/images/encrypted-mempool.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Flashblocks"
            image="/images/flashblocks.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
        </div>
      </section>

      <section className="w-full gap-5 items-center">
        <div>
          <h2>
            Use cases: guarantees to users and allowing applications to internalize their MEV
          </h2>
          <p>
            In its final form, this extension model  the unique properties of TEEs will allow rollups to harmonize two previously opposing. The unique properties of TEEs will allow rollups to harmonize two.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <Card 
            title="Decentralization"
            image="/images/decentralization.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Transaction Inclusion"
            image="/images/transaction-inclusion.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Encrypted Mempool"
            image="/images/encrypted-mempool.png"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
        </div>
      </section>

    </main>
    
  );
}
