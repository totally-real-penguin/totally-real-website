import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-deno.tsx"
import IconLemon2 from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/lemon-2.tsx"

export function Footer() {
  return(
  <footer class="fixed left-0 bottom-0">
    
    <div class="pl-8 pt-4 grid-cols-2 bg-gray-950 h-24 w-screen min-h-16">
      
      <a href="https://deno.com/" class="inline">
        <IconBrandDeno class="w-6 h-6 inline"/>
        Made with <b>Deno</b>
      </a>

      <br/>
      
      <a href="https://fresh.deno.dev/" class="inline">
        <IconLemon2 class="w-6 h-6 inline"/>
        Using the <b>Fresh</b> Framework
      </a>
      
    </div>

  </footer>
  );
}
