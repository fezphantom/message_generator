# Mad Lib Generator (JavaScript)

## 📌 Overview
This project is a simple **Mad Libs generator** built in JavaScript.  
It replaces placeholders like `(adjective)`, `(verb)`, and `(noun)` in a story template with random words from predefined lists.

Each time you run the program, it generates a new and unique story.

---

## 🚀 Features
- Randomly selects words from arrays of:
  - Adjectives
  - Verbs
  - Nouns
- Replaces placeholders in a story string
- Generates different outputs every run
- Supports multiple story templates

---

## 🧠 How It Works

This project uses a factory function called madlibGenerator that creates an object for generating Mad Lib stories.

The object contains:

+ A message template with placeholders like (adjective), (verb), and (noun)
+ Arrays of random words for each category
+ A generate() method that builds the final story

```javascript
madlibGenerator(message)