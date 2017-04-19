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

class TodoHeader extends React.Component {

    // 绑定键盘回车事件，添加新任务
    handerKeyUp(event) {
        if (event.keyCode === 13) {
            let value = event.target.value;

            if (!value) return false;

            let newTodoItem = {
                text: value,
                isDone: false
            };
            event.target.value = "";

            this.props.addTodo(newTodoItem);
        }
    }

    render() {
        return (
            <div className="panel-header">
                <input type="text" onKeyUp={this.handerKeyUp.bind(this)} placeholder="what's your task ?"/>
            </div>
        )
    }
}

export default TodoHeader;