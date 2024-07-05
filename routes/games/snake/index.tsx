import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    resp.headers.append("Cross-Origin-Embedder-Policy", "require-corp");
    resp.headers.append("Access-Control-Allow-Origin", "*");
    return resp;
  },
};

export default function Snake() {
  return (
  <html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, user-scalable=no"/>
		<title>snake</title>
    <link rel="stylesheet" href="/games/snake/snake.css"/>
		<link id='-gd-engine-icon' rel='icon' type='image/png' href='/games/snake/index.icon.png' />
    <link rel='apple-touch-icon' href='/games/snake/index.apple-touch-icon.png'/>
	</head>
	<body>
		<canvas id="canvas">
			HTML5 canvas appears to be unsupported in the current browser.<br/>
			Please try updating or use a different browser.
		</canvas>
		<div id="status">
			<div id="status-progress" style="display: none;" onContextMenu="event.preventDefault();">
				<div id ="status-progress-inner"></div>
			</div>
			<div id="status-indeterminate" style="display: none;" onContextMenu="event.preventDefault();">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div id="status-notice" class="godot" style="display: none;"></div>
		</div>

		<script src="/games/snake/index.js"/>
		<script src="/games/snake/snake.js"/>
	</body>
  </html>
  )
}
