import { Footer } from "../../components/Footer.tsx";
import { NavBar } from "../../components/NavBar.tsx";

export default function bank_run() {
  return (
    <html>
      <body class="bg-gray-900 text-white h-max w-screen pb-32">
        <NavBar/>
        <br/>
        <h1 class="text-2xl"><u>Creating a simple game in 2 days</u></h1>
        <br/>
        <p>
          Like many games made fast this was made for a game jam. And it came<br/>
          4th out of 24 games submitted so it wasn't the biggest jam ever nor<br/>
          was I the best in the jam but it was still a fun experience and helped<br/>
          me get back into the swing of game development. I wanted to make everything<br/>
          myself and that was quite hard given the time frame so I limited the scope<br/>
          of everything I did. I drew in just black and white cause i struggle with<br/>
          colour and I scrambled together some notes to make a song but my main focus<br/>
          was the programming as that is the only area im decent at.<br/>
          <br/>
          The main theme for this jam was speedrun so I decided to make a game<br/>
          about getting the highest score before a time runs out. I felt this<br/>
          worked well for the theme and it helped limit the game as I knew the<br/>
          content I put in would all have to be reachable before the clock ran out.<br/>
          I made quite a simple platformer character and level to go with them<br/>
          <br/>
          As stated I came 4th overall but first in fun factor and theme implementation<br/>
          so i personally consider it a win as all I want for my games is for them to<br/>
          be fun. I lost alot of points on special object implementation as I forgot<br/>
          about it until the last 30 minutes were i quickly drew up the object (a bag)<br/>
          and stuck it in the background just so it was in there.<br/>

          <br/>
          <a class="text-blue-300" href="https://totallyrealpenguin.itch.io/bank-run">The game</a><br/>
          <a class="text-blue-300" href="https://github.com/totally-real-penguin/bank-run">The source code</a>
          <br/>
        </p>
        <Footer/>
      </body>
    </html>
  )
}
