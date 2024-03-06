<template>
  <v-form @submit.prevent="register">
    <v-text-field v-model="username" label="Username" required></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn type="submit" color="primary">Register</v-btn>
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
    register() {
      // Implement registration logic (e.g., send data to server)
      console.log("Register:", this.username, this.password);
    },
  },
};
</script>
