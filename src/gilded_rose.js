class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        // for each item in the shop.items array
        for (let i = 0; i < this.items.length; i++) {
            // if item's name is not 'Aged Brie' or 'Backstage passes to a TAFKAL80ETC concert'
            // if item's quality > 0
            // if item's name is not 'Sulfuras, Hand of Ragnaros'
            // then quality -= 1
            // else (if item's name IS 'Aged Brie' or 'Backstage passes to a TAFKAL80ETC concert')
            // if quality < 50
            // then quality += 1
            // also if name is 'Backstage passes to a TAFKAL80ETC concert'
            // then if items sellIn < 11
            // if quality < 50 then quality += 1
            // also if items sellIn < 6 then quality += 1 again
            // also if name is NOT 'Sulfuras, Hand of Ragnaros'
            // then items sellIn -= 1
            // also if items sellIn < 0 - after sellin date
            // if name is not 'Aged Brie'
            // if name is not 'Backstage passes to a TAFKAL80ETC concert'
            // if quality > 0 and name is not 'Sulfuras, Hand of Ragnaros'
            // then quality -= 1
            // else if name is 'Backstage passes to a TAFKAL80ETC concert' then quality = 0
            // else if name is 'Aged Brie' and quality < 50 then quality += 1
            if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name == "Conjured") {
                        this.items[i].quality = this.items[i].quality - 2;
                    } else if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1;
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1;
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != "Aged Brie") {
                    if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name == "Conjured") {
                                if (this.items[i].quality > 2) {
                                    this.items[i].quality = this.items[i].quality - 2;
                                } else {
                                    this.items[i].quality = this.items[i].quality - this.items[i].quality;
                                }
                            } else if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
            }
        }

        return this.items;
    }
}

module.exports = {
    Item,
    Shop,
};
