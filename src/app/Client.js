import Image from "next/image"
import clientOne from "./client-logos/1.jpg";
import clientTwo from "./client-logos/2.jpg";
import clientThree from "./client-logos/3.jpg"
import clientFour from "./client-logos/4.jpg"
import clientSix from "./client-logos/6.jpg"
import clientEight from "./client-logos/8.jpg"
import clientNine from "./client-logos/9.jpg"
import clientTen from "./client-logos/11.jpg"
import clientEleven from "./client-logos/12.jpg"
import clientTwelve from "./client-logos/13.jpg"
import clientFifteen from "./client-logos/15.jpg"
import clientSixteen from "./client-logos/changeroom.png"
const Client = () => {       
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] p-[30px] justify-center items-center lg:p-[70px]">
      <Image src={clientOne.src} width={500} height={300} alt=""/>
      <Image src={clientTwo.src} width={500} height={300}  alt=""/>
      <Image src={clientThree.src} width={500} height={300}  alt=""/>
      <Image src={clientFour.src} width={500} height={300} alt=""/>
      <Image src={clientSix.src} width={500} height={300} alt=""/>
      <Image src={clientEight.src} width={500} height={300} alt=""/>
      <Image src={clientNine.src} width={500} height={300} alt=""/>
      <Image src={clientTen.src} width={500} height={300} alt=""/>
      <Image src={clientEleven.src} width={500} height={300} alt=""/>
      <Image src={clientTwelve.src} width={500} height={300} alt=""/>
      <Image src={clientFifteen.src} width={500} height={300} alt=""/>
      <Image src={clientSixteen.src} width={500} height={300} alt=""/>

      
    </div>
  )
}

export default Client
