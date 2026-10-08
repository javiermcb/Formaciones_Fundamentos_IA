# La IA en movimiento

*Formación interna · Administración · Finanzas · Contact Center*

Contenido completo de la presentación animada (22 diapositivas). Las capturas de cada una están numeradas con el mismo orden (`01-portada.png` … `22-panorama-2026.png`).

---

## 1. Portada

*Captura: `01-portada.png`*

**La IA en movimiento**

Nueve mecanismos que cuesta explicar con palabras y se entienden de un vistazo cuando se ven funcionar.

Avanza con las flechas, la barra espaciadora o haciendo clic. **R** repite la animación, **F** pantalla completa.

---

## 2. Qué es exactamente esto de la IA

*Captura: `02-que-es-la-ia.png` · Empecemos por el principio*

| Cómo le pides algo a Excel | Cómo le pides algo a una IA |
|---|---|
| `=BUSCARV(A2;Proveedores!A:D;4;FALSO)` | «¿Qué plazo de pago acordamos con este proveedor?» |
| Tienes que aprender su idioma. Un punto y coma de más y devuelve error. | Le hablas como a un compañero. Puedes preguntarlo de quince formas distintas y todas funcionan. Eso es **lenguaje natural**, y a esa instrucción se le llama **prompt**. |

**Y si haces la misma pregunta tres veces**

1. 1.ª vez: «El plazo acordado es de 60 días desde la fecha de factura.»
2. 2.ª vez: «Según el contrato, se acordaron 60 días a contar desde la emisión.»
3. 3.ª vez: «60 días desde factura, según la cláusula 7.2.»

> **No es determinista**: no responde igual dos veces. Cambia **la forma**, no debería cambiar **el fondo** — y cuando cambia el fondo, eso tiene nombre y lo veremos dentro de un rato.

---

## 3. Detrás de cada nombre que vais a oír

*Captura: `03-quien-la-hace.png` · Quién la hace · foto de 2026*

| Empresa | Lo que tú abres | Por qué te suena |
|---|---|---|
| OpenAI | ChatGPT | El que popularizó todo esto. Modelo actual: GPT‑5.6 |
| Anthropic | Claude | Foco declarado en seguridad y control. Modelo: Claude Opus 5 |
| Google | Gemini | Dentro de Gmail, Docs y Sheets. Modelo: Gemini 3.7 |
| Microsoft | Copilot | Dentro de Office. Por debajo usa modelos de OpenAI |
| Meta | Meta AI | Modelos de código abierto: una empresa puede alojarlos en sus servidores |
| Mistral | Le Chat | Francesa. Relevante en Europa por dónde viven los datos |

> La **empresa**, el **producto** y el **modelo** suelen llamarse distinto — de ahí buena parte de la confusión. Los números de versión cambian cada pocas semanas; los nombres de la columna del medio, no.

---

## 4. Esto ya ha pasado una vez

*Captura: `04-viaje-ia-generativa.png` · Contexto de mercado · el viaje de la IA generativa*

Curva del ciclo de expectativas de Gartner (Lanzamiento → Pico → Abismo → Rampa → Meseta) con cuatro puntos sobre ella:

| Año | Punto en la curva |
|---|---|
| 2023 | el boom |
| 2024 | se desinfla |
| 2025 | el abismo |
| 2026 | hoy |

Texto en la gráfica: «La IA generativa ya ha recorrido esta curva entera».

**Hitos de cada fase**

- **2023** · ChatGPT llega a 100 millones de usuarios en dos meses; en marzo, GPT‑4
- **2024** · Gartner (ago.): la IA generativa entra en el abismo y augura un 30% de proyectos abandonados
- **2025** · Informe del MIT: el 95% de los pilotos corporativos no da retorno medible
- **2026** · Solo el 29% de las empresas dice ver un ROI real; entra en vigor el AI Act de la UE

> Fuentes: **Gartner**, Hype Cycle for Generative AI (ediciones 2024 y 2025); **MIT Media Lab**, State of AI in Business (2025); **Writer**, Enterprise AI Adoption Report (2026). Los años y las cifras están verificados; el resto es lectura de esos informes.

---

## 5. Dónde está cada cosa que oís nombrar

*Captura: `05-mapa-de-la-ia.png` · Contexto de mercado · el mapa de la IA en 2026*

Un **agente** es una IA que encadena varios pasos sola —consultar, decidir, ejecutar— en vez de responder a una pregunta y pararse.

| Fase | En la curva | Más tecnologías en esta fase |
|---|---|---|
| Lanzamiento | **IA general (AGI)** — todavía no existe | computación neuromórfica · IA neurosimbólica |
| Pico | **Agentes de IA** — pocos lo tienen (Gartner 2026). También aquí: IA multimodal · gobernanza de la IA | AI TRiSM · datos listos para IA |
| Abismo | **Chatbots sin acceso a tus datos** — prometieron de más | pilotos sin caso de uso claro |
| Rampa | **IA generativa** — saliendo hacia usos reales (Gartner 2026). Con ella: RAG · modelos pequeños | ingeniería de prompts · código asistido por IA |
| Meseta | **Spam · dictado · recomendaciones** — IA que ya usáis sin llamarla así | reconocimiento facial · traducción automática |

Sobre los agentes de IA (flecha del pico al abismo):

- 17% lo tiene ya desplegado
- 42% lo prevé en 12 meses
- +40% de esos proyectos se cancelará antes de 2027

Texto en la gráfica: «Los agentes están hoy donde estaba la IA generativa en 2023.»

> Los **agentes de IA**, la **IA multimodal**, la **gobernanza de la IA** y la posición de la **IA generativa** proceden de los informes de Gartner de 2025 y 2026. El resto — incluidos los chips de arriba — son ubicaciones orientativas para situar el vocabulario, no posiciones oficiales.

---

## 6. Un camino fijo frente a un abanico de probabilidades

*Captura: `06-regla-vs-patron.png` · De la regla al patrón*

| Software tradicional | IA generativa |
|---|---|
| Factura → ¿Campo vacío? → Rechaza | Factura → evalúa varias salidas: Pedir aclaración · 14% / Marcar revisión · 23% / **Rechazar · 63%** |
| Siempre la misma ruta. Cambia el formato y se rompe. | Evalúa varias salidas y se queda con la más probable. |

> El software tradicional ejecuta **la regla** que alguien escribió. La IA **puntúa alternativas y elige** — por eso tolera formatos nuevos, y por eso nunca es del todo predecible.

---

## 7. Un token no es una palabra

*Captura: `07-token-que-es.png` · La unidad de medida*

La frase «¿Cuál es el estado de la factura 4521?» se trocea así:

`¿` · `Cuál` · ` es` · ` el` · ` estado` · ` de` · ` la` · ` fact` · `ura` · ` 45` · `21` · `?`

**8 palabras → 12 tokens.** El modelo no lee palabras: lee trozos. Y factura por trozos.

- **Parte las palabras largas:** «fact / ura»
- **Parte los números:** «45 / 21»
- **El espacio va pegado** al trozo siguiente

> Troceado aproximado: cada modelo tiene el suyo. La regla que se suele dar —**un token ≈ tres cuartos de palabra**— está medida en inglés; en español **salen más tokens** para decir lo mismo, porque estos sistemas se entrenaron sobre todo con textos en inglés.

---

## 8. Así construye una respuesta

*Captura: `08-token-a-token.png` · El mecanismo · palabra a palabra*

Pregunta: «¿Cuál es el estado de la factura 4521?»

Respuesta construida palabra a palabra: **La factura 4521 está pendiente de pago.** ← *ningún paso lo comprobó*

Candidatas que calcula en cada paso (probabilidades ilustrativas):

| Paso | Elegida | Alternativas |
|---|---|---|
| 1 | **La** · 62% | El 18% · Según 12% · Esta 8% |
| 2 | **factura** · 71% | referencia 11% · cantidad 10% · fecha 8% |
| 3 | **4521** · 88% | 4512 6% · 45210 4% · citada 2% |
| 4 | **está** · 64% | sigue 17% · fue 11% · consta 8% |
| 5 | **pendiente** · 57% | pagada 24% · vencida 12% · anulada 7% |
| 6 | **de pago.** · 76% | de revisión. 13% · de abono. 7% · desde ayer. 4% |

> Probabilidades ilustrativas. Lo real es el mecanismo: en ningún momento consulta si la factura 4521 existe — solo **encadena la palabra más probable**, una y otra vez.

---

## 9. La señal atraviesa capas, y cada capa extrae un matiz

*Captura: `09-red-neuronal.png` · Red neuronal*

Red de cuatro capas (4 · 6 · 6 · 3 nodos). La señal se propaga de izquierda a derecha iluminando cada capa:

**Entradas** («el correo, el PDF») → **Capas ocultas** → **Salida** («la respuesta»)

> Nadie decide a mano qué peso tiene cada conexión: **se ajustan solos durante el entrenamiento**, a base de millones de ejemplos corregidos.

---

## 10. Estudiar la carrera y resolver el caso del día

*Captura: `10-entrenamiento-vs-inferencia.png` · Ciclo de vida*

| ENTRENAMIENTO · UNA VEZ | INFERENCIA · CADA DÍA |
|---|---|
| Una rejilla de pesos que se ajusta varias veces… y queda fija. | Pregunta → **Pesos congelados** → respuesta |
| los pesos se ajustan… y quedan fijos | no aprende nada nuevo al responder |

> Al terminar el entrenamiento **los pesos quedan congelados**. Por eso el modelo no sabe nada posterior a esa fecha, ni nada de vuestra empresa, salvo que se lo deis vosotros en cada pregunta.

---

## 11. Cómo se le pasa vuestro contrato

*Captura: `11-rag.png` · RAG*

A esto se le llama **RAG**: conectar la IA a vuestros documentos para que responda con ellos y no con lo que recuerde de internet.

Flujo: **El contrato** se divide en fragmentos → cada fragmento se coloca en un **mapa de significados** → **tu pregunta** entra en ese mapa y se recuperan los fragmentos más cercanos → pasan al **Modelo** → respuesta: «60 días desde la fecha de factura» (*cláusula 7.2, literal*).

> La diferencia entre una respuesta fiable y una inventada está en **un solo paso**: si **los fragmentos reales** llegan o no llegan al modelo.

---

## 12. Dónde está el control de realidad

*Captura: `12-alucinacion.png` · Alucinación*

Cinco pasos del cálculo de una respuesta, y ninguno verifica los hechos:

**Trocea** → **Traduce** → **Cruza** → **Calcula** → **Elige** *(cada uno: «no verifica»)*

Sexto paso: **Tú revisas** — único control.

> **No hay ningún paso interno** que compruebe si lo que ha escrito es cierto. El único que existe está al final, y es **una persona**.

---

## 13. Cuatro tareas, no cuatrocientas

*Captura: `13-matriz-automatizacion.png` · Matriz de automatización*

| Tarea | Lo que entra | Lo que sale | Modelo |
|---|---|---|---|
| Extracción | 200 facturas en PDF | una tabla con ocho columnas | basta un SLM |
| Síntesis | un hilo de 40 correos | los cuatro puntos que importan | pide un LLM |
| Búsqueda | 300 páginas de normativa | «60 días, cláusula 7.2» | SLM + RAG |
| Redacción | la queja de un cliente | un borrador listo para revisar | pide un LLM |

> Si una tarea vuestra no se parece a ninguna de **estas cuatro**, probablemente todavía no es un buen candidato para delegarla.

---

## 14. No siempre hace falta el modelo caro

*Captura: `14-llm-vs-slm.png` · LLM frente a SLM*

| LLM | SLM |
|---|---|
| Cientos de miles de millones de parámetros | De millones a unos pocos miles de millones |
| Redactar, razonar sobre casos ambiguos | Clasificar, extraer, detectar intención |
| Coste por consulta: alto | Coste por consulta: casi cero |

> Clasificar un ticket no necesita el mismo motor que redactar una respuesta delicada. Usar el grande para todo es una de las vías rápidas a que **el coste se dispare**.

---

## 15. Lo barato es el modelo

*Captura: `15-coste-tokens.png` · Cuánto vale · precios verificados a septiembre de 2026*

| Precio por millón de tokens de entrada | Gama | Modelos |
|---|---|---|
| **10 $** | Gama alta | GPT‑6 Astra · Claude Fable 5.1 |
| **2 $** | Gama media, que resuelve casi todo | Claude Sonnet 5 · GPT‑5.6 Terra · Gemini 3.1 Pro |
| **0,05 $** | Modelo pequeño: **200 veces más barato** que el de arriba | GPT‑5 nano |

| Ejemplo | Coste |
|---|---|
| Resumir un hilo de 40 correos (≈ 12.000 tokens de entrada) | 0,024 $ |
| Los 2.000 correos que entran al mes en el buzón de reclamaciones | ≈ 1,20 $ |
| Lo que cuesta de verdad: la licencia por persona y el tiempo de integrarlo | ahí sí hay factura |

> Los precios por millón están verificados; los recuentos de tokens de los ejemplos son estimaciones. La conclusión no cambia: **el consumo del modelo es calderilla**, y por eso usar el modelo caro para clasificar tickets es tirar dinero sin ganar nada.

---

## 16. Ella hace el volumen. Tú decides.

*Captura: `16-copiloto.png` · El principio del copiloto*

Barra dividida en dos partes:

- **La máquina procesa** (≈ 78%): leer, extraer, resumir, redactar el borrador
- **La persona responde** (≈ 22%): verificar y decidir

> El «80 / 20» es una forma de entender el reparto, no una medición: la proporción real depende de la tarea. Lo que no cambia es **cuál de las dos partes firma el resultado**.

---

## 17. ¿Esto me va a quitar el trabajo?

*Captura: `17-el-puesto.png` · La pregunta que nadie hace en voz alta*

Peso de cada bloque dentro del puesto (valores de la animación):

| Bloque | Tu puesto hoy | Tu puesto con IA |
|---|---|---|
| Procesar volumen: leer, teclear, clasificar | 46% | 16% |
| Buscar información | 24% | 12% |
| Decidir y valorar | 18% | 38% |
| Responder de ello ante otros | 12% | 34% |

El puesto no se vacía: cambia de forma. Encoge la parte que se puede describir con instrucciones y crece la que no.

> La respuesta honesta no es «no pasa nada». Es que **la parte mecánica** de cualquier puesto se va a encoger, y eso deja más sitio para la parte que la máquina no hace: **conocer el negocio, decidir con criterio y dar la cara**. Quien sepa usarla tendrá ventaja sobre quien no, y esa es la razón real de esta formación.

---

## 18. Antes de darle a enviar

*Captura: `18-gobernanza-revision.png` · Gobernanza en la práctica*

El borrador de la IA pasa por cuatro comprobaciones humanas antes de enviarse:

1. Cifras, fechas e importes
2. Nombres y referencias
3. Compromisos que no podemos cumplir
4. El tono con el que hablamos

Y la decisión de negocio la tomas tú, no el borrador: **sale con tu nombre**.

> **Cuatro comprobaciones, treinta segundos.** Es el precio de poder firmar lo que envías.

---

## 19. No es qué escribes: es dónde lo escribes

*Captura: `19-gobernanza-datos.png` · Confidencialidad*

Los datos de un cliente, la misma pregunta, dos destinos:

| Destino | Qué pasa |
|---|---|
| ✕ Un chat público, cuenta personal | Fuera del control de la empresa |
| ✓ La herramienta corporativa | Cubierta por el contrato que firmó la empresa |

> El mismo dato, la misma pregunta, **dos destinos distintos**. Ante la duda sobre cuál es la herramienta aprobada, **preguntad antes de pegar**.

---

## 20. La misma petición, mal y bien

*Captura: `20-prompt-bueno.png` · Lo único que necesitas saber teclear*

**Lo que sale solo:** «Resume esto.»

**Lo que deberías escribir:** «Resume este hilo de correos en cinco puntos. Dime qué pide el cliente, qué se le prometió y en qué fecha. Si algo de eso no está en el hilo, dilo en vez de deducirlo.»

- **Qué quieres:** el formato exacto
- **Qué debe buscar:** los datos concretos
- **Qué hacer si no lo encuentra:** decirlo, no deducirlo

> La tercera es la que te ahorra disgustos: si no le dices qué hacer cuando le falta un dato, **rellenará el hueco con lo más probable** — que es exactamente como se produce una alucinación.

---

## 21. La misma tarea, dos veces

*Captura: `21-encargo-semanal.png` · Tu encargo para esta semana*

**Primero: elige una tarea, y que cumpla las tres condiciones.** La repites cada semana · te lleva más de quince minutos · si sale mal, no pasa nada grave.

- **Administración:** clasificar las facturas del buzón
- **Finanzas:** resumir el informe semanal
- **Contact Center:** responder a una reclamación tipo

| LUN | MAR | MIÉ | JUE | VIE |
|---|---|---|---|---|
| Hazla como siempre. Cronométrala. | | | Hazla con el asistente. Cronométrala. | |

Y apunta una tercera cosa: **qué has tenido que corregirle**. El tiempo que ahorras es lo que se ve; lo que has tenido que corregir es lo que de verdad te dice si puedes confiar en ella y para qué.

---

## 22. Ninguna tecnología se libra de esta curva

*Captura: `22-panorama-2026.png` · La foto completa · 2026*

Texto en la gráfica: «Todas recorren el mismo camino. Solo cambia por dónde van hoy.»

| Fase | En la curva | Más tecnologías en esta fase |
|---|---|---|
| Lanzamiento | **Computación cuántica** — aún asomando | biotecnología CRISPR · energía de fusión · computación neuromórfica |
| Pico | **Agentes de IA** — pocos lo tienen aún (Gartner 2026) | vehículos autónomos · gemelos digitales |
| Abismo | **Metaverso · blockchain** — prometieron de más | NFTs · Web3 · realidad virtual de consumo |
| Rampa | **IA generativa** — saliendo hacia usos reales (Gartner 2026) | robots humanoides de trabajo · impresión 3D industrial |
| Meseta | **Nube · GPS · e-commerce** — nadie las discute ya | redes sociales · streaming · pagos por móvil |

> Las dos posiciones de IA (**agentes de IA** y **IA generativa**) proceden de los informes de Gartner de 2026. El resto —incluidos los chips de arriba— son ejemplos ilustrativos del recorrido típico de una tecnología, no posiciones oficiales.

---

## Fuentes consultadas para los hitos (diapositivas 4 y 5)

- [Generative AI Is Sliding Into the "Trough of Disillusionment" — infoDOCKET (Gartner 2024)](https://www.infodocket.com/2024/08/22/generative-ai-is-sliding-into-the-trough-of-disillusionment-according-to-2024-gartner-hype-cycle-report/)
- [Gartner Hype Cycle Identifies Top AI Innovations in 2025](https://www.gartner.com/en/newsroom/press-releases/2025-08-05-gartner-hype-cycle-identifies-top-ai-innovations-in-2025)
- [2026 Hype Cycle for Agentic AI — Gartner](https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai)
- [Why 95% of AI Pilots Fail — Forbes (informe del MIT)](https://www.forbes.com/sites/andreahill/2025/08/21/why-95-of-ai-pilots-fail-and-what-business-leaders-should-do-instead/)
- [Enterprise AI adoption in 2026 — Writer](https://writer.com/blog/enterprise-ai-adoption-2026/)
- [EU AI Act: Transparency Obligations Take Effect 2 August 2026 — Cooley](https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026)
- [2023 in artificial intelligence — Wikipedia](https://en.wikipedia.org/wiki/2023_in_artificial_intelligence)
