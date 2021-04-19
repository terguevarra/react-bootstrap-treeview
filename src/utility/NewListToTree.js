const NewListToTree =  (data, idName, parentIdName, id = 0) => {
    return data
            .filter((item) => {
                return item[parentIdName] === id;
            })
            .map(item => ({ ...item, __children: NewListToTree(data, idName, parentIdName, item[idName]) }));
}

export default NewListToTree;