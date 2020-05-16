<template>
  <div class="col s12 m6 l8">
    <div class="card grey darken-1 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="cur in currencies" :key="cur">
            <td >{{cur }}</td>
            <td>{{(rates['RUB'] / rates[cur]).toFixed(2) + ' ₽'}}</td>
            <td>{{date | date('date')}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    name: "HomeCurrency",
    props: ['rates', 'date'],
    data: () => ({
      currencies: ['USD', 'EUR', 'BTC']
    }),
  }
</script>

<style scoped>

</style>
