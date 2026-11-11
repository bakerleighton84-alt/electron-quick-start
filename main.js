
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const APP_NAME = 'VOLT Launcher'
const OWNER_NAME = 'VOLT'

app.setName(APP_NAME)

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 850,
    minHeight: 550,
    title: APP_NAME,
    backgroundColor: '#101018',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

module.exports = { OWNER_NAME }
