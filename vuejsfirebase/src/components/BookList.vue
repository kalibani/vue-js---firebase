<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue.js & Firebase Application</h1>
    </div>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td><a :href="book.url">{{ book.url }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['book'],
    name: 'HelloWorld'
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  th{
    text-align: center;
  }
</style>
