<template>
  <main class="main-cont-101">
    <StageTitleList
      class="Stage-titels"
      :currentStage="currentStage"
    ></StageTitleList>
    <router-view></router-view>
  </main>
</template>

<script>
import StageTitleList from '../components/StageTitleList';
export default {
  components: {
    StageTitleList,
  },
  async created() {
    this.data101 = this.$store.getters.form101Data;
    if (!this.data101) {
      this.data101 = await this.$store.dispatch({ type: 'get101Data' });
    }
  },
  data() {
    return {
      data101: null,
      maxStages: 8,
    };
  },
  computed: {
    currentStage() {
      return this.$store.getters.currentStage;
    },
  },
  watch: {
    currentStage(newValue) {
      console.log(newValue);      
      if (this.currentStage) {
        this.$router.push(`/form101/stage${this.currentStage}`);
      }
    },
  },
};
</script>

<style lang="scss">
.main-cont-101 {
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 60px;
  min-height: 100%;
  width: 100%;
  .stages-nav {
    padding: 0 410px 52px 410px;
    .btn-prev {
      width: 172px;
      height: 50px;
      font-size: rem(22px);
      background: #8b9aa9;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      font-family: assistant-regular;
      margin-inline-end: rem(15px);
    }
    .btn-continue {
      width: 172px;
      height: 50px;
      font-size: rem(22px);
      background-color: #95c53d;
      border: none;
      outline: none;
      display: flex;
      font-family: assistant-regular;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
    }
  }
}
.label-101 {
  color: #454545;
  font-size: rem(18px);
  font-family: assistant-semi-bold;
  line-height: 24px;
  margin-bottom: rem(6px);
}
.span-101 {
  color: #454545;
  font-size: rem(20px);
  font-family: assistant-regular;
  line-height: 26px;
  margin-bottom: 5px;
}
.input-101 {
  border: 1px solid #afbabf;
  border-radius: 5px;
  height: 42px;
  font-family: assistant-regular;
  font-size: rem(20px);
  line-height: 26px;
  color: #454545;
  padding: 8px 14px;
  text-overflow: ellipsis;
}
.label-radio-101 {
  font-family: assistant-regular;
  font-size: rem(20px);
  line-height: 26px;
  color: #454545;
}
.radio-101 {
  color: #00a3ea;
}
</style>
