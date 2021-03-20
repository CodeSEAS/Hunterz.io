const SerpWow = require('google-search-results-serpwow')

// const axios = require('axios')
const http = require('http')
// const querystring = require('querystring')


// req Request，res Response
const server = http.createServer((req, resp) => {
    console.log('request received')
    const url = req.url
    console.log('url is: ', url)
    const path = url.split('?')[0]
    // const queryStr = url.split('?')[1]
    const method = req.method
    console.log('method is:', method)
    // const query = querystring.parse(queryStr)

    if (path === '/api/getFirstPage') {
        if (method === 'GET') {
            //https://www.linkedin.com/in/karellahmy/
            //My API key: 3476A130DDEE41FCA5A8AC24CB060F12
            //create the serpwow object, passing in our API key
            // makeSerpApi(resp)
            mockApi(resp)
        }
    }
})

function mockApi(resp) {
    // resp.header("Access-Control-Allow-Origin", "*");
    resp.writeHead(200, {'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'})
    resp.end("{\n" +
        "  \"position\": 1,\n" +
        "  \"title\": \"Karel Lahmy - VP Research & Development ... - LinkedIn\",\n" +
        "  \"link\": \"https://www.linkedin.com/in/karellahmy\",\n" +
        "  \"domain\": \"www.linkedin.com\",\n" +
        "  \"displayed_link\": \"www.linkedin.com › karellahmy\",\n" +
        "  \"snippet\": \"View Karel Lahmy's profile on LinkedIn, the world's largest professional community. ... See the complete profile on LinkedIn and discover Karel's connections and jobs at similar ... Personal Website: http://www.karelahmy.com/ External link.\",\n" +
        "  \"prerender\": false,\n" +
        "  \"snippet_matched\": [\n" +
        "    \"Karel Lahmy's\",\n" +
        "    \"LinkedIn\",\n" +
        "    \"LinkedIn\",\n" +
        "    \"http\"\n" +
        "  ],\n" +
        "  \"related_page_link\": \"https://www.google.com/search?q=related:https://www.linkedin.com/in/karellahmy+https://www.linkedin.com/in/karellahmy/&sa=X&ved=2ahUKEwiDhaeR1b3vAhVQOhoKHfs1DbgQHzAAegQIAxAI\",\n" +
        "  \"rich_snippet\": {\n" +
        "    \"top\": {\n" +
        "      \"detected_extensions\": {},\n" +
        "      \"extensions\": [\n" +
        "        \"New York, New York\",\n" +
        "        \"‎VP Research & Development\",\n" +
        "        \"‎Hunterz.io\"\n" +
        "      ]\n" +
        "    }\n" +
        "  },\n" +
        "  \"block_position\": 2\n" +
        "}")
}

function makeSerpApi(resp) {
    const serpwow = new SerpWow('3476A130DDEE41FCA5A8AC24CB060F12')
    serpwow.json(
        {
            q: "https://www.linkedin.com/in/karellahmy/"
        })
        .then(result => successHandler(result, resp))
        .catch(err => errorHandler(err));
}

function successHandler(result, resp) {
    processHttp(JSON.stringify(result.organic_results[0], 0, 2), resp);
}

function errorHandler(err) {
    console.log(err);
}

function processHttp(json_str, resp) {
    console.log(json_str)
    resp.writeHead(200, {'Content-type': 'application/json'})
    resp.end(json_str)
}

server.listen(3000)
console.log('please visit http://localhost:3000')
