
const { app, BrowserWindow } = require("electron");
const path = require("path");

console.log("App path:", app.getAppPath());
console.log("Loading file:", path.join(__dirname, "index.html"));

function createWindow() {
  const win = new BrowserWindow({
    width: 380,
    height: 540,
    title: "Todo List",
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});