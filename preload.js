// preload.js
const {contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('myAPI',{
  // 预加载脚本可以执行一部分node
  version:process.version,
  // 渲染进程向主进程通信
  saveFile:(data)=>{
    ipcRenderer.send('file-save',data)
  },
  // 双向通信
  readFile(){
    return ipcRenderer.invoke('file-read')
  },
  
  addClec(data1, data2){
    return ipcRenderer.invoke('add-clec',Number(data1),Number(data2))
  }
})