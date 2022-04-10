# Human & ElectronJS

Test app for [Human](https://github.com/vladmandic/human) library with [ElectronJS](https://www.electronjs.org/)

This is pure ElectronJS demo, to create actual installable packages, follow addtional steps using [ElectronForge](https://www.electronforge.io/)

## Structure

- `app/main.js`  
  electonjs main entry point
- `app/prerender.js`  
  electronjs prerenderer, unusued
- `app/index.html`  
  main page, loaded by `main.js`
- `app/renderer.ts`:  
  actual code that imports and initialized `human`
  compiled into `app/renderer.js`  
  and loaded from `app/index.html`

## WSL2 Notes

*Only relevant if running ElectronJS inside WSL2 enviroment*

By default ElectronJS will run in Linux context which means it will use XWindows for rendering  
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
  