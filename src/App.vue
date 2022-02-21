<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/componets/HeaderComponent";
import Footer from "@/componets/FooterComponent";

export default {
  components: {
    Header,

    Footer,
  },
};
</script>

<style>
</style>
