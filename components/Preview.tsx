interface PreviewProps {
  title : string,
  page : string,
  icon : string
}


export function Preview(props : PreviewProps) {
  return (
    <a href={props.page} class="h-auto w-auto flex bg-gray-800 rounded-md px-8 py-4">
      <div class="flex flex-col justify-center">
        <img src={props.icon} class="w-24,h-24"/>
        <p>{props.title}</p>
      </div>
    </a>
  )
  }
