# La IA en movimiento_V2

*Formación interna · Administración · Finanzas · Contact Center · foto a octubre de 2026*

Versión 2 de la presentación animada (31 diapositivas). La versión 1 se conserva sin cambios en `v1/`.

---

## Registro de auditoría: qué cambia respecto a la V1 y por qué

### Correcciones de datos (la V1 contenía información desactualizada o imprecisa)

| Diapositiva V1 | Qué decía | Qué dice la V2 | Motivo |
|---|---|---|---|
| 3 · Quién la hace | OpenAI: GPT‑5.6; Anthropic: Claude Opus 5; Google: Gemini 3.7 | GPT‑6 (Astra, Sol, Luna); Claude Fable 5.1 y Opus 5.5; familia Gemini 3, Gemini 4 anunciado con acceso restringido | Lanzamientos de septiembre de 2026 |
| 3 · Quién la hace | Microsoft Copilot «usa modelos de OpenAI» | Combina modelos de OpenAI y de Anthropic | Claude está en Microsoft 365 Copilot desde 2025‑2026 |
| 3 · Quién la hace | Meta: «modelos de código abierto» | Conocida por Llama (abiertos); desde abril de 2026 su modelo principal, Muse Spark, es cerrado | Cambio de estrategia de Meta |
| 4 · Hitos | «2024: entra en el abismo» | 2024: ha pasado el pico; 2025: Gartner la sitúa en el abismo | Fechas de Gartner |
| 4 · Hitos | «MIT Media Lab» | MIT, proyecto NANDA, con la definición de éxito que usa | Atribución exacta y contexto metodológico |
| 4 · Hitos | «Solo el 29% de las empresas ve ROI» | 29% de las que gastan más de un millón al año (encuesta Writer, 2.400 personas) | La cifra se refiere a ese subgrupo |
| 4 · Hitos | «2026: entra en vigor el AI Act» | Eliminado de ese hito. Diapositiva propia con el calendario real | Entró en vigor el 1 de agosto de 2024; en 2026 se aplican fases |
| 5 · Agentes | 17% / 42% «Gartner 2026» | 42%: Gartner, agosto de 2025. 17%: encuesta de CIO de Gartner 2026, citada por terceros. 40% cancelados: Gartner, junio de 2025 | Fecha y fuente de cada cifra |
| 9 · Red neuronal | «millones de ejemplos corregidos» | Lee texto, intenta adivinar la palabra siguiente, comprueba y ajusta | Así se entrena un modelo de lenguaje |
| 10 · Entrenamiento | «no sabe nada posterior… salvo que se lo deis» | Añade: salvo que la herramienta lo busque (web o documentos); la «memoria» son notas, no aprendizaje | Los asistentes actuales buscan en internet |
| 12 · Alucinación | «No hay ningún paso que compruebe» | Ningún paso garantiza; RAG y citas reducen el riesgo, no lo eliminan | Más preciso |
| 15 · Coste | 10 $ / 2 $ / 0,05 $, «200 veces», 1,20 $ al mes | 10 $ / 2–4 $ / 0,25 $, «40 veces»; calculadora que incluye tokens de salida | Precios de octubre de 2026; la V1 ignoraba la salida, que cuesta unas 5 veces más |
| 17 · El puesto | Porcentajes sin marcar como ejemplo | Marcados «ilustrativo» + tres datos reales (WEF 2025, Anthropic 2026) | Separar ejemplo de dato |
| 22 · Panorama | Robots humanoides en la rampa; vehículos autónomos en el pico | Humanoides en el pico; coche autónomo en la rampa (en ciudades concretas) | Coherencia con el estado actual |

### Contenido nuevo

1. **Agenda** en cinco preguntas, con salto directo a cada capítulo.
2. **Capítulo 1 · Qué es**, que aterriza el concepto antes de entrar en mecanismos:
   - «IA» como cajas dentro de cajas: IA › aprendizaje automático › aprendizaje profundo › IA generativa, con ejemplos que ya usáis.
   - Las dos familias: IA que predice (un número o una etiqueta) e IA que genera (contenido nuevo que hay que leer).
   - Por qué ahora: línea de tiempo 1956‑2026 y los tres ingredientes (datos, cálculo, Transformer).
3. **Noticias de los últimos meses** (mayo‑octubre de 2026), en dos diapositivas, cada una con su fuente y «por qué importa».
4. **El AI Act por fases**, con el aplazamiento de 2026 y el proyecto de ley español.
5. **Tres ideas para el lunes** y **Fuentes**.

### Más dinamismo

- Calculadora de coste con deslizador (correos al mes → coste por gama de modelo).
- Test interactivo de la tarea del encargo semanal (tres condiciones → veredicto).
- Contadores animados, círculos concéntricos que aparecen por capas, línea de tiempo que se recorre, calendario legal que se ilumina por fases.
- Barra inferior con el capítulo actual y botones de anterior y siguiente.

---

## Estructura de la V2

| # | Capítulo | Diapositiva |
|---|---|---|
| 1 | Portada | La IA en movimiento |
| 2 | Agenda | Cinco preguntas, en este orden |
| 3 | 1 · Qué es | «IA» es una caja con otras cajas dentro |
| 4 | 1 · Qué es | Dos familias: la que predice y la que redacta |
| 5 | 1 · Qué es | ¿Por qué ahora, si existe desde 1956? |
| 6 | 1 · Qué es | No hay que aprender su idioma: habla el tuyo |
| 7 | 1 · Qué es | Detrás de cada nombre que vais a oír |
| 8 | 2 · Mercado | Esto ya ha pasado una vez |
| 9 | 2 · Mercado | Dónde está cada cosa que oís nombrar |
| 10 | 2 · Mercado | Noticias 1/2: modelos y agentes |
| 11 | 2 · Mercado | Noticias 2/2: mercado, regulación y trabajo |
| 12 | 3 · Cómo funciona | Un camino fijo frente a un abanico de probabilidades |
| 13 | 3 · Cómo funciona | Un token no es una palabra |
| 14 | 3 · Cómo funciona | Así construye una respuesta |
| 15 | 3 · Cómo funciona | La señal atraviesa capas |
| 16 | 3 · Cómo funciona | Estudiar la carrera y resolver el caso del día |
| 17 | 3 · Cómo funciona | Cómo se le pasa vuestro contrato (RAG) |
| 18 | 3 · Cómo funciona | Dónde está el control de realidad |
| 19 | 4 · Qué hacer | Cuatro tareas, no cuatrocientas |
| 20 | 4 · Qué hacer | No siempre hace falta el modelo caro |
| 21 | 4 · Qué hacer | Lo barato es el modelo (calculadora) |
| 22 | 4 · Qué hacer | Ella hace el volumen. Tú decides. |
| 23 | 4 · Qué hacer | ¿Esto me va a quitar el trabajo? |
| 24 | 5 · Reglas | Antes de darle a enviar |
| 25 | 5 · Reglas | No es qué escribes: es dónde lo escribes |
| 26 | 5 · Reglas | La ley ya está aquí, por fases |
| 27 | 5 · Reglas | La misma petición, mal y bien |
| 28 | Cierre | La misma tarea, dos veces (test interactivo) |
| 29 | Cierre | Ninguna tecnología se libra de esta curva |
| 30 | Cierre | Tres ideas para el lunes |
| 31 | Fuentes | Fuentes |

---

## Noticias incluidas (mayo‑octubre de 2026)

| Fecha | Noticia | Por qué importa | Fuentes |
|---|---|---|---|
| 26 may | El Gobierno lleva al Congreso el proyecto de ley orgánica de IA (AESIA supervisora; multas hasta 35 M€ o 7%) | Aún no es ley; el reglamento europeo ya obliga | Economist & Jurist · El Notariado |
| 24 jul | Reglamento (UE) 2026/1744 aplaza el alto riesgo a 2 dic 2027 / 2 ago 2028 | Se mueve el calendario, no la obligación | Orrick · Gibson Dunn |
| 2 ago | Se aplican las obligaciones de transparencia (art. 50) | Un chatbot de atención al cliente tiene que decir que lo es | Cooley · Morgan Lewis |
| 28 ago | Gartner Hype Cycle for AI 2026: control y coste antes que escalar | Medir y controlar pasa por delante de probar | Gartner |
| 1 y 22 sep | Anthropic: Claude Fable 5.1 y Opus 5.5 (‑40% de coste de uso, según la empresa) | La misma capacidad cuesta menos | AWS · Inc42 |
| 3 sep | OpenAI: GPT‑6 Astra, acceso inicial restringido por riesgo de ciberseguridad | Los modelos punteros salen con frenos | TechCrunch · CNBC |
| 29 sep | OpenAI DevDay: agentes que trabajan en segundo plano, con permisos | El debate pasa a qué se le deja hacer | TechCrunch · InfoQ |
| 30 sep | Google: Gemini 4 Argon, acceso limitado | Tercer laboratorio que lanza con acceso restringido | 9to5Google · The Stack |
| 30 sep | California, SB 947: ningún despido o sanción basado solo en IA (desde jul. 2027) | La persona que firma pasa a ser obligación legal | TechRadar · HR Dive |

**Descartadas por no poder contrastarlas en dos fuentes fiables:** Mistral Large 4, cancelación de GPT‑6.1 Astra, cifras concretas de la salida a bolsa de Anthropic.

---

## Límites de esta verificación

- La búsqueda se hizo el 8 de octubre de 2026. No se pudo abrir directamente la mayoría de las páginas originales (bloqueadas desde el entorno de trabajo): las cifras se han contrastado comparando varias fuentes independientes en los resultados de búsqueda.
- Los precios de la gama baja varían mucho entre agregadores; se usa Gemini 3.1 Flash‑Lite (0,25 $ entrada / 1,50 $ salida) como referencia prudente.
- El 17% de empresas con agentes desplegados solo aparece en fuentes secundarias que citan a Gartner. Se indica así en la diapositiva.
- Las comparativas de rendimiento y ahorro de OpenAI, Anthropic y Google son afirmaciones de los fabricantes.
- Revisar precios y versiones antes de cada sesión: cambian cada pocas semanas.
