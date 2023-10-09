<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Table from './components/Table.vue';
import { RouterView } from 'vue-router';

export default {
  components: { Header, Sidebar, Table, RouterView }
}
</script>

<template>
  <v-locale-provider rtl>
    <Header />
    <Sidebar />
    <RouterView />  
  </v-locale-provider>
</template>

<style lang="scss"></style>