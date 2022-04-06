<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link
            class="navbar-brand btn btn-outline-dark"
            to="/dashboard"
          >
            Dashboard
            <span class="badge bg-danger">0</span>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link active" aria-current="page" to="/">
                |Products|
              </router-link>
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/producer"
              >
                |producer|
              </router-link>
            </div>
          </div>
          <router-link to="/user/2">
            <button class="btn btn-outline-dark">
              <span class="icono-user"></span>
            </button>
          </router-link>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <p><b>Author: </b>Arya shabane</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      var1: "yes",
    };
  },
};
</script>

<style scoped>
footer {
  text-align: center;
  padding: 3px;
  background-color: DarkSalmon;
  color: white;
  left: 0;
  bottom: 0;
  width: 100%;
  position: fixed;
}
</style>
