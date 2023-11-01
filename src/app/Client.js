import Image from "next/image"
import clientOne from "./client-logos/1.jpg";
import clientTwo from "./client-logos/2.jpg";
import clientThree from "./client-logos/3.jpg"
import clientFour from "./client-logos/4.jpg"
import clientFive from "./client-logos/1.jpg"
import clientSix from "./client-logos/6.jpg"
import clientSeven from "./client-logos/1.jpg"
import clientEight from "./client-logos/8.jpg"
import clientNine from "./client-logos/9.jpg"
import clientTen from "./client-logos/11.jpg"
import clientEleven from "./client-logos/12.jpg"
import clientTwelve from "./client-logos/13.jpg"
import clientThirteen from "./client-logos/15.jpg"
const Client = () => {
  return (
    <div>
      <Image src={clientOne.src} width={300} height={100}/>
    </div>
  )
}

export default Client
