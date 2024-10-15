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
            The hub for Totally Real Penguin's projects<br/>
            Some cool things im working on right now our below
          </p>
          <div class="inline-grid grid-rows-none grid-flow-col gap-10 py-8">
            <Preview title={"Snake"} icon={"/favicon.ico"} page={"/games/snake"} />
            <Preview title={"Snake"} icon={"/favicon.ico"} page={"/games/snake"} />
            <Preview title={"Snake"} icon={"/favicon.ico"} page={"/games/snake"} />
            <Preview title={"Snake"} icon={"/favicon.ico"} page={"/games/snake"} />
            <Preview title={"Snake"} icon={"/favicon.ico"} page={"/games/snake"} />
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
