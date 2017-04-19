import React from 'react';
import LocalDb from 'localDb';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';


class App extends React.Component {
    constructor() {
        super();
        this.db = new LocalDb('React-Todos');
        this.state = {
            todos: this.db.get('todos') || [],
            isAllChecked: false
        }
    }

    // 判断是否所有任务的状态都完成，同步底部的全选框
    allChecked() {
        let isAllChecked = false;
        if (this.state.todos.every((todo) => todo.isDone)) {
            isAllChecked = true;
        }
    }

    // 添加任务，是传递给Header组件的方法
    addTodo(todoItem) {
        this.state.todos.push(todoItem);
        this.setState({
            todos: this.state.todos
        });
        this.allChecked();
        this.db.set('todos', this.state.todos);
    }

    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index, isDone, isChangeAll = false) {
        if (isChangeAll) {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        } else {
            this.state.todos[index].isDone = isDone;
            this.setState({
                todos: this.state.todos
            });
            this.allChecked();
        }

        this.db.set('todos', this.state.todos);
    }

    // 清除已完成的任务，传递给Footer组件的方法
    clearDone() {
        let todos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({
            todos: todos,
            isAllChecked: false
        });
        this.db.set('todos', todos);
    }

    // 删除当前的任务，传递给TodoItem的方法
    deleteTodo(index) {
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        });
        this.db.set('todos', this.state.todos);
    }


    render() {
        let props = {
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0
            // todoDoneCount: 10
        };

        return (
            <div className="container-main">
                <header>
                    <h1>React-Todos</h1>
                </header>
                <div className="panel">
                    <TodoHeader addTodo={this.addTodo.bind(this)}/>
                    <TodoMain deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos}
                              changeTodoState={this.changeTodoState.bind(this)}/>
                    <TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...props}
                                changeTodoState={this.changeTodoState.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default App;