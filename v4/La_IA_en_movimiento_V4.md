# La IA en movimiento_V4

© 2026 Javier Martín-Consuegra. Todos los derechos reservados. Prohibida su reproducción o difusión, total o parcial, sin autorización previa y por escrito del titular.

Versión depurada a partir de la V3 según la revisión del 9 de octubre de 2026. Sin duplicados ni etiquetas de versión. 34 diapositivas. La V3 se conserva intacta.

## Índice

| # | Capítulo | Diapositiva | Cambio respecto a la V3 |
|---|---|---|---|
| 1 | Portada | La IA en movimiento | — (se elimina la portada V1) |
| 2 | Agenda | Cinco preguntas, en este orden | — |
| 3 | 1 · Qué es | «IA» es una caja con otras cajas dentro | Añadido el término en inglés: AI, Machine Learning, Deep Learning, Generative AI |
| 4 | 1 · Qué es | Dos familias: la IA que predice y la que redacta | Aclarado: predictiva = Machine Learning clásico; generativa = Generative AI. Las dos son aprendizaje automático |
| 5 | 1 · Qué es | ¿Por qué ahora, si existe desde 1956? | — |
| 6 | 1 · Qué es | No hay que aprender su idioma: habla el tuyo | Rediseñada: la misma pregunta tres veces, en paralelo con Excel (siempre «60») frente a la IA (cambia la frase, el dato «60 días» resaltado) |
| 7 | 1 · Qué es | Detrás de cada nombre que vais a oír | — (se elimina la V1) |
| 8 | 2 · Mercado | Esto ya ha pasado una vez | — (se elimina la V1) |
| 9 | 2 · Mercado | Dónde está cada cosa que oís nombrar | — (se elimina la V1) |
| 10 | 2 · Mercado | Noticias 1/2 | — |
| 11 | 2 · Mercado | Noticias 2/2 | — |
| 12 | 3 · Cómo funciona | Un camino fijo frente a un abanico de probabilidades | — |
| 13 | 3 · Cómo funciona | Un token no es una palabra | Corregido con el troceado real («¿Cu / ál», «452 / 1») |
| 14 | 3 · Cómo funciona | Calculadora de tokens | — |
| 15 | 3 · Cómo funciona | ¿Por qué escribe «París»? | Movida delante de «Así construye una respuesta» |
| 16 | 3 · Cómo funciona | Así construye una respuesta | — |
| 17 | 3 · Cómo funciona | Una red neuronal de juguete: ¿de qué trata este correo? | **Nueva, interactiva.** Sustituye a las dos de red neuronal |
| 18 | 3 · Cómo funciona | Estudiar la carrera y resolver el caso del día | — (se elimina la V1) |
| 19 | 3 · Cómo funciona | Cómo se le pasa vuestro contrato (RAG) | — |
| 20 | 3 · Cómo funciona | Dónde está el control de realidad | — (se elimina la V1) |
| 21 | 4 · Qué hacer | Cuatro tareas, no cuatrocientas | — |
| 22 | 4 · Qué hacer | No siempre hace falta el modelo caro | — |
| 23 | 4 · Qué hacer | Lo barato es el modelo (calculadora) | — (se elimina la V1) |
| 24 | 4 · Qué hacer | Ella hace el volumen. Tú decides. | — |
| 25 | 4 · Qué hacer | ¿Esto me va a quitar el trabajo? | — (se elimina la V1) |
| 26 | 5 · Reglas | Antes de darle a enviar | — |
| 27 | 5 · Reglas | No es qué escribes: es dónde lo escribes | — |
| 28 | 5 · Reglas | La ley ya está aquí, por fases | — |
| 29 | 5 · Reglas | La misma petición, mal y bien | — |
| 30 | Cierre | La misma tarea, dos veces (con test) | — (se elimina la V1) |
| 31 | Cierre | Ninguna tecnología se libra de esta curva | — (se elimina la V1) |
| 32 | Cierre | Tres ideas para el lunes | **Rediseñada con más impacto** |
| 33 | Fuentes | Fuentes | — |
| 34 | Propiedad | Propiedad y uso | — |

## Red neuronal interactiva (diapositiva 17)

- Caso de negocio: clasificar un correo entrante. Cuatro rasgos de entrada que se activan y desactivan con botones o tocando los nodos (importe, enfado, plazo, factura adjunta), cuatro neuronas ocultas sin nombre y tres salidas (reclamación, consulta de pago, envío de factura) con su probabilidad.
- Al cambiar un rasgo, unos pulsos recorren la red capa a capa y las barras de salida se recalculan. El grosor de cada línea es el peso; verde suma y naranja resta.
- El cálculo es real (suma ponderada, ReLU y softmax), pero **los pesos son de ejemplo**. Está marcado como «ilustrativo» y el pie aclara que un modelo de lenguaje tiene miles de millones de conexiones que se ajustan solas en el entrenamiento.
- Ejemplos de resultado: importe + enfado → reclamación 88%; importe + plazo → consulta de pago 86%; solo factura adjunta → envío de factura 79%.

## Tres ideas para el lunes (diapositiva 32)

- Fondo de red de puntos que se va juntando.
- Las tarjetas entran en 3D con un brillo que las recorre, una tras otra:
  1. Contador hasta 84,7%, que retoma la diapositiva de «París»: ni la palabra más probable llega al 100%.
  2. Tres pasos que se marcan uno a uno: medir hoy, medir con la IA, apuntar qué corregiste.
  3. «Tu firma» que se escribe a mano: la IA no firma.
- Cierre con la frase «La IA hace el volumen. Tú pones el criterio.» en degradado animado.

## Notas

- Las diapositivas V1 de «Esto ya ha pasado una vez» y del mapa de la IA no se mencionaron en la revisión. Se han quitado porque tenían datos ya corregidos en la V2. Siguen en la V3.
- La calculadora de tokens necesita el archivo `tokenizer.js`, publicado junto a la presentación.
