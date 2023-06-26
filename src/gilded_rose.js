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
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case "Sulfuras, Hand of Ragnaros":
                    break;
                case "Aged Brie":
                    this.updateItem(i, 1);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    if (this.items[i].sellIn < 0) {
                        this.updateItem(i, -this.items[i].quality);
                    } else if (this.items[i].sellIn <= 5) {
                        this.updateItem(i, 3);
                    } else if (this.items[i].sellIn <= 10) {
                        this.updateItem(i, 2);
                    } else {
                        this.updateItem(i, 1);
                    }
                    break;
                case "Conjured":
                    this.items[i].sellIn > 0 ? this.updateItem(i, -2) : this.updateItem(i, -4);
                    break;
                default:
                    this.items[i].sellIn > 0 ? this.updateItem(i, -1) : this.updateItem(i, -2);
            }
            return this.items;
        }
    }

    updateItem(index, amount) {
        this.items[index].quality + amount > 50 
            ? (this.items[index].quality = 50) 
            : this.items[index].quality + amount < 0 
                ? (this.items[index].quality = 0) 
                : (this.items[index].quality += amount);

        this.items[index].sellIn--;
    }
}

module.exports = {
    Item,
    Shop,
};
