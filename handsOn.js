class TicketManager{
    #precioBaseDeGanancia = 15
    constructor(){
        this.eventos = []
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento(nombre,lugar,precio,capacidad = 50, fecha = new Date()){


        const evento = {
            id: this.#generarID(),
            nombre,
            lugar,
            precio : precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes : []
        }
        this.eventos.push(evento)
    }
    #generarID(){
        const id =
            this.eventos.length === 0
            ? 1
            : this.eventos[this.eventos.length - 1].id + 1
        
        return id
    }
}

const manager = new TicketManager()
manager.agregarEvento('evento1','lugar1',50)
manager.agregarEvento('evento2','lugar2',100)
console.log(manager);