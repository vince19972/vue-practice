<template>
  <nav>
    <router-link to="/">
      <logo info="Stock Trader" color="white" hover middle></logo>
    </router-link>
    <div class="list-container">
      <ul class="list">
        <!-- <li class="tab">Portfolio</li> -->
        <router-link to="stocks"><a class="link">Stocks</a></router-link>
      </ul>
      <ul class="list">
        <li class="tab">End Day</li>
        <li class="tab">Save and Load</li>
        <li class="tab">Funds $10000</li>
      </ul>
    </div>
  </nav>
</template>

<script>
	import Logo from './Logo.vue'
  
  export default {
    components: {
      Logo
    }
  }
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    padding: 16px;
    margin-top: 24px;
    background-color: cadetblue; 
  }
  .list-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  .list {
    display: flex;
    text-decoration: none;
    margin-bottom: 0;
  }
  .tab {
    text-decoration: none;
    list-style: none;
    margin-right: 24px;
  }
  .link {
    color: black;
  }
</style>
