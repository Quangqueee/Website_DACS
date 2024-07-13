# AdminDACS Hướng dẫn cài đặt

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
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZmxleGlibGUtd29tYmF0LTkwLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_sVMDCcsZ85HHVZgyk80vjWqLF3UGToSrkboWkQGqlN

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dbbuff0rl

MONGODB_URL=mongodb+srv://Borcelle_Admin:quangque@cluster0.jcfzjjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51Pc6LYGEx2DXOitBwWZ6SVv93LJlchVCF69fbAKVpaTf7G5G4laXVUMChG0VUMCWolnDGKUwThG6vJRYHEA24FCC00kJwNqSYh
NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_51Pc6LYGEx2DXOitBGj5BiWPxrn95H6ovacuirD5FLWj9bC1kVt4ias0hhT2dhXSQUuG39gLNpWkkThXLJCengyj600n4siouUa



ECOMMERCE_STORE_URL=http://localhost:3001

STRIPE_WEBHOOK_SECRET= whsec_230cfb902e92ce61b762c7d7ade151949fcf8f49d3a3538af3a485020b3aadcf
```

## Bước 4. Chạy code bằng lệnh
```bash
npm run dev
```
