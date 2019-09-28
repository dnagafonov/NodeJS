const http = require("http");
const render = require("./render");
const argv = require("process.argv")(process.argv);

let nodePath = argv[0];
let appPath = argv[1];
let something = argv[2];

console.log(nodePath,appPath,something);
http.createServer((request, response) => {
        console.log(request.body);
        render.headerRender(request, response);
        if(request.url === "/about"){
            render.renderText(request, response);
        }
        else {
            response.statusCode = 404;
            response.write("<h1>ZAKROI</h1>");
        }
        if(response.url === "/about"){
        response.write("<h1>AboutWork</h1>");
        }

        response.end();

}).listen(3000);