<template>
  <h1 :class="classes">{{ info }}</h1>
</template>

<style scoped>
  .middle-style {
    font-size: 24px;
    margin: 0;
  }
  .typo-white {
    color: white;
  }
  .hover-style {
    cursor: pointer;
  }
  .hover-style:hover {
    color: burlywood;
  }
</style>

<script>
  export default {
    props: {
      info: String,
      color: String,
      hover: Boolean,
      middle: Boolean
    },
    computed: {
      classes() {
        const list = [
          `typo-${this.color}`
        ]
        if(this.hover) list.push('hover-style')
        if(this.middle) list.push('middle-style')

        return list
      }
    }
  }
</script>