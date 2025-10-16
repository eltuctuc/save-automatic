<template>
  <button :class="buttonClasses" :disabled="disabled" @click="$emit('click')">
    <!-- Custom icon via slot -->
    <slot v-if="$slots.default" />

    <!-- Material Icon -->
    <MaterialIcon v-else-if="icon" :name="icon" :size="iconSize" />

    <!-- Default placeholder icon -->
    <MaterialIcon v-else name="more_horiz" :size="iconSize" />
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  emits: ['click'],
  props: {
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    buttonClasses() {
      return [
        'icon-button',
        `icon-button--${this.size}`,
        {
          'icon-button--disabled': this.disabled
        }
      ]
    },
    iconSize() {
      const sizeMap = {
        small: 'small',
        medium: 'medium',
        large: 'large'
      }
      return sizeMap[this.size]
    }
  }
}
</script>

<style scoped lang="scss">
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: get-transition(base);
  border-radius: get-border-radius(base);

  // Small size
  &--small {
    width: get-icon-button-size(small, size);
    height: get-icon-button-size(small, size);
    padding: get-icon-button-size(small, padding);

    .material-icon {
      font-size: get-icon-button-size(small, icon-size);
      color: get-color(icon-interactive);
    }
  }

  // Medium size (default)
  &--medium {
    width: get-icon-button-size(medium, size);
    height: get-icon-button-size(medium, size);
    padding: get-icon-button-size(medium, padding);

    .material-icon {
      font-size: get-icon-button-size(medium, icon-size);
      color: get-color(icon-interactive);
    }
  }

  // Large size
  &--large {
    width: get-icon-button-size(large, size);
    height: get-icon-button-size(large, size);
    padding: get-icon-button-size(large, padding);

    .material-icon {
      font-size: get-icon-button-size(large, icon-size);
      color: get-color(icon-interactive);
    }
  }

  // Hover state
  &:hover:not(.icon-button--disabled) {
    background: get-color(background-interactive-hover);

    .material-icon {
      color: get-color(icon-interactive-hover);
    }
  }

  // Active/Focus state
  &:active:not(.icon-button--disabled),
  &:focus:not(.icon-button--disabled) {
    background: get-color(background-interactive-active);

    .material-icon {
      color: get-color(icon-interactive-active);
    }
  }

  // Disabled state
  &--disabled {
    cursor: not-allowed;

    .material-icon {
      color: get-color(icon-interactive-disabled);
    }
  }

  // Focus outline for accessibility
  &:focus-visible {
    outline: 2px solid get-color(border-focus);
    outline-offset: 2px;
  }
}
</style>