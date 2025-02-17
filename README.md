# React SOLID Principles Demo

## Overview
A demonstration project showcasing **SOLID principles** implementation in **React** with **TypeScript**. This project provides practical examples of how to apply **SOLID principles** in modern React applications.

## Technologies Used
- **React 18**
- **TypeScript**
- **Vite**
- **Jest + React Testing Library**
- **Tailwind CSS**

## SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)
📂 **Located in** `SRP`

- Demonstrates **component separation of concerns**
- Examples include `ProductList` and `Filter` components

### 2. Open/Closed Principle (OCP)
📂 **Located in** `OCP`

- Examples:
  - `BadButton.tsx`
  - `GoodButton.tsx`

### 3. Liskov Substitution Principle (LSP)
📂 **Located in** `LSP`

- Shows correct and incorrect implementations of `SearchInput` components
- Includes practical examples of **component substitution**

### 4. Interface Segregation Principle (ISP)
📂 **Located in** `ISP`

- Demonstrates **proper component interface design**
- Examples of both **good and bad implementations**

### 5. Dependency Inversion Principle (DIP)
📂 **Located in** `DIP`

- **Authentication component examples**
- Shows **proper dependency management**

## Testing
✅ **Tests are written using Jest and React Testing Library**. Key test files:

- `ProductItem.test.tsx`
- `SearchInput.test.tsx`
- `DIPIndex.test.tsx`

## Getting Started

### 📂 Project Structure
```
📦 react-solid-demo
├── src
│   ├── components
│   │   ├── SRP
│   │   ├── OCP
│   │   ├── LSP
│   │   ├── ISP
│   │   ├── DIP
│   ├── tests
│   │   ├── ProductItem.test.tsx
│   │   ├── SearchInput.test.tsx
│   │   ├── DIPIndex.test.tsx
│   ├── styles
│   ├── App.tsx
│   ├── main.tsx
├── package.json
├── README.md
```

## License
This project is licensed under the **MIT License**.

