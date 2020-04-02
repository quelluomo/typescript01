//ts compiler

// watch mode

// tsc app.ts --watch
// or
// tsc app.ts --w

//what if we have more than one file?
// tsc --init
// everything in the folder will run, and generate a tsconfing.json
// then run:
// tsc
// or tsc -w
// or tsc --watch

//in tsconfig you can exclude files from running like so:
/* "exclude": [
    "analytics.ts"
  ] */

// or *.dev.ts => any file with extension .dev.ts
// or **/*.dev.ts => any file with dev.ts pattern in any folder

// commonly you would exclude node_modules
// but you don't need to since it's excluded automatically

// we also have include
/* "include": [
    "analytics.ts"
  ] */
// now ONLY analytics will run

/* 
"files": [
    "app.ts"
] */
// this compiles a whole folder
// you don't need it often
