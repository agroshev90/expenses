<template>
  <div>
    <Loader v-if="loading"/>
    <p v-else-if="!record" class="center">Такой записи нет</p>
    <div v-else>
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">История</router-link>
        <a @click.prevent class="breadcrumb">
          {{record.type === 'income' ? 'Доход' : 'Расход'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card "
            :class="{
            'red': record.type === 'outcome',
            'green': record.type === 'income'
            }"
          >
            <div class="card-content white-text">
              <p>Описание:  {{record.description}}</p>
              <p>Сумма: {{record.amount | currency}}</p>
              <p>Категория: {{record.categoryName}}</p>

              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detail",
     metaInfo: {
      title: 'Detail',
    },
    data: () => ({
      record: null,
      loading: true
    }),
    async mounted() {
      const id = this.$route.params.id
      const record = await this.$store.dispatch('fetchRecordById', id)
      const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)
      this.record = {
        ...record,
        categoryName: category.title
      }
      this.loading = false
    }
  }
</script>
