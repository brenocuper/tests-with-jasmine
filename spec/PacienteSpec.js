describe('Paciente', () => {

    var breno

    beforeEach(() => {
        breno = new Paciente('Breno', 24, 70, 1.85)
    })

    it('deve calcular o IMC', () => {
        expect(breno.imc()).toEqual(70 / (1.85 * 1.85))
    })

    it('Deve retornar os batimentos', () => {
        expect(breno.batimentos()).toEqual(1009152000)
    })
})