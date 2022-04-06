<template>
  <div class="home" id="app">
    <div
      class="row row-cols-1 row-cols-md-3 g-5"
      style="margin-top: 3px; margin-left: 1%; width: 98%; margin-bottom: 10%"
    >
      <div class="col" v-for="item in lst_product" :key="item.id">
        <router-link :to="'/product/' + item.id + '/'">
          <div class="card">
            <img
              src="https://s6.uupload.ir/files/e6ca00123129767.y3jvccwxodqxlde0ndasmzywlda_9xb3.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body" style="text-align: center">
              <p>{{ item.name }}</p>
              <hr />
              <button
                class="btn btn-outline-success"
                style="display: inline-flex"
              >
                <h5 class="card-title">
                  <i>Price: </i><b>{{ item.price }}</b>
                </h5>
                <span class="icono-cart"></span>
              </button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      lst_product: ["dfdsf"],
    };
  },
  // get product list from server
  created() {
    axios.get("http://127.0.0.1:8000/api/prduct/").then((res) => {
      this.lst_product = res.data;
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: unset;
}
</style>
