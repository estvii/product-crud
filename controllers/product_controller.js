function index(req,res) {
    res.send("show all products");
}

function show(req,res) {
    res.send("show single products");
}

function make (req,res) {
    res.send("show form to make new product");
}

function create(req,res) {
    res.send("show form to make new product");
}

function update(req,res) {
    res.send("show form to make new product");
}

function edit(req,res) {
    res.send("show form to make new product");
}

function destroy(req,res) {
    res.send("show form to make new product");
}
module.exports = {
    index,
    show,
    make,
    create,
    edit,
    update,
    destroy
}