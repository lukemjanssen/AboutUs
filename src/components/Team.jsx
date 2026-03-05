import "./Team.css";
import teamAsh    from "../assets/team-ash.png";
import teamFarias from "../assets/team-farias.png";
import teamJoe    from "../assets/team-joe.png";
import teamSarah  from "../assets/team-sarah.png";

const TEAM = [
  { name: "Ash",    role: "Founder & CEO",     description: "Ash is the visionary behind Abstractly, leading the team with a passion for design and innovation.",                                                                    image: teamAsh },
  { name: "Farias", role: "Lead Designer",      description: "Farias is responsible for crafting the stunning visuals and ensuring every image meets our high standards.",                                                             image: teamFarias },
  { name: "Joe",    role: "Marketing Lead",     description: "Joe drives our marketing efforts, sharing our beautiful images with the world and connecting with our community.",                                                       image: teamJoe },
  { name: "Sarah",  role: "Customer Success",   description: "Sarah ensures our customers have a fantastic experience, providing support and gathering feedback to help us improve.",                                                   image: teamSarah },
];

const Team = () => {
  return (
    <section id="team" className="team">
        <div className="team__header">
            <p className="team__eyebrow">Team</p>
            <h2 className="team__heading">Meet the team</h2>
            <p className="team__subtitle">
                We&rsquo;re a small team of passionate individuals dedicated to creating high quality abstract images for your projects.
            </p>
            <p className="team__description">
                    Each member brings a unique set of skills and expertise, working together to ensure we deliver the best possible experience for our customers.
            </p>
        </div>
        <ul className="team__list">
            {TEAM.map(({ name, role, description, image }) => (
                <li key={name} className="team__member">
                    <img src={image} alt={`${name}, ${role}`} className="team__member-image" />
                    <h3 className="team__member-name">{name}</h3>
                    <p className="team__member-role">{role}</p>
                    <p className="team__member-description">{description}</p>
                </li>
            ))}
        </ul>
    </section>
  );
};

export default Team;