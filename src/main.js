const { app, BrowserWindow, screen } = require('electron')

function createWindow () {
  // Crear una ventana de navegador.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  let win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
    frame: false // oculta la barra de título
  })
  
  // Cargar la página HTML de la aplicación.
  win.loadFile('src/index.html')

  // Abre las herramientas de desarrollo.
  //win.webContents.openDevTools()

  // Emitir cuando la ventana sea cerrada.
  win.on('closed', () => {
    win = null
  })
}
  


// Emitir cuando la aplicación esté lista.
app.on('ready', createWindow)

// Emitir cuando todas las ventanas estén cerradas.
app.on('window-all-closed', () => {
  // Para macOS, la aplicación y su menú están activos hasta que el usuario salga explícitamente con Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Para macOS, volver a crear una ventana en la aplicación cuando el icono del dock se hace clic y no hay otras ventanas abiertas.
  if (win === null) {
    createWindow()
  }
})


