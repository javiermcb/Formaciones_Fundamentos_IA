/**
 * Crea en tu Google Drive la encuesta de valoración de «La IA en movimiento».
 * Uso: script.google.com → Nuevo proyecto → pega este código → Guardar → Ejecutar «crearEncuesta».
 * Al terminar, el registro de ejecución muestra el enlace para responder y el enlace para editar.
 * © 2026 Javier Martín-Consuegra.
 */
function crearEncuesta() {
  var form = FormApp.create('¿Qué tal la sesión «La IA en movimiento»?');
  form.setDescription('Gracias por venir. Esta encuesta es anónima y dura unos 4 minutos. ' +
      'Tus respuestas sirven para mejorar las próximas sesiones.');
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('¡Gracias! Tu respuesta se ha guardado.');

  // Bloque 1 · Valoración general
  form.addSectionHeaderItem().setTitle('Valoración general');
  form.addScaleItem().setTitle('1. En general, ¿cómo valoras la formación?')
      .setBounds(1, 5).setLabels('Muy mala', 'Excelente').setRequired(true);
  form.addScaleItem().setTitle('2. ¿Se la recomendarías a un compañero?')
      .setBounds(0, 10).setLabels('Nada probable', 'Muy probable').setRequired(true);

  // Bloque 2 · Lo que te llevas
  form.addSectionHeaderItem().setTitle('Lo que te llevas');
  form.addMultipleChoiceItem().setTitle('3. ¿Has aprendido algo nuevo?')
      .setChoiceValues(['Mucho', 'Bastante', 'Algo', 'Nada']).setRequired(true);
  form.addScaleItem().setTitle('4. Antes de la sesión, ¿cuánto entendías cómo funciona la IA?')
      .setBounds(1, 5).setLabels('Nada', 'Mucho').setRequired(true);
  form.addScaleItem().setTitle('5. Y ahora, ¿cuánto lo entiendes?')
      .setBounds(1, 5).setLabels('Nada', 'Mucho').setRequired(true);
  form.addCheckboxItem().setTitle('6. ¿Qué conceptos podrías explicarle ahora a un compañero?')
      .setChoiceValues([
        'Qué es un token',
        'Por qué la IA calcula probabilidades',
        'Qué es una alucinación',
        'IA predictiva frente a generativa',
        'Entrenamiento frente a uso del modelo',
        'Qué es RAG',
        'Cuánto cuesta usarla',
        'Qué exige la ley europea',
        'Ninguno'
      ]);
  form.addTextItem().setTitle('7. ¿Cuál es la idea más útil que te llevas?').setRequired(true);

  // Bloque 3 · La sesión
  form.addSectionHeaderItem().setTitle('La sesión');
  var partes = form.addCheckboxItem().setTitle('8. ¿Qué partes te gustaron más? (elige hasta 3)');
  partes.setChoiceValues([
    'Las palabras del principio y del final',
    'Tres máquinas, la misma consulta',
    'Calculadora de tokens',
    'El árbol de «París»',
    'La red neuronal interactiva',
    'Noticias y mercado',
    'Cuánto cuesta',
    'La ley europea',
    'Cómo pedir bien (prompt)',
    'Tres ideas para el lunes'
  ]);
  partes.setValidation(FormApp.createCheckboxValidation()
      .setHelpText('Elige como máximo 3.').requireSelectAtMost(3).build());
  form.addMultipleChoiceItem().setTitle('9. El nivel técnico te pareció…')
      .setChoiceValues(['Demasiado básico', 'Adecuado', 'Demasiado técnico']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('10. La duración y el ritmo te parecieron…')
      .setChoiceValues(['Se me hizo largo', 'Adecuados', 'Me faltó tiempo']).setRequired(true);
  form.addGridItem().setTitle('11. Valora de 1 a 5')
      .setRows([
        'Claridad al explicar',
        'Ejemplos cercanos a mi trabajo',
        'Energía y forma de contarlo',
        'Participación del público',
        'Respuesta a las preguntas'
      ])
      .setColumns(['1', '2', '3', '4', '5']);

  // Bloque 4 · Para la próxima
  form.addSectionHeaderItem().setTitle('Para la próxima');
  form.addParagraphTextItem().setTitle('12. ¿Qué has echado de menos o te habría gustado ver?');
  form.addCheckboxItem().setTitle('13. ¿Sobre qué te gustaría una próxima sesión?')
      .setChoiceValues([
        'Taller práctico con casos de mi área',
        'Cómo escribir buenos prompts',
        'La herramienta aprobada en la empresa',
        'Agentes y automatización',
        'Privacidad y protección de datos'
      ])
      .showOtherOption(true);

  // Deja la encuesta publicada y abierta a respuestas.
  try { if (form.setPublished) form.setPublished(true); } catch (e) {}
  form.setAcceptingResponses(true);

  Logger.log('Enlace para responder: ' + form.getPublishedUrl());
  Logger.log('Enlace para editar: ' + form.getEditUrl());
}
