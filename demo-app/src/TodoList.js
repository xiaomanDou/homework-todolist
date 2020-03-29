import React, { Component } from "react";
import ListItem from "./ListItem";
import NewItem from "./NewItem";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoList:[
                {content:'React practice',done: true },
                {content:'game time',done:false}
            ]
        }
    }

    addNewItem = (newItemContent) => {
        const newList = [...this.state.todoList,{content: newItemContent,done: false}]
        this.setState({
            todoList: newList
        })
    }

    doneChange = (event) =>{
        const changeList = [ ...this.state.todoList]
        for (var i = 0; i < changeList.length; i++) {
        changeList[i].done=true}
        
        this.setState({
            todoList:changeList
        })
    }

    render() {
        

        return(
            <div>
                {
                    this.state.todoList.map(item => <ListItem item={item}/>)
                }
                <button onClick={this.doneChange}>全部完成</button>
                <NewItem addItem={this.addNewItem}/>
            </div>
        )

    }
}

export default TodoList;