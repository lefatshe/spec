<template>
  <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
    <div class="container-xl d-lg-flex flex-items-center p-responsive">
      <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="/" aria-label="Homepage">
          <img src="../assets/pic.png" height="45px">
        </a>


        <div class="d-flex flex-items-center">
          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation"
                  aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
        <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
          <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path>
            </svg>
          </button>
        </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
            <li
              class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
              <details class="HeaderMenu-details details-overlay details-reset width-full">
                <summary
                  class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                  Hi, am <strong>Sechaba Mothobi</strong>
                </summary>
              </details>
            </li>
            <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
              <a href="/" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block">Explore</a>
            </li>

            <li
              class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
              <details class="HeaderMenu-details details-overlay details-reset width-full">
                <summary
                  class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                  Professional work
                  <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none"
                       class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                </summary>

                <!--                <router-link class="pull-right" :to="{ name: 'Add'}"> routerlink </router-link>-->
                <div
                  class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                  <a href="/" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover">FNB
                    Bank <span class="Bump-link-symbol float-right text-normal text-gray-light">→</span></a>

                  <ul class="list-style-none mb-3">
                    <li class="edge-item-fix"><a href="https://invis.io/RZS3WGQTABJ" target="_blank" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5">Fleet wiremocks</a></li>
                    <li class="edge-item-fix"><a href="/locked" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5">Credit Card application</a></li>
                    <li class="edge-item-fix"><router-link :to="{ name: 'DefaultPage'}" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5">Fleet Application</router-link></li>
                  </ul>

                  <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                    <li class="edge-item-fix"><a
                      href="https://investec.invisionapp.com/share/XCRINO6JY2Z#/screens/357826738_01-MyBriefcase"
                      target="_blank"
                      class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover">
                      Investec Briefcase<span class="Bump-link-symbol float-right text-normal text-gray-light">→</span></a>
                    </li>
                    <li class="edge-item-fix">
                      <router-link :to="{ name: 'DefaultPage'}"
                                   class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover">
                        Investec Intermidiary <span
                        class="Bump-link-symbol float-right text-normal text-gray-light">→</span></router-link>
                    </li>
                  </ul>
                </div>
              </details>
            </li>

            <li
              class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
              <details class="HeaderMenu-details details-overlay details-reset width-full">
                <summary
                  class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                  Hobby
                  <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none"
                       class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                </summary>

                <div
                  class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                  <ul class="list-style-none mb-0  pt-lg-3">
                    <li class="edge-item-fix"><a href="http://www.younghustla.co.za" target="_blank"
                                                 class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover">
                      YoungHustla Company<span class="Bump-link-symbol float-right text-normal text-gray-light">→</span></a>
                    </li>

                    <li class="edge-item-fix"><a href="https://myt-research-app.herokuapp.com/" target="_blank"
                                                 class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover">
                      MYT Research <span class="Bump-link-symbol float-right text-normal text-gray-light">→</span></a>
                    </li>

                    <li class="edge-item-fix"><a href="https://avantgardetroupe.africa" target="_blank"
                                                 class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover">
                      Avant Garde Troupe Africa <span
                      class="Bump-link-symbol float-right text-normal text-gray-light">→</span></a></li>

                    <li class="edge-item-fix"><a href="http://www.media360degrees.co.za" target="_blank"
                                                 class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover">
                      Media 360 Degrees <span class="Bump-link-symbol float-right text-normal text-gray-light">→</span></a>
                    </li>

                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </nav>

        <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <a class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
             href="https://www.linkedin.com/in/sechaba-mothobi-a6947734/" target="_blank">
            Linkedin Account
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        //
      }
    }
  }
</script>

<style>
  .navbar nav {
    padding: 0 20px;
  }
</style>

