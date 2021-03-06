/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/first */
/* eslint-disable no-console */

// // TodoItemModel.jsを利用するサンプルコード--------------------
// import { TodoItemModel } from './src/model/TodoItemModel.js';

// const item = new TodoItemModel({
//   title: '未完了のTodoアイテム',
//   completed: false,
// });
// const completedItem = new TodoItemModel({
//   title: '完了済みのTodoアイテム',
//   completed: true,
// });
// // それぞれの`id`は異なる
// console.log(item.id !== completedItem.id); // => true
// console.log(item.title);
// // --------------------------------------------------------

// // TodoListModel.jsを利用するサンプルコード-------------------------
// // import { TodoItemModel } from './.src/model/TodoItemModel.js';
// import { TodoListModel } from './src/model/TodoListModel.js';
// // 新しいTodoリストを作成する
// const todoListModel = new TodoListModel();
// // 現在のTodoアイテム数は0
// console.log(todoListModel.getTotalCount()); // => 0
// // Todoリストが変更されたら呼ばれるイベントリスナーを登録する
// todoListModel.onChange(() => {
//   console.log('TodoListの状態が変わりました');
// });
// // 新しいTodoアイテムを追加する
// // => `onChange`で登録したイベントリスナーが呼び出される
// todoListModel.addTodo(new TodoItemModel({
//   title: '新しいTodoアイテム',
//   completed: false,
// }));
// // Todoリストにアイテムが増える
// console.log(todoListModel.getTotalCount()); // => 1
// // -------------------------------------------------------------

// // TodoItemViewを利用するサンプルコード---------------------------------
// import { TodoItemModel } from './src/model/TodoItemModel.js';
// import { TodoItemView } from './src/view/TodoItemView.js';

// // TodoItemViewをインスタンス化
// const todoItemView = new TodoItemView();
// // 対応するTodoItemModelを作成する
// const todoItemModel = new TodoItemModel({
//   title: 'あたらしいTodo',
//   completed: false,
// });
// // TodoItemModelからHTML要素を作成する
// const todoItemElement = todoItemView.createElement(todoItemModel, {
//   onUpdateTodo: () => {
//     // チェックボックスが更新されたときに呼ばれるリスナー関数
//   },
//   onDeleteTodo: () => {
//     // 削除ボタンがクリックされたときに呼ばれるリスナー関数
//   },
// });

// console.log(todoItemElement); // <li>要素が入る
// // ------------------------------------------------------------------

// console.log('index.js: loaded');

import { App } from './src/App.js';

const app = new App();
// ページのロードが完了したときのイベント
window.addEventListener('load', () => {
  app.mount();
});
// ページがアンロードされたときのイベント
window.addEventListener('unload', () => {
  app.unmount();
});
