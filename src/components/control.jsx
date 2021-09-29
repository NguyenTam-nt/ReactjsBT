import '../App.css';
import Search from './Search.jsx';
import Sort from './Sort.jsx';
function Control(props) {

    let getItem = (data) => {
        props.getTask(data);
    }
    return (
        <div className="row mt-15">
            <Search getName={getItem} />
            <Sort />
        </div>

    );
}

export default Control;