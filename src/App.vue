<script setup>
import { RouterView, RouterLink } from 'vue-router';
import CartIcon from '@/components/CartIcon.vue';

</script>

<template>
  <header>
    <h1>King Pizza-rd and the Lizzard Wizzard</h1>
    <div class="nav-div">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/check-out">Cart</RouterLink>
      </nav>
      <CartIcon/>
    </div>
  </header>
  <RouterView />
  <footer>
    <h5>King Pizza-rd and the Lizzard Wizzard</h5>
    <p>Copyright © 2024 evesteve</p>
    <p>All rights reserved.</p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
  display: flex;
}

* {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  color: skyblue;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "New Amsterdam", sans-serif;
  font-weight: 400;
  font-style: normal;

}


header{
  width: 100%;
  /* height: 10vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px); /* Apply blur */
  background: rgba(105, 90, 205, 0.452); /* Optional: Add a slight tint */
}

.nav-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
  color:skyblue;
  transition: 0.4s;
  padding: 3px;
  margin-left: 1rem;
  text-transform: uppercase;
  font-weight: 500;
}

nav a.router-link-exact-active {
  /* color: var(--color-text); */
  /* background-color: skyblue; */
  color: white;
}

footer{
  width: 100%;
  /* height: 10vh; */
  text-align: center;
  backdrop-filter: blur(4px); /* Apply blur */
  background: rgba(105, 90, 205, 0.452); /* Optional: Add a slight tint */
  font-size: 0.8rem;
}

footer h5 {
  letter-spacing: 2px;
  font-size: 1.2rem;
}



</style>
