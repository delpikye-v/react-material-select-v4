import React from "react";
import { MenuItemProps } from "@material-ui/core/MenuItem";
import { SelectProps as MuiSelectProps } from "@material-ui/core/Select";
export interface IBasicSelectItemProps extends MenuItemProps<"li", {
    button?: true;
}> {
    value?: number | string;
    itemClassName?: string;
}
export interface ISelectCustomProps {
    placeholder?: string;
    width?: number | string;
    vertical?: "top" | "bottom";
    /** if limitOption < minDisplay: it change top to bottom or bottom to top */
    autoDirection?: boolean;
    /**
     * default none. Set limit option can display.
     * If the list height exceeds the window, it will crop automatically
     */
    maxDisplay?: number;
    /** Default 2. */
    minDisplay?: number;
    /** Height of option. Default 40px */
    itemHeight?: number;
    /** Margin of option. Default 0px */
    itemMarginBottom?: number;
    /** If type of option is objects => object[keyName] */
    keyName?: string;
    /** If type of option is objects => object[labelName] */
    labelName?: string;
    /** selected value. List(multiple) or single */
    value?: string[] | number[] | string | number;
    /** list options, [number] or [string] or [object] */
    options: any[];
    /** customize display template option */
    customizeItem?: (data: any) => React.ReactNode;
    /** menu option */
    MenuItemProps?: IBasicSelectItemProps;
}
export declare type TBasicSelectProps = ISelectCustomProps & MuiSelectProps;
declare const BasicSelect: React.FC<TBasicSelectProps>;
declare const BasicSelectItem: React.FC<IBasicSelectItemProps>;
export { BasicSelect, BasicSelectItem };
export default BasicSelect;
