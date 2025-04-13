import {
  config
} from "./chunk-NWEONTVA.js";

// node_modules/@ionic/core/components/index6.js
var printIonWarning = (message, ...params) => {
  const logLevel = config.get(
    "logLevel",
    "WARN"
    /* LogLevel.WARN */
  );
  if ([
    "WARN"
    /* LogLevel.WARN */
  ].includes(logLevel)) {
    return console.warn(`[Ionic Warning]: ${message}`, ...params);
  }
};
var printIonError = (message, ...params) => {
  const logLevel = config.get(
    "logLevel",
    "ERROR"
    /* LogLevel.ERROR */
  );
  if ([
    "ERROR",
    "WARN"
    /* LogLevel.WARN */
  ].includes(logLevel)) {
    return console.error(`[Ionic Error]: ${message}`, ...params);
  }
};
var printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
};

export {
  printIonWarning,
  printIonError,
  printRequiredElementError
};
/*! Bundled license information:

@ionic/core/components/index6.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-G6A6GINZ.js.map
