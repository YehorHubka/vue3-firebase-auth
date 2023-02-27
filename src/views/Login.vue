<template>
  <div>
    <h1>login</h1>

    <form class="form" @submit.prevent="submitHandler">
      <div class="error" v-if="error">{{ error.message }}</div>
      <input type="text" placeholder="Email..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit">Login</button>
      <div class="reg-info">
        If don't have an account you can make it. Go and
        <router-link to="/register">register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      error: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitHandler() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$router.replace({ name: "secret" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.reg-info {
  margin-top: 20px;
}
.error {
  margin-bottom: 20px;
}
</style>