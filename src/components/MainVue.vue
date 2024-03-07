<template>
  <div id="app" class="">
    <v-text>Username: {{ $store.state.username }}</v-text>
    <br />
    <v-text>Password: {{ $store.state.password }}</v-text>
    <br />
    <v-text>Firstname: {{ $store.state.firstname }}</v-text>
    <br />
    <v-text>Lastname: {{ $store.state.lastname }}</v-text>
    <br />
    <v-text>tel: {{ $store.state.tel }}</v-text>
    <br />
    <v-text>address: {{ $store.state.address }}</v-text>
    <br />
    <v-text>address 2: {{ $store.state.address_2 }}</v-text>
    <br />
    <v-text
      >bank account({{ $store.state.bank_type }}):
      {{ $store.state.bank_no }}</v-text
    >
  </div>
</template>

<script>
export default {};
</script>
