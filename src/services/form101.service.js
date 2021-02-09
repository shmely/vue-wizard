//import { httpService } from './httpService';
import { storageService } from './storage.service';
export const form101Service = {
    loadForm101DataFromSession,
    setStep,
    SaveData,
    getForm101Data,
    loadCurrentStep
}

function loadForm101DataFromSession() {
    let stageData = storageService.loadFromSession('form101Data');
    return stageData;
}
async function getForm101Data() {
    const data101 = {
        stage1: {
            stageNum: 1,
            state: 'in process',
            companyDetails: {
                name: 'דקטלון ישראל בע"מ',
                phone: '052-6172103',
                address: 'היצירה 87 רעננה',
                taxNumber: '987979967797',
            },
            empDetails: {
                firstName: '',
                lastName: null,
                idNum: null,
                birthDate: null,
                immigrationDate: null,
                idNumCopyType: 'upload',
                idNumFile: {
                    file: null,
                    name: null
                },
                phone: null,
                mobile: null,
                address: {
                    street: '',
                    streetNum: null,
                    city: '',
                    cityId: null,
                    postalCode: null,
                },
                status: {
                    gender: 'male',
                    marriageStatus: "bachelor",
                    israelResident: true,
                    hob: true,
                    kibutz: false
                }
            }
        },
        stage2: {
            state: null,
            stageNum: 2,
            childs: []

        },
        stage3: {

        },
        stage4: {

        },
        stage5: {

        },
        stage6: {

        },
        stage7: {

        },
        stage8: {

        }

    }
    return { status: 200, data: data101 };
}
async function SaveData(data) {

    storageService.saveToSession('form101Data', data);
    return { status: 200, data: data };
}

async function setStep(step) {
    storageService.saveToSession('form101Step', step);
    return step;
}

function loadCurrentStep() {
    const step = storageService.loadFromSession('form101Step');
    if (step) return +step;
    return 1;
}

