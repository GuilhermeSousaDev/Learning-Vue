<template>
  <div class="home">
    <h1>Negocie e Consulte suas Ações</h1>

    <button>Você pode Salvar & Carregar os Dados</button>
    <button>Clique em 'Finalizar Dia' para iniciar um novo dia!</button>
    <hr>
    <h3>Seu Saldo: R$ {{ cash }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    cash() {
      return this.$store.state.cash;
    }
  }
}
</script>
