<template>
  <div class="grid-item" :style="itemStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    column: {
      type: Number,
      default: 1
    },
    row: {
      type: Number,
      default: 1
    },
    columnSpan: {
      type: Number,
      default: 1
    },
    rowSpan: {
      type: Number,
      default: 1
    }
  },
  computed: {
    itemStyle() {
      return {
        gridColumn: this.columnSpan > 1
          ? `${this.column} / span ${this.columnSpan}`
          : this.column,
        gridRow: this.rowSpan > 1
          ? `${this.row} / span ${this.rowSpan}`
          : this.row,
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.grid-item {
  // Grid-Position wird über computed properties gesetzt
  width: 100%;
  height: 100%;
}
</style>