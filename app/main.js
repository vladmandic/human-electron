/*
  control application life
  create native browser window
  runs in nodejs context
*/

const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadFile('app/index.html');
  win.webContents.openDevTools();
};

// app.commandLine.appendSwitch('in-process-gpu'); // see notes in readme
app.commandLine.appendSwitch('no-sandbox'); // see notes in readme
app.whenReady().then(() => createWindow());
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on('window-all-closed', () => app.quit());
