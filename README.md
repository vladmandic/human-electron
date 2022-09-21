# Human & ElectronJS

Test app for [Human](https://github.com/vladmandic/human) library with [ElectronJS](https://www.electronjs.org/) and [ElectronForge](https://www.electronforge.io/)

## Structure

- `app/main.js`  
  **electonjs** main entry point
- `app/prerender.js`  
  **electronjs** prerenderer, unusued
- `app/index.html`  
  **main page**, loaded by `main.js`
- `app/renderer.ts`:  
  actual code that imports and initialized `human`  
  compiled by build process into `app/renderer.js`  
  and loaded from `app/index.html`

## Build & Run

- `npm run transpile`  
  transpiles `app/prerender.ts` to `app/prerender.js` compatible with ElectronJS  
  internally used by all other build processes  
- `npm run start`  
  runs transpile and starts Electron app in dev mode (no packaging)  
- `npm run package`  
  packages app as an **executable** for current platform    
  output is created in `out/human-electron-<platform-name>`
- `npm run make`  
  runs transpile, package and finally a make using **Electron-Forge**  
  packages app as an native os package (e.g. **rpm** or **deb** package)  
  output is created in `out/make`

*Note*: If you want to cross-compile to a platform different than your current platform, you can use **electron-forge** directly:

> node_modules/.bin/electron-forge package --platform [win32|darwin|linux]

<br>

## WSL2 Notes

*Only relevant if running ElectronJS inside WSL2 enviroment*

In WSL2 by default ElectronJS will run in Linux context which means it will use XWindows for rendering  

To run ElectronJS as native Windows app inside WSL2, install with
> npm install --platform=win32 electron

In which case, Chromium will not be able to initialize correctly, so use either flags:

- `in-process-gpu`:  
  best for production  
  allows for gpu acceleration, but disables access to inspector as rendering is in a single process  
- `no-sandbox`:  
  best for development  
  disables gpu acceleration, but allows usage of inspector  
  wasm support only, not support for `webgl` or `webgpu`  
