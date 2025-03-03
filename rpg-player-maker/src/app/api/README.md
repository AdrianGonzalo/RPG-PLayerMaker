## Start Debugger Backend

### Debugger in Chrome

Use `npm run dev --inspect-brk` to up the server mode debugger

Open `chrome://inspect/`

Click in the Node

Open the component you want to look at

Place the breackpoints

### Debugger in VsCode

Use `npm run dev --inspect` to up the server mode debugger

Place the breackpoints in the maring left

Press `ctrl + shift + D` and click run and debug

Make a the peticion

## Arquitectuda Hexagonal

#### ...Service.js

Interactua con la base de datos y devuelve los datos o errores sin HTTP

#### route.js

Maneja las peticiones HTTP, llama a ...Service.js y responde con un Response.json()
