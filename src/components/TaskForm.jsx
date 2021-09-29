import '../App.css';
import {useState} from "react"
function TaskForm(props) {      
        let name = '';
        let active = false;
        if(props.isUIform){
           name = props.ItemTasks.name
           active = props.ItemTasks.state
        }else {
            name = ''; 
           active = false
        }
        let [nameTask, setName] = useState(name);
        let [isActive, setActive] = useState(active);
        let  handleForm = ()=> {
        props.onTaskForm(false);
    }

    let setSubmit = (e) => {
        e.preventDefault();    
        props.getTackItem({nameTask, isActive})
        onCLear();

    }

    let onCLear = () => {
        setName('');
        setActive(false);
    }

    
    let getData = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
      if(name === 'name') {
            setName(value);
      }else {
          setActive(value);
      }
    }
    let text = props.isUIform ? "Sửa công việc" : "Thêm Công Việc"
    let textBtn = props.isUIform ? "Save" : "Thêm"
    

  return (   
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <div className="heading-add">
                            <h3 className="panel-title">{text}</h3>
                            <span type="button" className="delete" onClick={()=>handleForm()}>x</span>           
                        </div> 
                    </div>
                    <div className="panel-body">
                        <form onSubmit={setSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="name" onChange={getData} value={nameTask}/>
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" 
                            name="active" onChange={getData} value={isActive}>
                                <option value={true} >Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">{textBtn}</button>&nbsp;
                                <button type="reset" onClick={onCLear}  className="btn btn-danger" >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
  );
}

export default TaskForm;
