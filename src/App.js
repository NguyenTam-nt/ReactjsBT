import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm.jsx';
import HeaderText from './components/HeaderText.jsx';
import Control from './components/control.jsx';
import DataTable from './components/DataTable.jsx';

function App() {


  const [lists, setLists] = useState([]);
  const [isTaskForm, setIsStask] = useState(false);
  const [isIUform, setIUform] = useState(false);
  const [ItemTask, setItemTask] = useState()

  useEffect(() => {
    if (localStorage && localStorage.getItem('lists')) {
      let l = localStorage.getItem('lists')
      setLists(JSON.parse(l))
    }
  }, [])

  useEffect(() => {
    document.title = `You clicked ${lists} times`;
  });


  let v4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString().substring(1)
  }

  let getString = () => {
    return v4() + v4() + '-' + v4() + v4() + '-' +
      v4() + v4() + '-' + v4() + v4() + '-' + v4() + v4() + '-' + v4() + v4();
  }

  let handleTaks = (data) => {
    setIsStask(data);
  }

  let setTaskForm = () => {
    setIsStask(true);
    setIUform(false)
  }

  let addList = (data) => {
    if (!isIUform) {
      let array = {
        id: getString(),
        name: data.nameTask,
        state: data.isActive === 'true' ? true : false
      }
      setLists([...lists, array]);
      localStorage.setItem('lists', JSON.stringify(lists))
    } else {
      let array = lists
      array.forEach(list => {
        if (list.id === ItemTask.id) {
          list.name = data.nameTask;
          list.state = data.isActive === 'true' ? true : false;
        }
      })
      setLists(array);
      localStorage.setItem('lists', JSON.stringify(lists))
    }

  }

  let deleteTask = (id) => {
    let Tasks = lists;
    Tasks.forEach((Task, index) => {
      if (Task.id === id) {
        Tasks.splice(index, 1);
      }
    })
    setIsStask(false)
    setLists(Tasks);
    localStorage.setItem('lists', JSON.stringify(lists))
  }

  let updateTask = (id) => {
    setIUform(true)
    setIsStask(true)
    let Tasks = lists;
    let taskItem;
    Tasks.forEach(task => {
      if (task.id === id) {
        taskItem = task;
      }
    })
    setItemTask(taskItem);

  }

  let searchName = (data) => {
    // let ListTask = lists;
    // let arr;
    // ListTask.forEach(task => {
    //  // if()
    // })
  }

  let FormConltrol = isTaskForm ? <TaskForm onTaskForm={handleTaks}
    getTackItem={addList}
    isUIform={isIUform}
    ItemTasks={ItemTask}
  /> : "";
  let setClassName = isTaskForm ?
    "col-xs-8 col-sm-8 col-md-8 col-lg-8"
    : "col-xs-12 col-sm-12 col-md-12 col-lg-12"

  return (
    <div className="container">
      <HeaderText />
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {FormConltrol}
        </div>
        <div className={setClassName}>
          <button type="button" className="btn btn-primary"
            onClick={() => setTaskForm()}>
            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>
          <Control getTask={searchName} />
          <DataTable tasks={lists} deleteTask={deleteTask}
            updateData={updateTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
