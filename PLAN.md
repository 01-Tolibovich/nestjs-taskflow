# План обучения NestJS

Проект: **taskflow** — упрощённый Trello (пользователи, проекты, участники с ролями, задачи, комментарии).
После каждого модуля: мок-собес + тег `module-NN-<name>`.

- [ ] **0. Разминка** — HTTP и REST, CRUD на голом Express, декораторы TS, DI вручную
- [ ] **1. Основы Nest** — CLI, модули, контроллеры, провайдеры, DI, scope, жизненный цикл (хранение в памяти)
- [ ] **2. Путь запроса** — DTO и class-validator, pipes, middleware, guards, interceptors, exception filters, порядок выполнения
- [ ] **3. БД** — Postgres в Docker, основы SQL, `@nestjs/config`, TypeORM, связи 1:N и M:N, миграции, транзакции
- [ ] **4. Auth** — хеширование паролей, JWT (access и refresh), guards, роли, доступ «только участник проекта»
- [ ] **5. Тесты** — Jest, unit-тесты с моками, e2e на supertest, тестовая БД
- [ ] **6. Полировка API** — Swagger, пагинация, фильтры и сортировка, сериализация, версионирование
- [ ] **7. Файлы** — Multer, MinIO (S3)
- [ ] **8. Кеш** — Redis, cache-manager, инвалидация
- [ ] **9. Очереди** — BullMQ, email-уведомления в фоне
- [ ] **10. Realtime** — WebSocket-гейтвеи, живая доска, авторизация сокетов
- [ ] **11. Наблюдаемость** — pino, health-checks (Terminus), graceful shutdown
- [ ] **12. Docker и CI** — многоэтапный Dockerfile, compose, GitHub Actions (линт, тесты, образ в GHCR), ветки и PR
- [ ] **13. Prisma** — переписать один модуль, сравнить с TypeORM
- [ ] **14. Финал** — большой мок-собес по всему курсу, ревью проекта как портфолио

По желанию: GraphQL, микросервисы, CQRS.
