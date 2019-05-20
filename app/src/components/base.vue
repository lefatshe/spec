<template>
  <div class="comma">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'BaseVue',
  data () {
    return {
      msg: 'Sechaba Mothobi - Digital Portfolio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comma {
  display: none;
}
</style>
