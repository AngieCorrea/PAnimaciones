<template lang='pug'>
  .ejm
    h1.title  Feliz Día :)
    .corazon 
      .corazon-texto
        h2 Te quiero

</template>

<script>
export default {

  data () {
    return{

    }
  }
}
</script>
  
<style lang='scss'>

  .ejm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;

  }

 

  .title{
    margin-bottom: 3em;
  }


  .corazon{
    width: 200px;
    height: 200px;
    background: red;
    margin-top: 5em;
    position: relative;
    border-radius: 5px;
    transform: rotate(-45deg);
    animation: corazon 1s alternate infinite ease-in;

     @keyframes corazon {
      to{
        transform: scale(1.4) rotate(-45deg);
        

      }
    }


    &-texto{
        
        text-align: center;
        color: white;
        position: absolute;
        z-index: 100000;
        transform: rotate(45deg)  ;
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        // background: yellow;

          
      & h2{
      
        padding-top: .8em;
        font-size: 2.5em;
        animation: texto 2s infinite alternate ease-in-out;

        @keyframes texto {
          to{
            transform: rotate(360deg);
            // color: yellow;
          }
        }
      }
    }

   
   
    

    &::before, &::after{
      content: ' ';
      display: block;
      position: absolute;
      width: 200px;
      height: 200px;
      background: inherit;
      border-radius: 50%;
      transform: translateY(-50%);
      z-index: -5555;
      // display: none;
      
      
    }

    &::after{
      transform: translateX(50%);
     
    }

   

  }

  *{
    margin: 0;
    padding: 0;
  }

</style>
