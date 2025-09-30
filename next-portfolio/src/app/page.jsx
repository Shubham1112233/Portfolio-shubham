import { sanityClient } from "@/lib/sanity.client";
import {
  personalProjectsQuery,
  experienceQuery,
  postsQuery,
} from "@/lib/queries";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const [projects, experience, posts] = await Promise.all([
    sanityClient.fetch(personalProjectsQuery),
    sanityClient.fetch(experienceQuery),
    sanityClient.fetch(postsQuery),
  ]);

  return (
    <main className="np-root min-h-screen">
      {/* Hero */}
      {/* Hero matching legacy markup/classes (without GSAP) */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one animate__animated animate__slideInRight">
              Hello,
            </div>
            <div
              className="text-two animate__animated animate__slideInLeft rainbowText"
              style={{ animationDelay: "1s" }}
            >
              I'm Shubham Ekkaldevi
            </div>
            <div className="text-three animate__animated animate__slideInLeft">
              A Software Developer
            </div>
            <div className="text-four animate__animated animate__slideInLeft">
              from Cisco Systems India
            </div>
          </div>
          <div className="button">
            <a href="#experience">
              <button>More About Me</button>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="np-section space-y-14">
        {/* About (static) */}
        <section className="about" id="about">
          <div className="content">
            <div className="title">
              <span>About Me</span>
            </div>
            <div className="about-details">
              <div className="left">
                <img src="/assets/Shubhi.jpg" alt="My image" />
              </div>
              <div className="right">
                <div className="topic">
                  Experienced Software Developer from Cisco Systems India
                </div>
                <p>
                  Passionate Software Developer specializing in front-end
                  development in the Internet of Things (IoT) domain at Cisco.
                  I'm dedicated to crafting seamless digital experiences that
                  bridge technology and user-centric design.
                </p>
                <div className="topic" style={{ marginTop: 30 }}>
                  Designing and Coding Is My Passion
                </div>
                <p>
                  Designing and coding aren't just things I do; they're part of
                  who I am. I genuinely enjoy creating digital solutions that
                  work well and look good. Solving problems in this field is
                  like a puzzle I can't get enough of, and I'm always learning
                  something new. But what I love most is the satisfaction of
                  taking an idea and turning it into something practical and
                  user-friendly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects (dynamic) */}
        <section id="projects">
          <div className="flex items-center justify-between mb-2">
            <h2 className="np-section-title">Personal Projects</h2>
          </div>
          <ul className="projects-grid">
            {projects?.map((p, idx) => (
              <li key={p._id} className="project-card" style={{animationDelay: `${idx * 90}ms`}}>
                <div className="project-title">{p.title}</div>
                {p.summary && <p className="project-summary">{p.summary}</p>}
                {Array.isArray(p.tech) && p.tech.length > 0 && (
                  <ul className="project-badges">
                    {p.tech.map((t, i) => (
                      <li key={i} className="project-badge">{t}</li>
                    ))}
                  </ul>
                )}
                <div className="project-links space-x-4">
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer">Repository</a>
                  )}
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">Live</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience (dynamic) - animated cards */}
        <section id="experience">
          <h2 className="np-section-title">Experience</h2>
          <div className="experience-grid">
            {experience?.map((e, idx) => (
              <div key={e._id} className="experience-card" style={{animationDelay: `${idx * 90}ms`}}>
                <div className="experience-title">{e.role}</div>
                <div className="experience-sub">{e.company}</div>
                <div className="experience-dates">{e.startDate} {e.endDate ? `→ ${e.endDate}` : e.current ? "→ Present" : null}</div>
                {e.summary && (
                  <div className="experience-text">
                    <PortableText value={e.summary} />
                  </div>
                )}
                {Array.isArray(e.tech) && e.tech.length > 0 && (
                  <ul className="experience-tags">
                    {e.tech.map((t, i) => (
                      <li key={i} className="experience-tag">{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education (static) */}
        <section id="education">
          <div className="content">
            <div className="title">
              <span>Qualification and Courses</span>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Institute</th>
                    <th>Course</th>
                    <th>Score</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Qspider's Institute</td>
                    <td>Software Development and Testing</td>
                    <td></td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>NIIT Pune</td>
                    <td>Advanced Diploma in Web Development</td>
                    <td></td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>Pune University</td>
                    <td>B.E Mechanical Engineering</td>
                    <td>9.3 CGPA</td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>Government Polytechnic Pune</td>
                    <td>Diploma in Mechanical Engineering</td>
                    <td>83 Percent</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>Vidya Niketan</td>
                    <td>Secondary</td>
                    <td>93 percent</td>
                    <td>2016</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="roadmap-div container text-center overflow-hidden w-100">
              <img
                className="w-100 h-100 object-fit-cover"
                src="/assets/Roadmap3.png"
                alt="RoadMap of education"
              />
            </div>
          </div>
        </section>

        {/* Posts (dynamic) */}
        <section id="posts">
          <h2 className="np-section-title">Posts</h2>
          <ul className="np-grid np-grid-2">
            {posts?.map((post) => (
              <li key={post._id} className="np-card">
                <div className="np-heading">{post.title}</div>
                {post.excerpt && (
                  <p className="np-muted mt-1 text-sm">{post.excerpt}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact (static) */}
        <section className="services" id="services">
          <div className="content">
            <div className="title">
              <span>Contact</span>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="topic">Mobile Number</div>
                <p>+91 9156802283</p>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="topic">Email</div>
                <p>shubhamind722@gmail.com</p>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="topic">LinkedIn</div>
                <p>
                  <a
                    href="https://www.linkedin.com/in/shubham-ekkaldevi-165464197/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
