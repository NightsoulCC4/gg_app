<template>
  <v-form @submit.prevent="login">
    <v-text-field v-model="username" label="Username" required></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn type="submit" color="primary">Login</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Implement login logic (e.g., send data to server)
      console.log("Login:", this.username, this.password);
    },
  },
};
</script>
