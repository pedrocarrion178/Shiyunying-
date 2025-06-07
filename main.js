
let qimenChart = null;

function generateChart() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = document.getElementById('hour').value;
    const dunType = document.getElementById('dunType').value;

    qimenChart = QimenChart.generate(year, month, day, hour, dunType);
    updatePalaceGrid();
    document.getElementById('interpretation').innerHTML = qimenChart.overallInterpretation;
}

function updatePalaceGrid() {
    const grid = document.getElementById('palaceGrid');
    grid.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        const palace = qimenChart.palaces[i];
        const palaceDiv = document.createElement('div');
        palaceDiv.className = 'palace';
        palaceDiv.setAttribute('data-palace', i);
        palaceDiv.innerHTML = \`
            <strong>\${palace.name}</strong><br>
            天盘: \${palace.celestialStem}<br>
            地盘: \${palace.terrestrialBranch}<br>
            九星: \${palace.star}<br>
            八门: \${palace.door}<br>
            八神: \${palace.deity}
        \`;
        palaceDiv.addEventListener('click', () => {
            showPalaceInterpretation(i);
        });
        grid.appendChild(palaceDiv);
    }
}

function showPalaceInterpretation(palaceNumber) {
    if (!qimenChart) return;
    const interpretation = qimenChart.generatePalaceInterpretation(palaceNumber);
    document.getElementById('interpretation').innerHTML = interpretation;
}
