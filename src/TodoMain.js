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
import TodoItem from './TodoItem';


export default class TodoMain extends React.Component {
    // 遍历显示任务，转发props
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((todo, index) => {
                    return <TodoItem key={index} {...todo} index={index} {...this.props}/>
                })}
            </ul>
        )
    }
}
