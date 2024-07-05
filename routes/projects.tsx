import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar.tsx"

export default function Home() {
  return (
    <html>
      <body class="bg-gray-900 text-white">
        <NavBar/>
        <main class="pt-9 text-center">
          <u class="text-3xl">Projects</u>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
