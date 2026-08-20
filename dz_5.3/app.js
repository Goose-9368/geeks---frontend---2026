document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://open.er-api.com/v6/latest";
    const CURRENCIES = ["KGS", "USD", "EUR"];

    const CURRENCY_SYMBOLS = {
        KGS: "сом",
        USD: "$",
        EUR: "€",
    };

    const form = document.querySelector("#converter-form");
    const amountInput = document.querySelector("#amount");
    const currencySelect = document.querySelector("#currency");
    const convertButton = document.querySelector("#convert-button");
    const errorMessage = document.querySelector("#error-message");
    const sourceAmount = document.querySelector("#source-amount");
    const resultList = document.querySelector("#result-list");
    const lastUpdate = document.querySelector("#last-update");

    const requiredElements = [
        form,
        amountInput,
        currencySelect,
        convertButton,
        errorMessage,
        sourceAmount,
        resultList,
        lastUpdate,
    ];

    if (requiredElements.some((element) => element === null)) {
        console.error("Ошибка: проверьте id элементов в файле index.html");
        return;
    }

    // GET-запрос для получения актуальных курсов валют
    function getExchangeRates(baseCurrency) {
        return fetch(`${API_URL}/${baseCurrency}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка сервера: ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                if (data.result !== "success" || !data.rates) {
                    throw new Error("Сервис не вернул курсы валют");
                }

                return data;
            });
    }

    // Форматирование результата
    function formatCurrency(value, currency) {
        const formattedValue = new Intl.NumberFormat("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);

        return `${formattedValue} ${CURRENCY_SYMBOLS[currency]}`;
    }

    // Создание карточки результата
    function createResultCard(currency, value) {
        const card = document.createElement("article");
        const code = document.createElement("span");
        const resultValue = document.createElement("p");

        card.className = "result__item";
        code.className = "result__code";
        resultValue.className = "result__value";

        code.textContent = currency;
        resultValue.textContent = formatCurrency(value, currency);

        card.append(code, resultValue);

        return card;
    }

    // Вывод двух результатов
    function showResults(amount, baseCurrency, rates, updateTime) {
        const targetCurrencies = CURRENCIES.filter(
            (currency) => currency !== baseCurrency
        );

        const cards = targetCurrencies.map((currency) => {
            const rate = Number(rates[currency]);

            if (!Number.isFinite(rate)) {
                throw new Error(`Не найден курс валюты ${currency}`);
            }

            const convertedAmount = amount * rate;

            return createResultCard(currency, convertedAmount);
        });

        resultList.replaceChildren(...cards);

        sourceAmount.textContent =
            `${formatCurrency(amount, baseCurrency)} =`;

        if (updateTime) {
            const formattedDate = new Date(
                updateTime * 1000
            ).toLocaleString("ru-RU", {
                dateStyle: "medium",
                timeStyle: "short",
            });

            lastUpdate.textContent =
                `Курс обновлён: ${formattedDate}`;
        } else {
            lastUpdate.textContent = "";
        }
    }

    // Включение и выключение загрузки
    function setLoading(isLoading) {
        convertButton.disabled = isLoading;

        convertButton.classList.toggle(
            "is-loading",
            isLoading
        );

        convertButton.setAttribute(
            "aria-busy",
            String(isLoading)
        );
    }

    function showError(message) {
        errorMessage.textContent = message;
    }

    // Обработка отправки формы
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = Number(amountInput.value);
        const baseCurrency = currencySelect.value;

        showError("");

        if (!Number.isFinite(amount) || amount <= 0) {
            showError("Введите сумму больше нуля.");
            amountInput.focus();
            return;
        }

        setLoading(true);

        getExchangeRates(baseCurrency)
            .then((data) => {
                showResults(
                    amount,
                    baseCurrency,
                    data.rates,
                    data.time_last_update_unix
                );
            })
            .catch((error) => {
                console.error(error);

                showError(
                    "Не удалось загрузить курсы. " +
                    "Проверьте интернет и попробуйте ещё раз."
                );
            })
            .finally(() => {
                setLoading(false);
            });
    });
});