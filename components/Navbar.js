import React, { useEffect } from 'react';

// const Navbar = () => {
function Navbar() {
  
  useEffect(() => {
    const handleNavbarBurgerClick = () => {
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      );

      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    };

    document.addEventListener('DOMContentLoaded', handleNavbarBurgerClick);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleNavbarBurgerClick);
    };
  }, []);


  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <h1>Content Manager</h1>
            </a> 
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <input className="input is-rounded" type="email" placeholder="Search" />
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                Home
              </a>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Examples
              </a>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>

      <script
      dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener('DOMContentLoaded', () => {
          const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll('.navbar-burger'),
            0
          );

          if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach((el) => {
              el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
              });
            });
          }
        });
        `,
      }}
      />
    </>
  );
}

export default Navbar;

