import React, { Component } from 'react';

class NewItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputContent:''
        }
    }

    onInputChange = (event) => {
        this.setState(
            {inputContent: event.target.value}
        )
    }
     
    onAddBtnClick = () => {
         this.props.addItem(this.state.inputContent)
     } 

    render(){
        return(
            <div>
            <input onChange={this.onInputChange} placeholder='添加新的事项'/>
            <button onClick={this.onAddBtnClick}>Add</button>
            </div>
        )
    }

}

export default NewItem;