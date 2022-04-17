<div align="center">
    <h1>react-material-select-v4z</h1>
    <br />
    <a href="https://codesandbox.io/s/p7nihf">LIVE EXAMPLE</a>
</div>

---

#### Description
+ Select (Material v4)
+ You can limit display number of options
+ No overwrite the position on the label option (show top or bottom)
---

#### Usage
```js
npm install react-material-select-v4z
```

Import the module in the place you want to use:
```js
import BasicSelect from 'react-material-select-v4z'
```

#### Snippet

##### `simple`

```js
    const [value, setValue] = useState([])
    const handleAbc = (item) => {
        setValue(item.target.value)
    };

    <BasicSelect
        placeholder = "Multiple Select"
        width={300} // width or %
        vertical="top" // if space
        /** if limitOption < minDisplay: it change top to bottom or bottom to top */
        // autoDirection={true} // default: true

        /**
         * default none. Set limit option can display.
         * If the list height exceeds the window, it will crop automatically
        */
        maxDisplay={10} // auto scroll if it over

        /** Default 2.*/
        // minDisplay={2}

        /** Height of option.*/
        // itemHeight={40} => default 40px

        /** Margin of option. Default 0px */
        // itemMarginBottom={0} => space between options

        /** If type of option is objects => object[keyName] */
        keyName="value"

        /** If type of option is objects => object[labelName] */
        labelName="item"

        /** selected value. List(multiple) or single */
        value={value}

        /** list options, [number...] or [string...] or [object...]. ex: optionsA or optionsB*/
        options={options}

        // multiple={true}
        onChange={handleAbc}

        /** customize display template option */
        // customizeItem =>
      >
      </BasicSelect>

    // ==================================================================
    // with
    // const optionsA = [
    //   {
    //     item: "abc",
    //     value: "0",
    //   },
    //   {
    //     item: "abc 1",
    //     value: "1",
    //   },
    //   {
    //     item: "abc 2",
    //     value: "2",
    //   },
    //   {
    //     item: "abc 3dsd sd",
    //     value: "4",
    //   },
    // ]; => need keyName and labelName

    // ==================================================================
    // with
    // const optionsB = ["1", "2", "3", "4", "6", "7"] => dont need keyName and labelName

```
#### props
extends: <b />MuiSelectProps</b> of Material V4 [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)


#### RUN

<a href="https://codesandbox.io/s/p7nihf">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT
