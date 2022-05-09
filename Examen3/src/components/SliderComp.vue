import MenuProduct from '@/components/MenuProduct.vue';
<template>
  <div class="slider">
    <div id="slider">
        <div class="contenido-imagen-principal">
            <h1>La Cucina</h1>
            <h2>Italiana</h2>
        </div>
        <MenuProduct></MenuProduct>
    </div>
  </div>
</template>

<script>
import MenuProduct from './MenuProduct.vue'

export default {
  name:'SliderComp',
  components: {
    MenuProduct
  }
}
</script>