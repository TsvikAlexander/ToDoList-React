import React  from 'react';
import './css/style.css';
import './css/bootstrap.css';

function TableHead(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <thead className="table-dark">
        <tr>
            <td colSpan="4">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control"
                            id="title" placeholder="Type something todo" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-success" onClick={
                                (title) => {
                                    props.onClick(document.getElementById('title').value);
                                    document.getElementById('title').value = '';
                                }}>Add</button>
                        </div>
                    </div>
                </form>
            </td>
        </tr>
    </thead>
    );
}

export default TableHead;