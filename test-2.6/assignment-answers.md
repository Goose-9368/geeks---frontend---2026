# Ответы на контрольную работу №2

## 1. TypeScript + Swagger

```ts
type Role = "admin" | "user";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}
```

`?` делает avatarUrl необязательным; extends наследует интерфейс. В Admin роль уточняется до admin.

```bash
npx openapi-typescript ./swagger.json -o ./api.d.ts
```

В проекте предоставлена спецификация OpenAPI 3.0.3. Типы уже сгенерированы; для повторной генерации есть `npm run generate:api`.

## 2. Tailwind CSS

HTML-пример при подключённом Tailwind:

```html
<section class="mx-auto w-full max-w-7xl px-4 py-8">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    <article class="rounded-xl border border-gray-200 bg-white p-4">
      <img src="/images/headphones.svg" alt="Наушники"
           class="h-48 w-full rounded-lg object-cover" />
      <h2 class="mt-4 text-lg font-semibold">Наушники Focus</h2>
      <button type="button"
              class="mt-4 rounded-lg bg-orange-700 px-4 py-2 text-white">
        В корзину
      </button>
    </article>
  </div>
</section>
```

| Класс | Значение |
| --- | --- |
| grid-cols-1 | 1 колонка |
| md:grid-cols-2 | 2 колонки от 768px |
| xl:grid-cols-4 | 4 колонки от 1280px |
| gap-4 | Отступ 16px |
| mx-auto | Центрирование |
| max-w-7xl | Максимальная ширина 1280px |

Рабочая версия находится в `src/pages/catalog/ui/CatalogPage.tsx`. Это JSX: вместо class используется className. Карточка вынесена в `entities/product/ui/ProductCard.tsx`.

## 3a. FSD

| Слой / слайс / сегмент | Файл |
| --- | --- |
| app | src/app/App.tsx |
| pages/catalog/ui | CatalogPage.tsx |
| features/add-to-cart/ui | AddToCartButton.tsx |
| features/add-to-cart/model | useAddToCart.ts |
| features/add-to-cart/api | addToCart.ts |
| features/add-to-cart | index.ts — публичный API |
| entities/product/model | types.ts, products.ts |
| entities/cart/model | CartProvider.tsx, types.ts |
| shared/ui/button | Button.tsx, Button.stories.tsx, index.ts |
| shared/api | index.ts — экспорт сгенерированных типов |

В features/add-to-cart ui отображает кнопку, model управляет действием и состояниями, api содержит демонстрационный ответ. Слайсы импортируются через index.ts и используют нижележащие слои.

## 3b. Storybook

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Shared/Button",
  component: Button,
  args: {
    children: "В корзину",
    variant: "primary",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", disabled: false },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true },
};
```

Полная реализация и Controls находятся в `src/shared/ui/button/Button.stories.tsx`. Компонент Button находится рядом и поддерживает обычные свойства HTML-кнопки. CSS Tailwind подключён через `.storybook/preview.ts`.

