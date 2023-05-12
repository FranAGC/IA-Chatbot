var intents = [
  {
    "tag": "fallback",
    "patterns": [],
    "title": "FallBack response",
    "responses": ['Lo siento, no he entendido tu pregunta.', 'Perdón, aun no soy capaz de entender lo que solicitas.']
  },
  {
    "tag": "saludar",
    "patterns": ["hola", "¿Cómo estás?", "Hay alguien ahi", "Toc toc", "Buenos dias"],
    "title": "Saludo",
    "responses": ["Hola, gracias por visitarnos", "Me alegra verte de nuevo, en que puedo ayudarte", "Hola, En que puedo ayudarte"],
    "context_set": ""
  },
  {
    "tag": "adios",
    "patterns": ["Adios", "Nos vemos", "Hasta luego"],
    "title": "Despedida",
    "responses": ["Adios, que te vaya bien.", "Que tengas un buen día.", "Adíos, espero volver a verte pronto."]
  },
  {
    "tag": "gracias",
    "patterns": ["Gracias", "Muchas gracias", "Gracias por la ayuda"],
    "title": "Gracias",
    "responses": ["Fue un gusto ayudarte", "De nada", "Es un placer poder ayudarte"]
  },
  {
    "tag": "horario",
    "patterns": ["Horario de atención", "A que hora abren", "Que días abren"],
    "title": "Horario",
    "responses": ["Abrimos todos los días de 9am a 9pm", "Abrimos a las 9 de la mañana"]
  },
  {
    "tag": "computadoras",
    "patterns": ["Que marca de computadoras tienen", "Que tipo de computadoras tienen", "Que tipo de accesorios tienen"],
    "title": "Computadoras disponibles",
    "responses": ["Tenemos laptop, dell, asus, hp y muchas mas", "Tenemos computadoras de: escritorio, laptops, notebooks y todo en uno", "Tenemos teclados, mouse, discos duros, audifomos y mucho mas"]
  },
  {
    "tag": "pagos",
    "patterns": ["Que metodos de pago aceptan", "Aceptan tarjeta de credito", "Solo aceptan efectivo"],
    "title": "Metodos de pago",
    "responses": ["Aceptamos efectivo y la mayoria de tarjetas de credito y debito", "Si, aceptamos Visa, Mastercard y Amex", "Ademas de efectivo aceptamos tarjetas de credito y debito"]
  },
  {
    "tag": "abierto",
    "patterns": ["Abren el dia de hoy", "A que hora abren hoy", "Horario de atencion de hoy"],
    "title": "Dias abierto",
    "responses": ["Abrimos todos los días de 9am a 9pm", "El día de hoy está abierto, de 9am a 9pm"]
  },
  {
    "tag": "envio",
    "patterns": ["Hacen envios a domicilio", "Puedo realizar un pedido a domicilio", "Cuentan con envio a domicilio"],
    "title": "Envios domicilo",
    "responses": ["¡Contamos con envíos a domicilio, haz tu pedido!", "Realizamos envios a domicilio a todo el país"]
  },
  {
    "tag": "direccion",
    "patterns": ["Donde estan ubicados", "Cual es su dirección", "Donde puedo encontrarlos"],
    "title": "Direccion",
    "responses": ["Puedes encontrarnos en 3-2 zona 1, San Jose Pinula", "Nuestra dirección es: 3-2 zona 1, San Jose Pinula"]
    
  },
  {
    "tag": "nombre",
    "patterns": ["como te llamas", "quien eres"],
    "title": "Nombre del bot",
    "responses": ["mi nombre es Biti, estoy para ayudarte en lo que necesites", "Soy Biti el asistente virtual de BitStore"]
    
  }
];

module.exports = intents;