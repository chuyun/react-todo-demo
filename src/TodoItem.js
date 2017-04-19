/**
 * Created by jun on 2017/4/14.
 */

/**
 * @author  info_together@aliyun.com
 * @description
 * @param
 * @return
 */

import React from 'react';

export default class TodoItem extends React.Component {

    constructor(){
        super();
        this.state={
            deleteBtnShow:false
        }
    }

    handerChange() {
        console.log(this.props.isDone);
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone,false);
    }

    handerMouseOver() {
        this.setState({deleteBtnShow:true});
    }


    handerMouseOut() {
        this.setState({deleteBtnShow:false});
    }

    handerDelete() {
        this.props.deleteTodo(this.props.index);
    }


    render() {
        let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
        let deleteBtnStyle=this.state.deleteBtnShow?{display:'inline'}:{display:'none'}

        return (
            <li
                onMouseOver={this.handerMouseOver.bind(this)}
                onMouseOut={this.handerMouseOut.bind(this)}
            >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handerChange.bind(this)}/>
                <span style={doneStyle}>{this.props.text}</span>
                <button rel="deleteBtn" onClick={this.handerDelete.bind(this)} style={deleteBtnStyle} className="fr">删除</button>
            </li>
        )
    }


}