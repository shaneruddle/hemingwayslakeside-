export interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: ("vegan" | "vegetarian" | "gluten-free")[];
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItemType[];
}

export interface EventType {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl?: string;
  ticketUrl?: string;
  isFeatured?: boolean;
}

export interface GalleryImageType {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "food" | "drinks" | "venue" | "events";
}
