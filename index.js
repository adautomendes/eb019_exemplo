const restify = require("restify");
const Foto = require("./models/Foto");

const server = restify.createServer({
    name: "Projeto final - EB019"
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post("/foto", async (req, res) => {
    let { modelo, ano } = req.body;

    let foto = await Foto.create(
        {
            modelo,
            ano
        }
    );

    let createdFoto = await Foto.findByPk(foto.id);

    res.json(createdFoto);
});

server.patch("/foto/:id", async (req, res) => {
    let id = req.params.id;
    let { modelo, ano } = req.body;

    await Foto.update(
        {
            modelo,
            ano
        },
        {
            where: {
                id
            }
        }
    );

    let updatedFoto = await Foto.findByPk(id);

    res.json(updatedFoto);
});

server.get("/foto", async (req, res) => {
    let id = req.query.id;
    let ano = req.query.ano;

    if (id) {
        let fotos = await Foto.findByPk(id);
        res.json(fotos);
    } else if (ano) {
        let fotos = await Foto.findAll(
            {
                where: {
                    ano
                }
            }
        );
        res.json(fotos);
    } else {
        let fotos = await Foto.findAll();
        res.json(fotos);
    }
});

server.del("/foto/:id", async (req, res) => {
    let id = req.params.id;

    let deleted = await Foto.destroy(
        {
            where: {
                id
            }
        }
    );

    res.json({ deleted });
});

server.listen(3000, () => {
    console.log("EB019 rodando...");
});