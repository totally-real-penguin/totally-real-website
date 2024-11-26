// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $devlogs_bank_run from "./routes/devlogs/bank-run.tsx";
import * as $devlogs_cipher_solver_gd from "./routes/devlogs/cipher-solver-gd.tsx";
import * as $games_snake_game from "./routes/games/snake/game.tsx";
import * as $games_snake_index from "./routes/games/snake/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $projects from "./routes/projects.tsx";
import * as $secrets_wow_really_cool from "./routes/secrets/wow-really-cool.tsx";

import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/devlogs/bank-run.tsx": $devlogs_bank_run,
    "./routes/devlogs/cipher-solver-gd.tsx": $devlogs_cipher_solver_gd,
    "./routes/games/snake/game.tsx": $games_snake_game,
    "./routes/games/snake/index.tsx": $games_snake_index,
    "./routes/index.tsx": $index,
    "./routes/projects.tsx": $projects,
    "./routes/secrets/wow-really-cool.tsx": $secrets_wow_really_cool,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
