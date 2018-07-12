<template>
  <div >
   Counter: {{getCount}}

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Counter',
  computed: mapGetters(['getCount'])
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
