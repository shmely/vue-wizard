<template>
  <header class="section-title-101">
    <p>{{ title }}</p>
    <ToolTip v-if="tooltipVisible"
      :isShort="true"
      :title="tooltipTitle"
      :shortDesc="tooltipDesc"
    >
      {{ $t('form101.stage-1.section-1-tooltip.desc') }}
    </ToolTip>
  </header>
</template>

<script>
import ToolTip from './ToolTip.vue';
export default {
  components: {
    ToolTip
  },
  props: {
    title: String,
    tooltipTitle: String,
    tooltipDesc: String,
    tooltipVisible: Boolean
  }
};
</script>

<style></style>
