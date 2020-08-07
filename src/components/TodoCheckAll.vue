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
  props: {
    anyReamining: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    allChecked() {
      eventBus.$emit('checkAllChanged', this.anyReamining);
    }
  }
}
</script>
