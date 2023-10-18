"use client"

import Image from "next/image";

export const Heroes = () => {
  return ( 
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image 
            src="/images/assets/documents.png" 
            fill
            className="object-contain dark:hidden"
            alt="Document"
          />
          <Image 
            src="/images/assets/documents-dark.png" 
            layout="fill" 
            className="object-contain hidden dark:block"
            alt="Document"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image 
            src="/images/assets/reading.png" 
            fill 
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image 
            src="/images/assets/reading-dark.png" 
            fill 
            className="object-contain hidden dark:block"
            alt="Reading"
          />
        </div>
      </div>
    </div>
   );
}