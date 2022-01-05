document.body.innerHTML = `
<body>
    <div class="container">
            <h1 class="container__body">Randomizer</h1>
            <p class="container__body--text">Min</p>
            <input type="text" id="min" class="container__body--input">
                <p id="min_status"></p>
                <p class="container__body--text">Max</p>
                <input type="text" id="max" class="container__body--input">
                    <p class="status" id="max_status"></p>
                    <button id="commit" class="container__body--commit">Generate</button>
                    <p class="status" id="genNumber"></p>
                    <button id="reset" disabled class="container__body--reset">Reset</button>
        </div>
</body>
`;

const { randomNumber } = require('./script');



describe('randomNumber', function () {
    test('give random number', function () {
        expect(randomNumber()).toEqual();
    })
})