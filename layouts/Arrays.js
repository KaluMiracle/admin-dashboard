import dashboardIcon from '../assets/icons/dashboard.svg'
import dashboardClicked from '../assets/icons/category.svg'
import analyticsIcon from '../assets/icons/analytics.svg'
import analyticsActive from '../assets/icons/analytics-active.svg'
import invoiceIcon from '../assets/icons/invoice.svg'
import invoiceActive from '../assets/icons/invoice-active.svg'
import calendarIcon from '../assets/icons/calendar.svg'
import calendarActive from '../assets/icons/calendar-active.svg'
import scheduleIcon from '../assets/icons/schedule.svg'
import sheduleActive from '../assets/icons/schedule.svg'
import messagesIcon from '../assets/icons/messages.svg'
import messagesActive from '../assets/icons/messages.svg'
import notificationIcon from '../assets/icons/notification.svg'
import notificationActive from '../assets/icons/notification.svg'
import settingsIcon from '../assets/icons/setting.svg'
import settingsActive from '../assets/icons/settings-active.svg'
import parfum from '../assets/images/parfum.png'
import argen from '../assets/images/argen.png'
import dress from '../assets/images/dress.png'
import lens from '../assets/images/lens.png'
import nike from '../assets/images/nike.png'
import iphone from '../assets/images/iphone.png'
import salesIcon from '../assets/icons/sales-products.svg'
import saveicon from '../assets/icons/save-products.svg'
import jobsIcon from '../assets/icons/job-application.svg'
import stockIcon from '../assets/icons/stock-products.svg'

import invoiceImage1 from '../assets/images/image1.png'
import invoiceImage2 from '../assets/images/image2.png'
import invoiceImage3 from '../assets/images/image3.png'



const recentOrders = [
  { trackingNo: "8763664", image: lens, name: 'Camera Lens', price: 50, totalOrder: 325, totalAmmount: 146660},
  { trackingNo: "3345676", image: dress, name: 'Black Sleep Dress', price: 90, totalOrder: 433, totalAmmount: 46660 },
  { trackingNo: "3399676", image: argen, name: 'Argan Oil', price: 70, totalOrder: 557, totalAmmount: 5660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
  { trackingNo: "9598686", image: parfum, name: 'EAU DE Parfun', price: 200, totalOrder: 425, totalAmmount: 1660},
]

const navItemKeys = {
    dashboard: 0,
    analytics: 1,
    invoice: 2,
    schedule: 3,
    calendar: 4,
    messages: 5,
    notifications: 6,
    settings: 7,
}

const navItems = [
    {key: navItemKeys.dashboard, title: 'Dashboard', icon: dashboardIcon, iconClicked: dashboardClicked},
    {key: navItemKeys.analytics, title: 'Analytics', icon: analyticsIcon, iconClicked: analyticsActive},
    {key: navItemKeys.invoice, title: 'Invoice', icon: invoiceIcon, iconClicked: invoiceActive},
    {key: navItemKeys.schedule, title: 'Schedule', icon: scheduleIcon, iconClicked: sheduleActive},
    {key: navItemKeys.calendar, title: 'Calendar', icon: calendarIcon, iconClicked: calendarActive},
    {key: navItemKeys.messages, title: 'Messages', icon: messagesIcon, iconClicked: messagesActive},
    {key: navItemKeys.notifications, title: 'Notifications', icon: notificationIcon, iconClicked: notificationActive},
    {key: navItemKeys.settings, title: 'Settings', icon: settingsIcon, iconClicked: settingsActive}
]

const analyticsInfo = [
    {key: 1, icon: saveicon, ammount: 178, title: 'Save Products',},
    {key: 2, icon: stockIcon, ammount: 20, title: 'Stock Products',},
    {key: 3, icon: salesIcon, ammount: 190, title: 'Sales Products',},
    {key: 4, icon: jobsIcon, ammount: 12, title: 'Job Applications',},
]

const topSellingProducts = [
    {key: 1, image: nike, price: 87, name: 'NIKE Shoes Black Pattern', stars: 3},
    {key: 2, image: iphone, price: 987, name: 'iphone12',stars: 5},
    {key: 3, image: dress, price: 190, name: 'Dress', stars: 2},
    {key: 4, image: parfum, price: 12, name: 'Eau de Parfum', stars: 4},
]




const invoiceList = [
  { invoiceId: "8763664", image: invoiceImage1, name: 'Arrora Gaur', email: 'arroragaur@gmail.com', date: '11 Dec, 2020', status: 'complete'},
  { invoiceId: "3345676", image: invoiceImage2, name: 'James Mulican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'pending' },
  { invoiceId: "3399676", image: invoiceImage3, name: 'Robert Bacins', email: 'robertbacins@gmail.com', date: '10 Dec, 2020', status: 'complete'},
  { invoiceId: "9578686", image: invoiceImage1, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '10 Dec, 2020', status: 'cancel'},
  { invoiceId: "9548686", image: invoiceImage2, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '10 Dec, 2020', status: 'complete'},
  { invoiceId: "9576686", image: invoiceImage3, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '9 Dec, 2020', status: 'pending'},
  { invoiceId: "9535686", image: invoiceImage1, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '9 Dec, 2020', status: 'pending'},
  { invoiceId: "9570686", image: invoiceImage2, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '9 Dec, 2020', status: 'cancel'},
  { invoiceId: "9599686", image: invoiceImage3, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '8 Dec, 2020', status: 'pending'},
  { invoiceId: "9523686", image: invoiceImage1, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '8 Dec, 2020', status: 'cancel'},
  { invoiceId: "9584686", image: invoiceImage2, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '7 Dec, 2020', status: 'pending'},
  { invoiceId: "9588686", image: invoiceImage3, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '6 Dec, 2020', status: 'complete'},
  { invoiceId: "9533686", image: invoiceImage1, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '9 Dec, 2020', status: 'complete'},
  { invoiceId: "9574686", image: invoiceImage3, name: 'Givenchy Parfum', email: 'givenchyparfum@gmail.com', date: '7 Dec, 2020', status: 'complete'},
]

export {
    navItems, 
    navItemKeys, 
    topSellingProducts, 
    analyticsInfo, 
    recentOrders,
    invoiceList,
};