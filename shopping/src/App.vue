<template>
  <div id="app">
    <navbar></navbar>
    <index></index>
  </div>
</template>

<script>
	import Index from './components/Index.vue'
	import Navbar from './components/Nav.vue'
	
	export default {
		components:{Index,Navbar}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
