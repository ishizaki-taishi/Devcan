export default {
    devices: (state) => state.devices,
    headers: (state) => state.headers,

    tabs: (state) => state.tabs,
    currentTab: (state) => state.currentTab,

    androidDevices: (state) => state.devices.filter((device) => device.os === 'android'),
    iosDevices: (state) => state.devices.filter((device) => device.os === 'ios'),


    currentDevices: (state) => state.devices.filter((device) => device.os === state.currentTab),

    // 選択中の端末一覧
    // currentDevices: (state) => state.devices.filter((device) => device.os === )

}
