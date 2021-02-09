<template>
  <main class="Stage-cont">
    <div class="Stage-shape ">
      <section :class="active || done" class="circle">
        <span v-if="!done">{{ StageNumber }}</span>
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 6.39003L16.6003 2.94238L7.66238 11.756L3.42376 7.51737L0 10.9411L6.50931 17.4504L6.54348 17.4163L7.66493 18.5535L20 6.39003Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
      <section :class="active || done" v-if="!isLast" class="line"></section>
      <section :class="done || done" v-if="!isLast" class="line"></section>
    </div>
    <div class="Stage-desc">
      <span class="Stage-title">{{ title }}</span>
      <span class="Stage-sub-title">{{ subTitle }}</span>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    isDone: Boolean,
    isActive: Boolean,
    isFirst: Boolean,
    isLast: Boolean,
    title: String,
    subTitle: String,
    StageNumber: Number,
  },
  computed: {
    active() {
      return this.isActive ? 'active' : '';
    },
    done() {
      return this.isDone ? 'active' : '';
    },
  },
};
</script>

<style lang="scss">
.Stage-cont {
  display: flex;
  align-items: baseline;
  flex-direction: column;
  color: #454545;
  height: 110px;
  position: relative;

  .Stage-shape {
    display: flex;
    align-items: center;
    .line {
      background: #cfeaf8;
      height: 6px;
      width: 25px;
      &.active {
        background: #95c53d;
      }
    }
    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #cfeaf8;
      color: #8db1c4;
      font-size: rem(22px);
      font-family: assistant-regular;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      &.active {
        background: #95c53d;
        color: white;
      }
    }
  }
  .Stage-desc {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: -40px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: rem(15px);
    height: 60px;
    padding: 0 10px;
    .Stage-title {
      width: 50px;
      font-family: assistant-semi-bold;

      text-align: center;
    }
    .Stage-sub-title {
      width: 100px;
      font-family: assistant-regular;
      font-size: rem(15px);
      text-align: center;
    }
  }
}
</style>
