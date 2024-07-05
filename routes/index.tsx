import { useSignal } from "https://esm.sh/v135/@preact/signals@1.2.2/X-ZS8q/dist/signals.js";
import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar.tsx"
import { Preview } from "../components/Preview.tsx";


export default function Home() {
  return (
    <html>
      <body class="bg-gray-900 text-white">
        <NavBar/>
        <main class="pt-9 text-center">
          <u class="text-3xl">The Totally Real Website</u>
          <p class="pt-9">
            The hub for Totally Real Penguin's projects<br/>
            Some cool things im working on right now our below
          </p>
          <div class="inline-grid grid-rows-none grid-flow-col gap-10 py-8">
            <Preview title={useSignal("Snake")} icon={useSignal("/favicon.ico")} page={useSignal("/games/snake")} />
            <Preview title={useSignal("Test2")} icon={useSignal("/favicon.ico")} page={useSignal("/devlogs/test2")} />
            <Preview title={useSignal("Test3")} icon={useSignal("/favicon.ico")} page={useSignal("/devlogs/test3")} />
            <Preview title={useSignal("Test4")} icon={useSignal("/favicon.ico")} page={useSignal("/devlogs/test4")} />
            <Preview title={useSignal("Test5")} icon={useSignal("/favicon.ico")} page={useSignal("/devlogs/test5")} />
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
