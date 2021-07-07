<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="!anyReamining"
        @change="allChecked"
      >Check All
    </label>
  </div>
</template>

<script>
export default {
  name: 'todo-check-all',
  computed: {
    anyReamining() {
      return this.$store.getters.anyReamining
    }
  },
  methods: {
    allChecked() {
      this.$store.dispatch('checkAll',  event.target.checked)
    }
  }
}
</script>
