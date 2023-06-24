const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
    it("should foo", function () {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
    });

    it("should return quality and sellIn degraded by 1", function () {
        const gildedRose = new Shop([new Item("foo", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(4);
    });

    it("should degrade quality by 2 if sellIn is less than 0", function () {
        const gildedRose = new Shop([new Item("foo", -1, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
        expect(items[0].sellIn).toBe(-2);
        expect(items[0].quality).toBe(3);
    });

    it("should not return quality less than 0", function () {
        const gildedRose = new Shop([new Item("foo", -1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("foo");
        expect(items[0].sellIn).toBe(-2);
        expect(items[0].quality).toBe(0);
    });

    it("should increase quality for aged brie", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Aged Brie");
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(6);
    });

    it("should not increase quality above 50", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Aged Brie");
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(50);
    });

    it("SellIn and quality of Sulfuras does not change", function () {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(0);
    });

    it("increases quality of backstage pass by 1 with 11 days to go", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(10);
        expect(items[0].quality).toBe(6);
    });

    it("increases quality of backstage pass by 2 with 10 days to go", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(7);
    });

    it("increases quality of backstage pass by 3 with 5 days to go", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(8);
    });

    it("reduced quality of backstage pass to 0 when sellIn is negative", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].sellIn).toBe(-2);
        expect(items[0].quality).toBe(0);
    });
});
