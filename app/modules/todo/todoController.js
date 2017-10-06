exports.createTodos = function(req, res, next) {
    console.log("Todo created");
    res.send(201);
    next();
}

exports.getTodos = function(req, res, next) {
    console.log("Unable to get Todo");
    res.send(400);
    next();
}