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
    <v-btn class="ml-2" color="primary" @click="dialogWithdraw = true">
      Withdraw
    </v-btn>

    <br />

    <v-btn class="mt-3" @click="toLogin">log out</v-btn>
  </div>

  <v-dialog v-model="dialogDisposit" width="auto">
    <v-card>
      <template v-slot:actions>
        <v-text-field v-model="add_credit" type="text" required></v-text-field>
        <v-btn class="ms-auto" text="Ok" @click="disposit(add_credit)"></v-btn>
      </template>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogWithdraw" width="auto">
    <v-card>
      <template v-slot:actions>
        <v-text-field v-model="add_credit" type="text" required></v-text-field>
        <v-btn class="ms-auto" text="Ok" @click="withdraw(add_credit)"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      add_credit: 0,
      dialogDisposit: false,
      dialogWithdraw: false,
    };
  },
  methods: {
    updateCredit(credit) {
      const data = {
        username: this.$store?.state?.username,
        token: localStorage.getItem("token"),
        credit: credit,
      };

      axios
        .post("http://localhost:3000/updateCredit", data)
        .then((res) => {
          console.log("update successful:", res.data);

          this.$store.dispatch("updateCredit", data);
        })
        .catch((error) => {
          console.error("update failed:", error);
        });
    },
    disposit(credit) {
      credit = parseInt(this.$store?.state?.credit) + parseInt(credit);

      this.updateCredit(credit);

      this.dialogDisposit = false;
    },
    withdraw(credit) {
      credit = parseInt(this.$store?.state?.credit) - parseInt(credit);

      if (parseInt(credit) < 0) alert("You credit's not enough.");
      else this.updateCredit(credit);

      this.dialogWithdraw = false;
    },
    toLogin() {
      localStorage.clear();

      this.$router.push("/login");
    },
  },
};
</script>
