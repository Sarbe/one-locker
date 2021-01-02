<template>
  <form @submit.prevent="onSignup">
    <input
      name="email"
      label="Mail"
      id="email"
      v-model="email"
      type="email"
      required
    />

    <input
      name="password"
      label="Password"
      id="password"
      v-model="password"
      type="password"
      required
    />

    <input type="submit" name="SignUp" />
  </form>
</template>
<script>
import * as firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSignup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
        });
    },
  },
};
</script>
