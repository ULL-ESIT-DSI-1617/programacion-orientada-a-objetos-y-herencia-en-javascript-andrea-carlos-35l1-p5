"use strict"

class Medida {
  constructor(temp) {
    let array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKkMmPp])\s*(?:to)?\s*([FfCcKkMmPp])\s*$/)
    if(array[1]){ this.valor = array[1]; }
    if(array[2]){ this.tipo = array[2]; }
    if(array[3]){ this.cover = array[3]; }
  }
  get getValor() { return this.valor }
  get getTipo() { return this.tipo }
  get getCover() { return this.cover }
}

class Temperatura extends Medida {
  constructor(temp){
    var array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKk])\s*(?:to)?\s*([FfCcKk])\s*$/);
    if(array[2].match(/[FfCcKk]/) && array[3].match(/[FfCcKk]/)){
      super(temp)
    }
    else {
      console.log("Expresión inválida.")
    }
  }
}

class Kelvin extends Temperatura {
  constructor(temp){
      super(temp);
  }

  convertir() {
    if(super.getCover.match(/[Cc]/)){
      this.resultado = super.getValor - 273.15;
    }
    else{
      if(super.getCover.match(/[Ff]/)){
        this.resultado = ((super.getValor - 273.15) * (9/5))+32;
      }
      else{
        this.resultado = super.getValor;
      }
    }
    return this.resultado
  }
}
