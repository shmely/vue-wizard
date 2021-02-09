<template>
  <main class="stage2" v-if="stageData">
    <header class="main-title">
      <p class="title">{{ $t('form101.stage-2.title') }}</p>
      <button class="btn-skip">{{ $t('form101.stage-2.btn-skip') }}</button>
    </header>
    <main class="form-cont">
      <SectionTitle
        class="childs-title"
        :title="$t('form101.stage-2.section-1-title')"
        :tooltipVisible="true"
      ></SectionTitle>
      <section class="form">
        <img
          v-if="isLoading"
          class="loadingImg"
          src="../assets/img/loading.gif"
        />
        <ValidationObserver ref="newChildForm" v-slot="{ invalid }">
          <form @submit.prevent="addChild" class="childs-details">
            <div v-if="newChildView.child" class="flex column">
              <div class="flex align-start">
                <ValidationProvider
                  class="flex column"
                  rules="required|min-length:3"
                  name="first-name"
                  v-slot="{
                    errors,
                  }"
                >
                  <label class="label-101">{{
                    $t('form101.fields.first-name')
                  }}</label>
                  <input
                    :class="errors[0] ? 'input-101-error' : ''"
                    class="input-101"
                    type="text"
                    v-model="newChildView.child.firstName"
                  />
                  <span class="error">{{ errors[0] }}</span>
                  <span v-if="errors[0]" class="asterisk">*</span>
                </ValidationProvider>
                <ValidationProvider
                  class="flex column"
                  rules="required|min-length:3"
                  name="last-name"
                  v-slot="{
                    errors,
                  }"
                >
                  <label class="label-101">{{
                    $t('form101.fields.last-name')
                  }}</label>
                  <input
                    :class="errors[0] ? 'input-101-error' : ''"
                    class="input-101"
                    type="text"
                    v-model="newChildView.child.lastName"
                  />
                  <span>{{ errors[0] }}</span>
                  <!-- <span v-if="errors[0]" class="asterisk">*</span> -->
                </ValidationProvider>
                <ValidationProvider
                  class="flex column"
                  rules="required|min-length:9|max-length:9|id-num"
                  name="id-num"
                  v-slot="{
                    errors,
                  }"
                >
                  <label class="label-101">{{
                    $t('form101.fields.id-num')
                  }}</label>
                  <input
                    :class="errors[0] ? 'input-101-error' : ''"
                    class="input-101"
                    type="text"
                    v-model="newChildView.child.idNum"
                  />
                  <span>{{ errors[0] }}</span>
                  <!-- <span v-if="errors[0]" class="asterisk">*</span> -->
                </ValidationProvider>
                <ValidationProvider
                  class="flex column"
                  rules="required"
                  name="birth-date"
                  v-slot="{ errors }"
                >
                  <label class="label-101">{{
                    $t('form101.fields.birth-date')
                  }}</label>
                  <VueDatePicker
                    :rtl="true"
                    ref="picker"
                    format="DD/MM/YYYY"
                    :maxDate="new Date()"
                    :minDate="
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 110)
                      )
                    "
                    :visible-years-number="100"
                    v-model="newChildView.child.birthDate"
                    @onOpen="menu = true"
                    @onClose="menu = false"
                  >
                    <template #activator="{ date }">
                      <div class="date-inner-cont">
                        <input
                          type="text"
                          :class="errors[0] ? 'input-101-error' : ''"
                          class="input-101"
                          readonly
                          ref="activator"
                          :value="date"
                        />
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.65994 0H5.43306V1.7731H12.5254V0H14.2985V1.7731H15.478C16.113 1.7731 16.6547 2.17305 16.8648 2.7348C16.9516 2.92311 17 3.13277 17 3.35374V16.2959C17 17.1133 16.3373 17.776 15.5199 17.776H2.48012C1.66267 17.776 1 17.1133 1 16.2959V6.20591V3.35374V3.25323C1 2.43578 1.66267 1.7731 2.48012 1.7731H3.65994V0ZM2.48012 6.20591H15.5199V16.2959H2.48012V6.20591Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                    </template>
                  </VueDatePicker>
                </ValidationProvider>
                <button
                  :class="invalid ? 'disable' : ''"
                  class="btn-add-child"
                  :disabled="invalid"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9382 5.7297C12.1615 5.7297 11.5319 6.35935 11.5319 7.13607V11.7368H7.13586C6.35915 11.7368 5.72949 12.3665 5.72949 13.1432C5.72949 13.9199 6.35915 14.5496 7.13586 14.5496H11.5319V18.7411C11.5319 19.5178 12.1615 20.1475 12.9382 20.1475C13.715 20.1475 14.3446 19.5178 14.3446 18.7411V14.5496H18.7409C19.5176 14.5496 20.1473 13.9199 20.1473 13.1432C20.1473 12.3665 19.5176 11.7368 18.7409 11.7368H14.3446V7.13607C14.3446 6.35935 13.715 5.7297 12.9382 5.7297Z"
                        fill="white"
                      />
                    </g>
                  </svg>

                  <span>{{ $t('form101.stage-2.btn-add-child') }}</span>
                </button>
              </div>

              <div class="chks">
                <div>
                  <input
                    type="checkbox"
                    class="checkbox chk-101"
                    name="possession"
                    value="true"
                    v-model="newChildView.child.isMyPossession"
                  />
                  <label for="possession">{{
                    $t('form101.stage-2.chk-isMyPossession')
                  }}</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="checkbox chk-101"
                    name="allowance"
                    value="true"
                    v-model="newChildView.child.isAllowance"
                  />
                  <label for="allowance">{{
                    $t('form101.stage-2.chk-isAllowance')
                  }}</label>
                </div>
              </div>
            </div>
          </form>
        </ValidationObserver>
        <ul v-if="childsView" class="clean-list">
          <li
            class="flex column"
            v-for="(childView, index) in childsView"
            :key="childView.child.idNum"
          >
            <ValidationObserver
              v-if="childView.mode === 'edit'"
              class="edit-mode"
              ref="editChildForm"
              v-slot="{ invalid }"
            >
              <form @submit.prevent="saveChild">
                <div class="flex align-end">
                  <ValidationProvider
                    class="flex column"
                    rules="required|min-length:3"
                    name="first-name"
                    v-slot="{
                      errors,
                    }"
                  >
                    <label class="label-101">{{
                      $t('form101.fields.first-name')
                    }}</label>
                    <input
                      :name="'firstName' + index"
                      :class="errors[0] ? 'input-101-error' : ''"
                      class="input-101"
                      type="text"
                      v-model="childView.child.firstName"
                    />
                    <span class="error">{{ errors[0] }}</span>
                    <span v-if="errors[0]" class="asterisk">*</span>
                  </ValidationProvider>
                  <ValidationProvider
                    class="flex column"
                    rules="required|min-length:3"
                    name="last-name"
                    v-slot="{
                      errors,
                    }"
                  >
                    <label class="label-101">{{
                      $t('form101.fields.last-name')
                    }}</label>
                    <input
                      :name="'lastName' + index"
                      :class="errors[0] ? 'input-101-error' : ''"
                      class="input-101"
                      type="text"
                      v-model="childView.child.lastName"
                    />
                    <span>{{ errors[0] }}</span>
                    <!-- <span v-if="errors[0]" class="asterisk">*</span> -->
                  </ValidationProvider>
                  <ValidationProvider
                    class="flex column"
                    rules="required|min-length:9|max-length:9|id-num"
                    name="id-num"
                    v-slot="{
                      errors,
                    }"
                  >
                    <label class="label-101">{{
                      $t('form101.fields.id-num')
                    }}</label>
                    <input
                      :name="'idNum' + index"
                      :class="errors[0] ? 'input-101-error' : ''"
                      class="input-101"
                      type="text"
                      v-model="childView.child.idNum"
                    />
                    <span>{{ errors[0] }}</span>
                    <!-- <span v-if="errors[0]" class="asterisk">*</span> -->
                  </ValidationProvider>
                  <ValidationProvider
                    class="flex column"
                    rules="required"
                    name="birth-date"
                    v-slot="{ errors }"
                  >
                    <label class="label-101">{{
                      $t('form101.fields.birth-date')
                    }}</label>
                    <VueDatePicker
                      :rtl="true"
                      ref="picker"
                      :name="'birthDate' + index"
                      format="DD/MM/YYYY"
                      :maxDate="new Date()"
                      :minDate="
                        new Date(
                          new Date().setFullYear(new Date().getFullYear() - 110)
                        )
                      "
                      :visible-years-number="100"
                      v-model="childView.child.birthDate"
                      @onOpen="menu = true"
                      @onClose="menu = false"
                    >
                      <template #activator="{ date }">
                        <div class="date-inner-cont">
                          <input
                            type="text"
                            :class="errors[0] ? 'input-101-error' : ''"
                            class="input-101"
                            :name="'birthDate' + index"
                            readonly
                            ref="activator"
                            :value="date"
                          />
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.65994 0H5.43306V1.7731H12.5254V0H14.2985V1.7731H15.478C16.113 1.7731 16.6547 2.17305 16.8648 2.7348C16.9516 2.92311 17 3.13277 17 3.35374V16.2959C17 17.1133 16.3373 17.776 15.5199 17.776H2.48012C1.66267 17.776 1 17.1133 1 16.2959V6.20591V3.35374V3.25323C1 2.43578 1.66267 1.7731 2.48012 1.7731H3.65994V0ZM2.48012 6.20591H15.5199V16.2959H2.48012V6.20591Z"
                              fill="#333333"
                            />
                          </svg>
                        </div>
                      </template>
                    </VueDatePicker>
                  </ValidationProvider>
                  <button
                    @click="saveChild(index)"
                    :class="invalid ? 'disable' : ''"
                    class="btn-save-child"
                    :disabled="invalid"
                  >
                    <span>{{ $t('form101.stage-2.btn-save-child') }}</span>
                  </button>
                </div>
                <div class="flex align-end">
                  <div class="chks">
                    <input
                      type="checkbox"
                      class="checkbox chk-101"
                      name="possession"
                      value="true"
                      v-model="childView.child.isMyPossession"
                    />
                    <label for="possession">{{
                      $t('form101.stage-2.chk-isMyPossession')
                    }}</label>
                  </div>
                  <div class="chks">
                    <input
                      type="checkbox"
                      class="checkbox chk-101"
                      name="allowance"
                      value="true"
                      v-model="childView.child.isAllowance"
                    />
                    <label for="allowance">{{
                      $t('form101.stage-2.chk-isAllowance')
                    }}</label>
                  </div>
                </div>
              </form>
            </ValidationObserver>
            <div v-else class="view-mode">
              <div class="name">
                {{ `${childView.child.firstName} ${childView.child.lastName}` }}
              </div>
              <div class="id-num">{{ childView.child.idNum }}</div>
              <div class="birth-date">{{ childView.child.birthDate }}</div>
              <div class="possession">
                {{
                  childView.child.isMyPossession
                    ? $t('form101.stage-2.my-possession')
                    : $t('form101.stage-2.not-my-possession')
                }}
              </div>
              <div class="allowance">
                {{
                  childView.child.isAllowance
                    ? $t('form101.stage-2.is-allowance')
                    : $t('form101.stage-2.is-not-allowance')
                }}
              </div>
              <div class="edit-del-btns">
                <svg
                  @click="editChild(index)"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.78213 5.18953L14.1016 9.65467L7.76257 16.2199L3.44558 11.7547L9.78213 5.18953ZM17.8278 3.52477L15.9015 1.53347C15.1571 0.763907 13.9482 0.763907 13.2013 1.53347L11.3561 3.44094L15.6755 7.90612L17.8278 5.68116C18.4052 5.08424 18.4052 4.12165 17.8278 3.52477ZM0.751156 18.4241C0.672547 18.7898 0.991959 19.1175 1.34578 19.0285L6.15907 17.8221L1.84208 13.357L0.751156 18.4241Z"
                    fill="#00A3EA"
                  />
                </svg>
                <svg
                  @click="deleteChild(index)"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8533 0.903893C12.4687 0.519218 11.845 0.519218 11.4603 0.903893L7.27396 5.09016L3.08787 0.904116C2.70319 0.519441 2.0795 0.519442 1.69482 0.904116L1.13476 1.46417C0.750083 1.84884 0.750082 2.47252 1.13476 2.8572L5.32086 7.04324L1.1347 11.2293C0.750021 11.614 0.750022 12.2377 1.1347 12.6224L1.69476 13.1824C2.07944 13.5671 2.70313 13.5671 3.08781 13.1824L7.27396 8.99632L11.4603 13.1826C11.845 13.5673 12.4687 13.5673 12.8534 13.1826L13.4135 12.6226C13.7981 12.2379 13.7981 11.6142 13.4135 11.2296L9.22707 7.04324L13.4134 2.85697C13.7981 2.4723 13.7981 1.84862 13.4134 1.46394L12.8533 0.903893Z"
                    fill="#00A3EA"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <button
        style="width:100px;height:50px;position:absolute;left:410px;margin-top:10px"
        @click="submitStage"
      >
        Next
      </button>
    </main>
  </main>
</template>

<script>
import SectionTitle from '../components/SectionTitle';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
  components: {
    SectionTitle,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      stageErrors: [],
      uploadFileError: null,
      isLoading: false,
      stageData: null,
      childsView: [],
      newChildView: {
        mode: 'view',
        child: {
          firstName: null,
          lastName: null,
          idNum: null,
          birthDate: null,
          isMyPossession: false,
          isAllowance: false,
        },
      },
    };
  },
  async created() {
    {
      this.stageData = this.$store.getters.stage2;
      if (this.stageData && this.stageData.childs) {
        const childs = this.$store.getters.stage2.childs.slice();
        childs.forEach((child) => {
          this.childsView.push({ mode: 'view', child });
        });
      }
    }
  },
  methods: {
    onStageError(error) {
      this.stageErrors.push(error);
    },
    async saveChild(index) {
      this.$refs.editChildForm.validate().then((success) => {
        if (!success) {
          return;
        }
      });
      this.childsView[index].mode = 'view';
      await this.save();
    },
    async addChild() {
      this.$refs.newChildForm.validate().then((success) => {
        if (!success) {
          return;
        }
      });
      this.childsView.push(this.newChildView);
      await this.save();
      this.newChildView = {
        mode: 'view',
        child: {
          firstName: null,
          lastName: null,
          idNum: null,
          birthDate: null,
          isMyPossession: false,
          isAllowance: false,
        },
      };
      this.$nextTick(() => {
        this.$refs.newChildForm.reset();
      });
    },
    async deleteChild(index) {
      this.childsView.splice(index, 1);
      await this.save();
    },
    editChild(index) {
      this.childsView[index].mode = 'edit';
    },
    async submitStage() {
      await this.save();
      await this.$store.dispatch({
        type: 'setCurrentStage',
        step: this.$store.getters.currentStage + 1,
      });
    },
    async save() {
      const data101 = this.$store.getters.form101Data;
      const cloneData = JSON.parse(JSON.stringify(data101));
      cloneData.stage2.childs = this.childsView.map((c) => c.child);
      await this.$store.dispatch({
        type: 'set101Data',
        data: cloneData,
      });
    },
  },
};
</script>
