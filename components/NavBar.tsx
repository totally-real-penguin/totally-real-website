import IconHome from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/home.tsx"
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user.tsx"
import IconDeviceGamepad from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/device-gamepad.tsx"

export function NavBar() {
  return (
    <nav class="flex bg-gray-800 p-9 justify-evenly">
      <a class="inline-flex" href="/">
        <IconHome class="w-6 h-6" />
        <p>Home</p>
      </a>
      <a class="inline-flex"href="/about">
        <IconUser class="w-6 h-6"/>
        <p>About</p>
      </a>
      <a class="inline-flex" href="/projects">
        <IconDeviceGamepad/>
        <p>Projects</p>
      </a>
    </nav>
  );
}
