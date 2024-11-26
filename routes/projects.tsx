import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar.tsx"
import { Preview } from "../components/Preview.tsx"

export default function Home() {
  return (
    <html>
      <body class="bg-gray-900 text-white">
        <NavBar/>
        <main class="pt-9 text-center">
          <p>
            <u class="text-3xl">Projects</u>
          </p>
          <div class="inline-grid grid-rows-none grid-flow-col gap-10 py-8">
            <Preview title={"Snake"} icon={"/favicon.ico"} page={"/games/snake"} /> 
            <Preview title={"Cipher Solver"} icon={"/favicon.ico"} page={"/devlogs/cipher-solver-gd"} />
            <Preview title={"Bank Run"} icon={"/favicon.ico"} page={"/devlogs/bank-run"} />
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
