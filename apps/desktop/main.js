const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 700,
    frame: false,          // Removes the standard window border
    transparent: true,      // Allows for rounded/shaped UI
    alwaysOnTop: true,      // Keeps recorder above other apps
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the Next.js server during development
  const startUrl = 'http://localhost:3001';
  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});