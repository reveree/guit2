function generateGuitarNeck() {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const openStrings = ['E', 'B', 'G', 'D', 'A', 'E'];
    let html = '';

    openStrings.forEach((openString, stringIndex) => {
        html += `<div class='string-line'></div>\n`;
        html += `<div class="string row">\n`;

        let noteIndex = notes.indexOf(openString);
        for (let fret = 0; fret <= 12; fret++) {
            let note = notes[noteIndex % 12];
            html += `<div class="note"><button class="note ${note} string${stringIndex + 1}">${note}</button></div>\n`;
            html += `<div class="fret-line"><p> </p></div>\n`;
            noteIndex++;
        }

        html += `</div>\n`;
    });

    html += `<div class='string-line'></div>\n`;

    return html;
}