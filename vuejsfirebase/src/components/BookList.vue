<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Books list</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th> Title </th>
              <th> Author </th>
              <th> Url </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td><a :href="book.url">{{ book.url }}</a></td>
              <td>
                <router-link :to="{ name: '', params: {} }">
                  <span class="glyphicon glyphicon-edit" aria-hidden="true" v-on:click="removeBook(book)"></span>
                </router-link>
                <a>
                  <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../Firebase/firebase'
  export default {
    props:["books"],
    name: 'BookList',
    methods:{
      removeBook(book) {
        this.$swal({
          title: 'Are you sure?',
          text: 'You will not be able to recover this book!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
            db.ref('books').child(book['.key']).remove()
            .then(() => {
              this.$swal({
                title: 'Deleted!',
                text: 'This book has been deleted.',
                type: 'success'
              })
            })
          // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
          } else if (result.dismiss === 'cancel') {
            this.$swal({
              text: 'Cancell Removing The Book',
              type: 'error'
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
