const prettyStringfify = (obj) => {
    try {
        return JSON.stringify(obj, null, 2)
    } catch (error) {
        console.log(error);
        return obj;
    }
}

module.exports = {
    prettyStringfify
}