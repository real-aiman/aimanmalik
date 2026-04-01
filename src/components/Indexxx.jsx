export default function Header({ title, subtitle, onNavClick, currentPage }) {
  const links = [
    { name: "Home", key: "home" },
    { name: "Hobbies & Contact", key: "details" },
    { name: "Achievements", key: "achievements" },
  ];

  return (
    <table border="1" width="100%">
      <tbody>
        <tr>
          <td>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>
              {links.map((link, i) => (
                <span key={i}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: currentPage === link.key ? "blue" : "black",
                      textDecoration: currentPage === link.key ? "underline" : "none",
                      cursor: "pointer",
                      fontWeight: currentPage === link.key ? "bold" : "normal",
                    }}
                    onClick={() => onNavClick(link.key)}
                  >
                    {link.name}
                  </button>
                  {i !== links.length - 1 && " | "}
                </span>
              ))}
            </p>
          </td>
          <td>
            <img src="/me.jpeg" alt="Aiman Shafiq Photo" width="130" height="160" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Footer({ text }) {
  return (
    <footer>
      <p style={{ textAlign: "center" }}>
        _________________________________________________ <br />
        {text}
      </p>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header
        title="AIMAN SHAFIQ"
        subtitle="Aspiring Web Developer | IT Student"
        onNavClick={setPage}
        currentPage={page}
      />

      <div style={{ padding: "10px" }}>
        {page === "home" && (
          <>
            <h2>Career Objective</h2>
            <p>
              I am currently enrolled in a BSIT program at an affiliated college,
              developing skills in Information Technology,
              <br /> software applications, and digital solutions. A motivated F.Sc
              Pre-Engineering
              <br /> graduate from BISE Lahore with 936 marks. I am passionate
              about Web <br /> and SEO, aiming to build a professional career in
              the tech industry.
            </p>

            <br />

            <table border="1" width="100%">
              <tbody>
                <tr>
                  <td>
                    <h2>Education</h2>
                    <ul>
                      <li>
                        <strong>Matriculation (Science)</strong> - 2022
                        <br />
                        Board of Intermediate and Secondary Education, Lahore | Marks: 787
                      </li>
                      <li>
                        <strong>F.Sc (Pre-Engineering)</strong> - 2024
                        <br />
                        BISE Lahore | Marks: 936
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <br />

            <h2>Work Experience & Training</h2>
            <p>
              <strong>SEO Training:</strong> Completed paid course from UET Lahore.
            </p>
            <p>Gained some experience in Search Engine Optimization and content ranking.</p>

            <br />

            <h2>Skills</h2>
            <ol>
              <li>HTML (Structuring Web Pages)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Microsoft Word, Excel & PowerPoint</li>
            </ol>
          </>
        )}

        {page === "details" && (
          <>
            <h2>Hobbies</h2>
            <ul>
              <li>Coding and exploring new HTML tags</li>
              <li>Solving Mathematics problems</li>
              <li>Researching latest technology trends</li>
            </ul>

            <h2>Contact Details</h2>
            <table border="1">
              <tbody>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>aiman.shafiq@example.com</td>
                </tr>
                <tr>
                  <td><strong>Phone:</strong></td>
                  <td>+92 300 0000000</td>
                </tr>
                <tr>
                  <td><strong>Address:</strong></td>
                  <td>Lahore, Pakistan</td>
                </tr>
              </tbody>
            </table>
          </>
        )}

        {page === "achievements" && (
          <>
            <h2>Matric Certificate</h2>
            <p>Marks: 787</p>
            <img src="/matric.certificate.jpeg" width="500" alt="Matric" />

            <h2>F.Sc Result</h2>
            <p>Marks: 936</p>
            <img src="/result.jpeg" width="500" alt="FSC" />

            <h2>SEO Certificate</h2>
            <img src="/certificate.jpeg" width="500" alt="SEO" />
          </>
        )}
      </div>

      <Footer text="© 2026 Aiman Shafiq. All Rights Reserved. Designed and Coded by Aiman Shafiq." />
    </>
  );
}