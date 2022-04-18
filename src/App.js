import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import ShowData from './component/ShowData';

function App() {
    return (
        <div className="container">
            <div className="row">
                <Form/>
                <ShowData/>
            </div>
        </div>
    );
}

export default App;
