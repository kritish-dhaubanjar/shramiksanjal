<template>
  <section>
    <div class="lds-dual-ring"></div>
  </section>
</template>

<style scoped>
section {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1024;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(46, 48, 148, 0.5);
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 4px solid rgb(223, 26, 23);
  border-color: rgb(223, 26, 23) transparent rgb(223, 26, 23) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
