<template>
  <topHeader />
  <nav>
    <router-link to="/login">login</router-link> |
    <router-link to="/register">register</router-link> |
    <router-link to="/secret">secret</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import topHeader from "./components/top-header";

export default {
  components: {
    topHeader,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.form {
  max-width: 300px;
  margin: 0 auto;
}
.form input[type="text"],
.form input[type="password"] {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
.form button {
  width: 100%;
  margin: 0 auto;
  display: block;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}
h1 {
  text-align: center;
  margin: 0 0 50px;
}
nav {
  margin-bottom: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
