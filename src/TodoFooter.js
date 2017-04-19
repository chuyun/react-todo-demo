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

export default class TodoFooter extends React.Component {

    // 处理全选与全不选的状态
    handerAllState(event) {
        this.props.changeTodoState(null, event.target.checked, true);
    }

    //  绑定点击事件，清除已完成
    handerClick() {
        this.props.clearDone();
    }


    render() {

        return (
            <div className="clearfix todo-footer">
                <input type="checkbox" className="fl" checked={this.props.isAllChecked}
                       onChange={this.handerAllState.bind(this)}/>
                <span className="fl">
                     {this.props.todoDoneCount} 已完成 / {this.props.todoCount} 总数
                 </span>
                <button onClick={this.handerClick.bind(this)} className="fr">清除已完成</button>
            </div>
        )
    }
}
