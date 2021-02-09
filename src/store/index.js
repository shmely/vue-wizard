import Vue from 'vue';
import Vuex from 'vuex';
import { form101Service } from '../services/form101.service.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form101Data: form101Service.loadForm101DataFromSession(),
    currentStage: form101Service.loadCurrentStep()
  },
  getters: {
    currentStage(state) {

      return state.currentStage;
    },
    form101Data(state) {
      return state.form101Data;
    },
    stage1(state) {

      return state.form101Data ? state.form101Data.stage1 : null;
    },
    stage2(state) {
      return state.form101Data ? state.form101Data.stage2 : null;
    },
    stage3(state) {
      return state.form101Data ? state.form101Data.stage3 : null;
    },
    stage4(state) {
      return state.form101Data ? state.form101Data.stage4 : null;
    },
    stage5(state) {
      return state.form101Data ? state.form101Data.stage5 : null;
    },
    stage6(state) {
      return state.form101Data ? state.form101Data.stage6 : null;
    },
    stage7(state) {
      return state.form101Data ? state.form101Data.stage7 : null;
    },
    stage8(state) {
      return state.form101Data ? state.form101Data.stage8 : null;
    }
  },
  mutations: {
    set101Data(state, { data }) {

      state.form101Data = data;

    },
    setCurrentStage(state, { step }) {
      state.currentStage = step;
    }

  },
  actions: {
    async set101Data(context, { data }) {
      try {
      
        const res = await form101Service.SaveData(data);
        if (res.status === 200) {
          context.commit({ type: 'set101Data', data: res.data });
          return res.data;
        }

      } catch (error) {
        console.log(error);

      }

    },
    async setCurrentStage(context, { step }) {
     
      const res = await form101Service.setStep(step);
      context.commit({ type: 'setCurrentStage', step: res });
    },
    async get101Data(context) {
      try {

        const res = await form101Service.getForm101Data();
        if (res.status === 200) {
          context.commit({ type: 'set101Data', data: res.data });
          return res.data;
        }

      } catch (error) {
        console.log(error);
        alert(error)
      }
    }
  },
  modules: {
  }
})
