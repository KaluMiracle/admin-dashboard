
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

export {navItems, navItemKeys};