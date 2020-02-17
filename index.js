const restify = require("restify");
const Salgado = require("./models/Salgado");

const server = restify.createServer({
    name: "Exemplo - EB019"
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

async function inserirSalgado(req, res) {
    let { nome, preco } = req.body;

    let salgado = await Salgado.create(
        {
            nome,
            preco
        }
    );

    let createdSalgado = await Salgado.findByPk(salgado.id);

    res.json(createdSalgado);
};

async function atualizarSalgado(req, res) {
    let id = req.params.id;
    let { nome, preco } = req.body;

    await Salgado.update(
        {
            nome,
            preco
        },
        {
            where: {
                id
            }
        }
    );

    let updatedSalgado = await Salgado.findByPk(id);

    res.json(updatedSalgado);
};

async function buscarSalgado(req, res) {
    let id = req.query.id;
    let nome = req.query.nome;

    if (id) {
        let salgados = await Salgado.findByPk(id);
        res.json(salgados);
    } else if (nome) {
        let salgados = await Salgado.findAll(
            {
                where: {
                    nome
                }
            }
        );
        res.json(salgados);
    } else {
        let salgados = await Salgado.findAll();
        res.json(salgados);
    }
};

async function excluirSalgado(req, res) {
    let id = req.params.id;

    let deleted = await Salgado.destroy(
        {
            where: {
                id
            }
        }
    );

    res.json({ deleted });
};

server.post("/salgado", inserirSalgado);
server.patch("/salgado/:id", atualizarSalgado);
server.get("/salgado", buscarSalgado);
server.del("/salgado/:id", excluirSalgado);

server.listen(3000, () => {
    console.log("EB019 rodando...");
});