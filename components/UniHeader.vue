<template>
    <header>
      <figure>
        <BWLogo/>
        <figcaption>
          <p>BikeWatch</p>
          <p>Your vision on the road beyond</p>
        </figcaption>
      </figure>
    </header>
</template>

<style lang="scss">
header{
  background-color: ghostwhite;
  position: sticky;
  top: 0;
  figure{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem;
    svg{
      margin-right: 1rem;
    }
    figcaption{
      display: flex;
      flex-flow: column nowrap;
      gap: 0.1rem;
      p:first-of-type{
        font-weight: bold;
        size: 10px;
        margin: 0;
      }
      p:last-of-type{
        margin: 0;
        size: 0.25rem;
        font-style: italic;
      }
    }
  }
}
  
</style>
