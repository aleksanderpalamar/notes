import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["400", "600", "800", "900"],
  subsets: ["latin"],
})

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <h1>
        <span className={cn(
          poppins.className,
          "text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-orange-500 font-extrabold"
        )}>
          Notes
        </span>
      </h1>      
    </div>
  );
};
