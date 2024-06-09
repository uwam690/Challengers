
        function checkSubarraySum() {
            const arrayInput = document.getElementById('arrayInput').value;
            const targetInput = document.getElementById('targetInput').value;

            const arr = arrayInput.split(',').map(Number);
            const target = parseInt(targetInput);

            const result = findSubarray(arr, target);
            document.getElementById('result').textContent = result ? 'True: ' + result : 'False';
        }

        function findSubarray(arr, target) {
            const sumMap = new Map();
            let currentSum = 0;

            for (let i = 0; i < arr.length; i++) {
                currentSum += arr[i];

                if (currentSum === target) {
                    return arr.slice(0, i + 1);
                }

                if (sumMap.has(currentSum - target)) {
                    return arr.slice(sumMap.get(currentSum - target) + 1, i + 1);
                }

                sumMap.set(currentSum, i);
            }

            return null;
        }
    