<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Books</h3>
      </div>
      <div class="panel-body">
         <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">Url:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../Firebase/firebase'
export default {
  data(){
    return {
      newBook:{
        title: '',
        author: '',
        url: ''
      }
    }
  },
  methods:{
    addBook(){
      db.ref('books').push(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.url = 'http://';
    }
  }
}
</script>

<style lang="css">
</style>
