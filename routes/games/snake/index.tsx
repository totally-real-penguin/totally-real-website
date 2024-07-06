import { Footer } from "../../../components/Footer.tsx";
import { NavBar } from "../../../components/NavBar.tsx";

export default function Snake() {
  return(
  <html>
    <NavBar/>
    <body class="bg-gray-900 text-white">
      <p class="text-center text-3xl pt-8"><u>Snake</u></p>
      <div class="flex justify-center h-screen pt-16">
        <iframe src="/games/snake/game" width="45%" height="60%"/>
      </div>
    </body>
    <Footer/>
  </html>
  )
}
