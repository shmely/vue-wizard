<template>
  <header class="titels-container">
    <StageTitle
      :isActive="isActive(1)"
      :isDone="isDone(1)"
      :isFirst="true"
      :isLast="false"
      :StageNumber="1"
      :title="$t('form101.stage-1.title')"
      :subTitle="$t('form101.stage-1.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(2)"
      :isDone="isDone(2)"
      :isFirst="false"
      :isLast="false"
      :StageNumber="2"
      :title="$t('form101.stage-2.title')"
      :subTitle="$t('form101.stage-2.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(3)"
      :isDone="isDone(3)"
      :isFirst="false"
      :isLast="false"
      :StageNumber="3"
      :title="$t('form101.stage-3.title')"
      :subTitle="$t('form101.stage-3.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(4)"
      :isDone="isDone(4)"
      :isFirst="false"
      :isLast="false"
      :StageNumber="4"
      :title="$t('form101.stage-4.title')"
      :subTitle="$t('form101.stage-4.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(5)"
      :isDone="isDone(5)"
      :isFirst="false"
      :isLast="false"
      :StageNumber="5"
      :title="$t('form101.stage-5.title')"
      :subTitle="$t('form101.stage-5.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(6)"
      :isDone="isDone(6)"
      :isFirst="false"
      :isLast="false"
      :StageNumber="6"
      :title="$t('form101.stage-6.title')"
      :subTitle="$t('form101.stage-6.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(7)"
      :isDone="isDone(7)"
      :isFirst="false"
      :isLast="false"
      :StageNumber="7"
      :title="$t('form101.stage-7.title')"
      :subTitle="$t('form101.stage-7.sub-title')"
    ></StageTitle>
    <StageTitle
      :isActive="isActive(8)"
      :isDone="isDone(8)"
      :isFirst="false"
      :isLast="true"
      :StageNumber="8"
      :title="$t('form101.stage-8.title')"
      :subTitle="$t('form101.stage-8.sub-title')"
    ></StageTitle>
    <ToolTip
      class="info-101"
      :isShort="false"
      :title="$t('form101.main-tooltip.label')"
    >
      <div class="flex column flex-start">
        <p>{{ $t('form101.main-tooltip.title') }}</p>
        <span class="boundary-line"></span>

        <p>{{ $t('form101.main-tooltip.p1') }}</p>
        <p>{{ $t('form101.main-tooltip.p2') }}</p>
        <p>{{ $t('form101.main-tooltip.p3') }}</p>
        <p class="sub-title">{{ $t('form101.main-tooltip.p4-title') }}</p>
        <p>{{ $t('form101.main-tooltip.p4') }}</p>
        <p>{{ $t('form101.main-tooltip.p5') }}</p>
      </div>
    </ToolTip>
  </header>
</template>

<script>
import StageTitle from './StageTitle';
import ToolTip from './ToolTip';
export default {
  components: {
    StageTitle,
    ToolTip,
  },
  props: {
    currentStage: Number,
  },
  methods: {
    isActive(Stage) {
      return this.currentStage === Stage;
    },
    isDone(Stage) {
      return this.currentStage > Stage;
    },
  },
};
</script>

<style lang="scss">
.titels-container {
  display: flex;
  justify-content: flex-end;
  height: 166px;
  padding: 24px 0 25px 410px;
  .info-101 {
    padding-top: rem(29px);
    padding-bottom: rem(63px);
    margin-inline-start: 58px;
    div {
      position: absolute;
      top: 60px;
      left: 0;
      z-index: 1;
      font-size: rem(16px);
      width: 499px;
      height: 609px;
      padding: 23px 26px 40px 28px;
      background: #ffffff;
      border: 1px solid #afbabf;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 3.3px;
      .boundary-line {
        width: 445px;
        border-top: 1px solid #afbabf;
        margin-bottom: rem(29px);
      }
      padding-inline-end: 5px;
      .sub-title {
        margin-bottom: 0;
      }
      p {
        margin-bottom: rem(25px);
      }
    }
  }
}
</style>
