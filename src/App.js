import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">ImageUploader</h1>
      <div className="Drop-area">
        <p>ここにファイルをドラッグ&ドロップしてください</p>
      </div>
      <div className="Upload-area">
        <p>xxx.jpg</p>
        <button className="Upload-button">アップロード</button>
      </div>
    </div>
  );
}

export default App;
