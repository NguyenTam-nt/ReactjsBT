import '../App.css';
import {useState} from "react";


function Search (props) {
    let [task, setTask] = useState();
    let searchTask = ()=> {
         props.getName(task);
    }

    let getValue = (e)=> {
        var value = e.target.value;
        setTask(value);
        
    }
    return (
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nhập từ khóa..."onChange={getValue} />
                                <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button" onClick={searchTask}>
                                                <span className="fa fa-search mr-5"></span>Tìm
                                </button>
                                </span>
                            </div>
                </div>
  
    );
}

export default Search;