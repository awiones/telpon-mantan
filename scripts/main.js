document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'calls-made', target: 500 },        // Set the target value for Calls Made
        { id: 'clients-served', target: 300 },     // Set the target value for Clients Served
        { id: 'happy-clients', target: 200 }       // Set the target value for Happy Clients
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let count = 0;
        const interval = setInterval(() => {
            count += Math.ceil(counter.target / 100); // Increment the count
            if (count >= counter.target) {
                count = counter.target; // Ensure it does not exceed the target
                clearInterval(interval); // Stop the interval when target is reached
            }
            element.innerText = count; // Update the displayed count
        }, 50); // Update every 50 milliseconds
    });
});