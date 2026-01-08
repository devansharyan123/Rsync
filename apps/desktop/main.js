const {app , BrowserWindow} = require('electron')
const path = require('path');


function createWindow(){

    const win = new BrowserWindow({
         width : 450,
         height : 600,
         frame : true,
         transparent : true,
         alwaysOnTop : true,
         webPreferences: {
            nodeIntegration : true,
            contextIsolation : flase
         }

    });

    win.loadURL('http://localhost:3001') 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});