const { ipcRenderer } = require('electron')

// Event listener para el click del botón Salir en el menú
document.querySelector('#menu-salir').addEventListener('click', () => {
  ipcRenderer.send('app:quit')
})

// Event listener para el click del botón Minimizar en el menú
document.querySelector('#menu-minimizar').addEventListener('click', () => {
  ipcRenderer.send('app:minimize')
})

// Event listener para el click del botón Maximizar/Restaurar en el menú
document.querySelector('#menu-maximizar').addEventListener('click', () => {
  ipcRenderer.send('app:maximize-restore')
})
