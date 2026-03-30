"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  Filter,
  ChevronDown,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

type CategoryKey =
  | "BREEDERS"
  | "KOI VARIETY"
  | "POND SUPPLIES"
  | "POND FILTRATION"
  | "KOI FOOD"
  | "KOI MEDICATIONS"
  | "POND TREATMENTS";

const categorySubItems: Record<CategoryKey, string[]> = {
  BREEDERS: ["Dainichi", "Isa", "Sakai FF", "Omosako", "Marudo", "Oase"],
  "KOI VARIETY": [
    "Kohaku",
    "Showa",
    "Sanke",
    "Shiro Utsuri",
    "Ogon",
    "Asagi",
    "Butterfly Koi",
    "Tancho",
  ],
  "POND SUPPLIES": ["Nets", "Pond Liners", "Pumps", "Accessories"],
  "POND FILTRATION": ["Filter Systems", "UV Sterilizers", "Bio Media"],
  "KOI FOOD": ["Floating Food", "Sinking Food", "Color Enhancing", "Growth Formula"],
  "KOI MEDICATIONS": [
    "Parasite Treatment",
    "Bacterial Treatment",
    "Wound Treatment",
  ],
  "POND TREATMENTS": [
    "Algae Control",
    "Water Conditioner",
    "Beneficial Bacteria",
  ],
};

interface Product {
  id: number;
  name: string;
  variety: string;
  breeder: string;
  price: number;
  category: CategoryKey;
  image: string;
  tag?: string;
}

const allProducts: Product[] = [
  // Koi fish
  { id: 1, name: "Kohaku by Dainichi (35cm)", variety: "Kohaku", breeder: "Dainichi", price: 850, category: "KOI VARIETY", image: "/assets/images/koi_closeup.png", tag: "NEW" },
  { id: 2, name: "Showa Sanshoku by Isa (42cm)", variety: "Showa", breeder: "Isa", price: 1200, category: "KOI VARIETY", image: "/assets/images/koi_showa.png", tag: "NEW" },
  { id: 3, name: "Taisho Sanke by Sakai FF (38cm)", variety: "Sanke", breeder: "Sakai FF", price: 950, category: "KOI VARIETY", image: "/assets/images/koi_sanke.png" },
  { id: 4, name: "Omosako Shiro Utsuri (40cm)", variety: "Shiro Utsuri", breeder: "Omosako", price: 1050, category: "KOI VARIETY", image: "/assets/images/koi_closeup.png" },
  { id: 5, name: "Marudo Tancho Kohaku (36cm)", variety: "Tancho", breeder: "Marudo", price: 1350, category: "KOI VARIETY", image: "/assets/images/koi_sanke.png", tag: "PREMIUM" },
  { id: 6, name: "Dainichi Ogon (30cm)", variety: "Ogon", breeder: "Dainichi", price: 680, category: "KOI VARIETY", image: "/assets/images/koi_showa.png" },
  { id: 7, name: "Butterfly Koi Assorted (25cm)", variety: "Butterfly Koi", breeder: "Isa", price: 420, category: "KOI VARIETY", image: "/assets/images/koi_closeup.png", tag: "POPULAR" },
  { id: 8, name: "Asagi by Marudo (33cm)", variety: "Asagi", breeder: "Marudo", price: 780, category: "KOI VARIETY", image: "/assets/images/koi_showa.png" },
  // Food
  { id: 9, name: "Premium Koi Floating Food 5kg", variety: "Floating Food", breeder: "KOBE KOI", price: 85, category: "KOI FOOD", image: "/assets/images/water_caustics.png" },
  { id: 10, name: "Color Enhancing Koi Pellets 3kg", variety: "Color Enhancing", breeder: "KOBE KOI", price: 65, category: "KOI FOOD", image: "/assets/images/water_caustics.png", tag: "BEST SELLER" },
  { id: 11, name: "Growth Formula Koi Food 5kg", variety: "Growth Formula", breeder: "KOBE KOI", price: 78, category: "KOI FOOD", image: "/assets/images/water_caustics.png" },
  // Filtration
  { id: 12, name: "Crystal Clear Pond Filter System", variety: "Filter Systems", breeder: "Oase", price: 450, category: "POND FILTRATION", image: "/assets/images/water_caustics.png" },
  { id: 13, name: "UV Sterilizer 36W Pond Clarifier", variety: "UV Sterilizers", breeder: "Oase", price: 220, category: "POND FILTRATION", image: "/assets/images/water_caustics.png" },
  { id: 14, name: "Bio Media Filter Balls 10L", variety: "Bio Media", breeder: "Oase", price: 45, category: "POND FILTRATION", image: "/assets/images/water_caustics.png" },
  // Supplies
  { id: 15, name: "Professional Koi Net 24 inch", variety: "Nets", breeder: "KOBE KOI", price: 55, category: "POND SUPPLIES", image: "/assets/images/water_lily.png" },
  { id: 16, name: "EPDM Pond Liner 10x15 ft", variety: "Pond Liners", breeder: "KOBE KOI", price: 320, category: "POND SUPPLIES", image: "/assets/images/water_lily.png" },
  // Medications
  { id: 17, name: "Koi Parasite Treatment 500ml", variety: "Parasite Treatment", breeder: "KOBE KOI", price: 38, category: "KOI MEDICATIONS", image: "/assets/images/water_caustics.png" },
  { id: 18, name: "Bacterial Infection Treatment 250ml", variety: "Bacterial Treatment", breeder: "KOBE KOI", price: 42, category: "KOI MEDICATIONS", image: "/assets/images/water_caustics.png" },
  // Pond Treatments
  { id: 19, name: "Algae Control Solution 1L", variety: "Algae Control", breeder: "Oase", price: 32, category: "POND TREATMENTS", image: "/assets/images/water_lily.png" },
  { id: 20, name: "Beneficial Bacteria Starter 500ml", variety: "Beneficial Bacteria", breeder: "KOBE KOI", price: 28, category: "POND TREATMENTS", image: "/assets/images/water_lily.png" },
];

// ── Cart Item ─────────────────────────────────────────────────────────────────

interface CartItem {
  product: Product;
  quantity: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ShopPage() {
  // Category filter state
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<CategoryKey | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState<number | null>(null);

  // Search
  const [search, setSearch] = useState("");

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Filter logic ──────────────────────────────────────────────────────────

  const filteredProducts = allProducts.filter((p) => {
    // Search filter
    if (search) {
      const q = search.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.variety.toLowerCase().includes(q) ||
        p.breeder.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    if (!activeCategory && !activeSubItem) return true;

    // Breeder filter: match by breeder name
    if (activeCategory === "BREEDERS" && activeSubItem) {
      return p.breeder === activeSubItem;
    }
    // Sub-item filter: match by variety
    if (activeSubItem) {
      return p.variety === activeSubItem;
    }
    // Category filter
    if (activeCategory) {
      return p.category === activeCategory;
    }
    return true;
  });

  // ── Cart logic ────────────────────────────────────────────────────────────

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Flash feedback
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 800);
  }

  function updateQuantity(productId: number, delta: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId: number) {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }

  // ── Category click handlers ───────────────────────────────────────────────

  function handleCategoryClick(cat: CategoryKey) {
    if (openDropdown === cat) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(cat);
    }
  }

  function handleSubItemClick(cat: CategoryKey, sub: string) {
    if (activeCategory === cat && activeSubItem === sub) {
      // Toggle off
      setActiveCategory(null);
      setActiveSubItem(null);
    } else {
      setActiveCategory(cat);
      setActiveSubItem(sub);
    }
    setOpenDropdown(null);
  }

  function handleShowAll(cat: CategoryKey) {
    if (activeCategory === cat && !activeSubItem) {
      setActiveCategory(null);
    } else {
      setActiveCategory(cat);
      setActiveSubItem(null);
    }
    setOpenDropdown(null);
  }

  function clearFilter() {
    setActiveCategory(null);
    setActiveSubItem(null);
    setSearch("");
  }

  const hasFilter = activeCategory || activeSubItem || search;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Top Main Nav Bar */}
      <header className="bg-slate-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <Link href="/">
                <img
                  src="/assets/images/Logo.jpg"
                  alt="Logo"
                  className="h-12 w-12 rounded-full object-cover border-2 border-orange-500"
                />
              </Link>
              <div>
                <Link
                  href="/"
                  className="text-xl font-bold tracking-wider hover:text-orange-400 transition-colors"
                >
                  Lemoyne KOBE KOI
                </Link>
                <p className="text-xs text-slate-400 font-light">
                  Premium Online Store
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-slate-800 text-sm text-white rounded-full pl-4 pr-10 py-2 border border-slate-700 focus:outline-none focus:border-orange-500 w-64 transition-all"
                />
                <Search
                  size={16}
                  className="absolute right-3 top-2.5 text-slate-400"
                />
              </div>
              <button
                onClick={() => setCartOpen(true)}
                className="text-slate-300 hover:text-white transition-colors relative"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
                {cartCount === 0 && (
                  <span className="absolute -top-2 -right-2 bg-slate-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sub Category Nav with Dropdowns */}
      <nav
        ref={dropdownRef}
        className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-8 overflow-x-auto md:overflow-visible py-4 scrollbar-hide">
            {(Object.keys(categorySubItems) as CategoryKey[]).map((cat) => (
              <li key={cat} className="shrink-0 relative">
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex items-center gap-1 text-sm font-extrabold tracking-wide transition-colors ${
                    activeCategory === cat
                      ? "text-orange-500"
                      : "text-slate-800 hover:text-cyan-700"
                  }`}
                >
                  {cat}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openDropdown === cat ? "rotate-180" : ""
                    } ${
                      activeCategory === cat
                        ? "text-orange-500"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {openDropdown === cat && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-[100]">
                    <button
                      onClick={() => handleShowAll(cat)}
                      className={`block w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors ${
                        activeCategory === cat && !activeSubItem
                          ? "bg-orange-50 text-orange-600"
                          : "text-slate-700 hover:bg-slate-50 hover:text-orange-500"
                      }`}
                    >
                      All {cat.charAt(0) + cat.slice(1).toLowerCase()}
                    </button>
                    <div className="border-t border-gray-100 my-1" />
                    {categorySubItems[cat].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => handleSubItemClick(cat, sub)}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          activeSubItem === sub
                            ? "bg-orange-50 text-orange-600 font-semibold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-orange-500"
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Active Filter Bar */}
      {hasFilter && (
        <div className="bg-orange-50 border-b border-orange-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-500">Filtering:</span>
              {activeCategory && (
                <span className="bg-white px-3 py-1 rounded-full border border-orange-300 text-orange-600 font-semibold">
                  {activeCategory}
                  {activeSubItem && ` → ${activeSubItem}`}
                </span>
              )}
              {search && (
                <span className="bg-white px-3 py-1 rounded-full border border-orange-300 text-orange-600 font-semibold">
                  &quot;{search}&quot;
                </span>
              )}
              <span className="text-slate-400">
                ({filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""})
              </span>
            </div>
            <button
              onClick={clearFilter}
              className="text-sm text-orange-500 hover:text-orange-700 font-semibold flex items-center gap-1"
            >
              <X size={14} />
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <div className="bg-slate-900 relative overflow-hidden h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/assets/images/hero_bg.png"
            alt="Koi Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Select Your Living Jewel
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto drop-shadow">
            Discover our premium collection of imported Japanese Koi and
            high-end pond supplies.
          </p>
        </div>
      </div>

      <section className="bg-orange-50 border-y border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm sm:text-base font-semibold tracking-wide text-orange-700">
            正在准备中，暂时不开放销售，敬请期待
          </p>
          <p className="mt-1 text-center text-xs sm:text-sm text-orange-600">
            We are preparing the shop. Sales are temporarily unavailable. Stay tuned.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters Desktop */}
          <aside className="w-full lg:w-1/4 hidden lg:block">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-slate-800 font-bold border-b pb-4">
                <Filter size={20} className="text-orange-500" />
                <h2 className="text-lg uppercase tracking-wide">Filters</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-3">
                    Availability
                  </h3>
                  <label className="flex items-center space-x-2 text-sm text-slate-600 mb-2 cursor-pointer hover:text-orange-500">
                    <input
                      type="checkbox"
                      className="rounded text-orange-500 focus:ring-orange-500"
                      defaultChecked
                    />
                    <span>In Stock ({allProducts.length})</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer hover:text-orange-500">
                    <input
                      type="checkbox"
                      className="rounded text-orange-500 focus:ring-orange-500"
                    />
                    <span>Out of Stock (0)</span>
                  </label>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    Price Range
                  </h3>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                    <span className="text-slate-400">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    Breeders
                  </h3>
                  {categorySubItems["BREEDERS"].map((breeder) => (
                    <label
                      key={breeder}
                      className="flex items-center space-x-2 text-sm text-slate-600 mb-2 cursor-pointer hover:text-orange-500"
                    >
                      <input
                        type="checkbox"
                        className="rounded text-orange-500 focus:ring-orange-500"
                        checked={
                          activeCategory === "BREEDERS" &&
                          activeSubItem === breeder
                        }
                        onChange={() => {
                          if (
                            activeCategory === "BREEDERS" &&
                            activeSubItem === breeder
                          ) {
                            setActiveCategory(null);
                            setActiveSubItem(null);
                          } else {
                            setActiveCategory("BREEDERS");
                            setActiveSubItem(breeder);
                          }
                        }}
                      />
                      <span>{breeder}</span>
                    </label>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    Koi Variety
                  </h3>
                  {categorySubItems["KOI VARIETY"].map((variety) => (
                    <label
                      key={variety}
                      className="flex items-center space-x-2 text-sm text-slate-600 mb-2 cursor-pointer hover:text-orange-500"
                    >
                      <input
                        type="checkbox"
                        className="rounded text-orange-500 focus:ring-orange-500"
                        checked={
                          activeCategory === "KOI VARIETY" &&
                          activeSubItem === variety
                        }
                        onChange={() => {
                          if (
                            activeCategory === "KOI VARIETY" &&
                            activeSubItem === variety
                          ) {
                            setActiveCategory(null);
                            setActiveSubItem(null);
                          } else {
                            setActiveCategory("KOI VARIETY");
                            setActiveSubItem(variety);
                          }
                        }}
                      />
                      <span>{variety}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                {activeCategory
                  ? activeSubItem
                    ? activeSubItem
                    : activeCategory.charAt(0) +
                      activeCategory.slice(1).toLowerCase()
                  : "All Products"}
                <span className="text-base font-normal text-slate-400 ml-2">
                  ({filteredProducts.length})
                </span>
              </h2>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Sort by:</span>
                <select className="border-gray-200 rounded-md py-1 border focus:ring-orange-500 focus:border-orange-500 bg-white">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-slate-400 mb-4">
                  No products found
                </p>
                <button
                  onClick={clearFilter}
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden bg-slate-100 p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.tag && (
                        <div
                          className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded shadow-sm ${
                            product.tag === "PREMIUM"
                              ? "bg-amber-500"
                              : product.tag === "POPULAR"
                                ? "bg-cyan-600"
                                : product.tag === "BEST SELLER"
                                  ? "bg-green-600"
                                  : "bg-orange-500"
                          }`}
                        >
                          {product.tag}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-semibold text-cyan-700 tracking-wider uppercase">
                          {product.breeder}
                        </p>
                        <p className="text-xs text-slate-400">
                          {product.variety}
                        </p>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-xl font-extrabold text-slate-900">
                          ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                        <button
                          onClick={() => addToCart(product)}
                          className={`px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform active:scale-95 ${
                            addedId === product.id
                              ? "bg-green-500 text-white scale-105"
                              : "bg-slate-900 text-white hover:bg-orange-500"
                          }`}
                        >
                          {addedId === product.id ? "✓ Added" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Cart Slide-out Panel */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setCartOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b bg-slate-900 text-white">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <ShoppingCart size={20} />
                Shopping Cart ({cartCount})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="hover:text-orange-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart
                    size={48}
                    className="mx-auto text-slate-300 mb-4"
                  />
                  <p className="text-slate-400 text-lg">Your cart is empty</p>
                  <p className="text-slate-300 text-sm mt-1">
                    Add some products to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-gray-100"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-contain rounded-lg bg-white p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-800 line-clamp-2">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-orange-600 font-bold mt-1">
                          ${item.product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, -1)
                            }
                            className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, 1)
                            }
                            className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() =>
                              removeFromCart(item.product.id)
                            }
                            className="ml-auto text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t px-6 py-5 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600 font-medium">Subtotal</span>
                  <span className="text-2xl font-extrabold text-slate-900">
                    ${cartTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg active:scale-[0.98]">
                  Checkout
                </button>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-full mt-2 text-sm text-slate-500 hover:text-slate-700 py-2"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <p>&copy; 2025 Lemoyne KOBE KOI. All Rights Reserved.</p>
          <p className="text-sm text-slate-500">
            Developed by{" "}
            <a
              href="https://puredigits.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              Pure Digits Inc.
            </a>
            {" "}|{" "}
            <a
              href="https://puredigits.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              PureDigits.us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
