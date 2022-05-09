<template>
  <div class="productos">
    <ProductosList></ProductosList>
   
  </div>
</template>

<script>
import ProductosList from './components/ProductosList.vue'

export default {
  name: 'ProductosView',
  components: {
    ProductosList
  }
  
}
</script>