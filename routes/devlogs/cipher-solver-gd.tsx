import { Footer } from "../../components/Footer.tsx";
import { NavBar } from "../../components/NavBar.tsx";

export default function cipher_gd() {
  return (
  <html>
      <body class="bg-gray-900 text-white h-max w-screen pb-32">
        <NavBar/>
        <div class="pl-4 w-full h-max">
          <br/>
          <h1 class="text-2xl"><u>Making a cipher solver in godot</u></h1>
          <br/>
          <p>
            Honestly this wasn't the hardest task as godot is very easy to use<br/>
            and I have been using it for a while. The project was mostly for me<br/>
            and my friends to use for a challenge. It's not got all features i<br/>
            was going to add but I thought it was good enough for what we were<br/>
            doing. It covers 5 common ciphers Caesar, Affine, Vigenere, Polybius, Morse
          </p>
          <br/>
          <h2 class="text-xl"><u>The Caesar family of ciphers</u></h2>
          <br/>
          <p>
            Most of these ciphers a just a caesar in a trench coat with affine you<br/>
            you just take the orginal letters spot in the alphabet and times it by<br/>
            some number before shifting it so instead of x + b it's ax + b. And<br/>
            for vigenere you use a code word which repeats over the plaintext to<br/>
            and you shift each letter of plaintext by its paired letter in the key<br/>
            position in the alphabet where a=0 and z=25. These were all simple to<br/>
            implement a way to decode for caesar and vigenere I just shift the<br/> 
            alphabet back by whatever the key is and run the letters through it<br/>
            <br/>
            <code class="text-sm leading-none">
              ciphertxt = "Ifmmp Xpsme"<br/>
              alphabet = list("abcdefghijklmnopqrstuvwxyz")<br/>
              shift = -1<br/>
              output = ""<br/>
              for chr in list(ciphertxt.lower()):<br/>
              &emsp;if chr not in alpha:<br/>
              &emsp;&emsp;output += chr<br/>
              &emsp;&emsp;continue<br/>
              &emsp;new_char = alpha.index(chr) + shift % 26<br/>
              &emsp;if new_char &lt; 0:<br/>
              &emsp;&emsp;new_char = 26 + new_char<br/>
              &emsp;output += alpha[new_char]<br/>
            </code>
            <br/>
            A simple implementation of what I did is shown above in python.<br/>
            This works for both caesar and vigenere just swap out the shift<br/>
            value. And a similar thing can be done for affine. I also added<br/>
            a general substitution cipher option for if none off the following<br/>
            work
          </p>
          <br/>
          <h2 class="text-xl"><u>Morse Code</u></h2>
          <br/>
          <p>
            Not really a cipher but I expected to see it anyways so I made a quick<br/>
            solver just a hashmap mapping all morse letters into there alphabetical<br/>
            equivelent and splitting the input by spaces. Super easy to make like I<br/>
            said it's not really a cipher it's not meant to be hard to use or decrypt<br/>
          </p>
          <br/>
          <h2 class="text-xl"><u>Tap code/Polybius Square</u></h2>
          <br/>
          <p>
            This is also not to hard I set every combo of two numbers 1-5 equal to a<br/>
            letter with one letter pairing up often i and j or c and k. and I take<br/>
            an input of these combos seperated by a space and just convert one into<br/>
            the other.
          </p>

          <br/>
          <h2 class="text-xl"><u>Let's get Rusty</u></h2>
          <br/>
          <p>
            I don't want to bother writing another post about my rust cli version of<br/>
            this. It's only got caesar, affine and vigenere but it works a lot faster<br/>
            than my godot version. It's bad rust code most likely as I am new to the<br/>
            language but it has me hooked. I've been loving writing Rust even as the<br/>
            bottow checking gets mad at me and I struggle to understand somethings<br/>
          </p>
          <br/>
          <a class="text-blue-300" href="https://github.com/totally-real-penguin/cipher-solver">Godot Cipher Solver Source Code</a><br/>
          <a class="text-blue-300" href="https://github.com/totally-real-penguin/cipher-cli">Rust Cipher Solver Source Code</a>
          <p class="text-gray-900">
            Sometimes i wonder why my name is always penguin. Guess I'll keep wondering.<br/>
            Lsj eic sdyaj uv rpwgkl mtv kb zi pgitf://zibnapl-xyiy-lioycbr.siau.xmi/hipxybf/lsj-xyiyac-puit
          </p>
        </div>
        <Footer/>

      </body>
 </html>
  )
}
