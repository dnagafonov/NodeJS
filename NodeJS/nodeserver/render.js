const renderText =(request, response)=> {
    response.write("<h2>FirstIF</h2>");
};
module.exports.renderText = renderText;

const headerRender = (request, response) => {
    response.setHeader("Content-type", "text/html");

    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello Node.js</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
};

module.exports.headerRender = headerRender;
