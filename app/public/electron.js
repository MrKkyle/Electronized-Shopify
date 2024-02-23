// Import required modules
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { app, BrowserWindow} from 'electron';
import isDev from 'electron-is-dev';

// Initialize mainWindow variable
let mainWindow;

// Function to create the main window
const createWindow = () => {
  // Configure the main window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 675,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration
      enableRemoteModule: true, // Enable remote module
      contextIsolation: false, // Disable context isolation
      autoHideMenuBar: true, // Auto-hide menu bar
    },
  });

  // Hide the menu bar
  mainWindow.setMenuBarVisibility(false);

  // Load the appropriate URL based on the environment
  mainWindow.loadURL(isDev ? `file://${__dirname}/../build/index.html` : `file://${__dirname}/../build/index.html`);

  // Open DevTools in development mode
  if (isDev) {
    //mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
};

// Create the main window when the app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create a new window when the app is activated (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});