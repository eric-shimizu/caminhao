<template>
  <div class="header">
    <div class="header-items">
      <div>
        <h1>LOJINHA</h1>
      </div>
      <div class="header-buttons">
        <v-btn text class="button">Veículos</v-btn>
        <v-btn text class="button">Quem Somos</v-btn>
        <v-btn text class="button">Contato</v-btn>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Header',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
 .header {
   display: flex;
   flex-direction: row;
   height: 130px;
   background-color: grey;
   margin: 0;
   padding: 0;
   justify-content: center;
   align-items: center;
 }

 .header-items {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   width: 50%;
 }

 .button {
   margin-right: 20px;
   font-size: 20px !important;
 }

    @media screen and (max-width: 1700px) {

     .header {
       display: flex;
       flex-direction: column;
       height: 180px;
       width: 100%;
       background-color: grey;
       margin: 0;
       padding: 0;
       justify-content: center;
       align-items: center;
     }

      .header-items {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;

      }
    }

   @media screen and (max-width: 690px) {
   .header {
     display: flex;
     flex-direction: column;
     height: 180px;
     width: 100%;
     background-color: grey;
     margin: 0;
     padding: 0;
     justify-content: center;
     align-items: center;
   }

   .header-items {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     width: 100%;

   }

   .header-buttons {
     display: flex;
     width: 100%;
     flex-wrap: wrap;
     justify-content: center;
     margin-top: 1rem;
   }

   .button {
     width: 50%;
     font-size: 20px !important;
     margin: 0;
   }
 }

</style>