"use strict";
exports.__esModule = true;
exports.getNavAndSideBarInfo = exports.getNavList = void 0;
var path = require("path");
var fs_1 = require("fs");
var types_1 = require("./types");
exports["default"] = {
    watch: ['./src/**/*'],
    load: function () {
        return getNavAndSideBarInfo();
    }
};
function getRecursiveList(dirAbsolutePath, parentName) {
    var resArray = [];
    var items = (0, fs_1.readdirSync)(path.resolve(dirAbsolutePath), { withFileTypes: true });
    items.map(function (item) {
        if (item.isDirectory()) {
            resArray.push({
                text: item.name,
                items: getRecursiveList("".concat(dirAbsolutePath, "/").concat(item.name), "".concat(parentName ? parentName + '/' : '').concat(item.name))
            });
        }
        else if (item.isFile()) {
            var text = "".concat(item.name);
            var link = "/".concat(item.name);
            if (item.name.indexOf('.') !== -1) {
                text = "".concat(item.name.split('.').slice(0, -1).join(''));
            }
            if (parentName) {
                link = "/".concat(parentName, "/").concat(item.name);
            }
            resArray.push({ text: text, link: link });
        }
    });
    return resArray;
}
function getNavList(dirAbsolutePath) {
    return (0, fs_1.readdirSync)(dirAbsolutePath, { withFileTypes: true })
        .filter(function (item) { return !!item.isDirectory(); })
        .map(function (item) { return ({ text: types_1.WordMap[item.name], link: "/".concat(item.name) }); });
}
exports.getNavList = getNavList;
function getNavAndSideBarInfo() {
    var prefix = [{ text: types_1.WordMap.index, link: './index' }];
    var navList = getNavList(path.resolve(__dirname, 'src'));
    var sideBarList = getRecursiveList(path.resolve(__dirname, 'src'), '');
    var sidebarObj = {};
    navList.forEach(function (item) {
        sidebarObj[item.link] = getRecursiveList(path.resolve(__dirname, "src/".concat(item.link)), item.link);
    });
    return {
        navList: prefix.concat(navList),
        sideBarList: sideBarList,
        sidebarObj: sidebarObj
    };
}

getNavAndSideBarInfo()
exports.getNavAndSideBarInfo = getNavAndSideBarInfo;
