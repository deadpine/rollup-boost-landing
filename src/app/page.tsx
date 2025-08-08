import Card from "@/components/Card";
import CaseStudy from "@/components/CaseStudy";
import Chip from "@/components/Chip";
import List from "@/components/List";
import Image from "next/image";

export default function Home() {
  return (
    // <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <main className="font-sans flex flex-col items-center sm:items-start space-y-4 md:space-y-10 px-6 md:px-8">
      
      <nav className="w-full flex justify-between pt-6 pb-2 md:p-8">
        <Image 
          src="/images/rollup-boost_logo.svg" 
          alt="Rollup boost logo" 
          width={60} 
          height={25} 
          className="w-auto h-[28px] mr-auto"
        />
        <ul className="hidden md:flex flex-col md:flex-row gap-7 font-mono uppercase text-sm">
          <li><a className="hover:underline underline-offset-2" href="#rollup-boost">
            Rollup-Boost
          </a></li>
          <li><a className="hover:underline underline-offset-2" href="#use-cases">
            Use Cases
          </a></li>
          <li><a className="hover:underline underline-offset-2" href="#flashblocks">
            Flashblocks
          </a></li>
          <li><a className="hover:underline underline-offset-2" href="https://github.com/flashbots/rollup-boost" target="_blank">
            Docs
          </a></li>
          <li><a className="hover:underline underline-offset-2" href="#contact">
            Get in Touch
          </a></li>
        </ul>
      </nav>

      <section id="home" className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="h-full flex flex-col justify-between md:p-8">
          <h1 className="max-w-xl text-black font-semibold text-4xl md:text-5xl pt-4">
            Upgrade your rollups across performance, programmability, and decentralization.
          </h1>
          <div>
            <p className="text-sm font-mono uppercase py-6">
              used by leading projects
            </p>
            <div className="flex gap-4">
              <Image 
                src="/images/base.svg" 
                alt="" 
                width={88} 
                height={88} 
                className="w-16 md:w-22 h-auto"
              />
              <Image 
                src="/images/unichain.svg" 
                alt="" 
                width={88} 
                height={88} 
                className="w-16 md:w-22 h-auto"
              />
              <Image 
                src="/images/world.svg" 
                alt="" 
                width={88} 
                height={88} 
                className="w-16 md:w-22 h-auto"
              />
              <Image 
                src="/images/optimism.svg" 
                alt="" 
                width={88} 
                height={88} 
                className="w-16 md:w-22 h-auto"
              />
            </div>
          </div>
        </div>
        <Image 
          src="/images/hero.svg" 
          alt="" 
          width={500} 
          height={500} 
          className="h-160 w-auto max-w-fill mx-auto"
        />
      </section>

      <section id="rollup-boost" className="w-full gap-5 items-center py-6 md:py-12">
        <div className="max-w-3xl mx-auto text-center py-12">
          <h2 className="text-black font-semibold text-3xl md:text-4xl pb-4">
            Verifiable priority within each Flashblock, offering stronger guarantees and enabling apps to internalize MEV.
          </h2>
          <p>
            In its final form, this extension model  the unique properties of TEEs will allow rollups to harmonize two previously opposing. The unique properties of TEEs will allow rollups to harmonize two.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12">
          <Card 
            title="Decentralization"
            image="/images/decentralization.svg"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Transaction Inclusion"
            image="/images/transaction-inclusion.svg"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Encrypted Mempool"
            image="/images/encrypted-mempool.svg"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
          <Card 
            title="Flashblocks"
            image="/images/flashblocks.svg"
            description="Rollup-Boost introduces the idea of Rollup Extensions, which are modular components for upgrading rollups across performance."
          />
        </div>
      </section>

      <section id="use-cases" className="w-full gap-5 items-center py-6 md:py-12">
        <div className="max-w-3xl mx-auto text-center py-12">
          <h2 className="text-black font-semibold text-3xl md:text-4xl pb-4">
            Use cases: guarantees to users and allowing applications to internalize their MEV
          </h2>
          <p>
            In its final form, this extension model  the unique properties of TEEs will allow rollups to harmonize two previously opposing. The unique properties of TEEs will allow rollups to harmonize two.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <CaseStudy
            logo="/images/base.svg"
            builtfor="Commerce"
            subtitle="Flashblocks"
            description="
              Base pairs with Rollup-Boost Flashblocks to slash settlement from seconds to 250 ms, making on-chain shopping feel web-native. 
              Instant confirmations and revert protection let merchants offer one-tap checkouts, dynamic pricing, and loyalty perks without fear of failed swaps or front-running. Internalizes MEV, lowering spreads and enabling gas-sponsored purchases that keep fees near zero—even on peak days."
          />
          <CaseStudy
            logo="/images/world.svg"
            builtfor="Humans"
            subtitle="Priority-Based Hints"
            description="
              World layers PBH (Priority-Based Hints) atop Rollup-Boost to deliver an experience built for humans, not bots. 
              Wallets encode user intent directly in the hint; the TEE enforces it, guaranteeing transactions run in the promised order. With Flashblocks, everyday transfers, game moves, and identity proofs settle in 250 ms, while encrypted mempools keep data private from sequencers. The result: web2-like."
          />
          <CaseStudy
            logo="/images/unichain.svg"
            builtfor="DeFi"
            subtitle="Bundles & Revert Protection"
            description="
              Unichain turns on Rollup-Boost Bundles and revert protection to give DeFi builders CEX-grade speed with Ethereum-grade openness.
              Complex arbitrage or leverage chains batch into a single Bundle, settle in 250 ms, and revert safely if any leg fails—saving gas and sanity. Verifiable ordering locks in fair execution, internalizing MEV for LPs and tightening spreads. Under the hood, TEE-backed proofs keep nodes geographically."
          />
        </div>
      </section>

      <section id="flashblocks" className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="px-8">
          <Chip label="Flashblocks" />
          <div className="pt-8 pb-5">
            <h2 className="max-w-xl text-black font-semibold text-4xl py-4">
              Flashblocks: Open source plugins for based rollups
            </h2>
            <p>
              Apply performance and functionality upgrades to existing rollup codebases
            </p>
          </div>
          <List
            icon="/images/icon/check-circle.svg"
            title="Preconfirmations"
            description="Enable fast user experience while retaining based-ness."
          />
          <List
            icon="/images/icon/sliders-horizontal.svg"
            title="Proving"
            description="Accelerate with multiprovers, and TEE proving infrastructure from Rollup Boost."
          />
          <List
            icon="/images/icon/boxes.svg"
            title="Block Building"
            description="Boost block production and sequencing speed with Rollup Boost."
          />
          <List
            icon="/images/icon/layers.svg"
            title="Composability"
            description="Seamlessly integrate layers for unified liquidity"
          />
          
        </div>
        <Image 
          src="/images/flashblocks-section.png" 
          alt="" 
          width={500} 
          height={500} 
          className="h-160 w-auto max-w-fill mx-auto"
        />
      </section>

      <section id="tees" className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <Image 
          src="/images/tees-section.png" 
          alt="" 
          width={500} 
          height={500} 
          className="h-160 w-auto max-w-fill mx-auto"
        />
        <div className="px-8">
          <Chip label="Tees" />
          <h2 className="text-black font-semibold text-4xl pt-12 pb-8">
            Decentralizing Ethereum’s Last Mile
          </h2>
          <p className="py-2">
            With decentralization, as with security, the system is only as decentralized as its least decentralized part. If configuration or secrets availability rests on a centralized server, then the system as a whole is centralized as a result — and the same applies equally to governance and service discovery.
          </p>
          <p className="py-2">
            Tailored decentralization: It’s important to keep decentralization properties at corresponding levels. Forcing service provisioning that has wildly different decentralization properties from the service itself will be much less  inefficient and will create friction — whether it’s much decentralized.
          </p>
          <p className="py-2">
            This applies especially to the governance model — who controls what and how. The governance model should be consistent throughout the application, provisioning included.
          </p>
        </div>
      </section>

      <section id="contact" className="w-full flex flex-col gap-7 p-16 items-center rounded-[96px] bg-[radial-gradient(250%_160%_at_100%_100%,_#F2FDB8_0%,_#DAFB4E_50%,_#A5EC5C_90%)]">
        <h2 className="text-black font-semibold text-4xl">
          Explore Our Tech
        </h2>
        <div className="flex gap-4">
          <a 
            href="https://github.com/flashbots/rollup-boost" target="_blank" 
            className="px-8 py-4 font-mono font-meium uppercase rounded-full border border-[#1A1D16] bg-[#1A1D16] text-white hover:bg-[#31411C]"
          >
            Try Testnet →
          </a>
          <a 
            href="https://github.com/flashbots/rollup-boost" target="_blank" 
            className="px-8 py-4 font-mono font-meium uppercase rounded-full border border-[#1A1D16] text-black hover:bg-[#FFFFFF80] hover:text-[#1A1D16]"
          >
            Explore Github →
          </a>
        </div> 
        <p className="py-2 max-w-md text-center text-black">
          Want to learn more about RollupBoost? <br/>
          Visit our website page or contact us to get in touch.
        </p>
      </section>

      <footer className="w-full flex items-center justify-between p-8">
        <Image 
          src="/images/flashbots_logo.svg" 
          alt="Flashbots logo" 
          width={60} 
          height={25} 
          className="w-auto h-[25px]"
        />
        <p className="font-mono uppercase text-xs">
          Copyright © 2025 flashbots - All Rights Reserved
        </p>
      </footer>

    </main>
    
  );
}
