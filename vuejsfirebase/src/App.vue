<template>
  <div id="app" class="container">
    <app-book-list v-for="book in books" :key="book.id" :book="book"></app-book-list>
  </div>
</template>

<script>
  import BookList from './components/BookList.vue'
  import Firebase from 'firebase'
  let config = {
    apiKey: "AIzaSyApxx1IYvZmmV7TdtZUO7QU341YSqv5e4U",
    authDomain: "vuejs-firebase-01-3b3e7.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01-3b3e7.firebaseio.com",
    projectId: "vuejs-firebase-01-3b3e7",
    storageBucket: "vuejs-firebase-01-3b3e7.appspot.com",
    messagingSenderId: "122647057086"
  };
  let app = Firebase.initializeApp(config);
  let db = app.database()
  let bookRef = db.ref('books')

  export default {
    name: 'app',
    firebase:{
      books: bookRef
    },
    components:{
      appBookList : BookList
    }
  }
</script>

<style>

</style>
