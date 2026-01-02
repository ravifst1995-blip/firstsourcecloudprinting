
// appsData.js
import accounting from "../../img/1.svg";
import knowledge from "../../img/2.svg";
import sign from "../../img/3.svg";
import crm from "../../img/4.svg";
import studio from "../../img/5.svg";
import subscriptions from "../../img/6.svg";
import rental from "../../img/7.svg";
import pos from "../../img/8.svg";
import discuss from "../../img/9.svg";
import documents from "../../img/10.svg";
import project from "../../img/11.svg";
import timesheets from "../../img/12.svg";
import fieldService from "../../img/13.svg";
import planning from "../../img/14.svg";
import helpdesk from "../../img/15.svg";
import website from "../../img/16.svg";
import socialMarketing from "../../img/17.svg";
import emailMarketing from "../../img/18.svg";


export const apps = [
  { name: "Accounting", icon: accounting },
  { name: "Knowledge", icon: knowledge },
  { name: "Sign", icon: sign },
  { name: "CRM", icon: crm },
  { name: "Studio", icon: studio },
  { name: "Subscriptions", icon: subscriptions },

  { name: "Rental", icon: rental },
  { name: "Point of Sale", icon: pos },
  { name: "Discuss", icon: discuss },
  { name: "Documents", icon: documents },
  { name: "Project", icon: project },
  { name: "Timesheets", icon: timesheets },

  { name: "Field Service", icon: fieldService },
  { name: "Planning", icon: planning },
  { name: "Helpdesk", icon: helpdesk },
  { name: "Website", icon: website },
  { name: "Social Marketing", icon: socialMarketing },
  { name: "Email Marketing", icon: emailMarketing },


];


export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Heading */}
        <h1 className="hero-title">
          All your business on{" "}
          <span className="highlight">one Sourcec.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Simple, <span className="underline">efficient</span>, yet affordable!
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <button className="btn-primary">Start now – It’s free</button>
          <button className="btn-secondary">Meet an advisor ▾</button>
        </div>
      </div>

      {/* App Grid */}
      <div className="apps-wrapper">
         <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="icon-box">
              <img src={app.icon} alt={app.name} />
            </div>
            <p>{app.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
