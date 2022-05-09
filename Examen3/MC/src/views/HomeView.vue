<template>
  <div class="home">
    <SliderComp></SliderComp>
    <MenuProduct></MenuProduct>
    <!-- <ProductosList></ProductosList>
    <ContactoForm></ContactoForm> -->

  </div>
</template>

<script>
import SliderComp from './components/SliderComp.vue'
import MenuProduct from './components/MenuProduct.vue'
/* import ProductosList from './components/ProductosList.vue'
import ContactoForm from './components/ContactoForm.vue'
 */
export default {
  name: 'HomeView',
  components: {
    SliderComp,
    MenuProduct,
    /* ProductosList,
    ContactoForm */
  }
}
</script>
