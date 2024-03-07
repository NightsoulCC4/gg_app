<template>
  <v-form @submit.prevent="login">
    <v-text-field
      v-model="formData.username"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="formData.password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn type="submit" color="primary">Login</v-btn>
    <v-btn class="ml-2" @click="redirectToRegister">Register</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log("Login:", this.formData);

      const url = "http://172.105.121.61:3002";
      // const url = "http://localhost:3000";

      axios
        .post(url + "/login", this.formData)
        .then((res) => {
          console.log("login successful:", res.data);

          const data = {
            userData: res.data.data,
            username: this.formData.username,
            password: this.formData.password,
          };

          if (res.data.status === "success") {
            this.$store.dispatch("saveLogin", data);
            this.$router.push("/main");
          } else alert("Username or password incorrect.");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    },
    redirectToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
