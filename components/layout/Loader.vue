<script setup lang='ts'> </script>
<template>
<div class="loader text-nowrap">L &nbsp; ading</div>
</template> 
<style>

.loader {
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  position: relative;
}
.loader::before {
  content: '';  
  position: absolute;
  left: 34px;
  bottom: -5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 6px solid #FFF;
  border-bottom-color: #3b82f6;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>