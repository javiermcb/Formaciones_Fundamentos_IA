# Formación 2 · Del dato al informe (Warehouse en Fabric)

Audiencia: equipo de Innovation & Analytics, sin nivel de SQL. Duración: 1 hora. Demo en vivo en el entorno real del autor.

## Reglas de trabajo (las mismas que en la formación 1)
- Nunca se sobrescribe una versión: cada cambio importante crea `vN+1` en su carpeta.
- No se inventa: los datos de Fabric llevan fuente (Microsoft Learn); lo que no se pudo contrastar no se incluye.
- Las tablas, columnas y cifras de las simulaciones son **de ejemplo** (CRM, ERP, ATS). Se sustituyen en el bloque `DATOS DE EJEMPLO` del script.

## V1 (25 diapositivas, un solo HTML)
| Bloque | Diapositivas |
|---|---|
| Gancho | 1 Portada · 2 Palabras antes |
| Qué es | 3 Ruta · 4 Viaje del dato · 5 Aplicación vs Warehouse · 6 Dónde encaja en Fabric |
| Nuestras tablas | 7 Explorador (tres aplicaciones, un Warehouse) |
| Consultas | 8 SQL, el lenguaje del Warehouse · 9 Elegir tablas y campos · 10 Agrupar · 11 Tipos de JOIN (interactiva) · 12 JOIN que duplica |
| Vistas | 13 Crear una vista |
| Modelo semántico | 14 Qué es (4 conceptos) · 15 Relaciones · 16 Medidas · 17 Modos de almacenamiento · 18 Crear el modelo |
| Power BI | 19 Informe simulado · 20 Guion de la demo |
| Cierre | 21 Reglas · 22 Palabras después · 23 Tres ideas · 24 Fuentes · 25 Propiedad |

Cambios de diseño: las diapositivas 4, 5, 6, 14 y 17 usan lista a la izquierda y definición, esquema y símil a la derecha. Se quitaron la antigua 7 (tarjetas CRM/ERP/ATS, redundante con el explorador), el test «¿tabla, consulta, vista o medida?» y el encargo para la semana.

## Pendiente de decisión del autor
- Diapositiva 21: reglas de acceso reales del equipo (está marcada «por completar»).
- Diapositivas 17 y 20: indicar qué modo de almacenamiento usa el modelo real.
- Revisar los nombres de menú de Fabric antes de la sesión (cambian con frecuencia).
- Tiempos orientativos y guion del profesor: no hechos todavía.

## Límites de la verificación
Búsqueda del 14/10/2026. Microsoft Learn no se pudo abrir directamente desde el entorno; los datos se contrastaron con los extractos del buscador.

## V2 (27 diapositivas: 22 principales + 5 de anexo técnico)
Se conserva la V1 sin cambios en `v1/`. La V2 reorienta la segunda mitad hacia una visión general (a petición del autor: «a partir de la 11 se va a un lado más técnico»).

| Bloque | Diapositivas |
|---|---|
| Gancho y qué es | 1 Portada · 2 Palabras antes · 3 Ruta · 4 Viaje del dato · 5 Aplicación vs Warehouse · 6 Dónde encaja en Fabric |
| Tablas y SQL | 7 Explorador · 8 SQL · 9 Elegir tablas y campos · 10 Agrupar · 11 Vistas |
| Conectar con Power BI | 12 Modelo semántico · 13 Del Warehouse a Power BI (crear modelo, modos, informes, apps, confianza) · 14 Informe simulado |
| Contar y hacerlo bien | 15 Una historia con los datos · 16 Quién trabaja con Fabric y Power BI (perfiles y habilidades) · 17 Buenas prácticas |
| Cierre | 18 Demo en vivo · 19 Palabras después · 20 Tres ideas · 21 Fuentes · 22 Propiedad |
| Anexo técnico | 23 Tipos de JOIN · 24 JOIN que duplica · 25 Relaciones · 26 Medidas · 27 Modos de almacenamiento |

Quitadas de la secuencia principal: «Crear el modelo» (ahora dentro de la 13) y «Reglas» (ahora dentro de la 17). El anexo conserva las diapositivas técnicas de la V1 para preguntas o para la formación 3.

### De dónde salen los datos nuevos (consultados el 18/10/2026, vía buscador)
- Perfiles y habilidades: certificaciones Fabric Data Engineer (DP-700), Fabric Analytics Engineer (DP-600) y Power BI Data Analyst (PL-300), y guías de uso de Power BI de Microsoft Learn. Son perfiles de Microsoft, no un estudio del mercado laboral.
- Buenas prácticas: guías de rendimiento y seguridad del Warehouse, esquema en estrella, diseño de informes, accesibilidad, apps, endorsement y RLS.
- Storytelling: consejos de diseño de Microsoft Learn y K. Nussbaumer Knaflic, *Storytelling with Data* (2015; resumen contrastado solo con fuentes secundarias).
- No se encontró en Microsoft Learn una guía de convenciones de nombres para el Warehouse, así que no se incluye.
