# Programación Orientada a Objetos. ECMAS6 JavaScript

## Introducción POO

La **programación orientada a objetos** es un paradigma de programación que utiliza la abstracción para crear modelos basados ​​en el mundo real. Utiliza diversas técnicas de paradigmas previamente establecidas, incluyendo la modularidad, polimorfismo y encapsulamiento.
En la programación orientada a objetos, cada objeto es capaz de recibir mensajes, procesar datos y enviar mensajes a otros objetos. Cada objeto puede verse como una pequeña máquina independiente con un papel o responsabilidad definida.

## Uso Básico

### Creación de una clase + Constructor

JavaScript es un lenguaje basado en **prototipos** que no contiene ninguna declaración de clase, como se encuentra, por ejemplo, en C + + o Java. En su lugar, JavaScript utiliza funciones como clases.

El constructor es llamado en el momento de la creación de la instancia (el momento en que se crea la instancia del objeto). El constructor es un método de la clase. En JavaScript, la función sirve como el constructor del objeto, por lo tanto, no hay necesidad de definir explícitamente un método constructor. Cada acción declarada en la clase es ejecutada en el momento de la creación de la instancia.

Un ejemplo de la creación de una clase con un constructor explícito:

~~~
class Animal {
    constructor(name) {
        this.name = name;
    }
 
    doSomething() {
        console.log("I'm a " + this.name);
    }
}

var lion = new Animal("Lion");
lion.doSomething();
~~~

La salida de esta clase será: 
~~~
I'm a Lion
~~~

Hay una serie de clases predefinidas en JavaScript:
* Object: clase raíz.
* Array: colección indexable, suele usarse literal ([1,2,3]).
* Date: hora y fecha extraída del reloj del sistema.
* Function: encapsula código.
* RegExp: expresiones regulares.
* Math: módulo con constantes y funciones matemáticas.
* Number, String y Boolean: clases que encapsulan valores de los tipos number , string y boolean como objetos.

### Objetos + Propiedades (atributos del objeto)

Los **objetos** son colecciones de variables inicializadas a unos valores determindos, es decir, una colección de variables con valores asignados. Las variables de los objetos se llaman **propiedades**. Una propiedad es un par nombre:valor donde  los nombres deben ser todos diferentes en un mismo objeto. 

Ejemplo:
~~~
{tipo: 'reptil', alimentación: 'carnívoro'}
~~~

Crea un objeto con dos propiedades; tipo y alimentación.

A las propiedades se les accede con el punto (.), es decir, objeto.propiedad. Por ejemplo:
~~~
var lagarto = {tipo: 'reptil', alimentación: 'carnívoro'}
~~~

Para trabajar con propiedades dentro de la clase se utiliza la palabra reservada **this**, que se refiere al objeto actual. 

Si queremos que una variable no sea accesible más allá de un ámbito, podemos utilizar la palabra clave **let**, de la forma let variable (al igual que con var). También tenemos **const**, con la que podemos crear constantes que solo se puedan leer y no modificar a lo largo del código.

### Notación Array

La notación array es equivalente a la notación punto, pero esta permite utilizar strings arbitrarios como nombres, por ejemplo, en el caso anterior, lagarto['tipo'] equivale a lagarto.tipo.

Ejemplo:

~~~
var x = {tipo: 'reptil', alimentación: 'carnívoro'}

x.tipo;
x['tipo'];

var p = 'tipo';	//inicializa con string 'tipo'

x[p];	//reptil, ya que x tiene una propiedad de nombre 'tipo', que es el string que contiene p

x.p;	//indefinido, ya que el objeto x no tiene ninguna propiedad con nombre p y devuelve undefined.
~~~

### Métodos

Los métodos siguen la misma lógica que las propiedades, la diferencia es que son funciones y se definen como funciones. Llamar a un método es similar a acceder a una propiedad, pero se agrega () al final del nombre del método, posiblemente con argumentos.

En el siguiente ejemplo se define y utiliza el método diHola() para una clase Persona:
~~~
function Persona(primerNombre) {
  this.primerNombre = primerNombre;
}

Persona.prototype.diHola = function() {
  alert ('Hola, Soy ' + this.primerNombre);
};

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

// Llamadas al método diHola de la clase Persona.
persona1.diHola(); //muestra "Hola, Soy Alicia"
persona2.diHola(); //muestra "Hola, Soy Sebastian"
~~~

En JavaScript los métodos son objetos como lo es una función normal y se vinculan a un objeto como lo hace una propiedad, lo que significa que se pueden invocar desde "fuera de su contexto". Por ejemplo:

~~~
function Persona(primerNombre) {
  this.primerNombre = primerNombre;
}

Persona.prototype.diHola = function() {
  alert ('Hola, Soy ' + this.primerNombre);
};

var persona1 = new Persona("Alicia");
var persona2 = new Persona("Sebastian");

var funcionSaludar = persona1.diHola;


persona1.diHola(); //muestra "Hola, Soy Alicia"
persona2.diHola(); //muestra "Hola, Soy Sebastian"

funcionSaludar.call(persona1); //muestra "Hola, Soy Alicia"
~~~

### Propiedades Estáticas

Tenemos la opción de definir los datos y funciones que son parte de la clase, pero no forma parte de ninguna instancia de esa clase. Llamamos a estas propiedades estáticas y métodos estáticos, respectivamente.

Se puede hacer referencia a una propiedad estática sin mencionar una instancia. En cambio, se define en la clase.

~~~
static type(vble){
    ejemplo = new Clase(temp);
}
~~~

### Herencia

La herencia es una manera de crear una clase como una versión especializada de una o más clases (JavaScript sólo permite herencia simple). La clase especializada comúnmente se llama hija o secundaria, y la otra clase se le llama padre o primaria. En JavaScript la herencia se logra mediante la asignación de una instancia de la clase primaria a  la clase secundaria, y luego se hace la especialización.

Una vez que tenemos las clases, podemos hacer que unas hereden de otras con la palabra clave **extends**. Esto permite que una clase sea hija de otra mientras dicha clase hija puede hacer referencia a la clase raíz con la palabra clave **super**. Por ejemplo:

~~~
class Carnivorous extends Animal {
    constructor(name){
        super(name);
    }
}
~~~

### Encapsulación

Es un mecanismo que permite que una clase herede los métodos de la clase principal y que solo tenga que definir las cosas que quiera cambiar.

### Abstracción

Es un mecanismo que permite modelar la parte actual del problema de trabajo. Esto se puede lograr por herencia (especialización) o por composición. JavaScript logra la especialización por herencia y por composición al permitir que las instancias de clases sean los valores de los atributos de otros objetos. Por defecto, la clase Function de JavaScript hereda de la clase de Object.

Por ejemplo: 

~~~
var foo = function() {};
alert( 'foo es una Función: ' + (foo instanceof Function) );
alert( 'foo.prototype es un Objeto: ' + (foo.prototype instanceof Object) );
~~~

### Bucles

Un bucle es una secuencia o bloque de instrucciones que se repite mientras se cumple una condición de permanencia. 
Los tres bucles más comúnes son: while, for y do/while.

#### while

Ejemplo:

~~~
function contar (frase, letra) {
	var i = 0, n = 0;
	while (i < frase.length) {
		if (letra === frase[i++]){ n++; }
	}
	return n;
};

var l='a', f='La casa roja';
console.log('La frase"' + f + '"tiene ' + contar(f,l) + ' veces la letra ' + l);
~~~

Resultado: 

~~~
La frase "La casa roja" tiene 4 veces la letra a.
~~~

#### for

Ejemplo:

~~~
function contar (frase, letra) {
	for (var i=0, n=0, i < frase.length; i++) {
		if (letra === frase[i]){ n++; }
	}
	return n;
};

var l='a', f='La casa roja';
console.log('La frase"' + f + '"tiene ' + contar(f,l) + ' veces la letra ' + l);
~~~

#### do/while

Ejemplo:

~~~
function contar (frase, letra) {
	var i = 0, n = 0;
	do {
		if (letra === frase[i++]){ n++; }
	} while (i < frase.length);
	return n;
};

var l='a', f='La casa roja';
console.log('La frase"' + f + '"tiene ' + contar(f,l) + ' veces la letra ' + l);
~~~

La diferencia de usar un bucle while o for y un bucle do/while es que el bucle do/while siempre se va a ejecutar mínimo una vez; en los anteriores bucles, si la condición de permanencia en el bucle no se cumple, este no se ejecuta.


#### for/in

Itera en todas las propiedades del objeto x, siendo:
~~~
for (i in x) {bloque de instrucciones}
~~~

El nombre de propiedad y su contenido se referencian con "i" y "x[i]". Importante! Dentro de la sentencia for debe usarse la notación array.

Ejemplo:

~~~
var x = {a:7, b:'hi', c:'adios'};

for (var i in x) {
	console.log("Propiedad " + i + " = " + x[i]);
}
~~~

Resultado:
~~~
Propiedad a = 7
Propiedad b = hi
Propiedad c = adios
~~~

### Espacios de nombres y Clousures (cierres)

El **espacio de nombres** de un programa Js es un conjunto de nombres visibles en un lugar el programa. Puede ser global o local. JS no posee mecanismos para aislar los espacios de nombres entre sí, pero las propiedades de objetos permiten ordenar y estructurar espacios de nombres.

Los **cierres** o **clousures** son funciones que encapsulan un conjunto de difiniciones locales que solo son accesibles a través del objeto interfaz retornado por dicha función. Importante! Un cierre no intancia sus variables hasta que no se ejecuta (invoca dicha función). Ejemplo:

~~~
function contador(inic) {
	var _cont = inic; //cont esta con _ para indicar que es una vble local
	
	function contador() { return _cont;};
	funciont incr() { return ++_cont;};

	return {contador: 	contador,
		incr: 		incr
	};
}

var cont_1 = contador{0};
var cont_2 = contador{7};

cont_1.contador();	//0
cont_1.incr();		//1
	
cont_2.contador();	//7
cont_2.incr();		//8
~~~

### JSON

JSON se utiliza para mostrar el formato textual de representación de tipos y objetos JS.

Un objeto JS se transforma a string JSON con **JSON.stringfy(object)**.

Un string JSON se transorfma en el objeto original con **JSON.parse(string_JSON)**.

#### Serialización de datos

La serialización de datos es una transformación reversible de un tipo u objeto (en memoria) en un string equivalente. La serialzación básicamente es un formato de intercambio de datos.

JSON puede serializar objetos, arrays, strings, números finitos, true, false y null. No puede serializar funciones, RegExp, errores y undefined.

Ejemplo: 
~~~
JSON.stringfy(new Date());	//nos daría un string con la fecha del sistema
JSON.stringfy(NaN);		//nos da null
JSON.stringfy(Infinity);	//nos da null
~~~




























