 import (render) from '@testing-library/vue'
 import ContactoForm from '@/views/ContactoView.vue'

 let subcription = {
     name: "Luis",
     lastname: "Echeverria",
 }
 describe('ContactoView.vue', () => {
     if ('Ingreso exitoso', () => {
             const { getBytext } = render(ContactoForm, {
                 props(subcription)
             })
             getBytext(subcription.name)
         })
 })