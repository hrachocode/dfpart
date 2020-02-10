import { getDataFromServer } from "../../utils";
import { setAnalyzeData, errorIndicated, setUserRequests, userAuthenticated, successIndicated, modalIndicated } from "../../store/actions";

import Chart from 'chart.js';
import { successMessages } from "../../configs/messages";
import { translation } from "./contants/translations";

const dataCounterAndTranslator = (main, translated) => {
    let total = 0;
    let keys = [];
    let values = [];
    let countedToPercent = [];
    let finalData = {};
    for (let [key, value] of Object.entries(main)) {
        total += value;
        values.push(value);
    }

    values.sort((a, b) => b - a);

    values.forEach(el => {
        for (let [key, val] of Object.entries(main)) {
            if (el === val) {
                keys.push(translated[key]);
            }
        }
    });

    values.forEach(el => countedToPercent.push(+((el / total) * 100).toFixed(2)));

    keys.forEach((el, index) => {
        finalData[el] = countedToPercent[index];
    });

    return [finalData, values];
};

const ageCounterAndTranslator = (main, keys) => {
    let endlyObject = {};
    let countYearOld = [];
    let countOfEachYear = {
        yearLess18: 0,
        yearLess22: 0,
        yearLess25: 0,
        yearLess28: 0,
        yearLess31: 0,
        yearLess36: 0,
        yearLess46: 0,
        yearMore46: 0
    };
    const objYearsMinMax = {
        "0": 18,
        "18": 22,
        "22": 25,
        "25": 28,
        "28": 31,
        "31": 36,
        "36": 46
    };
    for (let [key, value] of Object.entries(main)) {
        let yearOld =
            new Date().getFullYear() -
            value.bdate.slice(value.bdate.length - 4, value.bdate.length);
        let monthCount = new Date().getMonth() - value.bdate.slice(3, 5) + 1;
        let day = new Date().getDate() - value.bdate.slice(0, 2);

        const forMinify = obj => {
            for (let [key, val] of Object.entries(obj)) {
                if (+key <= yearOld && yearOld <= val) {
                    if (yearOld === +key && monthCount > 0) {
                        countOfEachYear[`yearLess${val}`] += 1;
                    } else if (yearOld === +key && monthCount === 0) {
                        if (day >= 0) {
                            countOfEachYear[`yearLess${val}`] += 1;
                        }
                    } else if (yearOld === val && monthCount < 0) {
                        countOfEachYear[`yearLess${val}`] += 1;
                    } else if (yearOld === val && monthCount === 0) {
                        if (day <= 0) {
                            countOfEachYear[`yearLess${val}`] += 1;
                        }
                    } else if (yearOld >= +key + 1 && yearOld <= val - 1) {
                        countOfEachYear[`yearLess${val}`] += 1;
                    }
                }
            }
        };

        if (yearOld >= 46) {
            if (yearOld === 46 && monthCount > 0) {
                countOfEachYear.yearMore46 += 1;
            } else if (yearOld === 46 && monthCount === 0) {
                if (day > 0) {
                    countOfEachYear.yearMore46 += 1;
                }
            } else if (yearOld >= 47) {
                countOfEachYear.yearMore46 += 1;
            }
        }
        forMinify(objYearsMinMax);
    }

    let colors = [];

    for (let [key, val] of Object.entries(countOfEachYear)) {
        colors.push("#EA924A");
        countYearOld.push(val);
    }

    countYearOld.forEach((el, index) => {
        endlyObject[keys[index]] = el;
    });

    return [endlyObject, colors];
};

const directionCounterAndTranslator = mainObj => {
    let ecstravert = 0;
    let introvert = 0;
    let feel = 0;
    let intuition = 0;
    let logic = 0;
    let emotion = 0;
    let rationality = 0;
    let irationality = 0;

    for (let [key, val] of Object.entries(mainObj)) {
        if (key.slice(0, 1) === "E") {
            ecstravert += val;
        } else if (key.slice(0, 1) === "I") {
            introvert += val;
        }

        if (key.slice(1, 2) === "N") {
            feel += val;
        } else if (key.slice(1, 2) === "S") {
            intuition += val;
        }
        if (key.slice(2, 3) === "F") {
            logic += val;
        } else if (key.slice(2, 3) === "T") {
            emotion += val;
        }
        if (key.slice(3, 4) === "J") {
            rationality += val;
        } else if (key.slice(3, 4) === "P") {
            irationality += val;
        }
    }

    let procent = {};

    procent.ecstravert = Math.round(
        (ecstravert / (ecstravert + introvert)) * 100
    );
    procent.introvert = 100 - procent.ecstravert;
    procent.feel = Math.round((feel / (feel + intuition)) * 100);
    procent.intuition = 100 - procent.feel;
    procent.logic = Math.round((logic / (logic + emotion)) * 100);
    procent.emotion = 100 - procent.logic;
    procent.rationality = Math.round(
        (rationality / (rationality + irationality)) * 100
    );
    procent.irationality = 100 - procent.rationality;

    return procent;
};

const getAnalyzeData = async (data, dispatch, target) => {
    target.setAttribute('disabled', '');
    const formData = new FormData();
    
    formData.append('requestName', data.requestName);
    formData.append('ids', data.file.current.files[0]);

    const init = {
        method: 'POST',
        body: formData,
        headers: {
            "Content-Type": "multipart/form-data; boundary=--------------------------189774596969928965856017"
        }
    }
    // Remove 'Content-Type' header to allow browser to add
    // along with the correct 'boundary'
    delete init.headers['Content-Type'];
    const getAnalyzeResult = await getDataFromServer('data/stats', init);

    const setData = !getAnalyzeResult.error &&
        dispatch(setAnalyzeData({ analyzeData: getAnalyzeResult.stats, userData: getAnalyzeResult.users })) &&
        dispatch(errorIndicated(''));
    target.removeAttribute('disabled');
    // inform via modal 
    setData && dispatch(modalIndicated({
        isOpen: !data.modal.isOpen, content: {
            title: successMessages.fileUploaded.title,
            action: successMessages.fileUploaded.action
        }
    })) && getRequests(dispatch);

};

const handleUserIds = file => {
    const reader = new FileReader();
    reader.addEventListener('progress', progress => {
        document.getElementsByClassName('file-name')[0].textContent = 'Файл заргужается';
        document.getElementsByClassName('file-processor')[0].classList.contains('hide') && document.getElementsByClassName('hide')[0].classList.remove('hide');
        document.getElementsByClassName('progress')[0].style.width = `${Math.ceil((progress.loaded / progress.total) * 100)}%`;
    });
    reader.onload = event => {
        document.getElementsByClassName('progress')[0].style.width = '100%';
        // let data = event.target.result.replace(/(\r\n|\n|\r)/gm, " ").split(" ");
        // data.pop();
        // localStorage.setItem('vkIds', JSON.stringify(data))
        document.getElementsByClassName('file-name')[0].textContent = file.current.files[0].name;
        // document.getElementsByClassName('file-length')[0].textContent = data.length;   
    }
    reader.readAsText(file.current.files[0]);
};

const getExportedDataXLSX = (target, data, years) => {
    target.setAttribute('disabled', '');
    const lifeDist = dataCounterAndTranslator(data.analyzeData.life_main_distibution, translation.life_main_distibution);
    const realtionsDist = dataCounterAndTranslator(data.analyzeData.relations_distribution, translation.relations_distribution);
    const peopleDist = dataCounterAndTranslator(data.analyzeData.people_main_distibution, translation.people_main_distibution);
    const psyDist = dataCounterAndTranslator(data.analyzeData.psy_type_distribution, translation.psy_type_distribution);
    const MBTI = dataCounterAndTranslator(data.analyzeData.MBTI.types_distribution, translation.MBTI);

    const ageDist = ageCounterAndTranslator(data.userData, years);
    const directionDist = directionCounterAndTranslator(data.analyzeData.MBTI.types_distribution);
    
    const final = {
        "Возраст": ageDist[0],
        "Расположение жизни": lifeDist[0],
        "Семейное положение ": realtionsDist[0],
        "Характер": peopleDist[0],
        "Направленность" : directionDist,
        "Психотипы SPECTRUM": psyDist[0],
        "Психотипы MBTI": MBTI[0]
    };
    const init = {
        method: 'POST',
        body: JSON.stringify({
            ...final
        })
    };
    const filePath = getDataFromServer('data/createXlsxFile', init);
    !filePath.error && target.removeAttribute('disabled');
};

const abortFile = () => {
    document.getElementsByClassName('file-processor')[0].classList.add('hide');
};

const pieChartDrawer = (main, translated, colors, needId) => {
    let total = 0;
    let keys = [];
    let values = [];
    let countedToPercent = [];
    for (let [key, value] of Object.entries(main)) {
        total += value;
        values.push(value)
    }

    values.sort((a, b) => b - a)

    values.forEach(el => {
        for (let [key, val] of Object.entries(main)) {
            if (el === val) {
                keys.push(translated[key])
            }
        }
    })

    values.forEach(el => countedToPercent.push(+((el / total * 100).toFixed(2))));

    const canvas = document.getElementById(needId);
    const ctx = canvas.getContext('2d');

    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontSize = 16;
    const theHelp = Chart.helpers;

    const data = {
        labels: keys,
        datasets: [{
            fill: true,
            backgroundColor: colors,
            data: countedToPercent,
            borderWidth: [2, 2]
        }]
    };

    const options = {
        tooltips: {
            bodyFontSize: 18,
            bodyFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            bodyFontColor: '#fff',
            bodyFontStyle: 'normal',
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "nearest",
            displayColors: false,
            xPadding: 20,
            yPadding: 15,
            cornerRadius: 13
        },
        rotation: -0.7 * Math.PI,
        legend: {
            display: true,
            position: 'right',
            boxWidth: 20,

            onClick: function (e, legendItem) {
                const index = legendItem.index;
                const ci = this.chart;
                const meta = ci.getDatasetMeta(0).data[index];
                meta.hidden = !meta.hidden

                if (legendItem.hidden === false) {

                    let hiddenObj = {}
                    const chartMetaKey = parseInt(Object.keys(ci.data.datasets["0"]._meta)[0]);
                    for (let i = 0; i < values.length; i++) {
                        hiddenObj[i] = ci.data.datasets["0"]._meta[chartMetaKey].data[i].hidden
                    }
                    let newDataForIndexes = []
                    let newDataForIndexesTrueHidden = []
                    for (let [key, val] of Object.entries(hiddenObj)) {
                        if (val === false) {
                            newDataForIndexes.push(key)
                        } else if (val === true) {
                            newDataForIndexesTrueHidden.push(key)
                        }
                    }
                    let dataWithFalseHidden = [];
                    let arrForIndexesTrueHidden = []

                    newDataForIndexes.forEach(el => {
                        dataWithFalseHidden.push(ci.data.datasets["0"].data[el])
                    })

                    newDataForIndexesTrueHidden.forEach(el => {
                        arrForIndexesTrueHidden.push(ci.data.datasets["0"].data[el])
                    })

                    let sum = 0
                    let beginSum = 0;
                    newDataForIndexes.forEach(el => {
                        beginSum += values[el]

                    })

                    dataWithFalseHidden.forEach(el => {
                        sum += el
                    })

                    let newVirtualProcentForTrueHidden = {}

                    arrForIndexesTrueHidden.map((el, i) => {
                        return newVirtualProcentForTrueHidden[i] = +(((values[i] / (beginSum + values[i])) * 100).toFixed(2))
                    })

                    let newProcentData = {}
                    dataWithFalseHidden.map((el, i) => {
                        newProcentData[newDataForIndexes[i]] = +(((el / sum) * 100).toFixed(2));
                    })

                    for (let [key, val] of Object.entries(newProcentData)) {

                        ci.data.datasets["0"].data[key] = val

                    }

                }
                else if (legendItem.hidden === true) {
                    let hiddenObj = {}
                    const chartMetaKey = parseInt(Object.keys(ci.data.datasets["0"]._meta)[0]);
                    for (let i = 0; i < values.length; i++) {
                        hiddenObj[i] = ci.data.datasets["0"]._meta[chartMetaKey].data[i].hidden
                    }
                    let newDataForIndexes = []
                    for (let [key, val] of Object.entries(hiddenObj)) {
                        if (val === false) {
                            newDataForIndexes.push(key)
                        }
                    }
                    let dataWithFalseHidden = [];
                    let firstVal = [];


                    newDataForIndexes.forEach(el => {
                        dataWithFalseHidden.push(ci.data.datasets["0"].data[el]);
                        firstVal.push(values[el])
                    })
                    let sum = 0;
                    let firstSum = 0;

                    firstVal.forEach(el => {
                        firstSum += el
                    })

                    ci.data.datasets["0"].data[index] = +((values[index] / (firstSum) * 100).toFixed(2))

                    dataWithFalseHidden.forEach(el => {
                        sum += el
                    })
                    let newProcentData = {}
                    dataWithFalseHidden.map((el, i) => {
                        newProcentData[newDataForIndexes[i]] = +(((el / (sum - Number(legendItem.text.split(" ")[0]))) * (100 - Number(legendItem.text.split(" ")[0]))).toFixed(2));

                    })

                    for (let [key, val] of Object.entries(newProcentData)) {
                        if (key != index) {
                            ci.data.datasets["0"].data[key] = val
                        } else {
                        }
                    }
                }
                ci.update();

            },

            labels: {
                boxWidth: 20,
                fontSize: 16,
                fontColor: '#111111',
                fontFamily: 'Uni Neue',
                padding: 15,
                generateLabels: function (chart) {
                    const data = chart.data;

                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function (label, i) {

                            const meta = chart.getDatasetMeta(0);
                            const ds = data.datasets[0];
                            const arc = meta.data[i];


                            const custom = arc && arc.custom || {};
                            const getValueAtIndexOrDefault = theHelp.getValueAtIndexOrDefault;
                            const arcOpts = chart.options.elements.arc;
                            const fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            const stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            const bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
                            return {
                                text: ds.data[i] + " % " + label,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                index: i
                            };
                        });

                    }
                    return [];
                }
            }
        }
    };


    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

};

const barChartDrawer = (main, yearOld, needId) => {
    let countYearOld = [];
    let countOfEachYear = {
        yearLess18: 0,
        yearLess22: 0,
        yearLess25: 0,
        yearLess28: 0,
        yearLess31: 0,
        yearLess36: 0,
        yearLess46: 0,
        yearMore46: 0
    }
    const objYearsMinMax = {
        "0": 18,
        "18": 22,
        "22": 25,
        "25": 28,
        "28": 31,
        "31": 36,
        "36": 46
    }
    for (let [key, value] of Object.entries(main)) {
        let yearOld = new Date().getFullYear() - value.bdate.slice(value.bdate.length - 4, value.bdate.length)
        let monthCount = new Date().getMonth() - value.bdate.slice(3, 5) + 1
        let day = new Date().getDate() - value.bdate.slice(0, 2)

        const forMinify = (obj) => {
            for (let [key, val] of Object.entries(obj)) {
                if (+key <= yearOld && yearOld <= val) {
                    if (yearOld === +key && monthCount > 0) {
                        countOfEachYear[`yearLess${val}`] += 1
                    }
                    else if (yearOld === +key && monthCount === 0) {
                        if (day >= 0) {
                            countOfEachYear[`yearLess${val}`] += 1
                        }
                    }
                    else if (yearOld === val && monthCount < 0) {
                        countOfEachYear[`yearLess${val}`] += 1
                    }
                    else if (yearOld === val && monthCount === 0) {
                        if (day <= 0) {
                            countOfEachYear[`yearLess${val}`] += 1
                        }
                    }
                    else if (yearOld >= +key + 1 && yearOld <= val - 1) {
                        countOfEachYear[`yearLess${val}`] += 1
                    }
                }
            }

        }

        if (yearOld >= 46) {
            if (yearOld === 46 && monthCount > 0) {
                countOfEachYear.yearMore46 += 1
            }
            else if (yearOld === 46 && monthCount === 0) {
                if (day > 0) {
                    countOfEachYear.yearMore46 += 1
                }
            }
            else if (yearOld >= 47) {
                countOfEachYear.yearMore46 += 1
            }
        }
        forMinify(objYearsMinMax)
    }

    let colors = [];

    for (let [key, val] of Object.entries(countOfEachYear)) {
        colors.push("#EA924A")
        countYearOld.push(val)
    }

    const canvas = document.getElementById(needId);
    const ctx = canvas.getContext('2d');

    const data = {
        labels: yearOld,
        datasets: [{
            backgroundColor: colors,
            hoverBackgroundColor: colors,
            data: countYearOld
        }]
    }


    new Chart(ctx, {
        type: 'bar',
        data: data
    });
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = 'black';

};

const directionChartDrawer = mainObj => {
    let ecstravert = 0;
    let introvert = 0;
    let feel = 0;
    let intuition = 0;
    let logic = 0;
    let emotion = 0;
    let rationality = 0;
    let irationality = 0;

    for (let [key, val] of Object.entries(mainObj)) {
        if (key.slice(0, 1) === "E") {
            ecstravert += val;
        } else if (key.slice(0, 1) === "I") {
            introvert += val;
        }

        if (key.slice(1, 2) === "N") {
            feel += val;
        } else if (key.slice(1, 2) === "S") {
            intuition += val;
        }
        if (key.slice(2, 3) === "F") {
            logic += val;
        } else if (key.slice(2, 3) === "T") {
            emotion += val;
        }
        if (key.slice(3, 4) === "J") {
            rationality += val;
        } else if (key.slice(3, 4) === "P") {
            irationality += val;
        }
    }

    let procent = {};

    procent.ecstravert = Math.round(
        (ecstravert / (ecstravert + introvert)) * 100
    );
    procent.introvert = 100 - procent.ecstravert;
    procent.feel = Math.round((feel / (feel + intuition)) * 100);
    procent.intuition = 100 - procent.feel;
    procent.logic = Math.round((logic / (logic + emotion)) * 100);
    procent.emotion = 100 - procent.logic;
    procent.rationality = Math.round(
        (rationality / (rationality + irationality)) * 100
    );
    procent.irationality = 100 - procent.rationality;

    const values = document.querySelectorAll(".directing-block strong");
    Object.values(procent).forEach((elem, index) => {
        values[index].innerHTML = `${elem}%`;
        document.querySelectorAll(".tooltip")[index].style.width = `${elem}%`;
    });
};

const getRequests = async dispatch => {
    const setRequest = await getDataFromServer('data/requests');
    !setRequest.error ? dispatch(setUserRequests(setRequest)) : console.log(setRequest);
};

const getSingleRequest = async (id, dispatch) => {
    const request = await getDataFromServer(`data/request/${id}`);
    return request && dispatch(setAnalyzeData({ name: request.name, analyzeData: request.responseAnalyseData, userData: request.responseUsersData }))
};

const userEdit = async (data, type, dispatch) => {

    const init = {
        method: 'PATCH'
    }

    switch (type) {
        case 'name':
            init.body = JSON.stringify({ name: data.name.current.value, email: data.email })
            break;

        default:
            break;
    }

    const editUser = await getDataFromServer('users/update', init);
    !editUser.error && dispatch(userAuthenticated(editUser)) && dispatch(successIndicated(successMessages['nameIsChanged']));
};

export {
    getAnalyzeData,
    handleUserIds,
    getExportedDataXLSX,
    abortFile,
    pieChartDrawer,
    barChartDrawer,
    directionChartDrawer,
    getRequests,
    getSingleRequest,
    userEdit
}