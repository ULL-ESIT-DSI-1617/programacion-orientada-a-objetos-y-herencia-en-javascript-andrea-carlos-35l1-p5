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
  static type(temp){
    var array = temp.match(/([-+]?\d+(?:\.\d+)?)\s*([FfCcKk])\s*(?:to)?\s*([FfCcKk])\s*$/);
    var typ = 0;
    if(array != null){
      if(array[2].match(/[FfCcKk]/) && array[3].match(/[FfCcKk]/)) {
        if(array[2].match(/[Cc]/)) {
          typ = 1;
        }
        else {
          if(array[2].match(/[Ff]/)) {
            typ = 2;
          }
          else {
            typ = 3;
          }
        }
      }
      else {
        console.log("Expresión inválida.")
      }
    }
    else{
      console.log("Expresión inválida.")
    }
    return typ;
  }
}

class Kelvin extends Temperatura {
  constructor(temp){
    if(Temperatura.type(temp) == 3){
      super(temp);
    }
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

class Celsius extends Temperatura {
  constructor(temp){
    if(Temperatura.type(temp) == 1){
      super(temp);
    }
  }

  convertir() {
    this.resultado = 0;
    if(super.getCover.match(/[Cc]/)){
      this.resultado = super.getValor;
    }
    else{
      if(super.getCover.match(/[Ff]/)){
        this.resultado = (super.getValor * (9/5))+32;
      }
      else{
        this.resultado = super.getValor - 0 + 273.15;
      }
    }
    return this.resultado;
  }
}

class Farenheit extends Temperatura {
  constructor(temp){
    if(Temperatura.type(temp) == 2){
      super(temp);
    }
  }

  convertir(){
    if(super.getCover.match(/[Cc]/)){
      this.resultado = (super.getValor-32) * (5/9);
    }
    else{
      if(super.getCover.match(/[Ff]/)){
        this.resultado = super.getValor;
      }
      else{
        this.resultado = ((super.getValor-32) * (5/9)) + 273.15;
      }
    }
    return this.resultado;
  }
}
