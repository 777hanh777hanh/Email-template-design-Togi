import './App.css';
import thumbnail from './assets/images/thumb.png';

function App() {
    return (
        <div className="App">
            <h1 className="heading">Project 11:</h1>
            <h3 className="desc">Email template design Togi</h3>
            <img
                src={thumbnail}
                alt=""
                className="thumbnail"
                style={{ display: 'block', margin: '0 auto', width: '70%' }}
            />
        </div>
    );
}

export default App;
