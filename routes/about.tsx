import { Footer } from "../components/Footer.tsx"
import { NavBar } from "../components/NavBar.tsx"

export default function Home() {
  return (
    <html>
      <body class="bg-gray-900 text-white">
        <NavBar/>
        <main class="pt-9 text-center">
          <u class="text-3xl">About Me</u>
          <p class="pt-8">
            I'm a pretty bad programmer since I'm quite new to it. I mostly try to make video games<br/>
            I have a lot of half finished projects and once one is actually finished I will publish it<br/>
            but until then I'll just write about my slow progress on my projects until I find ant motivation<br/>
          </p>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
