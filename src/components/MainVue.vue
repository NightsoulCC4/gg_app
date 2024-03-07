<template>
  <v-card class="mx-auto" max-width="1000">
    <v-card-item class="bg-cyan-darken-1">
      <v-card-title>
        <span class="text-h5">{{
          $store.state.firstname + " " + $store.state.lastname
        }}</span>
      </v-card-title>
    </v-card-item>

    <v-list>
      <v-list-item :title="$store.state.tel"></v-list-item>

      <v-divider inset></v-divider>

      <v-list-item :title="$store.state.address"></v-list-item>

      <v-divider inset></v-divider>

      <v-list-item
        :title="$store.state.bank_no + ' (' + $store.state.bank_type + ')'"
      ></v-list-item>

      <v-divider inset></v-divider>

      <v-list-item :title="$store.state.credit"></v-list-item>
    </v-list>
  </v-card>
  <div class="mt-5">
    <v-btn color="red" @click="dialogDisposit = true">Disposit</v-btn>
    <v-btn class="ml-2" color="primary" @click="withdraw"> Withdraw </v-btn>

    <br />

    <v-btn class="mt-3" @click="toLogin">log out</v-btn>
  </div>

  <v-dialog v-model="dialogDisposit" width="auto">
    <v-card>
      <template v-slot:actions>
        <v-text-field v-model="add_credit" type="text" required></v-text-field>
        <v-btn
          class="ms-auto"
          text="Ok"
          @click="disposit(add_credit), (dialogDisposit = false)"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      add_credit: 0,
      dialogDisposit: false,
      dialogWithdraw: false,
    };
  },
  methods: {
    disposit(credit) {
      console.log(credit);

      credit = parseInt(this.$store?.state?.credit) + parseInt(credit);

      const data = {
        username: this.$store?.state?.credit,
        token: localStorage.getItem("token"),
        credit: credit,
      };

      console.log(data);

      /* axios
        .post("http://localhost:3000/updateCredit", data)
        .then((res) => {
          console.log("login successful:", res.data);

          const data = {
            userData: res.data.data,
            username: this.formData.username,
            password: this.formData.password,
          };

          this.$store.dispatch("saveLogin", data);

          this.$router.push("/main");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        }); */
    },
    withdraw() {},
    toLogin() {
      localStorage.clear();

      this.$router.push("/login");
    },
  },
};
</script>
