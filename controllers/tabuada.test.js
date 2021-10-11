const tabuadaController = require('./tabuada')
const sinon = require('sinon')
const { mock } = require('sinon')

describe('tabuada controller', () => {
    it('list', () => {
        let tabuadas = []
        for (let i = 1; i <= 100; i++) {
            tabuadas.push(i)
        }
        let res = {
            render: function () { }
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/list', { tabuadas })
        tabuadaController.list({}, res)
    })
    it('calcula tabuada', () => {
        let tabuadas = []
        const num = 10
        for (let i = 1; i <= 100; i++) {
            tabuadas.push({
                num,
                i,
                resultado: num * i
            })
        }
        let res = {
            render: function () { }
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuada/tabuada', {
            num,
            tabuadas
        })
        tabuadaController.tabuada({ params: { num } }, res)
    })
})