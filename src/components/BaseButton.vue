<template>
  <button :class="buttonClasses" :disabled="disabled" @click="$emit('click')">
    <div class="button-content">
      <slot>{{ label }}</slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  emits: ['click'],
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tertiary', 'danger-primary', 'danger-secondary', 'danger-tertiary'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Button'
    }
  },
  computed: {
    buttonClasses() {
      return [
        'base-button',
        `base-button--${this.variant}`,
        {
          'base-button--disabled': this.disabled
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: get-border-radius(base);
  border: none;
  cursor: pointer;
  transition: get-transition(base);

  &--disabled {
    cursor: not-allowed;
  }

  // Primary Button (Default)
  &--primary {
    background: get-color(primary-light); // #276ae1
    color: white;

    &:hover:not(.base-button--disabled) {
      background: #0059bd;
    }

    &:active:not(.base-button--disabled) {
      background: #004b9e;
    }

    &.base-button--disabled {
      background: rgba(0, 31, 66, 0.1);
      color: rgba(0, 31, 66, 0.3);
    }
  }

  // Secondary Button
  &--secondary {
    background: transparent;
    color: #0059bd;
    border: 1px solid get-color(primary-light); // #276ae1

    &:hover:not(.base-button--disabled) {
      border-color: #0059bd;
    }

    &:active:not(.base-button--disabled) {
      border-color: #004b9e;
    }

    &.base-button--disabled {
      border-color: rgba(0, 31, 66, 0.2);
      color: rgba(0, 31, 66, 0.3);
    }
  }

  // Tertiary Button
  &--tertiary {
    background: transparent;
    color: #0059bd;
    border: none;

    &:hover:not(.base-button--disabled) {
      border: 1px solid #0059bd;
    }

    &:active:not(.base-button--disabled) {
      border: 1px solid #004b9e;
    }

    &.base-button--disabled {
      color: rgba(0, 31, 66, 0.3);
    }
  }

  // Danger Primary Button
  &--danger-primary {
    background: #e22c36;
    color: white;

    &:hover:not(.base-button--disabled) {
      background: #a2191f;
    }

    &:active:not(.base-button--disabled) {
      background: #750e13;
    }

    &.base-button--disabled {
      background: rgba(0, 31, 66, 0.1);
      color: rgba(0, 31, 66, 0.3);
    }
  }

  // Danger Secondary Button
  &--danger-secondary {
    background: transparent;
    color: #a2191f;
    border: 1px solid #e22c36;

    &:hover:not(.base-button--disabled) {
      background: rgba(0, 31, 66, 0.05);
      border-color: #a2191f;
    }

    &:active:not(.base-button--disabled) {
      background: rgba(231, 19, 29, 0.1);
      border-color: #750e13;
    }

    &.base-button--disabled {
      border-color: rgba(0, 31, 66, 0.2);
      color: rgba(0, 31, 66, 0.3);
    }
  }

  // Danger Tertiary Button
  &--danger-tertiary {
    background: transparent;
    color: #a2191f;
    border: none;

    &:hover:not(.base-button--disabled) {
      background: rgba(0, 31, 66, 0.05);
      border: 1px solid #a2191f;
    }

    &:active:not(.base-button--disabled) {
      background: rgba(231, 19, 29, 0.1);
      border: 1px solid #750e13;
    }

    &.base-button--disabled {
      color: rgba(0, 31, 66, 0.3);
    }
  }
}

.button-content {
  display: flex;
  align-items: center;
  gap: get-spacing(s); // 4px
  padding: 0 get-spacing(m); // 16px horizontal padding

  font-family: $font-family-primary;
  font-size: get-font-size(base); // 16px
  font-weight: get-font-weight(semibold); // 600
  line-height: 24px;
  white-space: nowrap;
}
</style>