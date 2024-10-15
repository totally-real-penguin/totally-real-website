import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar.tsx"

export default function Home() {
  return (
    <html>
      <body class="bg-gray-900 text-white h-screen">
        <NavBar/>
        <main class="pt-9 text-center">
          <u class="text-3xl">About</u>
          <p class="pt-8">
            This website is intended to show of projects made by me<br/>
            I'm not good at graphic design so it probably looks bad<br/>
            I don't really plan on doing web stuff I want to make games
          </p>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
