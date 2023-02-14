class TicketManager{
    #precioBaseDeGanancia = 15
    constructor(){
        this.eventos = []
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre,lugar,precio,capacidad = 50, fecha = new Date()){
        const id =
            this.eventos.length === 0
            ? 1
            : this.eventos[this.eventos.length - 1].id + 1

        const evento = {
            id,
            nombre,
            lugar,
            precio : precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes : []
        }
        this.eventos.push(evento)
    }
}