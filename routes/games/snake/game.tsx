import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    resp.headers.append("Cross-Origin-Embedder-Policy", "require-corp");
    resp.headers.append("Access-Control-Allow-Origin", "*");
    resp.headers.append("Content-Type", "text/html");
    return resp;
  },
};

export default function Snake() {
  return (
  <html>
	  <Head>
	    <meta charset="utf-8"/>	    
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0"/>
		  <title>snake</title>
      <link rel="stylesheet" href="/games/snake/style.css"/>
		  <link id="-gd-engine-icon" rel="icon" type="image/png" href="/games/snake/index.icon.png" />
      <link rel="apple-touch-icon" href="/games/snake/index.apple-touch-icon.png"/>
  </Head>
	<body>
	  <canvas id="canvas">
	    Your browser does not support the canvas tag.
	  </canvas>

	<noscript>
    Your browser does not support JavaScript.
	</noscript>

  <div id="status">
	  <img id="status-splash" src="index.png" alt=""/>
	  <progress id="status-progress"></progress>
	  <div id="status-notice"></div>
  </div>

  <script src="/games/snake/index.js"></script>
  <script src="/games/snake/snake.js"></script>
	</body>
</html>
  )
}
