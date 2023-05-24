
import Navbar from "@/components/Navbar";
import ResourceHighlight from "@/components/ResourceHighlight";
import Newsletter from "@/components/Newsletter"



function HomePage() {


  return (
    <>
      <Navbar />
      {/* <!-- START NAV --> */}
      
      {/* <!-- END NAV --> */}

      {/* <!-- Image --> */}
      

      {/* <!-- newsletter --> */}
      

      {/* <!-- Articles --> */}

      <section class="hero ">
        <div class="hero-body">
          <div class="container">

            <section class="section">
              <div class="columns is-variable is-8">
                <div class="column is-5 is-offset-1 ">
                  <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                    <h1 class="title has-text-black is-3">Custom 404 Pages</h1>
                    <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                      /source/404.blade.php.
                      To preview the 404 page, you can visit /404 in your browser. Depending...</p>
                  </div>
                </div>
                <div class="column is-5">
                  <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                    <h1 class="title has-text-black is-3">Fuse Search</h1>
                    <p class="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
                      pre-built Vue.js
                      component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
                  </div>
                </div>
              </div>
            </section>

            <div class="is-divider"></div>

            <section class="section">
              <div class="columns is-variable is-8">
                <div class="column is-5 is-offset-1">
                  <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                    <h1 class="title has-text-black is-3">Getting Started</h1>
                    <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                      minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
                <div class="column is-5">
                  <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                    <h1 class="title has-text-black is-3">Getting Started</h1>
                    <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                      minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma - Blog theme</strong> by <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the <a
              href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
        </div>
      </footer>

      {/* <script>
        document.addEventListener('DOMContentLoaded', () => {

          // Get all "navbar-burger" elements
          const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

          // Check if there are any navbar burgers
          if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
              el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

              });
            });
          }

        });
      </script> */}
    </>
  )
}

export default HomePage;
