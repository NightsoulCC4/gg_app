<template>
  <v-container>
    <v-form @submit.prevent="register">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.firstname"
            label="First Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.lastname"
            label="Last Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="formData.username"
            label="Username"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="formData.password"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.tel"
            label="Telephone Number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.address"
            label="Address"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="formData.address_2"
            label="Address 2"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="formData.bank_no"
            label="Bank Account Number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="formData.bank_type"
            :items="bank_type"
            label="Bank Type"
            required
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Register</v-btn>
          <v-btn class="ml-2" @click="redirectToLogin">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        tel: "",
        address: "",
        address_2: "",
        bank_no: "",
        bank_type: "",
      },
      bank_type: ["Kasikorn", "Krungsri"], // Replace with your actual bank types
    };
  },
  methods: {
    register() {
      // console.log("Registration Data:", this.formData);

      axios
        .post("http://localhost:3000/register", this.formData)
        .then((res) => {
          console.log("Registration successful:", res.data);
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    },

    redirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
