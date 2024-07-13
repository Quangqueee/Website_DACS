# AdminDACS Hướng dẫn cài đặt

## Lưu ý: Chạy trang Website bằng "http://localhost:3001"

## Bắt Đầu

## Yêu Cầu

Đảm bảo rằng bạn đã cài đặt các phần mềm sau trên máy tính của mình:
- Node.js
- npm (Trình quản lý gói Node)

## Cài Đặt

## Bước 1. Clone repository về máy tính:

```bash
git clone https://github.com/Quangqueee/AdminDACS.git
cd AdminDACS
```
## Bước 2 Cài đặt các Package
```bash
npm install
```
## Bước 3. Tạo file .env

Sau đó dán đoạn code này vào
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZWxlZ2FudC1lZWwtNi5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_RxqzmoeVA6GTkDIiQTs5T4zW4i5pGPLwb6T7hQNIyB

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_API_URL=http://localhost:3000/api

MONGODB_URL=mongodb+srv://Borcelle_Store:quangsot@cluster0.xxcqiwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

MONGODB_URL=mongodb+srv://Borcelle_Admin:quangque@cluster0.jcfzjjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## Bước 4. Chạy code bằng lệnh
```bash
npm run dev
```
