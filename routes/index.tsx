import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar.tsx"
import { Preview } from "../components/Preview.tsx";

export default function Home() {
  return (
    <html>
      <body class="bg-gray-900 text-white h-screen">
        <NavBar/>
        <main class="pt-9 text-center">
          <u class="text-3xl">The Totally Real Website</u>
          <p class="pt-9">
            I don't have any icons over than the lemon right now<br/>
            don't question the sizing of them. I will fix it
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
