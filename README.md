# Password Manager in Local Storage

🔐 একটি সিম্পল পাসওয়ার্ড ম্যানেজার অ্যাপ্লিকেশন যা ব্রাউজারের লোকাল স্টোরেজ ব্যবহার করে পাসওয়ার্ড সংরক্ষণ ও পরিচালনা করে।

## 📌 পরিচিতি

"Password Manager in Local Storage" একটি হালকা ও সরল ওয়েব অ্যাপ্লিকেশন যা React, Vite, এবং Tailwind CSS ব্যবহার করে তৈরি করা হয়েছে। এই অ্যাপ্লিকেশনটি ব্যবহারকারীদের পাসওয়ার্ড নিরাপদে ব্রাউজারের লোকাল স্টোরেজে সংরক্ষণ, সম্পাদনা ও মুছে ফেলার সুবিধা প্রদান করে।

## 🚀 বৈশিষ্ট্যসমূহ

- **লোকাল স্টোরেজে পাসওয়ার্ড সংরক্ষণ**: পাসওয়ার্ডগুলি ব্রাউজারের লোকাল স্টোরেজে নিরাপদে সংরক্ষিত হয়।
- **CRUD অপারেশন**: পাসওয়ার্ড তৈরি, পড়া, আপডেট ও মুছে ফেলার সুবিধা।
- **রেসপন্সিভ ডিজাইন**: বিভিন্ন ডিভাইসে সঠিকভাবে প্রদর্শিত হয়।
- **সহজ কাস্টমাইজেশন**: সহজে থিম ও স্টাইল পরিবর্তন করার সুবিধা।

## 📂 ফাইল স্ট্রাকচার

```
password-menejer-in-local-Stories/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── components/
│   │   └── PasswordManager.jsx
│   └── styles/
│       └── tailwind.css
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

- `public/index.html`: মূল HTML ফাইল যা অ্যাপ্লিকেশনের কাঠামো ধারণ করে।
- `src/App.jsx`: রিয়্যাক্ট অ্যাপ্লিকেশনের মূল কম্পোনেন্ট।
- `src/components/PasswordManager.jsx`: পাসওয়ার্ড ম্যানেজার কম্পোনেন্ট যা পাসওয়ার্ড পরিচালনা করে।
- `src/styles/tailwind.css`: Tailwind CSS এর কাস্টমাইজড স্টাইল ফাইল।
- `.gitignore`: Git এর জন্য অগ্রাহ্য ফাইল।
- `package.json`: প্রকল্পের ডিপেন্ডেন্সি ও স্ক্রিপ্ট।
- `postcss.config.js`: PostCSS কনফিগারেশন।
- `tailwind.config.js`: Tailwind CSS কনফিগারেশন।
- `vite.config.js`: Vite কনফিগারেশন।

## 🛠️ ইনস্টলেশন ও রান

1. রিপোজিটরি ক্লোন করুন:

   ```bash
   git clone https://github.com/mir-md-masum-billah/password-menejer-in-local-Stories.git
   ```

2. প্রজেক্ট ফোল্ডারে যান:

   ```bash
   cd password-menejer-in-local-Stories
   ```

3. ডিপেন্ডেন্সি ইনস্টল করুন:

   ```bash
   npm install
   ```

4. অ্যাপ্লিকেশন চালু করুন:

   ```bash
   npm run dev
   ```

5. ব্রাউজারে `http://localhost:5173` এ গিয়ে অ্যাপ্লিকেশনটি দেখুন।

## 🎨 কাস্টমাইজেশন

- **থিম পরিবর্তন**: `src/styles/tailwind.css` ফাইলে গিয়ে থিমের বিভিন্ন অংশ কাস্টমাইজ করতে পারেন। উদাহরণস্বরূপ, ব্যাকগ্রাউন্ড কালার পরিবর্তন করতে:

  ```css
  body {
    background-color: #f0f0f0;
  }
  ```

- **কম্পোনেন্ট কাস্টমাইজেশন**: `src/components/PasswordManager.jsx` ফাইলে গিয়ে পাসওয়ার্ড ম্যানেজার কম্পোনেন্টের লজিক ও UI কাস্টমাইজ করতে পারেন।

## 📄 লাইসেন্স

এই প্রজেক্টটি [MIT লাইসেন্স](https://opensource.org/licenses/MIT) এর অধীনে লাইসেন্সপ্রাপ্ত।

## 📢 অবদান

আপনি যদি এই প্রজেক্টে অবদান রাখতে চান, তাহলে একটি Pull Request খুলুন বা Issues সেকশনে আপনার মতামত জানান।
