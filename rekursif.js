const resultDisplay = document.getElementById('result');
const baseInput = document.getElementById('base');
const exponentInput = document.getElementById('exponent');
const stepsDisplay = document.getElementById('steps'); // Elemen baru untuk langkah-langkah

// Fungsi untuk menghitung eksponen secara rekursif dengan menampilkan langkah-langkah
function calculateExponentRecursively(base, exponent, step = 1, isNegative = false) {
    // Jika eksponen 0, hasilnya 1
    if (exponent === 0) {
        const stepItem = document.createElement('li');
        stepItem.textContent = `Step ${step}: ${base} ^ 0 = 1`;
        stepsDisplay.appendChild(stepItem);
        return 1;
    }

    // Jika eksponen negatif, hitung menggunakan eksponen positif dulu
    if (exponent < 0) {
        isNegative = true;
        exponent = -exponent; // Ubah eksponen menjadi positif
    }

    // Tambahkan langkah sebelum rekursi selanjutnya
    const partialResult = calculateExponentRecursively(base, exponent - 1, step + 1, isNegative);
    const result = base * partialResult;

    const stepItem = document.createElement('li');
    stepItem.textContent = `Step ${step}: ${base} ^ ${step} = ${result}`;
    stepsDisplay.appendChild(stepItem);

    // Jika eksponen asli negatif, ambil 1 / hasilnya
    if (isNegative && step === 1) {
        const finalResult = 1 / result;
        const negativeStepItem = document.createElement('li');
        negativeStepItem.textContent = `Since exponent is negative: result = 1 / ${result} = ${finalResult}`;
        stepsDisplay.appendChild(negativeStepItem);
        return finalResult;
    }

    return result;
}

document.getElementById('count').addEventListener('click', () => {
    const base = parseFloat(baseInput.value);
    const exponent = parseFloat(exponentInput.value);
    if (!isNaN(base) && !isNaN(exponent)) {
        stepsDisplay.innerHTML = ''; // Kosongkan daftar langkah sebelumnya
        const result = calculateExponentRecursively(base, exponent);
        resultDisplay.textContent = `${base} ^ ${exponent} = ${result}`;
    } else {
        resultDisplay.textContent = 'Please enter valid numbers';
        stepsDisplay.innerHTML = ''; // Kosongkan langkah jika input tidak valid
    }
});

document.getElementById('clear').addEventListener('click', () => {
    baseInput.value = '';
    exponentInput.value = '';
    resultDisplay.textContent = 'Result will appear here';
    stepsDisplay.innerHTML = ''; // Kosongkan daftar langkah
});
