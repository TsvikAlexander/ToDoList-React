import React from "react";
import './css/style.css';
import './css/bootstrap.css';

function TableBody(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <tbody className="table-hover">
            {props.items.sort((item1, item2) => item1.isDone > item2.isDone ? 1 : -1).map(item => (
            <tr key={item.id} className={item.isDone ? 'table-success' : 'table-danger'}>
                <td>
                    <input type="checkbox" id={item.id} checked={item.isDone} onClick={(id) => props.handleClickToggleComplete(item.id)} />
                    <label className="pl-1" for={item.id} style={item.isDone ? {color: 'green', textDecoration: 'line-through'} : {color: 'red'}}>
                        {item.title}
                    </label>
                    <div id={`idDiv${item.id}`} style={{display: 'none'}}>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" className="form-control" id={`editTitle${item.id}`} defaultValue={item.title} />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-sm btn-success" onClick={(id, title) => {
                                        props.handleClickEditItem(item.id, document.getElementById(`editTitle${item.id}`).value);
                                        document.getElementById(`idDiv${item.id}`).style.display = 'none';
                                    }}>Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </td>
                <td className="cell text-center">
                    {item.date.toString().split(' ').slice(0, 5).join(' ')}
                </td>
                <td className="cell text-center">
                    <button className="btn btn-sm btn-warning" onClick={() => {
                        document.getElementById(`idDiv${item.id}`).style.display === 'none' ? 
                        document.getElementById(`idDiv${item.id}`).style.display = 'block' : 
                        document.getElementById(`idDiv${item.id}`).style.display = 'none';
                    }}>Edit</button>
                </td>
                <td className="cell text-center">
                    <button className="btn btn-sm btn-danger" onClick={(id) => props.handleClickRemoveItem(item.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
    );
}

export default TableBody;