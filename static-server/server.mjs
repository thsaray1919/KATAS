import http from "node:http";

const server = http.createServer(          
    function (req, res) {                     // las req seran de protovolo http
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8",
        });

        res.end("Hello im a prueba");
    }
);

server.listen(3000, function (){           // se ejecuta un callback para cuando el servidor se prende
    console.log("servidor disponible");    // listen es un metodo asincrono
});
                                            // ESTUDIAR: port, tipo de port.
                                            