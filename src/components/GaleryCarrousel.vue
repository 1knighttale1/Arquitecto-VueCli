<template>
    <div class="carrousel">
        <div class="grande">
            <img src="@/assets/IMG/01.jpg" alt="Imagen 1" class="img-carrousel">
            <img src="@/assets/IMG/02.jpg" alt="Imagen 2" class="img-carrousel">
            <img src="@/assets/IMG/01.jpg" alt="Imagen 1" class="img-carrousel">
        </div>

        <ul class="puntos">
            <li class="punto"></li>
            <li class="punto"></li>
            <li class="punto"></li>
        </ul>
    </div>
</template>
<style scope>
.img-carrousel {
  max-width: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  margin-inline: .5rem;
}

.carrousel {
  width: 100%;
  max-width: 120em;
  padding: 1em;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
  overflow: hidden;
}

.carrousel .grande {
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
  padding: 1em;
  transition: all 0.5s ease;
  transform: translateX(-25%);
}

.carrousel .img-carrousel {
/* .carrousel { */
  width: calc( 100% / 2 - 2em);
  min-height: 10vh;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
}

.carrousel .puntos {
  width: 100%;
  margin: 1em 0 0;
  padding: 0.4em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.carrousel .punto {
  width: 2em;
  height: 2em;
  margin: 1em 1em 0;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  box-shadow: 0.6em 0.6em 1.2em var(--sombra-ppal), -0.6em -0.6em 1.2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent;
}

.carrousel .punto.activo {
  background-color: lightblue;
}
</style>