interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuSection {
  sectionName: string;
  items: MenuItem[];
}

interface Menu {
  sections: MenuSection[];
}

function createMenu(): Menu {
  const appetizers: MenuItem[] = [
    { name: 'Spinach and Artichoke Dip', description: 'Creamy dip with spinach, artichokes, and cheese', price: 9.99 },
    { name: 'Buffalo Wings', description: 'Crispy chicken wings with buffalo sauce', price: 11.99 },
    { name: 'Bruschetta', description: 'Toasted bread topped with tomatoes, garlic, and basil', price: 8.99 },
  ];

  const entrees: MenuItem[] = [
    { name: 'Steak Frites', description: 'Grilled sirloin steak with french fries', price: 24.99 },
    { name: 'Chicken Alfredo', description: 'Creamy pasta with grilled chicken', price: 17.99 },
    { name: 'Salmon Teriyaki', description: 'Grilled salmon with teriyaki glaze and vegetables', price: 19.99 },
  ];

  const desserts: MenuItem[] = [
    { name: 'Cheesecake', description: 'Classic New York-style cheesecake', price: 7.99 },
    { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center', price: 8.99 },
    { name: 'Tiramisu', description: 'Italian dessert with layers of ladyfingers and mascarpone cheese', price: 9.99 },
  ];

  const sections: MenuSection[] = [
    { sectionName: 'Appetizers', items: appetizers },
    { sectionName: 'Entrees', items: entrees },
    { sectionName: 'Desserts', items: desserts },
  ];

  return { sections };
}

console.log(createMenu());