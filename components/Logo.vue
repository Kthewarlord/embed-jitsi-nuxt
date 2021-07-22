<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two" />
    <div class="Triangle Triangle--one" />
    <div class="Triangle Triangle--three" />
    <div class="Triangle Triangle--four" />
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 90px;
  width: 125px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 55px solid transparent;
  border-right: 55px solid transparent;
  border-bottom: 90px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 44px solid transparent;
  border-right: 44px solid transparent;
  border-bottom: 75px solid #3b8070;
}

.Triangle--three {
  top: 30px;
  left: 18px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #35495e;
}

.Triangle--four {
  top: 60px;
  left: 35px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 30px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 90px;
  }
}

@keyframes goright {
  100% {
    left: 50px;
  }
}
</style>
