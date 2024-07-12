// script.js
document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(event.target);
    const input_data = {
        pregnancies: formData.get('pregnancies'),
        glucose: formData.get('glucose'),
        bloodpressure: formData.get('bloodpressure'),
        skinthickness: formData.get('skinthickness'),
        insulin: formData.get('insulin'),
        bmi: formData.get('bmi'),
        dpf: formData.get('dpf'),
        age: formData.get('age')
    };

    // Simulate prediction logic (Replace this with actual API call)
    const prediction = simulatePrediction(input_data);

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = prediction ? 'The person is Diabetic' : 'The person is non-Diabetic';
});

// Simulated prediction function (Replace with actual model prediction)
function simulatePrediction(data) {
    // Example logic (to be replaced with real prediction logic)
    return data.glucose > 120; // Dummy condition for demo
}
