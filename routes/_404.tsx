import { Head } from "$fresh/runtime.ts";
import { NavBar } from "../components/NavBar.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Error404() {
  return (
    <html>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <body class="bg-gray-900 text-white">
        <NavBar/>
        <main class="text-center">
          <h1 class="text-3xl pt-9"><u>Error 404 - Page Not Found</u></h1>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
