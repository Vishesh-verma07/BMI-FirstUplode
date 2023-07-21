function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid values for weight and height.";
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    document.getElementById("result").innerText = `Your BMI: ${bmi.toFixed(2)}`;
}
