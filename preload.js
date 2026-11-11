
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('volt', {
  getInfo: () => ({
    name: 'VOLT Launcher',
    owner: 'VOLT',
    version: '1.0.0'
  })
});
