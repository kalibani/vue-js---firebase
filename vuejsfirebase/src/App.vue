<template>
  <div id="app" class="col-md-10">
    <app-header></app-header>
    <app-add-book></app-add-book>
    <app-book-list :books="books"></app-book-list>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import BookList from './components/BookList.vue'
  import AddBook from './components/AddBook.vue'
  import db from './Firebase/firebase'

  export default {
    name: 'app',
    firebase:{
      books: db.ref('books')
    },
    components:{
      appHeader : Header,
      appBookList : BookList,
      appAddBook : AddBook
    }
  }
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding-left: 18%;
  }
  th{
    text-align: center;
  }
</style>
