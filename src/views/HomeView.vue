<template>
  <div class="home" id="app">
    <div
      class="row row-cols-1 row-cols-md-3 g-5"
      style="margin-top: 3px; margin-left: 1%; width: 98%; margin-bottom: 10%"
      v-if="lst_product.length >= 1"
    >
      <div class="col" v-for="item in lst_product" :key="item.id">
        <div class="card btn">
          <router-link :to="'/product/' + item.id + '/'">
            <div class="card">
              <img
                src="https://s6.uupload.ir/files/e6ca00123129767.y3jvccwxodqxlde0ndasmzywlda_9xb3.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body" style="text-align: center">
                <p>{{ item.name }}</p>
              </div>
            </div>
          </router-link>
          <button
            class="btn btn-outline-success"
            style="display: inline-flex"
            @click="AddToCard(item.id)"
          >
            <h5 class="card-title">
              <i>Price: </i><b>{{ item.price }}</b>
            </h5>
            <span class="icono-cart"></span>
          </button>
        </div>
      </div>
    </div>
    <strong v-else>there is no item to buy</strong>
  </div>
</template>

<script>
import axios from "axios";
import { AddingToCard } from "@/modules.js";

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
  methods: {
    AddToCard(id) {
      AddingToCard(id);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: unset;
}
strong {
  color: red;
}
</style>
