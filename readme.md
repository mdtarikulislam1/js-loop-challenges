

# For Loop Practice Repository 🚀

এই repository টি আমি তৈরি করেছি আমার JavaScript fundamentals শক্ত করার জন্য।  
আমার logic অনেক সময় clear থাকে, কিন্তু loop দিয়ে implementation করতে সমস্যা হতো।  
তাই আমি সিদ্ধান্ত নিয়েছি **built-in method ব্যবহার না করে শুধু for loop দিয়ে problem solve করব**।

এই repo-তে সেই practice problems গুলোই রাখা হয়েছে।

---

## ✅ Problem 1: Print Numbers from 1 to 10

### 🧠 Problem Statement
for loop ব্যবহার করে 1 থেকে 10 পর্যন্ত সংখ্যা কনসোলে print করতে হবে।

### 💡 Explanation
- একটি loop চালানো হয়েছে 1 থেকে 10 পর্যন্ত
- প্রতি iteration-এ current number কনসোলে print করা হয়েছে

### 🧾 Code
javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


---

## ✅ Problem 2: Print Even Numbers from 1 to 20

### 🧠 Problem Statement

1 থেকে 20 পর্যন্ত সব even (জোড়) সংখ্যা কনসোলে print করতে হবে।

### 💡 Explanation

* loop চালানো হয়েছে 0 থেকে 20 পর্যন্ত
* প্রতিটি সংখ্যাকে `% 2 === 0` দিয়ে check করা হয়েছে
* যেগুলো even, সেগুলো print করা হয়েছে

### 🧾 Code

```javascript
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

## ✅ Problem 3: Find the Sum of an Array Using Loop

### 🧠 Problem Statement

একটি array এর সব সংখ্যার যোগফল বের করতে হবে for loop ব্যবহার করে।

### 💡 Explanation

* প্রথমে `sumNumber` নামে একটি variable নেওয়া হয়েছে
* loop দিয়ে array এর প্রতিটি element access করা হয়েছে
* প্রতিটি element যোগ করা হয়েছে `sumNumber` এর সাথে

### 🧾 Code

```javascript
const numbers = [5, 85, 100, 10];

let sumNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  sumNumber += numbers[i];
}

console.log(sumNumber);
```

---

## ✅ Problem 4: Print All Elements of an Array

### 🧠 Problem Statement

একটি array এর সব element for loop ব্যবহার করে কনসোলে print করতে হবে।

### 💡 Explanation

* loop চালানো হয়েছে array length পর্যন্ত
* প্রতিটি index থেকে element বের করে print করা হয়েছে

### 🧾 Code

```javascript
const numbers2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}
```

---

## 🎯 Goal of This Repository

* JavaScript fundamentals strong করা
* Logic → Implementation gap কমানো
* Loop নিয়ে confidence build করা



