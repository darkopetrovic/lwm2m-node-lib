const debug = require('debug');
const logger = require('logops');

ENABLE_LOGOPS = false

module.exports = function(context){
    contextop = context.op.split(".")
    const _debug = debug(`${contextop[0].toLowerCase()}:${contextop[1]}`);
    _debug.log = console.info.bind(console);

    API = {
        debug: (...args) => {
            if(ENABLE_LOGOPS) logger.debug.apply(null, args);
            args.shift()
            _debug.apply(null, args);
        },

        info: (...args) => {
            if(ENABLE_LOGOPS) logger.info.apply(null, args);
            args.shift()
            _debug.apply(null, args);
        },

        warn: (...args) => {
            if(ENABLE_LOGOPS) logger.warn.apply(null, args);
            args.shift()
            _debug.apply(null, args);
        },

        error: (...args) => {
            if(ENABLE_LOGOPS) logger.error.apply(null, args);
            args.shift()
            _debug.apply(null, args);
        },

        fatal: (...args) => {
            if(ENABLE_LOGOPS) logger.fatal.apply(null, args);
            args.shift()
            _debug.apply(null, args);
        }
    }

    return API

};