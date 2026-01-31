# Star Wars API - BFF Edition

Современный, дружественный к фронтенду Star Wars API, построенный на Next.js 16 и TypeScript.

**🌐 Live Demo:** [https://sw-next-api.vercel.app](https://sw-next-api.vercel.app)

**📖 English version:** [README.md](./README.md)

## Base URL

Все API endpoints относительные. Добавьте ваш base URL:

- **Локальная разработка:** `http://localhost:3000`
- **Production (пример):** `https://sw-next-api.vercel.app`

Пример: `GET /api/v1/people/1` становится `GET http://localhost:3000/api/v1/people/1`

## Зачем этот API существует

**Этот API существует потому, что большинство Star Wars API ориентированы на данные, а не на UI.**

Традиционные API, такие как SWAPI, требуют нескольких запросов для отображения одного экрана пользовательского интерфейса. Этот проект демонстрирует, как те же данные могут быть представлены в дружественной для фронтенда форме, используя паттерн Backend for Frontend (BFF).

### Проблема традиционных API

Чтобы отобразить персонажа с его родным миром и фильмами:

**Подход SWAPI:**

```
GET /people/1           # Luke Skywalker
GET /planets/1          # Tatooine
GET /films/1            # A New Hope
GET /films/2            # Empire Strikes Back
GET /films/3            # Return of the Jedi
# ... 5+ запросов для одного персонажа
```

**Этот API:**

```
GET /api/v1/people/1?expand=homeworld,films
# 1 запрос, все данные включены
```

## Возможности

### 🚀 Контролируемое расширение

Запрашивайте именно то, что вам нужно:
```bash
# Только базовые данные (минимальная проекция)
GET /api/v1/people/1

# Включить родной мир
GET /api/v1/people/1?expand=homeworld

# Несколько уровней (глубина ограничена до 2)
GET /api/v1/people/1?expand=films.characters
```

### 📄 Умная пагинация

```bash
GET /api/v1/people?page=2&limit=10

Ответ:
{
  "page": 2,
  "limit": 10,
  "total": 82,
  "pages": 9,
  "results": [...]
}
```

### 🔍 Поиск и фильтрация

```bash
# Поиск по имени
GET /api/v1/people?search=luke

# Фильтрация по атрибутам
GET /api/v1/people?gender=female

# Сортировка результатов
GET /api/v1/people?sort=-name  # по убыванию
GET /api/v1/films?sort=episode  # по возрастанию
```

### 🎯 Комбинирование всего

```bash
GET /api/v1/people?search=skywalker&gender=male&sort=name&page=1&limit=5&expand=homeworld
```

### ⚡ Расширенные метаданные

В отличие от SWAPI, этот API включает дополнительные метаданные:

**Персонажи:**
- `isForceUser` - чувствительные к Силе персонажи
- `isJedi` / `isSith` - принадлежность к Силе
- `faction` - повстанцы, империя, республика, сепаратисты, гражданские

**Звездолёты:**
- `is_military` - военная или гражданская классификация
- `faction` - какая фракция управляет кораблем

```bash
# Найти всех джедаев
GET /api/v1/people?isJedi=true

# Найти имперские военные корабли
GET /api/v1/starships?faction=empire&is_military=true
```

## API Endpoints

### Единичные ресурсы

- `GET /api/v1/people/{id}`
- `GET /api/v1/films/{id}`
- `GET /api/v1/planets/{id}`
- `GET /api/v1/species/{id}`
- `GET /api/v1/starships/{id}`
- `GET /api/v1/vehicles/{id}`

### Списки (с пагинацией, поиском, фильтрацией, сортировкой)

- `GET /api/v1/people`
- `GET /api/v1/films`
- `GET /api/v1/planets`
- `GET /api/v1/species`
- `GET /api/v1/starships`
- `GET /api/v1/vehicles`

## Граф зависимости данных

Film (Фильм) — центральная сущность, связывающая все остальные типы сущностей. Вот полная структура взаимосвязей:

```
                              ┌─────────────────────────────────────┐
                              │              FILM                   │
                              │  (Центральный узел - все связи)     │
                              └──────────┬─────┬─────┬─────────────┘
                                         │     │     │
                    ┌────────────────────┘     │     │
                    │                          │     │
                    ▼                          ▼     ▼
              ┌──────────┐             ┌──────────┐ ┌─────────────┐
              │ PERSON   │◄────────────┤ PLANET   │ │  SPECIES    │
              └────┬─────┘             └──────┬───┘ └─────┬───────┘
                   │                         │           │
                   │   ┌─────────────────┬───┘     ┌─────┘
                   │   │                 │         │
       ┌───────────┼───┼─────────────┐   │   ┌─────┴───────┐
       │           │   │             │   │   │             │
       ▼           ▼   ▼             ▼   ▼   ▼             ▼
  ┌──────────┐ ┌──────────┐ ┌──────────────┐      ┌─────────────┐
  │ STARSHIP │ │ VEHICLE  │ │  (Homeworld) │      │  (Pilots)   │
  └──────────┘ └──────────┘ └──────────────┘      └─────────────┘
```

### Матрица взаимосвязей

| От → К | Тип | Двунаправленная | Лимит глубины |
|--------|-----|-----------------|---------------|
| Film → Person | многие-ко-многим | ✓ | 2 |
| Film → Planet | многие-ко-многим | ✓ | 2 |
| Film → Species | многие-ко-многим | ✓ | 2 |
| Film → Starship | многие-ко-многим | ✓ | 2 |
| Film → Vehicle | многие-ко-многим | ✓ | 2 |
| Person → Planet (homeworld) | многие-к-одному | ✓ | 2 |
| Person → Species | многие-ко-многим | ✓ | 2 |
| Person → Starship | многие-ко-многим | ✗ | 2 |
| Person → Vehicle | многие-ко-многим | ✓ | 2 |
| Species → Planet (homeworld) | многие-к-одному | ✗ | 2 |

**Ключевые моменты:**
- **Максимальная глубина расширения:** 2 уровня (предотвращает бесконечные циклы)
- **Нормализованные ответы:** связанные сущности возвращаются как минимальные объекты (`{entityId, id, name}`)
- **Type-safe:** все связи используют `EntityId` для типобезопасности
- **Эффективность:** предотвращает избыточную загрузку данных с помощью контролируемого расширения

### Пример расширения

```typescript
// GET /api/v1/films/1?expand=characters.homeworld

{
  "entityId": 1,
  "title": "A New Hope",
  "characters": [           // Глубина 1
    {
      "entityId": 1,
      "name": "Luke Skywalker",
      "homeworld": {        // Глубина 2 (останавливается здесь)
        "entityId": 1,
        "name": "Tatooine"
      }
    }
  ]
}
```

## Архитектура

```
┌─────────────────┐
│   API Routes    │  Next.js API handlers
└────────┬────────┘
         │
┌────────▼────────┐
│   BFF Layer     │  Агрегирует связанные данные
└────────┬────────┘
         │
┌────────▼────────┐
│  Projections    │  Преобразует в модели ответов
└────────┬────────┘
         │
┌────────▼────────┐
│ Expand System   │  Контролируемое расширение глубины
└────────┬────────┘
         │
┌────────▼────────┐
│   Resolver      │  Универсальный поиск сущностей
└────────┬────────┘
         │
┌────────▼────────┐
│  Normalized     │  Хранилище данных в памяти
│     Data        │
└─────────────────┘
```

### Ключевые паттерны

**BFF (Backend for Frontend):**
- Агрегирует несколько сущностей в одном запросе
- Возвращает готовые для UI структуры данных
- Устраняет каскадные запросы

**Контролируемое расширение:**
- Белый список расширяемых полей для каждой сущности
- Ограничение глубины предотвращает взрыв графа
- Типобезопасное дерево расширения

**Универсальный резолвер:**
- Единая функция поиска для всех сущностей
- Поддерживает как EntityId, так и slug
- Централизованный реестр маппинга

**Проекции ответов:**
- Фиксированные контракты для API ответов
- Минимальные проекции для связанных сущностей
- Предотвращает избыточную загрузку

**Нормализованные данные:**
- camelCase именование (heightCm, birthYearBBY)
- Правильные типы (числа вместо строк)
- Минимальные объекты для связей

## Начало работы

```bash
# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev

# Сборка для production
npm run build

# Запуск production сервера
npm start
```

## Примеры использования

### Получение персонажа со связанными данными

```typescript
const response = await fetch(
  'http://localhost:3000/api/v1/people/1?expand=homeworld,films'
);
const luke = await response.json();

console.log(luke.name);           // "Luke Skywalker"
console.log(luke.homeworld.name); // "Tatooine"
console.log(luke.films.length);   // 4
```

### Поиск и пагинация

```typescript
const response = await fetch(
  'http://localhost:3000/api/v1/people?search=skywalker&page=1&limit=5'
);
const data = await response.json();

console.log(data.total);          // 3
console.log(data.results.length); // 3
console.log(data.results[0].name); // "Anakin Skywalker"
```

### Сложный запрос с фильтрами

```typescript
const response = await fetch(
  'http://localhost:3000/api/v1/people?isJedi=true&faction=republic&expand=homeworld&limit=10'
);
const jedi = await response.json();

// Все джедаи из Республики с их родными мирами
```

## Технологический стек

- **Next.js 16** - App Router с React Server Components
- **TypeScript** - Полная типобезопасность по всему стеку
- **Tailwind CSS 4** - Современная стилизация с CSS-first подходом
- **In-memory data** - Быстро, без необходимости в базе данных
- **Vercel** - Serverless deployment

## SEO и производительность

- ✅ JSON-LD структурированные данные для расширенных сниппетов
- ✅ OpenGraph и Twitter cards
- ✅ Динамическая генерация OG изображений
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt (API endpoints исключены из индексации)

## Лицензия

MIT

---

**Репозиторий:** [github.com/maiano/sw-api](https://github.com/maiano/sw-api)

**Автор:** [maiano](https://github.com/maiano)
