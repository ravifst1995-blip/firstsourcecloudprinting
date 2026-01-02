

import shopFloor from "../../img/a1.webp";
import expenses from "../../img/a2.webp";
import pos from "../../img/a3.webp";
import iot from "../../img/a4.webp";
import frontdesk from "../../img/a5.webp";
import inventory from "../../img/a6.webp";
import kiosk from "../../img/a7.webp";

const techItems = [
  { title: "Shop Floor", img: shopFloor },
  { title: "Expenses", img: expenses },
  { title: "Point of Sale", img: pos },
  { title: "IoT", img: iot },
  { title: "Frontdesk", img: frontdesk },
  { title: "Inventory", img: inventory },
  { title: "Kiosk", img: kiosk },
];

export default function TechPlatform() {
  return (
    <section className="tech-section">
      <h2 className="tech-title">
        All the <span>tech</span> in one platform
      </h2>

      <div className="tech-grid">
        {techItems.map((item, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-circle">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
