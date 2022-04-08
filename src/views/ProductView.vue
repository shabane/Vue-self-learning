<template>
  <div id="app">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Product</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ $route.params.id }}
        </li>
      </ol>
    </nav>

    <div style="display: inline-flex">
      <p>
        <b>Name: </b> <i>{{ dict_product.name }}</i>
        <br />
        <b>Price: </b><i>{{ dict_product.price }}</i>
        <br />
        <b>Entity: </b><i>{{ dict_product.entity }}</i>
        <br />
        <b>Producers: </b
        ><i v-for="producer in lst_producer" :key="producer.id">
          <a :href="producer.url">{{ producer.name }}</a> |
        </i>
        <br />
        <br />
        <br />
        <button
          class="btn btn-outline-success"
          @click="AddToCard($route.params.id)"
        >
          Add to card
          <span class="icono-cart"></span>
        </button>
      </p>
      <img
        class="img-fluid rounded-start col-6"
        src="https://s6.uupload.ir/files/e6ca00123129767.y3jvccwxodqxlde0ndasmzywlda_9xb3.jpg"
      />
    </div>
  </div>
</template>

<script type="module">
import axios from "axios";
import { AddingToCard } from "@/modules.js";
export default {
  data() {
    return {
      dict_product: {},
      lst_producer: [],
      int_card_items: 0,
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/prduct/" + this.$route.params.id + "/")
      .then((res) => {
        this.dict_product = res.data;
        for (let i of this.dict_product.producer) {
          axios
            .get("http://127.0.0.1:8000/api/producer/" + i + "/")
            .then((res2) => {
              this.lst_producer.push(res2.data);
            });
        }
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
nav {
  --bs-breadcrumb-divider: ">";
  margin-left: 3%;
}
#app {
  padding: 3%;
}
img {
  align-self: left;
  margin-left: 10%;
}
</style>
