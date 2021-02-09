<template>
  <ValidationObserver v-slot="{ invalid, handleSubmit }">
    <form class="stage1" @submit.prevent="handleSubmit(onSubmit)">
      <header class="desc flex justify-center">
        <div class="text-cont">
          <h1 class="title">{{ title }}</h1>
          <h2 class="sub-title">
            {{ $t('form101.stage-1.tax-sub-title') }}
          </h2>
          <p>{{ $t('form101.stage-1.tax-content-desc') }}</p>
        </div>
      </header>
      <section class="form">
        <img
          v-if="isLoading"
          class="loadingImg"
          src="../assets/img/loading.gif"
        />
        <SectionTitle
          class="employer-title"
          :title="$t('form101.stage-1.section-1-title')"
          :tooltipTitle="$t('form101.stage-1.section-1-tooltip.label')"
          :tooltipDesc="$t('form101.stage-1.section-1-tooltip.desc')"
          :tooltipVisible="true"
        ></SectionTitle>

        <section v-if="stageData" class="employer-details">
          <div class="company-name flex column ">
            <label class="label-101" for="name">{{
              $t('form101.stage-1.company-name')
            }}</label>
            <span v-if="stageData" class="span-101">{{
              stageData.companyDetails.name
            }}</span>
          </div>
          <div class="company-phone flex column ">
            <label class="label-101" for="phone">{{
              $t('form101.stage-1.company-phone')
            }}</label>
            <span v-if="stageData" class="span-101">{{
              stageData.companyDetails.phone
            }}</span>
          </div>
          <div class="company-address flex column ">
            <label class="label-101" for="address">{{
              $t('form101.stage-1.company-address')
            }}</label>
            <span v-if="stageData" class="span-101">{{
              stageData.companyDetails.address
            }}</span>
          </div>
          <div class="company-tax-number flex column ">
            <label class="label-101" for="taxNumber">{{
              $t('form101.stage-1.company-tax-number')
            }}</label>
            <span v-if="stageData" class="span-101">{{
              stageData.companyDetails.taxNumber
            }}</span>
          </div>
        </section>
        <SectionTitle
          class="emp-title"
          :title="$t('form101.stage-1.section-2-title')"
          :tooltipVisible="true"
        ></SectionTitle>
        <section v-if="stageData" class="emp-details">
          <section class="input-field-101 first-name">
            <ValidationProvider
              rules="required|min-length:3"
              name="first-name"
              v-slot="{ errors }"
            >
              <label class="label-101">{{
                $t('form101.fields.first-name')
              }}</label>
              <input
                :class="errors[0] ? 'input-101-error' : ''"
                class="input-101"
                type="text"
                v-model="stageData.empDetails.firstName"
              />
              <span class="error">{{ errors[0] }}</span>
              <span v-if="errors[0]" class="asterisk">*</span>
            </ValidationProvider>
          </section>
          <section class="input-field-101 last-name">
            <ValidationProvider
              rules="required|min-length:3"
              name="last-name"
              v-slot="{ errors }"
            >
              <label class="label-101">{{
                $t('form101.fields.last-name')
              }}</label>
              <input
                :class="errors[0] ? 'input-101-error' : ''"
                class="input-101"
                type="text"
                v-model="stageData.empDetails.lastName"
              />
              <span class="error">{{ errors[0] }}</span>
              <span v-if="errors[0]" class="asterisk">*</span>
            </ValidationProvider>
          </section>
          <section class="input-field-101 id-num">
            <ValidationProvider
              rules="required|min-length:9|max-length:9|id-num"
              name="last-name"
              v-slot="{ errors }"
            >
              <label class="label-101">{{
                $t('form101.stage-1.id-num')
              }}</label>
              <input
                inputFilter="/^\d*$/"
                :class="errors[0] ? 'input-101-error' : ''"
                class="input-101"
                type="text"
                v-model="stageData.empDetails.idNum"
              />
              <span class="error">{{ errors[0] }}</span>
              <span v-if="errors[0]" class="asterisk">*</span>
            </ValidationProvider>
          </section>
          <section class="date-picker-101 birth-date">
            <ValidationProvider
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
                v-model="stageData.empDetails.birthDate"
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
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
              <span v-if="errors[0]" class="asterisk">*</span>
            </ValidationProvider>
          </section>
          <section class="date-picker-101 immigation-date">
            <ValidationProvider
              rules=""
              name="immigation-date"
              v-slot="{ errors }"
            >
              <label class="label-101">{{
                $t('form101.fields.immigation-date')
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
                v-model="stageData.empDetails.immigrationDate"
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
              <span v-if="errors[0]" class="error">{{ errors[0] }}</span>
              <span v-if="errors[0]" class="asterisk">*</span>
            </ValidationProvider>
          </section>
        </section>
        <button
          type="submit"
          style="width:100px;height:50px;align-self:flex-end;"
          :disabled="invalid"
        >
          Submit
        </button>
      </section>
    </form>
  </ValidationObserver>
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
  created() {
    console.log('created');
  },
  data() {
    return {
      year: new Date().getFullYear(),
      isLoading: false,
    };
  },
  computed: {
    stageData() {
      return this.$store.getters.stage1;
    },
    title() {
      return this.$i18n.locale !== 'he'
        ? `${this.year} ${this.$t('form101.stage-1.tax-year')}`
        : `${this.$t('form101.stage-1.tax-year')} ${this.year}`;
    },
    showIdNumFile() {
      if (
        this.stageData &&
        this.stageData.empDetails &&
        this.stageData.empDetails.idNumCopyType === 'upload'
      ) {
        if (
          this.stageData.empDetails.idNumFile &&
          this.stageData.empDetails.idNumFile.name
        )
          return true;
      }
      return false;
    },
  },
  methods: {
    async onSubmit() {
      const data101 = this.$store.getters.form101Data;
      const cloneData = JSON.parse(JSON.stringify(data101));
      await this.$store.dispatch({
        type: 'set101Data',
        data: cloneData,
      });
      await this.$store.dispatch({
        type: 'setCurrentStage',
        step: this.$store.getters.currentStage+1,
      });

    },
  },
};
</script>

<style lang="scss">
.stage1 {
  .desc {
    width: 100%;
    position: relative;
    background: #eaf3d8;
    padding: 15px 0;
    .text-cont {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 110px;
      .title {
        font-size: rem(20px);
        font-family: assistant-semi-bold;
        width: 117px;
        text-align: center;
      }
      .sub-title {
        width: 451px;
        font-size: rem(15px);
        text-align: center;
      }
      p {
        font-size: rem(15px);
        width: 854px;
        text-align: center;
      }
    }
  }
  .form {
    padding: 40px 410px 25px 410px;
    display: grid;
    position: relative;
    grid-template-areas:
      'employer-title'
      'employer-details'
      'emp-title'
      'emp-details'
      'emp-contact-title'
      'emp-contact-details'
      'emp-status';
    .loadingImg {
      position: fixed;
      height: 50px;
      width: 217px;
      height: 239px;
      top: 50%;
      left: 50%;
      z-index: 2;
    }
    .employer-title {
      grid-area: employer-title;
    }
    .employer-details {
      background: rgba(196, 230, 247, 0.1);
      grid-area: employer-details;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 41px 49px;
      .company-name {
        grid-column: 1;
      }
      .company-phone {
        grid-column: 2;
      }
      .company-address {
        grid-column: 3;
      }
      .company-tax-number {
        grid-column: 4;
      }
    }
    .emp-title {
      grid-area: emp-title;
    }
    .emp-details {
      background: rgba(196, 230, 247, 0.1);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-area: emp-details;
      padding: 41px 49px;
      .first-name {
        grid-column: 1;
        width: 280px;
      }
      .last-name {
        grid-column: 2;
        width: 280px;
      }
      .id-num {
        grid-column: 3;
        width: 280px;
      }
      .birth-date {
        grid-column: 1;
        grid-row: 2;
        width: 280px;
      }
      .immigation-date {
        grid-column: 2;
        grid-row: 2;
        width: 280px;
      }
      .id-num-copy {
        grid-row: 3;
        grid-column: 1 / 3;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-family: assistant-regular;
        * label {
          margin-inline-end: rem(22px);
          -webkit-margin-end: rem(22px);
        }
        .choose-copy-type {
          width: 100%;
          input {
            margin-inline-end: rem(12px);
            -webkit-margin-end: rem(12px);
          }
          .btn-upload {
            input[type='file'] {
              display: none;
            }
            outline: none;
            display: flex;
            justify-content: flex-start;
            border: none;
            width: 134px;
            height: 40px;
            border-radius: 5px;
            padding: 7px 13px 9px 14px;
            margin-inline-end: rem(10px);
            -webkit-margin-end: rem(10px);
            background: #95c53d;
            color: white;
            span {
              width: 72px;
              font-family: assistant-regular;
              font-size: rem(18px);
              line-height: 24px;
              margin-inline-end: rem(11px);
              -webkit-margin-end: rem(11px);
            }
          }
          .error {
            color: #db0b0b;
            font-size: rem(16px);
            line-height: 21px;
            font-family: assistant-semi-bold;
          }
        }
      }
    }
    .emp-contact-title {
      grid-area: emp-contact-title;
    }
    .emp-contact-details {
      grid-area: emp-contact-details;
      background: rgba(196, 230, 247, 0.1);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 41px 49px;
      .emp-city {
        grid-column: 1;
        grid-row: 1;
        width: 280px;
      }
      .emp-street {
        grid-column: 2;
        grid-row: 1;
        width: 280px;
      }
      .street-num-postal {
        grid-column: 3;
        grid-row: 1;
        .emp-street-num {
          width: 114px;
        }
        .emp-postal-code {
          width: 135px;
        }
      }
      .emp-phone {
        grid-column: 1;
        grid-row: 2;
        width: 280px;
      }
      .emp-mobile {
        grid-column: 2;
        grid-row: 2;
        width: 280px;
      }
      .emp-email {
        grid-column: 3;
        grid-row: 2;
        width: 280px;
      }
      .boundary-line {
        grid-row: 3;
        grid-column: 1/4;
        border-top: 1px solid #c4e6f7;
        width: 100%;
        margin-top: 73px;
      }
    }
    .emp-status {
      grid-area: emp-status;
      display: grid;
      grid-template-columns: 100px 260px 150px 250px 1fr;
      grid-template-rows: auto;
      background: rgba(196, 230, 247, 0.1);
      padding: 0 49px 41px 49px;
      .family-status-date {
        margin-top: 20px;
        width: 260px;
      }
    }
  }
}
</style>
