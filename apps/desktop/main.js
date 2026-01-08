import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 500,  // Wider to fit the new design
    height: 650, // Taller to fit all content
    frame: false,          
    transparent: false,      
    alwaysOnTop: true,
    resizable: false, // Keeps the sleek look consistent
    backgroundColor: '#111827', // Dark background
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL('http://localhost:3001');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});