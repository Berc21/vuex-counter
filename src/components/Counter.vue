<template>
  <div >
   Counter {{getCount}}
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <button @click="incrementifEven" >+ If number is even</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'Counter',
  computed: {
    ...mapGetters(['getCount']), 
    },
  methods: {
    ...mapActions(['increment', 'decrement', 'incrementifEven'])
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
