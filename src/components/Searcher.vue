<template>
    <filter id="filter">
        <h2 class="sub-title">
            <slot name="title"></slot>
        </h2>
        <div class="sub-options">
            <h2 class="tools">Gestion</h2><div class="sub-logo"></div>
            <h2 class="tools">Buscar</h2><div class="sub-logo"></div>
        </div>
    </filter>
</template>
<style scope>
#filter {
    padding-block: .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.sub-options {
    display: flex;
}
.sub-title, .tools {
  font-size: 20px;
  font-weight: bold;
}
.tools {
  padding-inline: .5em;
}
@media (max-width: 65em) {
    .tools {
        display: none;
    }
}
</style>