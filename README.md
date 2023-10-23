# Mini-project

## I. Description

-   I’m writing mini-Ecommerce app using Nextjs, taiwind, auth, redux,…
-   Backend using mysql, ORM: prisma

-   **Basic features:**
    -   Login, logout, register
    -   show detail product.
    -   search products
-   **Using Docker for build, Coding and deploy app**

## II. Detail

-   Link tham khảo: [amazon-clone-frontend/public/data/suggestions.json at main · JonnyDavies/amazon-clone-frontend (github.com)](https://github.com/JonnyDavies/amazon-clone-frontend/blob/main/public/data/suggestions.json)
-   Link website tham khảo: [CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng](https://cellphones.com.vn/), [Digital World 2 (digital-world-2.myshopify.com)](https://digital-world-2.myshopify.com/)
-   Link design: [Get Started with Material Tailwind - React & Tailwind CSS Components Library (material-tailwind.com)](https://www.material-tailwind.com/docs/react/installation)

### 1. Using prisma for mini-project

-   **Adding prisma vào exist project: nodejs and MySQL**
-   **First step, installing prisma**

```jsx
npm install prisma --save-dev
```

-   **Next, setup project by creating primsa.schema file template**

```jsx
npx prisma init
```

-   **Connecting your database**

```jsx
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

**⇒ Config file `.env`**

```jsx
DATABASE_URL = "mysql://root:randompassword@localhost:3306/mydb";
```

-   **Introspect your database with database:**

**⇒ Using SQL schema. Example: Create 3 table include: User, Post, Profile tables and define relationship between tables**

---

```jsx
CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Post (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT now(),
  content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  authorId INTEGER NOT NULL,
  FOREIGN KEY (authorId) REFERENCES User(id)
);

CREATE TABLE Profile (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  bio TEXT,
  userId INTEGER UNIQUE NOT NULL,
  FOREIGN KEY (userId) REFERENCES User(id)
);
```

-   **And next, you will introspect your database by this command:**

```jsx
npx prisma db pull
```

**⇒ Result will be a data model in prisma.schema**

```jsx
model Post {
  id        Int      @id @default(autoincrement())
  title     String   @db.VarChar(255)
  createdAt DateTime @default(now()) @db.Timestamp(0)
  content   String?  @db.Text
  published Boolean  @default(false)
  authorId  Int
  User      User     @relation(fields: [authorId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "Post_ibfk_1")

  @@index([authorId], map: "authorId")
}

model Profile {
  id     Int     @id @default(autoincrement())
  bio    String? @db.Text
  userId Int     @unique(map: "userId")
  User   User    @relation(fields: [userId], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "Profile_ibfk_1")
}

model User {
  id      Int      @id @default(autoincrement())
  name    String?  @db.VarChar(255)
  email   String   @unique(map: "email") @db.VarChar(255)
  Post    Post[]
  Profile Profile?
}
```

-   **Baseline your database (read more)**
-   **Installing prisma client**

```jsx
npm install @prisma/client
```

**⇒ Each time you change the schema and run following command**

```jsx
npx prisma generate
```

-   **Query database and Evolve your schema (more)**

## 2. FakeApi Using axios

```jsx
export const fakeApi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
};
```
