<template>
  <div>
    <h1>Register</h1>

    <form class="form" @submit.prevent="submitHandler">
      <div class="error" v-if="error">{{ error.message }}</div>
      <input type="text" placeholder="Email..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
      createUserWithEmailAndPassword(auth, this.email, this.password)
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
.error {
  margin-bottom: 20px;
}
</style>