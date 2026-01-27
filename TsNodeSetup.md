# TypeScript + Node.js — Enterprise-Ready Setup (Detailed Notes)

This document explains, in a **step-by-step and enterprise-aligned manner**, how to create, develop, build, and run a **TypeScript + Node.js backend project**.  
The approach strictly separates **development tooling** from **production runtime**, which is mandatory in real-world systems.

----

## 1. Initialize Node.js Project

Start by initializing a Node.js project with default values.  
This creates the `package.json` file, which is the backbone of dependency and script management.

```bash
npm init -y
````

Result:

* `package.json` is created
* Project metadata is initialized

---

## 2. Install TypeScript and Development Runtime

Install **TypeScript** and **tsx** as development dependencies.

```bash
npm install -D typescript tsx
```

### Purpose

* `typescript` → static typing, compile-time safety
* `tsx` → fast development-time execution and watch mode for TypeScript

These tools are **development-only** and must never be used in production.

---

## 3. Generate TypeScript Configuration

Create the default TypeScript configuration file.

```bash
npx tsc --init
```

This generates `tsconfig.json`.

---

## 4. Configure `tsconfig.json` (Enterprise-Safe)

Replace the contents of `tsconfig.json` with the configuration below:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",

    "rootDir": "src",
    "outDir": "dist",

    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "forceConsistentCasingInFileNames": true,

    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### Explanation

* `target: ES2020` → stable JavaScript output for modern Node.js
* `module: CommonJS` → widely supported backend module system
* `rootDir / outDir` → clean separation of source and build output
* `strict` family options → prevent runtime bugs at compile time
* `esModuleInterop` → smooth interop with Node.js ecosystem

---

## 5. Create Project Folder Structure

Create the required folders:

* **Create a folder named `src`** → contains all TypeScript source files
* **Create a folder named `dist`** → contains compiled JavaScript output

```text
project-root/
 ├── src/
 ├── dist/
 ├── package.json
 └── tsconfig.json
```

---

## 6. Create Entry File

Inside the `src` folder:

* **Create a file named `index.ts`**

This will act as the application entry point.

---

## 7. Write Initial TypeScript Code

Add the following code to `src/index.ts`:

```ts
const message: string = "TypeScript + Node is ready";
console.log(message);
```

Purpose:

* Confirms TypeScript compilation
* Validates runtime execution

---

## 8. Install Node.js Type Definitions

Install Node.js type definitions:

```bash
npm install -D @types/node
```

### Why this is mandatory

TypeScript does not know about Node.js APIs by default.
This package provides type definitions for:

* `process`
* `Buffer`
* `fs`, `http`, `path`
* Node-specific globals and interfaces

Without this, TypeScript compilation will fail for Node APIs.

---

## 9. Create a Basic Node.js HTTP Server

Replace the content of `src/index.ts` with the following:

```ts
import http from "node:http";

http.createServer((_req, res) => {
  res.end("Node + TypeScript server running");
}).listen(3000);
```

This demonstrates:

* Node core module usage
* Type-safe imports
* Backend runtime behavior

---

## 10. Development Execution (No Nodemon)

Use `tsx` for development with automatic reload:

```bash
tsx watch src/index.ts
```

Key points:

* No configuration files required
* Fast reloads
* TypeScript runs only in development

---

## 11. Build for Production

Compile TypeScript into JavaScript:

```bash
npx tsc
```

Output:

* JavaScript files generated inside the `dist/` folder
* No TypeScript remains in production

---

## 12. Run Compiled Code (Production Style)

```bash
node dist/index.js
```

This simulates how production servers execute the application.

---

## 13. Install PM2 (Production Infrastructure)

PM2 is a **process manager**, not a project dependency.

Install it globally:

```bash
npm install -g pm2
```

PM2 responsibilities:

* Keep application alive
* Restart on crashes
* Manage multiple instances
* Handle logs

---

## 14. PM2 Common Commands

### Stop applications

```bash
pm2 stop my-app
pm2 stop all
```

### Delete applications

```bash
pm2 delete my-app
```

### View running applications

```bash
pm2 list
```

---

## 15. Recommended Scripts (package.json)

```json
"scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "typecheck": "tsc --noEmit",
    "prod": "pm2 start dist/index.js --name my-app",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

---

## 16. Enterprise Rules (Very Important)

* TypeScript runs **only during development**
* JavaScript runs **only in production**
* `tsx` is for developers, not servers
* PM2 manages processes, not builds
* Never install PM2 as a project dependency

---

## Final Summary

**Development**

```bash
tsx watch src/index.ts
```

**Validation**

```bash
tsc --noEmit
```

**Build**

```bash
tsc
```

**Production**

```bash
node dist/index.js
# or
pm2 start dist/index.js
```

This setup is **enterprise-ready, scalable, CI/CD-friendly, and production-safe**.
