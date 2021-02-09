<template>
  <main class="tooltip">
    <header class="tooltip-header" @click="isShowDesc = !isShowDesc">
      <span class="title">{{ title }}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11.8125" fill="#00A3EA" />
        <path
          d="M15.1729 17.7342L14.9594 18.5696C14.3191 18.8115 13.8075 18.9957 13.4266 19.1223C13.0453 19.2493 12.6022 19.3125 12.0974 19.3125C11.3222 19.3125 10.7192 19.1307 10.2891 18.7696C9.85906 18.407 9.64396 17.9476 9.64396 17.3903C9.64396 17.1745 9.65956 16.9526 9.69201 16.7265C9.72474 16.5001 9.77677 16.2452 9.84797 15.9602L10.6483 13.2486C10.7195 12.9889 10.78 12.7429 10.8284 12.5102C10.8776 12.279 10.9013 12.0663 10.9013 11.8748C10.9013 11.5285 10.8264 11.2862 10.6773 11.15C10.5282 11.0142 10.2437 10.9453 9.82127 10.9453C9.61438 10.9453 9.40174 10.977 9.185 11.0384C8.9673 11.1 8.78123 11.1595 8.625 11.2148L8.83901 10.3788C9.36327 10.1744 9.8644 9.99946 10.3438 9.85423C10.8231 9.70861 11.276 9.63573 11.7045 9.63573C12.4744 9.63573 13.0685 9.81386 13.4856 10.1701C13.9028 10.5266 14.1114 10.9888 14.1114 11.5583C14.1114 11.6762 14.0977 11.8838 14.0682 12.1806C14.0395 12.478 13.986 12.7505 13.9079 12.9983L13.111 15.6991C13.0457 15.9161 12.987 16.1641 12.9359 16.4431C12.8832 16.7204 12.858 16.9322 12.858 17.0743C12.858 17.4329 12.9415 17.6777 13.109 17.8079C13.2777 17.938 13.5682 18.0028 13.9809 18.0028C14.1746 18.0028 14.3951 17.9699 14.64 17.9053C14.8843 17.8407 15.0624 17.7839 15.1729 17.7342ZM15.375 6.39541C15.375 6.86597 15.1897 7.26785 14.8175 7.59829C14.4461 7.92991 13.9987 8.09585 13.4752 8.09585C12.9502 8.09585 12.5016 7.92991 12.126 7.59829C11.7511 7.26772 11.5633 6.86597 11.5633 6.39541C11.5633 5.92577 11.7511 5.52324 12.126 5.1886C12.5009 4.85449 12.9503 4.6875 13.4752 4.6875C13.9985 4.6875 14.4461 4.85488 14.8175 5.1886C15.19 5.52324 15.375 5.9259 15.375 6.39541Z"
          fill="white"
        />
      </svg>

      <slot v-if="!isShort && isShowDesc"></slot>
      <span class="short-tooltip" v-if="isShort && isShowDesc && shortDesc">{{
        shortDesc
      }}</span>
    </header>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
    isShort: Boolean,
    shortDesc: String,
  },
  data() {
    return {
      isShowDesc: false,
    };
  },
};
</script>

<style lang="scss">
.tooltip {
  position: relative;
  .tooltip-header {
    display: flex;
    align-items: center;
    height: 16px;
    z-index: 1;
    cursor: pointer;
    .title {
      font-size: rem(16px);
      line-height: 21px;
      color: #454545;
      margin-inline-end: rem(10px);
    }
    .short-tooltip {
      z-index: 1;
      padding: 18px 16px 22px 40px;
      background: white;
      color: #454545;
      position: absolute;
      width: max-content;
      bottom: 30px;
      right: 30px;
      border-radius: 5px;
      font-size: 16px;
      filter: drop-shadow(1px 1px 5px rgba(56, 54, 54, 0.86));

      &::after {
        content: '';
        position: absolute;
        width: 0;
        top: 60px;
        right: 25px;
        height: 0;
        border: 10px solid white;
        border-color: white transparent transparent transparent;
      }
    }
  }
}
</style>
