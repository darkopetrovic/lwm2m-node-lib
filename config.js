var config = {};

// Configuration of the LWTM2M Server
//--------------------------------------------------
config.server = {
    port: 5683,                         // Port where the server will be listening
    lifetimeCheckInterval: 600000,        // Minimum interval between lifetime checks in ms
    udpWindow: 100,
    defaultType: 'Device',
    logLevel: 'DEBUG',
    ipProtocol: 'udp6',
    serverProtocol: 'udp6',
    formats: [
        {
            name: 'application-vnd-oma-lwm2m/text',
            value: 1541
        },
        {
            name: 'application-vnd-oma-lwm2m/tlv',
            value: 1542
        },
        {
            name: 'application-vnd-oma-lwm2m/json',
            value: 1543
        },
        {
            name: 'application-vnd-oma-lwm2m/opaque',
            value: 1544
        }
    ],
    writeFormat: 'application-vnd-oma-lwm2m/text'
};

// Configuration of the LWTM2M Client
//--------------------------------------------------
config.client = {
    lifetime: '30',
    version: '1.0',
    logLevel: 'DEBUG',
    observe: {
        period: 30000
    },
    ipProtocol: 'udp6',
    serverProtocol: 'udp6',
    formats: [
        {
            name: 'lightweightm2m/text',
            value: 1541
        }
    ],
    writeFormat: 'lightweightm2m/text'
};

module.exports = config;
