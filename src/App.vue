<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	<div>
		<router-link to="/home" class="routerLink">Go to Home</router-link>
		<router-link to="/about" class="routerLink">Go to About</router-link>
		<router-link :to="{ name: 'user', params: { id: 1234 }}">用户1234</router-link> 
		<router-link to="/user/5678" class="routerLink">用户5678</router-link>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
	return {
	}
  },
  components: {
	
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.routerLink{
	margin:10px;
}
a a.router-link-active {color: red;}
</style>
