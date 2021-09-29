import '../App.css';


function TableItem(props) {
    let {task} = props
    
    let deleteTask = () => {
            props.deleteTask(task.id)
    }

    let updateData = () => {
        props.updateData(task.id)
    }

  return (
                                <tr>
                                    <td>{props.index + 1}</td>
                                    <td className="td-name">{task.name}</td>
                                    <td className="text-center">
                                        <span className={task.state === true ? "label label-danger" : "label label-success"}>
                                        {task.state === true ? "Kích hoạt" : "Ẩn"}
                                                </span>
                                    </td>
                                    <td className="text-center text-handle">
                                        <button type="button" className="btn btn-warning" onClick={updateData}>
                                            <span className="fa fa-pencil mr-5" ></span>Sửa
                                        </button>
                                        &nbsp;
                                        <button type="button" className="btn btn-danger" onClick={deleteTask}>
                                            <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                    </td>
                                </tr>
  );
}

export default TableItem;
