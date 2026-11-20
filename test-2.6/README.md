# Study Store — контрольная работа №2

Учебный проект для 6-го месяца Geeks: TypeScript + Swagger, Tailwind CSS, Feature-Sliced Design и Storybook.

В приложении есть каталог из 8 товаров, адаптивная сетка, добавление в корзину, изменение количества, удаление товаров и подсчёт суммы в сомах. Корзина сохраняется в localStorage.

## Запуск

Нужен Node.js 22.12 или новее. Рекомендуется Node.js 24 LTS; версия для nvm указана в `.nvmrc`.

Открой папку `geeks-control-work-2` в WebStorm или VS Code и запусти команды в терминале этой папки:

```bash
npm ci
npm run dev
```

Открой адрес, который покажет терминал, обычно http://localhost:5173.

Не открывай `index.html` двойным кликом: проект запускается через Vite.

## Storybook

В отдельном терминале:

```bash
npm run storybook
```

Открой http://localhost:6006 → Shared → Button. Обязательные истории: Primary и Disabled. Дополнительно есть Secondary. В Controls можно менять текст, вариант и disabled.

## Где выполнены задания

| Задание | Реализация |
| --- | --- |
| 1a. Role и User | `src/entities/user/model/types.ts` |
| 1b. Admin extends User | Там же; типизированные примеры — `src/entities/user/model/examples.ts` |
| 1c. Swagger → api.d.ts | `swagger.json`, `api.d.ts`, команда `npm run generate:api` |
| 2. Tailwind-каталог | `src/pages/catalog/ui/CatalogPage.tsx`, `src/entities/product/ui/ProductCard.tsx` |
| 3a. FSD ui/model/api | `src/features/add-to-cart/` и публичный `index.ts` |
| 3b. Button stories | `src/shared/ui/button/Button.stories.tsx` |

Текстовый ответ для формы с кодом и пояснениями: [docs/assignment-answers.md](docs/assignment-answers.md).

## Адаптивная сетка

`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4`

| Ширина окна | Колонки |
| --- | --- |
| Меньше 768px | 1 |
| От 768px до 1279px | 2 |
| От 1280px | 4 |

`gap-4` задаёт 16px между карточками. Родительский контейнер: `mx-auto w-full max-w-7xl px-4`.

## Структура FSD

| Слой | Содержимое |
| --- | --- |
| `app` | Корневой App, подключение CartProvider, глобальные стили |
| `pages/catalog` | Сборка страницы из товаров, фичи и корзины |
| `features/add-to-cart/ui` | AddToCartButton — отображение действия |
| `features/add-to-cart/model` | useAddToCart — логика, loading и error |
| `features/add-to-cart/api` | addToCart — учебная имитация ответа API |
| `entities/product` | Типы, список товаров и ProductCard |
| `entities/cart` | Собственные типы корзины, CartProvider и CartPanel |
| `entities/user` | Role, User, Admin и примеры |
| `shared` | Универсальная Button, форматирование цены и типы API |

Внешние модули обращаются к слайсам через `index.ts`. Фичи используют entities и shared. Cart и product не импортируют друг друга: ProductCard принимает действие через prop `action`, а корзина хранит собственный снимок товара.

## Swagger и учебный API

```bash
npx openapi-typescript ./swagger.json -o ./api.d.ts
```

Или `npm run generate:api`. `swagger.json` содержит пример спецификации OpenAPI 3.0.3. Вручную написанные Role, User, Admin находятся отдельно от автоматически сгенерированных типов.

Готовый тип `components["schemas"]["CartItem"]` используется в `features/add-to-cart/api/addToCart.ts`.

Отдельный backend не входит в исходное задание. Поэтому `addToCart` возвращает типизированный демонстрационный ответ, а корзина работает локально. Реальных сетевых запросов, авторизации, оплаты и оформления заказа нет. Пример OpenAPI описывает контракт, но сам по себе не запускает сервер.

Все 8 SVG-изображений включены в `public/images`: внешние сервисы изображений не нужны.

## Команды

| Команда | Назначение |
| --- | --- |
| `npm ci` | Установить зависимости из package-lock.json |
| `npm run dev` | Запустить приложение |
| `npm run generate:api` | Перегенерировать api.d.ts |
| `npm run check` | Проверить TypeScript и актуальность сгенерированных типов |
| `npm run build` | Проверить TypeScript и собрать приложение в dist |
| `npm run preview` | Посмотреть сборку приложения |
| `npm run storybook` | Запустить Storybook |
| `npm run build-storybook` | Собрать Storybook в storybook-static |

## Загрузка на GitHub — через терминал

1. Распакуй ZIP и открой терминал в папке, где лежит `package.json`.
2. На https://github.com/new создай пустой репозиторий `geeks-control-work-2`. На этом шаге не добавляй README, .gitignore или лицензию: нужные файлы уже в проекте.
3. Выполни команды:

```bash
git init
git add .
git commit -m "Complete Geeks control work 2"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/geeks-control-work-2.git
git push -u origin main
```

Перед выполнением замени `YOUR_USERNAME` на свой логин GitHub. Если репозиторий называется иначе, используй его точный URL. GitHub может попросить войти в аккаунт.

`git add .` включает `.storybook`, `.github` и `.gitignore`. `node_modules`, `dist` и `storybook-static` исключены через `.gitignore`.

## Загрузка на GitHub — через браузер

1. Создай репозиторий на https://github.com/new.
2. Выбери ссылку «uploading an existing file» или Add file → Upload files.
3. Загружай содержимое распакованной папки, чтобы `package.json` оказался в корне репозитория, а не внутри дополнительной папки.
4. На Mac нажми Command + Shift + . в Finder, чтобы увидеть скрытые файлы. Обязательно добавь `.storybook`, `.github`, `.gitignore` и `.nvmrc`.
5. Нажми Commit changes. Не загружай ZIP вместо исходников и не добавляй node_modules.

В проект включён `.github/workflows/ci.yml`: после push GitHub Actions проверяет типы и собирает приложение и Storybook. Этот workflow выполняет проверки; публикация сайта не настроена.

## Что объяснить преподавателю

- `avatarUrl?: string` — необязательное поле; `Role` — объединение строковых литералов.
- `Admin extends User` наследует поля User и добавляет permissions.
- Префиксы md и xl включают правила начиная с заданной ширины.
- ui отвечает за отображение, model — за состояние и логику, api — за работу с API.
- Storybook показывает состояния одного компонента отдельно от страницы.
- disabled передаётся в настоящий HTML-атрибут кнопки, а не только меняет её внешний вид.

## Документация

- [Vite](https://vite.dev/guide/)
- [Tailwind + Vite](https://tailwindcss.com/docs/installation/using-vite)
- [OpenAPI TypeScript](https://openapi-ts.dev/cli)
- [Feature-Sliced Design](https://feature-sliced.design/docs/reference/layers)
- [Storybook + React + Vite](https://storybook.js.org/docs/get-started/frameworks/react-vite)

