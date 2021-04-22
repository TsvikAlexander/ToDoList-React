import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';

import './css/bootstrap.css';
import Caption from './Caption.js';
import TableHead from './TableHead.js';
import TableBody from './TableBody.js';

const LOCAL_STORAGE_KEY = "to-do-list-react";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
        };
    }

    updateStateItems(items) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
        this.setState({
            items: items,
        });
    }

    handleClickAdd(title) {
        if (title.trim()) {
            let items = this.state.items.slice();
            items.push({
                id: uuid(), 
                title: title, 
                date: (new Date()).toString(), 
                isDone: false,
            });
            
            this.updateStateItems(items);
        }
    }

    handleClickToggleComplete(id) {
        let items = this.state.items.slice();
        items.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            }
        });
        
        this.updateStateItems(items);
    }

    handleClickRemoveItem(id) {
        let items = this.state.items.slice();
        items = items.filter(item => item.id !== id);
        
        this.updateStateItems(items);
    }

    handleClickEditItem(id, title) {
        let items = this.state.items.slice();
        items.filter(item => {
            if (item.id === id) {
                item.title = title;
                item.date = (new Date()).toString();
            }
        });
        
        this.updateStateItems(items);
    }

    render() {
        const items = this.state.items;
        return (
            <div>
                <Caption items={items} />
                <table className="table table-bordered">
                <TableHead onClick={(title) => this.handleClickAdd(title)} />
                <TableBody
                    items={items}
                    handleClickToggleComplete={(id) => this.handleClickToggleComplete(id)}
                    handleClickRemoveItem={(id) => this.handleClickRemoveItem(id)}
                    handleClickEditItem={(id, title) => this.handleClickEditItem(id, title)} />
                </table>
            </div>
        );
    }
}

export default ToDoList;