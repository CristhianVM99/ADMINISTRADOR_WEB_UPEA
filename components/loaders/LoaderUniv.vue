<template>
    <div class="content-loader">        
        <div class="image-container">
            <img src="/images/universidad/fondologoupea.png" alt="Imagen animada" class="animated-image" />            
        </div>
        <p class="content-text">Universidad Publica de El Alto</p>
    </div>
</template>
<style>
.content-loader{
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: var(--color-btn);
    flex-direction: column;    
}
/* Estilos para el contenedor de la imagen */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Ajusta la altura según tus necesidades */
}

/* Estilos para la imagen animada */
.animated-image {
  max-width: 100%;
  max-height: 100%;
  animation: spinAndMove 5s linear infinite;
}

/* Animación */
@keyframes spinAndMove {
  0% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotateY(360deg) translateY(-10px);
  }
  100% {
    transform: rotate(720deg) translateY(0);
  }
}

.content-text{
    font-size: 2em;
    color: #fff;
    font-weight: bold;
}
</style>