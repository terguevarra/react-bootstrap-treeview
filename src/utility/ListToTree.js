const ListToTree =  (data, idName, parentIdName) => {
    let map = {}, node, roots = [];
    for (let i = 0; i < data.length; i++) {
        map[data[i][idName]] = i;
        data[i]['__children'] = [];
    }
    for (let i = 0; i < data.length; i++) {
        node = data[i];
        if (node[parentIdName] !== 0 && node[parentIdName] !== null) {
            data[map[node[parentIdName]]]['__children'].push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}


export default ListToTree;