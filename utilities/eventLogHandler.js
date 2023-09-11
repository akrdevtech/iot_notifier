
module.exports = () => {

    const apiLogger = (res) => {
        const { locals: { loggerData } } = res;
        if (loggerData) {
            console.log(JSON.stringify(loggerData,null,2));
        }
    }

    return {
        apiLogger,
    }
}
