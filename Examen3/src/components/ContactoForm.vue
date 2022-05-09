<template>
  <div class="contacto">
    <section class="container-fluid my-5 p-5 bg-info" id="work">
        <h2 class="display-4 text-center font-weight-bold texto mb-3">Contatto</h2>
        <p class="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

        <div class="row featurette">
            <div class="col-md-7">
                <form>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Apellidos</label>
                        <input type="text" class="form-control" id="apellidos">
                    </div>

                    <div class="mb-3 form-check">
                        <label for="nombre" class="form-label">¿Quiero recibir información de La Cucina Italiana?</label>
                        <br>
                        <input type="radio" name="genero" value="hombre" /> Si
                        <input type="radio" name="genero" value="mujer" /> No
                    </div>
                    <button type="submit" class="btn btn-primary"  @click.prevent="addsubscription()">Enviar</button>
                </form>
            </div>
            <div class="col-md-5">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="../assets/img/raviolis.jpg" alt="Raviolis">
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
name:'ContactoForm',
    data() {
    return {
      message: {
      }
    }
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault()
      db.collection("datos").add(this.subscription).then(() => {
          alert("Suscripción realizada con éxito!");
          this.subscription.name = ''
          this.subscription.lastname = ''
          
        }).catch((error) => {
          console.log(error);
        });
    }/*else {
      alert("Ingrese datos solicitados"); }*/
  }
}
</script> 

