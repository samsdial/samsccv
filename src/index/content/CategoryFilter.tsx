import { useState, useEffect } from "react";

const items = [
  { id: 1, category: "Next", content: "Contenido de Next.js" },
  { id: 2, category: "React", content: "Contenido de React.js" },
  { id: 3, category: "Storybook", content: "Contenido de Storybook" },
  { id: 4, category: "Next", content: "Otro contenido de Next.js" },
  { id: 5, category: "React", content: "Otro contenido de React.js" },
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => item.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  return (
    <div className="container text-center">
      <div className="btn-group mb-3 " role="group" aria-label="Categorías">
        {["All", "Next", "React", "Storybook"].map((category) => (
          <button
            key={category}
            type="button"
            className={`btn btn-secondary ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.category}</h5>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
