import _ from "lodash";

export default class Util {
  static List2Map = (list, label = "label", value = "value") => {
    list = _.cloneDeep(list);
    let map = {};
    list.forEach(item => {
      map[item[label]] = item[value];
    });
    return map;
  };
  static curry(fn, context) {
    const args = Array.prototype.slice.call(arguments, 2);
    return function() {
      const innerArgs = Array.prototype.slice.call(arguments);
      const totalArgs = args.concat(innerArgs);
      return fn.apply(context, totalArgs);
    };
  }
}
