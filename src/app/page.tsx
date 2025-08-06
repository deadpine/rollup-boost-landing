import Card from "@/components/Card";
import CaseStudy from "@/components/CaseStudy";
import Image from "next/image";

export default function Home() {
  return (
    // <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <main className="font-sans flex flex-col items-center sm:items-start space-y-40 px-8 pb-20">
      
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
          src="/images/hero.png" 
          alt="" 
          width={500} 
          height={500} 
          className="h-160 w-auto max-w-fill mx-auto"
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
          <CaseStudy
            logo="/images/base.png"
            builtfor="Commerce"
            subtitle="Flashblocks"
            description="
              Base pairs with Rollup-Boost Flashblocks to slash settlement from seconds to 250 ms, making on-chain shopping feel web-native. 
              Instant confirmations and revert protection let merchants offer one-tap checkouts, dynamic pricing, and loyalty perks without fear of failed swaps or front-running. Internalizes MEV, lowering spreads and enabling gas-sponsored purchases that keep fees near zero—even on peak days."
          />
          <CaseStudy
            logo="/images/world.png"
            builtfor="Humans"
            subtitle="Priority-Based Hints"
            description="
              World layers PBH (Priority-Based Hints) atop Rollup-Boost to deliver an experience built for humans, not bots. 
              Wallets encode user intent directly in the hint; the TEE enforces it, guaranteeing transactions run in the promised order. With Flashblocks, everyday transfers, game moves, and identity proofs settle in 250 ms, while encrypted mempools keep data private from sequencers. The result: web2-like."
          />
          <CaseStudy
            logo="/images/unichain.png"
            builtfor="DeFi"
            subtitle="Bundles & Revert Protection"
            description="
              Unichain turns on Rollup-Boost Bundles and revert protection to give DeFi builders CEX-grade speed with Ethereum-grade openness.
              Complex arbitrage or leverage chains batch into a single Bundle, settle in 250 ms, and revert safely if any leg fails—saving gas and sanity. Verifiable ordering locks in fair execution, internalizing MEV for LPs and tightening spreads. Under the hood, TEE-backed proofs keep nodes geographically."
          />
        </div>
      </section>

    </main>
    
  );
}
