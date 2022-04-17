import { __assign, __rest } from "tslib";
import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState, } from "react";
import clsx from "clsx";
import { CmUtils, Hooks } from "@delpi/common";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
var useStyles = makeStyles(function (theme) { return ({
    frmDkBasic: {
        width: "100%",
        margin: theme.spacing(2),
        marginTop: 0,
        marginBottom: 0
    },
    dkSelectContainer: {
        "& .MuiSelect-selectMenu": {
            lineHeight: "1.4375em"
        }
    },
    dkSelectOptionText: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        "& > span": {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    }
}); });
var ITEM_HEIGHT = 40;
var ITEM_PADDING_TOP = 8;
var BasicSelect = function (_a) {
    var _b;
    var children = _a.children, id = _a.id, placeholder = _a.placeholder, width = _a.width, _c = _a.vertical, vertical = _c === void 0 ? "bottom" : _c, _d = _a.autoDirection, autoDirection = _d === void 0 ? true : _d, _e = _a.maxDisplay, maxDisplay = _e === void 0 ? 0 : _e, _f = _a.minDisplay, minDisplay = _f === void 0 ? 2 : _f, _g = _a.itemHeight, itemHeight = _g === void 0 ? ITEM_HEIGHT : _g, _h = _a.itemMarginBottom, itemMarginBottom = _h === void 0 ? 0 : _h, keyName = _a.keyName, labelName = _a.labelName, _j = _a.value, value = _j === void 0 ? "" : _j, options = _a.options, _k = _a.MenuProps, MenuProps = _k === void 0 ? {} : _k, _l = _a.MenuItemProps, MenuItemProps = _l === void 0 ? {} : _l, customizeItem = _a.customizeItem, onChange = _a.onChange, props = __rest(_a, ["children", "id", "placeholder", "width", "vertical", "autoDirection", "maxDisplay", "minDisplay", "itemHeight", "itemMarginBottom", "keyName", "labelName", "value", "options", "MenuProps", "MenuItemProps", "customizeItem", "onChange"]);
    var classes = useStyles();
    var refSelect = useRef(null);
    var _m = useState(true), showDown = _m[0], setShowDown = _m[1];
    var _o = useState(0), realSize = _o[0], setRealSize = _o[1];
    var _p = useState([]), selectedValues = _p[0], setSelectedValues = _p[1];
    var _q = useState(""), selectedVal = _q[0], setSelectedVal = _q[1];
    var _r = useState(new Map()), mapOptions = _r[0], setMapOptions = _r[1];
    var resize = Hooks.useWindowSize();
    var padding = ITEM_PADDING_TOP * 2;
    var uuid = "muiSelect-label-".concat(CmUtils.idv4Time(id || ""));
    var hasKey = !CmUtils.isNil(keyName);
    useEffect(function () {
        if (!value) {
            setSelectedValues([]);
            setSelectedVal("");
            return;
        }
        !props.multiple ? setSelectedVal(value) : setSelectedValues(value);
    }, [value]);
    useEffect(function () {
        if (hasKey) {
            var map_1 = new Map(mapOptions);
            map_1.clear();
            options.forEach(function (opt) {
                map_1.set(opt[keyName || labelName], opt[labelName]);
            });
            setMapOptions(map_1);
        }
    }, [options]);
    useEffect(function () {
        setSelectedValues([]);
        setSelectedVal("");
    }, [props.multiple]);
    useEffect(function () {
        var _a;
        var viewportOffset = (_a = refSelect.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var top = viewportOffset.top;
        var bottom = viewportOffset.bottom;
        var innerHeight = window.innerHeight;
        var spacing = (itemHeight * 2) / 3 + padding;
        var getCountForBottom = function () {
            var maxHeight = innerHeight - bottom - spacing;
            return Math.floor(maxHeight / itemHeight);
        };
        var getCountForTop = function () {
            var maxHeight = top - spacing;
            return Math.floor(maxHeight / itemHeight);
        };
        if (vertical === "bottom") {
            setShowDown(true);
            var maxCounter_1 = getCountForBottom();
            if (maxDisplay > 0 && maxCounter_1 > maxDisplay) {
                maxCounter_1 = maxDisplay;
            }
            if (autoDirection && maxCounter_1 < minDisplay) {
                maxCounter_1 = getCountForTop();
                setShowDown(false);
            }
            setRealSize(maxCounter_1 * itemHeight + padding);
            return;
        }
        setShowDown(false);
        var maxCounter = getCountForTop();
        if (maxDisplay > 0 && maxCounter > maxDisplay) {
            maxCounter = maxDisplay;
        }
        if (autoDirection && maxCounter < minDisplay) {
            maxCounter = getCountForBottom();
            setShowDown(true);
        }
        setRealSize(maxCounter * itemHeight + padding);
    }, [
        options,
        itemHeight,
        maxDisplay,
        vertical,
        autoDirection,
        minDisplay,
        resize,
    ]);
    var handleChange = function (event, child) {
        var value = event.target.value;
        onChange && onChange(event, child);
        props.multiple ? setSelectedValues(value) : setSelectedVal(value);
    };
    var buildSelected = function (selected) {
        if (!props.multiple) {
            return selected;
        }
        return Array.from(selected).join(", ");
    };
    var buildSelecteWithKey = function (selected) {
        if (!props.multiple) {
            var index = options.findIndex(function (item) { return item[keyName] === selected; });
            if (index !== -1) {
                return options[index][labelName];
            }
            return React.createElement(React.Fragment, null);
        }
        return (Array.from(selected)
            .map(function (val) { return mapOptions.get(val); })
            .join(", "));
    };
    return (React.createElement(Box, { position: "relative", marginRight: width ? "0" : "24px", width: width },
        React.createElement(FormControl, { className: classes.frmDkBasic },
            React.createElement(InputLabel, { id: uuid }, placeholder),
            React.createElement(Select, __assign({ ref: refSelect, renderValue: function (items) {
                    return hasKey ? buildSelecteWithKey(items) : buildSelected(items);
                }, MenuProps: makePaper(MenuProps, realSize, showDown, width, (_b = refSelect.current) === null || _b === void 0 ? void 0 : _b.clientWidth, props.autoWidth), fullWidth: true }, props, { className: clsx(props.className, classes.dkSelectContainer), multiple: props.multiple, labelId: uuid, value: props.multiple ? selectedValues : selectedVal, onChange: handleChange }), children
                ? Children.map(children, function (child) {
                    if (isValidElement(child)) {
                        return cloneElement(child, __assign(__assign({}, child.props), { style: __assign(__assign({}, child.props.style), { height: itemHeight, marginBottom: itemMarginBottom }) }));
                    }
                    return (React.createElement(BasicSelectItem, { value: child, style: {
                            height: itemHeight,
                            marginBottom: itemMarginBottom
                        } }, child));
                })
                : options.map(function (option, index) {
                    return (React.createElement(MenuItem, { key: index, value: hasKey ? option[keyName] : option, className: clsx(MenuItemProps.itemClassName), style: {
                            height: itemHeight,
                            marginBottom: itemMarginBottom
                        } }, customizeItem ? (customizeItem(option)) : (React.createElement(ListItemText, { primary: hasKey ? option[labelName || keyName] : option, className: clsx(!props.autoWidth && classes.dkSelectOptionText) }))));
                })))));
};
var BasicSelectItem = function (_a) {
    var children = _a.children, value = _a.value, itemClassName = _a.itemClassName, props = __rest(_a, ["children", "value", "itemClassName"]);
    return (React.createElement(MenuItem, __assign({ value: value }, props, { className: clsx(props.classes, itemClassName) }), children));
};
export { BasicSelect, BasicSelectItem };
export default BasicSelect;
function makePaper(menuProps, maxHeight, showDown, width, anchorWidth, autoWidth) {
    var realWidth = isRealSize(width);
    if (!realWidth && !autoWidth) {
        realWidth = "".concat(anchorWidth, "px");
    }
    return __assign(__assign({}, menuProps), { PaperProps: {
            style: {
                maxHeight: maxHeight,
                width: realWidth
            }
        }, getContentAnchorEl: null, anchorOrigin: {
            vertical: showDown ? "bottom" : "top",
            horizontal: "center"
        }, transformOrigin: {
            vertical: !showDown ? "bottom" : "top",
            horizontal: "center"
        }, variant: "menu" });
}
function isRealSize(value) {
    if (!value) {
        return undefined;
    }
    if (typeof value === "string") {
        return /^-?\d+$/.test(value) ? "".concat(Number(value), "px") : value;
    }
    if (value < 0) {
        return undefined;
    }
    return "".concat(value, "px");
}
