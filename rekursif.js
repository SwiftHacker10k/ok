    const resultDisplay = document.getElementById('result');
    const baseInput = document.getElementById('base');
    const exponentInput = document.getElementById('exponent');
    const stepsDisplay = document.getElementById('steps'); // Elemen baru untuk langkah-langkah

    // Fungsi untuk menghitung eksponen secara iteratif dengan menampilkan langkah-langkah
    function calculateExponentIteratively(base, exponent) {
        let result = 1;
        const positiveExponent = Math.abs(exponent); // Mengatasi eksponen negatif
        stepsDisplay.innerHTML = ''; // Kosongkan daftar langkah sebelumnya
        
        for (let i = 0; i < positiveExponent; i++) {
            result *= base;
            // Tambahkan langkah ke dalam list
            const stepItem = document.createElement('li');
            stepItem.textContent = `Step ${i + 1}: ${base} ^ ${i + 1} = ${result}`;
            stepsDisplay.appendChild(stepItem);
        }

        // Jika eksponen negatif, kita ambil hasilnya sebagai 1 / hasil
        if (exponent < 0) {
            result = 1 / result;
            const stepItem = document.createElement('li');
            stepItem.textContent = `Since exponent is negative: result = 1 / ${result}`;
            stepsDisplay.appendChild(stepItem);
        }

        return result;
    }

    document.getElementById('count').addEventListener('click', () => {
        const base = parseFloat(baseInput.value);
        const exponent = parseFloat(exponentInput.value);
        if (!isNaN(base) && !isNaN(exponent)) {
            const result = calculateExponentIteratively(base, exponent);
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
