<template>
  <div>
    <Header />
    <div class="quick">
      <div style="min-width: 75%; display: flex; flex-direction: row; align-items: center; justify-content: center; margin-top: 1rem">
        <div class="filter">
          <h2 class="mt-2">FILTRAR POR</h2>
          <div>
            <v-select solo placeholder="Marcas" :items="[
                {
                  text: 'Volvo',
                  value: 1
                }
            ]" />
          </div>
        </div>
      </div>
      <div class="caminhoes">
        <v-col v-for="caminhao in caminhao_exemplo" :key="caminhao.nome" class="column">
          <div class="caminhao" style="background-color: #cdcece;border-radius: 10px">
            <div class="imagem">
              <img :src="caminhao.imagem" alt="">
            </div>
            <div style="display: flex; flex-direction: column; width: 100%; align-items: center">
              <h2 style="text-align: center; font-size: 1.4rem; padding: 0 0.5rem">{{ caminhao.nome }}</h2>
<!--              <hr style="width: 90%;" />-->
              <div class="caminhao-details">
                <p style="margin: 0; font-weight: bold" class="mt-5">Preço R$: </p>
                <h2 style="font-size: 2rem; color: #ffffff" class="ml-4">{{ caminhao.preco }}  </h2>
              </div>
                  <hr style="width: 90%;" class="mb-3" />
              <div class="caminha-text">
                <div class="info-truck">
                  <i class="las la-calendar"></i>
                  <h4>{{ caminhao.ano }}</h4>
                </div>
                <div class="info-truck">
                  <i class="las la-road"></i>
                  <h4>{{ caminhao.km }}</h4>
                </div>
                <div class="info-truck">
                  <i class="las la-truck"></i>
                  <h4>{{ caminhao.modelo }}</h4>
                </div>
                <div class="info-truck">
                  <i class="las la-map-pin"></i>
                  <h4>{{ caminhao.local }}</h4>
                </div>
              </div>
              <div class="button">
                <v-btn
                    color="primary"
                    >Mais Detalhes</v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>

import Header from "../components/Header/Header"

export default {
  name: "Home",
  components: {
    Header
  },
  data() {
    return {
      valueField: null,
      fields: {},
      caminhao_exemplo: [
          {
            nome: 'Scania R440 A6x2 – Highline 2017',
            imagem: 'https://s3.amazonaws.com/trucadao-production-eua/system/imagens_anuncios/imagems/001/183/974/large/647ddff504.jpg?1640270121',
            preco: '250.000,00',
            ano: '2017',
            km: '115.000.000',
            modelo: 'SC41C',
            local: 'Ponta Grossa - PR'
        },
        {
          nome: 'Scania R440 A4x2 – Highline',
          imagem: 'https://s3.amazonaws.com/trucadao-production-eua/system/imagens_anuncios/imagems/001/183/974/large/647ddff504.jpg?1640270121',
          preco: '200.000,00',
          ano: '2015',
          km: '226.000.000',
          modelo: 'GG66C',
          local: 'Campo Mourão - PR'
        },
    ]
    }
  },
  methods: {
    ver() {
      console.log(this.valueField);
    }
  },
  mounted() {
    this.fields = {
      soQuick: {
        field: 'TextField',
        label: 'How much quick?',
        valueField: 'So quick dude 😎'
      },
    }
  }
};
</script>

<style scoped>
.quick {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.filter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  /*align-items: center;*/
}

.caminhoes {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  /*height: 100%;*/
}

.caminhao {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  box-shadow: 1px 5px 18px rgba(99, 88, 160, 0.35);
}

.caminhao-details {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.caminha-text {
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
}

.imagem {
  width: 270px;
  height: 300px;
  display:inline-block;
}

.imagem img {
  height: 300px;
  width: 270px;
  /*width: auto;*/
  /*height: auto;*/
  object-fit: cover;
}

.info-truck {
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  margin-bottom: 10px;
  /*justify-content: center;*/
}

.info-truck h4 {
  font-size: 0.9rem;
}

.info-truck i {
  font-size: 1.4rem;
  margin-right: 10px;
}

.button {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5% 0;
}

.column {
  /*float: left;*/
  width: 50%;
}

@media screen and (max-width: 1700px) {
  .column {
    width: 100%;
  }
  .caminhao {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    box-shadow: 1px 5px 18px rgba(99, 88, 160, 0.35);
  }

  .imagem {
    width: 100%;
    height: 170px;
    display:inline-block;
  }

  .imagem img {
    width: 100%;
    height: 170px;
    /*width: auto;*/
    /*height: auto;*/
    object-fit: cover;
  }
}

@media screen and (max-width: 1100px) {
  .column {
    width: 100%;
  }

  .caminhao {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    box-shadow: 1px 5px 18px rgba(99, 88, 160, 0.35);
  }

  .imagem {
    width: 100%;
    height: 170px;
    display:inline-block;
  }

  .imagem img {
    width: 100%;
    height: 170px;
    /*width: auto;*/
    /*height: auto;*/
    object-fit: cover;
  }

  .filter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .filter h2 {
    margin-bottom: 1.5rem;
  }
}
</style>
