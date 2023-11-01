import Image from "next/image"
import clientOne from "./client-logos/1.jpg";
import clientTwo from "./client-logos/2.png";
import clientThree from "./client-logos/3.png"
import clientFour from "./client-logos/4.png"
import clientSix from "./client-logos/6.png"
import clientEight from "./client-logos/8.png"

import clientTen from "./client-logos/11.png"
import clientEleven from "./client-logos/12.png"
import clientTwelve from "./client-logos/13.png"
const Client = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-around">
      <Image src={clientOne.src} width={500} height={300}/>
      <Image src={clientTwo.src} width={500} height={300}/>
      <Image src={clientThree.src} width={500} height={300}/>
      <Image src={clientFour.src} width={500} height={300}/>
      <Image src={clientSix.src} width={500} height={300}/>
      <Image src={clientEight.src} width={500} height={300}/>
      <Image src={clientTen.src} width={500} height={300}/>
      <Image src={clientEleven.src} width={500} height={300}/>
      <Image src={clientTwelve.src} width={500} height={300}/>
      
    </div>
  )
}

export default Client
