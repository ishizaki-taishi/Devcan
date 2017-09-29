(() => {

    const keys = ['id', 'name', 'id2', 'type', 'os', 'version', 'enabled', 'user', '', ''];

    const tds = [...document.querySelectorAll('.list-table td')].map((td) => td.textContent);

    const devices = [];

    while (tds.length) {

        const device = {};

        for (const key of keys) {
            device[key] = tds.shift().trim();
        }

        device.id = parseInt(device.id, 10);
        device.id2 = parseInt(device.id2, 10);
        device.version = parseFloat(device.version);
        device.enabled = device.enabled === 'Enable';

        const [userId, userName] = device.user.split(':');

        device.userName = userName;
        device.userId = parseInt(userId, 10);


        delete device.user;
        delete device[''];

        devices.push(device);

    }

    console.log(devices);
    window.d = devices;

})();
