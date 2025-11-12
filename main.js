const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    resizable: false,
    frame: false, 
    icon: path.join(__dirname, 'images/icone.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, 
      nodeIntegration: false,
    }
  });

  win.loadFile('index.html');

  ipcMain.on('window-control', (event, action) => {
    if (action === 'minimize') win.minimize();
    else if (action === 'close') win.close();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});