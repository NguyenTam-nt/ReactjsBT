import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem.jsx';

DataTable.propTypes = {

};

function DataTable(props) {
    let tasks = props.tasks;

    let Tritem = tasks.map((task, index) => {
        return <TableItem key={index}
            task={task} index={index}
            deleteTask={props.deleteTask}
            updateData={props.updateData} />
    })
    return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Tritem}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DataTable;
