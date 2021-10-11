const list = (req, res) => {
    let tabuadas = []
    for (let i = 1; i <= 100; i++) {
        tabuadas.push(i)
    }
    res.render('tabuada/list', { tabuadas })
}
const tabuada = (req, res) => {
    let tabuadas = []
    const num = req.params.num
    for (let i = 1; i <= 100; i++) {
        tabuadas.push({
            num,
            i,
            resultado: num * i
        })
    }
    res.render('tabuada/tabuada', {
        num: req.params.num,
        tabuadas
    })
}

module.exports = {
    list,
    tabuada
}