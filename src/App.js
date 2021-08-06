/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { TodoListModel } from './model/TodoListModel.js';
import { TodoItemModel } from './model/TodoItemModel.js';
import { element, render } from './view/html-util.js';

export class App {
  constructor() {
    // 1. TodoListの初期化
    this.todoListModel = new TodoListModel();
  }

  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');
    // 2. TodoListModelの状態が更新されたら表示を更新する
    this.todoListModel.onChange(() => {
      // TodoリストをまとめるList要素
      const todoListElement = element`<ul />`;
      // それぞれのTodoItem要素をtodoListModelElement以下へ追加する
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach((item) => {
        const todoItemElement = element`<li>${item.title}</li>`;
        todoListElement.appendChild(todoItemElement);
      });
      // containerElementの中身をtodoListElementで上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });
    // 3. フォームを送信したら、新しいTodoItemModelを追加する
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      // 新しいTodoItemをTodoListへ追加する
      this.todoListModel.addTodo(new TodoItemModel({
        title: inputElement.value,
        completed: false,
      }));
      inputElement.value = '';
    });
  }
}

//     // Todoアイテム数
//     let todoItemCount = 0;
//     formElement.addEventListener('submit', (event) => {
//       // submitイベントの本来の動作を止める
//       event.preventDefault();
//       // 追加するTodoアイテムの要素(li要素)を作成する
//       const todoItemElement = element`<li>${inputElement.value}</li>`;
//       // Todoアイテムをcontainerに追加する
//       containerElement.appendChild(todoItemElement);
//       // Todoアイテム数を+1し、表示されてるテキストを更新する
//       todoItemCount += 1;
//       todoItemCountElement.textContent = `Todoアイテム数： ${todoItemCount}`;
//       // 入力欄を空文字列にしてリセットする
//       inputElement.value = '';
//     });
//   }
// }
