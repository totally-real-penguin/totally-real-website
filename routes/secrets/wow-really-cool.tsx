import { Footer } from "../../components/Footer.tsx";
import { NavBar } from "../../components/NavBar.tsx";

export default function Wow() {
  return (
  <html>
      <body class="bg-gray-900 text-white h-screen text-center">
        <NavBar/>
        <br/>
        <h1 class="text-2xl"><u>Wow you found a secret!!!?!!</u></h1>
        <br/>
        <p>that is what you did</p>
        <Footer/>
      </body>
  </html>
  )
}
