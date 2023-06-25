# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

## The problem

"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. **Your task is to add the new feature to our system so that we can begin selling a new category of items.** First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

**We have recently signed a supplier of conjured items. This requires an update to our system:**

- **“Conjured” items degrade in Quality twice as fast as normal items**

Feel free to **make any changes to the UpdateQuality method** and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."

## Approach

First of all I highlighted in bold the sections of the problem that detail what is being asked. I then went through the code and made comments in sudo code to understand what was happening.

I then added green passing tests for the exising functionality (commit 4fe53349debd61ee42e2494d58a126ef7d2110b8). Now I can add code and refactor and know I have not broken anything.

I then wrote out the descriptions of the tests I would need for the "Conjured" items - based on the existing requirements I determined that if they should degrade in quality twice as fast as normal items then when sellIn is greater than 0 they should degrade by 2 and when sellIn is less than 0 they should degrade by 4. The quality should still never be negative.

```javascript
it("should degrade the quality of conjured items twice as fast before sellIn is 0", function() {})
it("should degrade the quality of conjured items by 4 when sellIn is negative", function() {})
it("quality of conjured items should not be negative", function() {})
```

I initially added code in line with the existing code to pass these tests (commit 9b6b6eaab7f4b9a7c284386f3051accfae831a6c). Following the red-green-refactor - I have refactored the code afterwards, to make it easier in future to update the system and add new items.

Started to refactor repeated code. Change all lines where quality incremented into function.
```
incrementQuality(index, amount) {
        this.items[index].quality += amount;
    }
```

Then added checking if greater than 50 or less than 0 and removed these ifs.
