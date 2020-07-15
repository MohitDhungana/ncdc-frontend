import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import ncdc from './images/ncdc.jpg';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  React.useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      {/* header secton start */}
      <header>
        <div className="navbar-fixed ">
          <nav className="red darken-2">
            <div className="nav-wrapper container  ">
              <a href="#!" className="brand-logo ">
                NCDC
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">HOME</a>
                </li>
                <li>
                  <a href="badges.html">ABOUT US</a>
                </li>
                <li>
                  <a href="collapsible.html">NCDC PROJECTS</a>
                </li>
                <li>
                  <a href="mobile.html">CONTACT US</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">HOME</a>
          </li>
          <li>
            <a href="badges.html">ABOUT US</a>
          </li>
          <li>
            <a href="collapsible.html">NCDC PROJECTS</a>
          </li>
          <li>
            <a href="mobile.html">CONTACT US</a>
          </li>
        </ul>
      </header>
      {/* header section end */}

      {/* hero section start */}
      <div className="row">
        <div className="parallax-container">
          <div className="parallax">
            <img className="responsive-img hero-img" src={ncdc} />
          </div>
        </div>
      </div>
      {/* hero section end */}

      <div className="container">
        {/* center moto start */}
        <div className="row">
          <h3 className="center-align">
            Uplifting the rural, illiterate, poor and underprivileged people of
            Nepal with a special focus on women and children
          </h3>
        </div>
        <hr />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        necessitatibus nemo soluta dolor reprehenderit deleniti asperiores
        impedit laboriosam assumenda itaque. Explicabo fugit provident delectus,
        tenetur voluptatum id? Voluptas consequuntur illo quas ipsa nobis
        officia laboriosam dignissimos porro at quidem iure dolore quaerat
        assumenda nam repellendus enim, possimus cum nulla voluptatum magnam
        corrupti dicta quasi! Temporibus, illum ratione? Molestias quasi id
        ipsum perferendis quibusdam expedita eos libero nulla quisquam veritatis
        velit sequi esse harum cumque amet non, voluptas, consequuntur magnam
        excepturi ratione officiis vitae inventore? Nobis eligendi neque
        recusandae. Nihil numquam optio voluptate assumenda minus repellat magni
        ratione eveniet. Modi aperiam itaque nihil dolores, suscipit pariatur,
        vitae voluptatum accusantium voluptate aspernatur obcaecati tempora
        omnis veritatis rem corrupti veniam quo maiores inventore at doloremque
        dicta perspiciatis provident. Nisi odit, saepe quis placeat dignissimos
        non hic, eius magni et consequatur voluptatibus labore voluptas libero
        animi distinctio doloribus quidem id reprehenderit? Beatae optio quaerat
        enim illum officia! Pariatur quo in tenetur illo quasi suscipit,
        repellat numquam labore atque alias accusamus quae voluptates illum sed
        enim, quam impedit, omnis quisquam explicabo minima sint. Deserunt ea
        porro, expedita accusantium maiores doloremque, quis architecto eos
        aspernatur hic corporis alias! Impedit ad et sed ab similique? Tenetur,
        distinctio sequi ipsa mollitia odio dolorum alias in molestias, officia
        earum corrupti quos maxime. Necessitatibus consectetur beatae, quibusdam
        sed nobis iusto quasi nostrum temporibus blanditiis molestiae illo
        corrupti quas quia at aperiam dolore nulla rem laborum rerum quae unde
        voluptatum expedita maiores! Eum, expedita non. Assumenda, dignissimos.
        Rem doloremque consequuntur maiores minus ex saepe dolor nam! Doloremque
        neque eos reprehenderit vel dolorum ducimus qui ad delectus inventore
        unde cumque modi quam aliquid deserunt ab sequi, libero quibusdam
        repellat numquam tempora esse recusandae ipsum. Fuga molestiae sapiente
        iusto esse rerum fugiat modi facere aspernatur repellat error, iure cum
        quidem libero ullam necessitatibus aperiam culpa temporibus quis harum
        quas accusamus in delectus perspiciatis? Ipsam omnis beatae sint amet
        reprehenderit odio ad saepe debitis porro, aspernatur quasi reiciendis
        eius qui ipsum accusamus illo, magni fuga. Adipisci earum suscipit dolor
        quam dignissimos quae molestiae iste rem, laboriosam eos laborum ipsa
        officiis voluptas! Dignissimos, accusamus aperiam tenetur, quia odit
        asperiores animi eius deserunt maiores deleniti libero commodi saepe
        provident nemo sunt labore debitis facilis ducimus ut quae fuga
        repudiandae optio consequuntur. Quo dicta debitis sit quam laboriosam
        beatae dignissimos iste ipsam obcaecati? Est repellendus necessitatibus
        enim? Nobis, obcaecati a minima deleniti sint provident! Quam officiis,
        veniam voluptates autem iste consequatur pariatur laboriosam ad qui
        dignissimos, aspernatur, vel exercitationem enim vero itaque est odio
        aliquid similique. In quam quibusdam voluptatem sunt tempora quisquam
        error quod hic iste dignissimos ullam accusamus voluptate nesciunt
        pariatur expedita quo, ex, aliquam possimus neque? Minima, consequuntur
        nostrum quas ea adipisci, quae nesciunt, aliquid iure deserunt
        laboriosam eius voluptate fugit porro doloremque iusto laborum ad
        doloribus eos! Similique numquam labore natus quae ullam dolorem
        quisquam deleniti repellendus aut quasi nemo, minus obcaecati totam non
        minima repudiandae, tempore exercitationem. Tempora obcaecati odit
        repellat inventore eaque et sit rerum voluptatibus adipisci dignissimos,
        unde vero vitae!
      </div>
    </>
  );
}

export default App;
