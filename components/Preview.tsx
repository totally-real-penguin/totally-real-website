import type { Signal } from "@preact/signals";

interface PreviewProps {
  title : Signal<string>,
  page : Signal<string>,
  icon : Signal<string> 
}


export function Preview(props : PreviewProps) {
  return (
    <a href={props.page} class="h-auto w-auto flex bg-gray-800 justify-center rounded-md px-8 py-4">
      <div class="flex-row">
        <img src={props.icon} class="w-24,h-24"/>
        <p>{props.title}</p>
      </div>
    </a>
  )
  }
