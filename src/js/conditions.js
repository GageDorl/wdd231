import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, visitorCenterTemplate } from "./templates.mjs";

const init = async () => {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const parkAlerts = await getParkAlerts();
    setAlerts(parkAlerts);
    const visitorCenters = await getVisitorCenterData();
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
}

const setAlerts = (alerts) => {
    const alertList = document.querySelector('#alerts ul');
    alerts.map(alert => {
        const li = document.createElement('li');
        li.classList.add('alert');
        li.innerHTML = alertTemplate(alert);
        alertList.appendChild(li);
    })
}

const setVisitorCenters = (visitorCenters) => {
    const visitorCenterList = document.querySelector('#visitorServices details ul');
    visitorCenters.map(center => {
        const li = document.createElement('li');
        li.classList.add('visitor-center');
        li.innerHTML = visitorCenterTemplate(center);
        visitorCenterList.appendChild(li);
    })
}

const setActivities = (activities) => {
    const activitiesList = document.querySelector('#activities details ul');
    activities.map(activity => {
        const li = document.createElement('li');
        li.classList.add('activity');
        li.innerHTML = activity.name;
        activitiesList.appendChild(li);
    })
}

init();