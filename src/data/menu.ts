import { MenuCategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        id: "s1",
        name: "Smoked Salmon Blinis",
        description:
          "House-smoked loch salmon on warm blinis with crème fraîche, dill, and capers",
        price: "£9.50",
        dietary: ["gluten-free"],
        featured: true,
      },
      {
        id: "s2",
        name: "Wild Mushroom Soup",
        description:
          "Foraged forest mushrooms blended with cream and fresh thyme, served with crusty sourdough",
        price: "£7.50",
        dietary: ["vegetarian"],
      },
      {
        id: "s3",
        name: "Potted Duck Rillettes",
        description:
          "Slow-cooked duck with brandy and herbs, served with toasted brioche and cornichons",
        price: "£10.00",
      },
      {
        id: "s4",
        name: "Garden Pea & Mint Bruschetta",
        description:
          "Crushed garden peas with fresh mint, ricotta, and lemon zest on grilled sourdough",
        price: "£7.00",
        dietary: ["vegetarian", "vegan"],
      },
      {
        id: "s5",
        name: "Crispy Whitebait",
        description:
          "Lightly floured lake whitebait, deep-fried golden, served with tartare sauce and lemon",
        price: "£8.50",
      },
      {
        id: "s6",
        name: "Beetroot & Goat's Cheese Salad",
        description:
          "Roasted heritage beetroot, whipped goat's cheese, candied walnuts, and honey dressing",
        price: "£8.00",
        dietary: ["vegetarian", "gluten-free"],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        id: "m1",
        name: "Pan-Seared Lake Trout",
        description:
          "Freshwater trout fillet, lemon caper butter, samphire, and crushed new potatoes",
        price: "£19.50",
        dietary: ["gluten-free"],
        featured: true,
      },
      {
        id: "m2",
        name: "Slow-Braised Venison Pie",
        description:
          "Rich venison in red wine, encased in golden shortcrust pastry with root vegetable mash",
        price: "£22.00",
      },
      {
        id: "m3",
        name: "Beer-Battered Haddock",
        description:
          "Hand-battered North Sea haddock, triple-cooked chips, mushy peas, and tartare sauce",
        price: "£17.50",
      },
      {
        id: "m4",
        name: "Wild Mushroom & Truffle Risotto",
        description:
          "Arborio rice with foraged mushrooms, white truffle oil, parmesan, and fresh herbs",
        price: "£16.00",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        id: "m5",
        name: "Dry-Aged Rib-Eye Steak",
        description:
          "28-day aged rib-eye, served with béarnaise sauce, watercress, and hand-cut chips",
        price: "£32.00",
        dietary: ["gluten-free"],
      },
      {
        id: "m6",
        name: "Roasted Chicken Supreme",
        description:
          "Free-range chicken breast, creamed leeks, baby carrots, and a tarragon jus",
        price: "£18.50",
        dietary: ["gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        id: "d1",
        name: "Sticky Toffee Pudding",
        description:
          "Warm date sponge, butterscotch toffee sauce, and vanilla bean ice cream",
        price: "£7.50",
        dietary: ["vegetarian"],
        featured: true,
      },
      {
        id: "d2",
        name: "Cranachan",
        description:
          "Traditional Scottish dessert — whipped cream, toasted oats, raspberries, and whisky honey",
        price: "£7.00",
        dietary: ["vegetarian"],
      },
      {
        id: "d3",
        name: "Dark Chocolate Fondant",
        description:
          "Rich 70% dark chocolate, molten centre, served with salted caramel ice cream",
        price: "£8.00",
        dietary: ["vegetarian"],
      },
      {
        id: "d4",
        name: "Lemon Posset",
        description:
          "Silky lemon cream set in a glass with shortbread and fresh berry compote",
        price: "£6.50",
        dietary: ["vegetarian", "gluten-free"],
      },
      {
        id: "d5",
        name: "Artisan Cheese Board",
        description:
          "Selection of three Scottish cheeses, oatcakes, chutney, grapes, and candied walnuts",
        price: "£11.00",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        id: "dr1",
        name: "The Lakeside Sling",
        description:
          "House gin, elderflower cordial, cucumber, fresh lime, and sparkling water",
        price: "£11.50",
        dietary: ["vegan", "gluten-free"],
        featured: true,
      },
      {
        id: "dr2",
        name: "Heather Gin & Tonic",
        description:
          "Local heather gin, premium tonic water, dried heather, and a twist of lemon",
        price: "£9.50",
        dietary: ["vegan", "gluten-free"],
      },
      {
        id: "dr3",
        name: "Old Fashioned",
        description:
          "Aged Scotch whisky, Angostura bitters, demerara sugar, and an orange peel",
        price: "£12.00",
        dietary: ["vegan", "gluten-free"],
      },
      {
        id: "dr4",
        name: "Loch Amber Ale",
        description:
          "Local craft amber ale, brewed in the valley — malty with notes of toffee and pine",
        price: "£5.80",
        dietary: ["vegan"],
      },
      {
        id: "dr5",
        name: "House Red Wine",
        description:
          "Rioja Reserva, Spain — rich and full-bodied with dark fruit and oak. By the glass",
        price: "£7.50",
        dietary: ["vegan"],
      },
      {
        id: "dr6",
        name: "House White Wine",
        description:
          "Marlborough Sauvignon Blanc, New Zealand — crisp, zesty, with citrus and elderflower. By the glass",
        price: "£7.00",
        dietary: ["vegan"],
      },
    ],
  },
];
