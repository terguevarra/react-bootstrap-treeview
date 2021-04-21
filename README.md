# React Bootstrap Treeview

## Installation

1. Install Package
``` Javascript
npm install --save @terguevarra/react-bootstrap-treeview
```
2. Include [Bootstrap 5](https://getbootstrap.com/) and [Bootstrap Icons](https://icons.getbootstrap.com/)

Via CDN:

``` HTML
<link   href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
        rel="stylesheet" />

<link   href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet" />
```

or

Import [Bootstrap 5](https://getbootstrap.com/) and [Bootstrap Icons](https://icons.getbootstrap.com/):
``` Javascript
npm install bootstrap@next bootstrap-icons
```



## Usage

```Javascript
import React, { useState } from 'react';
import ReactBootstrapTreeview from '@terguevarra/react-bootstrap-treeview';

const sampleData = [
  {
    "id": 1,
    "parentId": 0,
    "label": "Lorem Ipsum"
  },
  {
    "id": 2,
    "parentId": 0,
    "label": "Lorem Ipsum"
  },
  {
    "id": 3,
    "parentId": 1,
    "label": "Lorem Ipsum"
  },
  {
    "id": 4,
    "parentId": 2,
    "label": "Lorem Ipsum"
  },
  {
    "id": 5,
    "parentId": 3,
    "label": "Lorem Ipsum"
  }
]

function App(){
    const [data, setData] = useState(sampleData);

    return(
        <>
            <ReactBootstrapTreeview list={data}
                                    idName="id"
                                    parentIdName="parentId"
                                    label={rowData => `${rowData.id} - ${rowData.label}`} />
        </>
    );
}

export default App;
```

## Main Props
|Name|Type|Default Value|Required|Description|
|----|-----|-----|-----|-----------|
|list|Array|-|Yes|Data to be rendered|
|idName|String|-|Yes|Property name of unique identification|
|parentIdName|String|-|Yes|Property name of Parent Id|
|label|String or Function|-|Yes|Property to be rendered|
|tableClassName|String|table|No|Bootstrap Table class you want to use for the treeview|
|actions|Array|-|No|Actions list. You can add buttons to rows.|



## actions
|Name|Type|Default Value|Required|Description|
|----|-----|-----|-----|-----------|
|icon|String|-|Yes|Bootstrap Icon class _(eg. `bi bi-plus`)_|
|onClick|Function|-|Yes|This will trigger the function on button click. _(Parameters: `event`, `rowData`)_|
|buttonClass|String|btn|No|Bootstrap button class _(eg. `btn btn-primary`)_|
|disabled|bool|false|No|Button is enabled or disabled|
|hidden|bool|false|No|Button is visible or not|