import { Button } from "@/components/ui/button";
import {Heading} from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";


const MarketingPage = () => {
  return (
    <main className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      <div className="flex flex-col items-center justify-center
      md:justify-start text-center flex-1 px-6">
       <Heading />
       <Heroes />
      </div>
      <Footer />      
    </main>
  )
}

export default MarketingPage
