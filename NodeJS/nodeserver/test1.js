let moduleIndexJs = {
    exports: {}
};

const indexJs = () => {
    moduleIndexJs.exports.app = () => {console.log("hi")};
};

const main = () => {
    const a = moduleIndexJs.exports;
    a.app();
};

indexJs();
main();