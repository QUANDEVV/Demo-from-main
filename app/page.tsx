import {FeaturesSection, Hero, Services} from "@/components";
import CTA from "@/components/CTA";

export default function Home() {
  return (
      <div className="relative h-auto">
          <Hero/>

          {/*<FeaturesSection />*/}

          <Services />

          <CTA />
      </div>
  )
}
