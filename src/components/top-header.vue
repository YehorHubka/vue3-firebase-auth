<template>
  <div class="top-header">
    <div class="status">
      Signed out:
      <span v-if="isLoggedOut">No</span>
      <span v-else>Yes</span>
    </div>
    <button v-if="isLoggedOut" @click="loggedOut()">Sign Out</button>
  </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      isLoggedOut: false,
    };
  },
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.isLoggedOut = !!user;
    });
  },
  methods: {
    loggedOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.replace({ name: "login" });
        })
        .catch((error) => {
          // An error happened.
          console.log("error:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.top-header {
  padding: 15px 0;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}
</style>