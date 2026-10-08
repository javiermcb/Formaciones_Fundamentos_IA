# La IA en movimiento_V3 (versión de trabajo)

Suma de la V1 y la V2 para decidir diapositiva a diapositiva. Cada diapositiva lleva una etiqueta arriba a la derecha:

- **V1**: versión original. Va justo antes de su equivalente en la V2.
- **V2**: versión revisada de esa misma diapositiva.
- **V1 = V2**: igual en las dos, o con un cambio menor que indica la etiqueta.
- **Nueva en V2** / **Nueva en V3**: no existía antes.

Después de decidir, la versión final no llevará etiquetas ni duplicados.

## Índice (44 diapositivas)

| # | Etiqueta | Diapositiva |
|---|---|---|
| 1 | V1 | Portada («Nueve mecanismos…») |
| 2 | V2 | Portada |
| 3 | Nueva en V2 | Agenda |
| 4 | Nueva en V2 | «IA» es una caja con otras cajas dentro |
| 5 | Nueva en V2 | Dos familias: la que predice y la que redacta |
| 6 | Nueva en V2 | ¿Por qué ahora, si existe desde 1956? |
| 7 | V1 | Qué es exactamente esto de la IA |
| 8 | V2 | No hay que aprender su idioma: habla el tuyo |
| 9 | V1 | Quién la hace (datos de la V1, desactualizados) |
| 10 | V2 | Quién la hace (octubre de 2026) |
| 11 | V1 | Esto ya ha pasado una vez |
| 12 | V2 | Esto ya ha pasado una vez (hitos corregidos) |
| 13 | V1 | Dónde está cada cosa que oís nombrar |
| 14 | V2 | Dónde está cada cosa que oís nombrar (fuentes por cifra) |
| 15 | Nueva en V2 | Noticias 1/2 |
| 16 | Nueva en V2 | Noticias 2/2 |
| 17 | V1 = V2 | Un camino fijo frente a un abanico de probabilidades |
| 18 | V1 = V2 | Un token no es una palabra |
| 19 | **Nueva en V3** | **Escribe una frase y mira cómo la trocea (calculadora de tokens)** |
| 20 | V1 = V2 | Así construye una respuesta |
| 21 | V1 | Red neuronal |
| 22 | V2 | Red neuronal (texto corregido) |
| 23 | V1 | Entrenamiento e inferencia |
| 24 | V2 | Entrenamiento e inferencia (con búsqueda y memoria) |
| 25 | V1 = V2 | RAG |
| 26 | V1 | Alucinación |
| 27 | V2 | Alucinación (matizada) |
| 28 | V1 = V2 | Cuatro tareas, no cuatrocientas |
| 29 | V1 = V2 | No siempre hace falta el modelo caro |
| 30 | V1 | Lo barato es el modelo (ejemplos fijos, precios antiguos) |
| 31 | V2 | Lo barato es el modelo (calculadora) |
| 32 | V1 = V2 | Ella hace el volumen. Tú decides. |
| 33 | V1 | ¿Esto me va a quitar el trabajo? |
| 34 | V2 | ¿Esto me va a quitar el trabajo? (con datos reales) |
| 35 | V1 = V2 | Antes de darle a enviar |
| 36 | V1 = V2 | No es qué escribes: es dónde lo escribes |
| 37 | Nueva en V2 | La ley ya está aquí, por fases |
| 38 | V1 = V2 | La misma petición, mal y bien |
| 39 | V1 | La misma tarea, dos veces |
| 40 | V2 | La misma tarea, dos veces (con test) |
| 41 | V1 | Ninguna tecnología se libra de esta curva |
| 42 | V2 | Ninguna tecnología se libra de esta curva (posiciones corregidas) |
| 43 | Nueva en V2 | Tres ideas para el lunes |
| 44 | Nueva en V2 | Fuentes |

## Calculadora de tokens (diapositiva 19)

- Escribes cualquier frase y ves los trozos (tokens) en colores alternos, el número de palabras, de tokens y de tokens por palabra.
- Calcula en euros lo que cuesta que un modelo **lea** esa frase, para tres gamas de precio (10 $, 2 $ y 0,25 $ por millón de tokens de entrada), enviada 1 vez, 1.000 veces o 1 millón de veces.
- **El troceado es real**, no simulado: usa el tokenizador público de OpenAI `o200k_base` (el de GPT‑4o), incluido en el archivo `tokenizer.js`. Claude y Gemini usan tokenizadores propios no públicos, así que su recuento puede variar algo.
- Tipo de cambio por defecto: 1 $ = 0,87 € (referencia de mediados de septiembre de 2026; no encontré un dato oficial de octubre). Se puede cambiar en la propia diapositiva.

## Aviso sobre la diapositiva 18 («Un token no es una palabra»)

El troceado que muestra es inventado («fact / ura», «45 / 21»). El troceador real corta la misma frase así: `¿Cu · ál · es · el · estado · de · la · factura · (espacio) · 452 · 1 · ?`. Da también 12 tokens, pero «factura» no se parte. Conviene corregirla con el troceado real.
