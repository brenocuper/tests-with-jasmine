describe('Consulta', () => {

    var breno

    beforeEach(() => {
        breno = new Paciente('Breno', 24, 70, 1.86)
    })

    it('Não deve cobrar nada se for um retorno', () => {
        var consulta = new Consulta(breno, [], true, true)
        expect(consulta.preco()).toEqual(0)
    })

    it('Deve cobrar 25 por cada procedimento', () => {
        var consulta = new Consulta(breno, ['vacina'], false, false)
        expect(consulta.preco()).toEqual(25)
    })

    it('Deve cobrar preco especifico dependendo do procedimento', () => {
        var consulta = new Consulta(breno, ['raio-x'], false, false)
        expect(consulta.preco()).toEqual(55)
    })

    it('Deve retornar 0 pois é retorno', () => {
        var consulta = new Consulta(breno, [], false, true)
        expect(consulta.preco()).toEqual(0)
    })
})