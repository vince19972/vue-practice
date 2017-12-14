<template>
  <nav>
    <!-- <div class="heading">Stock Trader</div> -->
    <logo info="Stock Trader" color="white" hover middle></logo>
    <div class="list-container">
      <ul class="list">
        <li class="tab">Portfolio</li>
        <li class="tab">Stocks</li>
      </ul>
      <ul class="list">
        <li class="tab">End Day</li>
        <li class="tab">Save and Load</li>
        <li class="tab">Funds $10000</li>
      </ul>
    </div>
  </nav>
</template>

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
</style>

<script>
	import Logo from './elements/Logo.vue'
  
  export default {
    components: {
      Logo
    }
  }
</script>