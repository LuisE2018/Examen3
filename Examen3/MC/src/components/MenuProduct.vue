<template>
  <div class="menu">
     <section class="container-fluid my-5 bg-info" id="work">
        <h2 class="display-4 text-center my-5 p-5 font-weight-bold texto mb-3">I Nostris Prodottis</h2>
        <div class="card-deck">
            <div class="card">
                <img class="card-img-top" src="../assets/img/colaciones.jpg" alt="Colaciones">
                <div class="card-body">
                    <h5 class="card-title">Collaziones</h5>
                    <p class="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#collazione">Ver más</button>

                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="../assets/img/desayunos.jpg" alt="Desayunos">
                <div class="card-body">
                    <h5 class="card-title">Colazionis</h5>
                    <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#sandwich">Ver más</button>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="../assets/img/bebidas.jpg" alt="bebidas">
                <div class="card-body">
                    <h5 class="card-title">Potabiles</h5>
                    <p class="card-text text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#potabile">Ver más</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Modales  -->
    <div class="modal fade" id="collazione" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Collazione</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <img class="img-fluid mb-3" src="../assets/img/colaciones.jpg" alt="Colaciones">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="sandwich" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Sandwich</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <img class="img-fluid mb-3" src="../assets/img/desayunos.jpg" alt="Desayunos">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="potabile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Potabiles</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                    <img class="img-fluid mb-3" src="../assets/img/bebidas.jpg" alt="Potabiles">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
              </div>
        </div>
    </div>

    <section id="contact" class="container my-5">
        <h2 class="display-4 text-center font-weight-bold texto mb-3">La Cucina Italiana Consiglia</h2>
        <p class="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. This is the first column.</p>
        <div class="container marketing">
            <div class="row">
                <div class="col-lg-4">
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="../assets/img/carbonara.jpg" alt="Carbonara">
                    <h2>Carbonara</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel.</p>
                    <p><a class="btn btn-success" href="#">Leer más &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="../assets/img/pasqua.jpg" alt="Pasqua">
                    <h2>Pasqua</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                    <p><a class="btn btn-success" href="#">Leer más &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="../assets/img/ricette.jpg" alt="Ricette">

                    <h2>Ricette </h2>
                    <p>And lastly this, the third column of representative placeholder content. This is the first column.</p>
                    <p><a class="btn btn-success" href="#">Leer más &raquo;</a></p>
                </div>
              </div>
          </div>  
    </section>
  </div>
</template>

<script>
export default {
  name:'MenuProduct'
}
</script>