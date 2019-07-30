





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-dcLOgLGIYz/Y2ShFrU1QIrJkdqKiEQTjJoK2MCHtHxMhGAWpMAXyHjWgNqTdNzTcvNINu08lYn79EStdgLYUSQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-911c0a12b70ded25a66d3432705a7c0f.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-pSSFGNiV1iXIGXRof04PZsZm/MshYNORLjGHBVeq9RJORXac9Ohy8vWsx9sa9+jAPHjNnarRyFIqHACEx694wg==" rel="stylesheet" href="https://github.githubassets.com/assets/site-5d53792753944029c2f138a25c1843e2.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-nPnw/5fvFTpJRvkI3ToiuGyQ/NSy9k2kqaUXf1oYYILEqEjzo4gH9cIvq5SgpGxnxjbsRf66tzYJYhESWeA0xw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-75c588f8b8e8c4f2d62874f59048aa15.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>web-document/前端面试题-webpack.md at master · ltadpoles/web-document · GitHub</title>
    <meta name="description" content="前端学习历程-笔记. Contribute to ltadpoles/web-document development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars1.githubusercontent.com/u/37846378?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="ltadpoles/web-document" /><meta name="twitter:description" content="前端学习历程-笔记. Contribute to ltadpoles/web-document development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/37846378?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="ltadpoles/web-document" /><meta property="og:url" content="https://github.com/ltadpoles/web-document" /><meta property="og:description" content="前端学习历程-笔记. Contribute to ltadpoles/web-document development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="C40A:6A83:454581:6439F2:5CB67AEE" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="C40A:6A83:454581:6439F2:5CB67AEE" /><meta name="octolytics-dimension-region_edge" content="ap-southeast-1" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="Y2ZkNWI2NzViODgzNmMyYWVmNGFjMmUxMzdiNjZiMzJjYTNlNWNjY2JlZmM4ZmU5N2VhN2I2NDBhZjYxZjQyMXx7InJlbW90ZV9hZGRyZXNzIjoiMjExLjE1Ny4xNjUuNiIsInJlcXVlc3RfaWQiOiJDNDBBOjZBODM6NDU0NTgxOjY0MzlGMjo1Q0I2N0FFRSIsInRpbWVzdGFtcCI6MTU1NTQ2MjkxMCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_ENTERPRISE_CONTACTS,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS">

  <meta name="html-safe-nonce" content="0dcf37d2f1f22761e3f6f4faecfa1ef735a24ec6">

  <meta http-equiv="x-pjax-version" content="a160ddf9f39f8a683b6cb23d4404df2c">
  

      <link href="https://github.com/ltadpoles/web-document/commits/master.atom" rel="alternate" title="Recent Commits to web-document:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/ltadpoles/web-document git https://github.com/ltadpoles/web-document.git">

  <meta name="octolytics-dimension-user_id" content="37846378" /><meta name="octolytics-dimension-user_login" content="ltadpoles" /><meta name="octolytics-dimension-repository_id" content="175590724" /><meta name="octolytics-dimension-repository_nwo" content="ltadpoles/web-document" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="175590724" /><meta name="octolytics-dimension-repository_network_root_nwo" content="ltadpoles/web-document" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-enabled" content="true">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        <header class="Header-old header-logged-out  position-relative f4 py-2" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out d-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-none">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0" aria-label="Global">
          <ul class="d-flex list-style-none">
              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0  p-4 left-n4 position-absolute">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class=" mr-3 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0  p-4 left-n4 position-absolute">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2  border-top pt-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class=" mr-3 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class=" mr-3 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap  d-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0  p-4 left-n4 position-absolute">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0  border-top pt-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-flex flex-items-center px-0 text-center text-left">
          <div class="d-lg-flex ">
            <div class="header-search mr-3 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="175590724" data-scoped-search-url="/ltadpoles/web-document/search" data-unscoped-search-url="/search" action="/ltadpoles/web-document/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=NCe/xO9Lmrf7rFPVIUtYPRbUDshCh8GiqJk/8boR7MeBYnCNYVXEDvL13JvlvkEXu1p4zv+xjfLty2VAE+k1vw=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a class="HeaderMenu-link no-underline mr-3" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1746102665.1552885125&quot;,&quot;originating_request_id&quot;:&quot;C40A:6A83:454581:6439F2:5CB67AEE&quot;,&quot;originating_url&quot;:&quot;https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md&quot;,&quot;referrer&quot;:&quot;https://github.com/ltadpoles/web-document/tree/master/Other&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="78bb27c7c110bb72f962c99ff4f80f695672897f6964fd659aea8dbaddfdaa0f" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in" href="/login?return_to=%2Fltadpoles%2Fweb-document%2Fblob%2Fmaster%2FOther%2F%25E5%2589%258D%25E7%25AB%25AF%25E9%259D%25A2%25E8%25AF%2595%25E9%25A2%2598-webpack.md">
          Sign&nbsp;in
</a>          <a class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;1746102665.1552885125&quot;,&quot;originating_request_id&quot;:&quot;C40A:6A83:454581:6439F2:5CB67AEE&quot;,&quot;originating_url&quot;:&quot;https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md&quot;,&quot;referrer&quot;:&quot;https://github.com/ltadpoles/web-document/tree/master/Other&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7dabdd48995817c44b52910d727c4e0cd48eb952a4c7ca038639ff8e16562531" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up" href="/join">
            Sign&nbsp;up
</a>      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container >
      


  






  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">



  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1746102665.1552885125&quot;,&quot;originating_request_id&quot;:&quot;C40A:6A83:454581:6439F2:5CB67AEE&quot;,&quot;originating_url&quot;:&quot;https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md&quot;,&quot;referrer&quot;:&quot;https://github.com/ltadpoles/web-document/tree/master/Other&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="c1e8bf75831fb758488fd0db7b0714ff2d86d13afe6c595d919a096d8c5a3f2d" href="/login?return_to=%2Fltadpoles%2Fweb-document">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a class="social-count" href="/ltadpoles/web-document/watchers"
       aria-label="3 users are watching this repository">
      3
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:175590724,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1746102665.1552885125&quot;,&quot;originating_request_id&quot;:&quot;C40A:6A83:454581:6439F2:5CB67AEE&quot;,&quot;originating_url&quot;:&quot;https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md&quot;,&quot;referrer&quot;:&quot;https://github.com/ltadpoles/web-document/tree/master/Other&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7f60245a8db8d70321f6a2073c899e63427484e0c1e4f498dd8c110c15a40bdc" href="/login?return_to=%2Fltadpoles%2Fweb-document">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
</a>
    <a class="social-count js-social-count" href="/ltadpoles/web-document/stargazers"
      aria-label="85 users starred this repository">
      85
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:175590724,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:&quot;1746102665.1552885125&quot;,&quot;originating_request_id&quot;:&quot;C40A:6A83:454581:6439F2:5CB67AEE&quot;,&quot;originating_url&quot;:&quot;https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md&quot;,&quot;referrer&quot;:&quot;https://github.com/ltadpoles/web-document/tree/master/Other&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4264d2f1535f40fbd724836c7e7167db51481a48d47769fec2d4d473ba151dd7" href="/login?return_to=%2Fltadpoles%2Fweb-document">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="/ltadpoles/web-document/network/members" class="social-count"
       aria-label="36 users forked this repository">
      36
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=37846378" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ltadpoles">ltadpoles</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/ltadpoles/web-document">web-document</a></strong>
  

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /ltadpoles/web-document" href="/ltadpoles/web-document">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /ltadpoles/web-document/issues" href="/ltadpoles/web-document/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">9</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /ltadpoles/web-document/pulls" href="/ltadpoles/web-document/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>



    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ltadpoles/web-document/projects" href="/ltadpoles/web-document/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people alerts /ltadpoles/web-document/pulse" href="/ltadpoles/web-document/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>
<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/ltadpoles/web-document/blob/c42a7a65fa8ebb1385dd5d90d458cd99cef90820/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:649d33a35d7cfccc900aa68f25396759 -->

        <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="EvMU1VvKLpI2/U54suiLs5e6hKsAn0WYoZ9f06Nq4neeTw/NUG17DOeArDT0tAbvEfIcrm5q37vRSgzxYyihlA==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 31 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:&quot;1746102665.1552885125&quot;,&quot;originating_request_id&quot;:&quot;C40A:6A83:454581:6439F2:5CB67AEE&quot;,&quot;originating_url&quot;:&quot;https://github.com/ltadpoles/web-document/blob/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md&quot;,&quot;referrer&quot;:&quot;https://github.com/ltadpoles/web-document/tree/master/Other&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7a3837b194fc21c0cc1b3552886f51aff80cf82ff0fc11d44ef5e68244bab805" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" href="/join?source=prompt-blob-show">Sign up</a>
        </div>
      </div>
    </div>


    <div class="d-flex flex-items-start mb-3">
      <span class="d-flex flex-justify-between">
        
<details class="details-reset details-overlay select-menu branch-select-menu ">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target">master</span>
  </summary>

  <details-menu class="select-menu-modal position-absolute" style="z-index: 99;" src="/ltadpoles/web-document/ref-list/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-none">
          <a href="/ltadpoles/web-document/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="Other/前端面试题-webpack.md" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal ml-2 mr-3">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/ltadpoles/web-document"><span>web-document</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/ltadpoles/web-document/tree/master/Other"><span>Other</span></a></span><span class="separator">/</span><strong class="final-path">前端面试题-webpack.md</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-inline-block">
        <a href="/ltadpoles/web-document/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="Other/前端面试题-webpack.md" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    <include-fragment src="/ltadpoles/web-document/contributors/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md" class="Box Box--condensed commit-loader">
      <div class="Box-body bg-blue-light f6">
        Fetching contributors&hellip;
      </div>

      <div class="Box-body d-flex flex-items-center" >
          <img alt="" class="loader-loading mr-2" src="https://github.githubassets.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>




    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-justify-between flex-items-center">

  <div class="text-mono f6">
      244 lines (159 sloc)
      <span class="file-info-divider"></span>
    9.99 KB
  </div>

  <div class="d-flex">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/ltadpoles/web-document/raw/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/ltadpoles/web-document/blame/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/ltadpoles/web-document/commits/master/Other/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98-webpack.md">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw "
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>

      
  <div id="readme" class="Box-body readme blob instapaper_body js-code-block-container">
    <article class="markdown-body entry-content p-5" itemprop="text"><h1><a id="user-content-目录" class="anchor" aria-hidden="true" href="#目录"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>目录</h1>
<p> <a href="#w1">1.对webpack的了解</a></p>
<p> <a href="#w2">2.webpack，里面的webpack.config.js怎么配置</a></p>
<p> <a href="#w3">3.webpack本地开发怎么解决跨域的</a></p>
<p> <a href="#w4">4.如何配置多入口文件</a></p>
<p> <a href="#w5">5. webpack与grunt、gulp的不同</a></p>
<p> <a href="#w6">6. 有哪些常见的Loader？他们是解决什么问题的</a></p>
<p> <a href="#w7">7. 有哪些常见的Plugin？他们是解决什么问题的</a></p>
<p> <a href="#w8">8. Loader和Plugin的不同</a></p>
<p> <a href="#w9">9. webpack的构建流程是什么</a></p>
<p> <a href="#w10">10. 是否写过Loader和Plugin？描述一下编写loader或plugin的思路</a></p>
<p> <a href="#w11">11. webpack的热更新是如何做到的？说明其原理</a></p>
<p> <a href="#w12">12. 如何利用webpack来优化前端性能</a></p>
<p> <a href="#w13">13. 如何提高webpack的构建速度</a></p>
<p> <a href="#w14">14. 怎么配置单页应用？怎么配置多页应用</a></p>
<p> <a href="#w15">15. 什么是bundle,什么是chunk，什么是module</a></p>
<h5 id="user-content-w1"><a id="user-content-1-对webpack的了解" class="anchor" aria-hidden="true" href="#1-对webpack的了解"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 对webpack的了解</h5>
<p><a href="https://www.webpackjs.com/concepts/" rel="nofollow">官方文档</a></p>
<blockquote>
<p>本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)，将项目当作一个整体，通过一个给定的的主文件，webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包成一个或多个浏览器可识别的js文件</p>
</blockquote>
<p>核心概念：</p>
<ul>
<li>入口(entry)</li>
</ul>
<p>入口起点<code>(entry point)</code>指示 <code>webpack</code> 应该使用哪个模块，来作为构建其内部依赖图的开始</p>
<p>可以通过在 <code>webpack</code> 配置中配置 <code>entry</code> 属性，来指定一个入口起点（或多个入口起点）</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>./path/to/my/entry/file.js<span class="pl-pds">'</span></span>
};</pre></div>
<ul>
<li>输出(output)</li>
</ul>
<p><code>output</code> 属性告诉 <code>webpack</code> 在哪里输出它所创建的 <code>bundles </code>，以及如何命名这些文件，默认值为 <code>./dist</code></p>
<ul>
<li>loader</li>
</ul>
<p><code>loader</code> 让 <code>webpack</code> 能够去处理那些非 <code>JavaScript</code> 文件（<code>webpack</code> 自身只理解 <code>JavaScript</code>）</p>
<ul>
<li>插件(plugins)</li>
</ul>
<p><code>loader</code> 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量</p>
<ul>
<li>模式</li>
</ul>
<p>通过选择 <code>development</code> 或 <code>production</code> 之中的一个，来设置 <code>mode</code> 参数，你可以启用相应模式下的 <code>webpack</code> 内置的优化</p>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  mode<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>production<span class="pl-pds">'</span></span>
};</pre></div>
<h5 id="user-content-w2"><a id="user-content-2-webpack里面的webpackconfigjs怎么配置" class="anchor" aria-hidden="true" href="#2-webpack里面的webpackconfigjs怎么配置"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. webpack，里面的webpack.config.js怎么配置</h5>
<div class="highlight highlight-source-js"><pre><span class="pl-k">let</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>);

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
    entry<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>./entry.js<span class="pl-pds">'</span></span>,  <span class="pl-c"><span class="pl-c">//</span>入口文件</span>
    
    output<span class="pl-k">:</span>{
        <span class="pl-c"><span class="pl-c">//</span>node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径</span>
        path<span class="pl-k">:</span><span class="pl-c1">__dirname</span>, <span class="pl-c"><span class="pl-c">//</span>输出位置</span>
        filename<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>build.js<span class="pl-pds">'</span></span> <span class="pl-c"><span class="pl-c">//</span>输入文件</span>
    },
    
    module<span class="pl-k">:</span>{  
        <span class="pl-c"><span class="pl-c">//</span> 关于模块的加载相关，我们就定义在module.loaders中</span>
        <span class="pl-c"><span class="pl-c">//</span> 这里通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器。</span>
        <span class="pl-c"><span class="pl-c">//</span> 比如说给less文件定义串联的三个加载器（！用来定义级联关系）：</span>
        rules<span class="pl-k">:</span>[
          {
            test<span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>,      <span class="pl-c"><span class="pl-c">//</span>支持正则</span>
            loader<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">'</span>style-loader!css-loader<span class="pl-pds">'</span></span>
          }
        ]
    },
    
    <span class="pl-c"><span class="pl-c">//</span>配置服务</span>
    devServer<span class="pl-k">:</span>{
        hot<span class="pl-k">:</span><span class="pl-c1">true</span>, <span class="pl-c"><span class="pl-c">//</span>启用热模块替换</span>
        inline<span class="pl-k">:</span><span class="pl-c1">true</span> 
        <span class="pl-c"><span class="pl-c">//</span>此模式支持热模块替换：热模块替换的好处是只替换更新的部分,而不是页面重载.</span>
    },
    
    <span class="pl-c"><span class="pl-c">//</span>其他解决方案配置</span>
    resolve<span class="pl-k">:</span>{ 
        extensions<span class="pl-k">:</span>[<span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,<span class="pl-s"><span class="pl-pds">'</span>.js<span class="pl-pds">'</span></span>,<span class="pl-s"><span class="pl-pds">'</span>.json<span class="pl-pds">'</span></span>,<span class="pl-s"><span class="pl-pds">'</span>.css<span class="pl-pds">'</span></span>,<span class="pl-s"><span class="pl-pds">'</span>.scss<span class="pl-pds">'</span></span>]  
    },
    
    <span class="pl-c"><span class="pl-c">//</span>插件</span>
    plugins<span class="pl-k">:</span>[
        <span class="pl-k">new</span> <span class="pl-en">webpack.BannerPlugin</span>(<span class="pl-s"><span class="pl-pds">'</span>This file is create by baibai<span class="pl-pds">'</span></span>)
    ]

}</pre></div>
<h5 id="user-content-w3"><a id="user-content-3-webpack本地开发怎么解决跨域的" class="anchor" aria-hidden="true" href="#3-webpack本地开发怎么解决跨域的"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. webpack本地开发怎么解决跨域的</h5>
<ul>
<li>下载 webpack-dev-server 插件</li>
<li>配置 webpack.config.js 文件</li>
</ul>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> webpack.config.js</span>

<span class="pl-k">var</span> WebpackDevServer <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>webpack-dev-server<span class="pl-pds">"</span></span>);

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
    <span class="pl-k">...</span>
    
    devServer<span class="pl-k">:</span> {
        <span class="pl-k">...</span>
        port<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>8088<span class="pl-pds">'</span></span>, <span class="pl-c"><span class="pl-c">//</span>设置端口号</span>
        <span class="pl-c"><span class="pl-c">//</span> 代理设置</span>
        proxy<span class="pl-k">:</span> {
            <span class="pl-s"><span class="pl-pds">'</span>/api<span class="pl-pds">'</span></span><span class="pl-k">:</span> {
                target<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>http://localhost:80/index.php<span class="pl-pds">'</span></span>, <span class="pl-c"><span class="pl-c">//</span> 目标代理</span>
                pathRewrite<span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">'</span>^/api<span class="pl-pds">'</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>}, <span class="pl-c"><span class="pl-c">//</span> 重写路径</span>
                secure<span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c"><span class="pl-c">//</span> 是否接受运行在 HTTPS 上</span>
                
            }
        }
    }
}</pre></div>
<h5 id="user-content-w4"><a id="user-content-4-如何配置多入口文件" class="anchor" aria-hidden="true" href="#4-如何配置多入口文件"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 如何配置多入口文件</h5>
<blockquote>
<p>配置多个入口文件</p>
</blockquote>
<div class="highlight highlight-source-js"><pre>entry<span class="pl-k">:</span> {
  home<span class="pl-k">:</span> <span class="pl-en">resolve</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">"</span>src/home/index.js<span class="pl-pds">"</span></span>),
  about<span class="pl-k">:</span> <span class="pl-en">resolve</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">"</span>src/about/index.js<span class="pl-pds">"</span></span>)
}</pre></div>
<h5 id="user-content-w5"><a id="user-content-5-webpack与gruntgulp的不同" class="anchor" aria-hidden="true" href="#5-webpack与gruntgulp的不同"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. webpack与grunt、gulp的不同</h5>
<blockquote>
<p>三者都是前端构建工具</p>
</blockquote>
<blockquote>
<p><code>grunt</code> 和 <code>gulp</code> 是基于任务和流的。找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程</p>
</blockquote>
<blockquote>
<p><code>webpack</code> 是基于入口的。<code>webpack</code> 会自动地递归解析入口所需要加载的所有资源文件，然后用不同的<code> Loader</code> 来处理不同的文件，用 <code>Plugin</code> 来扩展 <code>webpack</code> 功能</p>
</blockquote>
<blockquote>
<p><code>webpack</code> 与前者最大的不同就是支持代码分割，模块化（AMD,CommonJ,ES2015），全局分析</p>
</blockquote>
<p><a href="https://webpack.docschina.org/concepts/why-webpack/" rel="nofollow">为什么选择webpack</a></p>
<h5 id="user-content-w6"><a id="user-content-6-有哪些常见的loader他们是解决什么问题的" class="anchor" aria-hidden="true" href="#6-有哪些常见的loader他们是解决什么问题的"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6. 有哪些常见的Loader？他们是解决什么问题的</h5>
<ul>
<li><code>css-loader</code>：加载 <code>CSS</code>，支持模块化、压缩、文件导入等特性</li>
<li><code>style-loader</code>：把 <code>CSS</code> 代码注入到 <code>JavaScript 中</code>，通过 <code>DOM</code> 操作去加载 <code>CSS</code></li>
<li><code>slint-loader</code>：通过 <code>SLint</code> 检查 <code>JavaScript</code> 代码</li>
<li><code>babel-loader</code>：把 <code>ES6</code> 转换成 <code>ES5</code></li>
<li><code>file-loader</code>：把文件输出到一个文件夹中，在代码中通过相对 <code>URL</code> 去引用输出的文件</li>
<li><code>url-loader</code>：和 <code>file-loader</code> 类似，但是能在文件很小的情况下以 <code>base64</code> 的方式把文件内容注入到代码中去</li>
</ul>
<h5 id="user-content-w7"><a id="user-content-7-有哪些常见的plugin他们是解决什么问题的" class="anchor" aria-hidden="true" href="#7-有哪些常见的plugin他们是解决什么问题的"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7. 有哪些常见的Plugin？他们是解决什么问题的</h5>
<ul>
<li><code>define-plugin</code>：定义环境变量</li>
<li><code>commons-chunk-plugin</code>：提取公共代码</li>
</ul>
<h5 id="user-content-w8"><a id="user-content-8-loader和plugin的不同" class="anchor" aria-hidden="true" href="#8-loader和plugin的不同"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8. Loader和Plugin的不同</h5>
<ul>
<li>loader 加载器</li>
</ul>
<blockquote>
<p><code>Webpack</code> 将一切文件视为模块，但是 <code>webpack</code> 原生是只能解析 <code>js</code> 文件. <code>Loader</code> 的作用是让 <code>webpack</code> 拥有了加载和解析非 <code>JavaScript</code> 文件的能力</p>
</blockquote>
<blockquote>
<p>在 <code>module.rules</code> 中配置，也就是说他作为模块的解析规则而存在，类型为数组</p>
</blockquote>
<ul>
<li>Plugin 插件</li>
</ul>
<blockquote>
<p>扩展 <code>webpack</code> 的功能，让 <code>webpack</code> 具有更多的灵活性</p>
</blockquote>
<blockquote>
<p>在 <code>plugins</code> 中单独配置。类型为数组，每一项是一个 <code>plugin</code> 的实例，参数都通过构造函数传入</p>
</blockquote>
<h5 id="user-content-w9"><a id="user-content-9-webpack的构建流程是什么" class="anchor" aria-hidden="true" href="#9-webpack的构建流程是什么"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>9. webpack的构建流程是什么</h5>
<ol>
<li>初始化参数：从配置文件和 <code>Shell</code> 语句中读取与合并参数，得出最终的参数</li>
<li>开始编译：用上一步得到的参数初始化 <code>Compiler</code> 对象，加载所有配置的插件，执行对象的 <code>run</code> 方法开始执行编译</li>
<li>确定入口：根据配置中的 <code>entry</code> 找出所有的入口文件</li>
<li>编译模块：从入口文件出发，调用所有配置的 <code>Loader</code> 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理</li>
<li>完成模块编译：在经过第4步使用 <code>Loader</code> 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系</li>
<li>输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 <code>Chunk</code>，再把每个 <code>Chunk</code> 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会</li>
<li>输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统</li>
</ol>
<blockquote>
<p>在以上过程中，<code>Webpack</code> 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 <code>Webpack</code> 提供的 <code>API</code> 改变 <code>Webpack</code> 的运行结果</p>
</blockquote>
<h5 id="user-content-w10"><a id="user-content-10-是否写过loader和plugin描述一下编写loader或plugin的思路" class="anchor" aria-hidden="true" href="#10-是否写过loader和plugin描述一下编写loader或plugin的思路"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>10. 是否写过Loader和Plugin？描述一下编写loader或plugin的思路</h5>
<blockquote>
<p>编写 <code>Loader</code> 时要遵循单一原则，每个 <code>Loader</code> 只做一种"转义"工作。 每个 <code>Loader</code> 的拿到的是源文件内容<code>（source）</code>，可以通过返回值的方式将处理后的内容输出，也可以调用 <code>this.callback()</code> 方法，将内容返回给 <code>webpack</code> 。 还可以通过 <code>this.async() </code>生成一个 <code>callback</code> 函数，再用这个 `callback`` 将处理后的内容输出出去</p>
</blockquote>
<blockquote>
<p>相对于 <code>Loader</code> 而言，<code>Plugin</code> 的编写就灵活了许多。 <code>webpack</code> 在运行的生命周期中会广播出许多事件，<code>Plugin</code> 可以监听这些事件，在合适的时机通过 <code>Webpack</code> 提供的 <code>API</code> 改变输出结果</p>
</blockquote>
<h5 id="user-content-w11"><a id="user-content-11-webpack的热更新是如何做到的说明其原理" class="anchor" aria-hidden="true" href="#11-webpack的热更新是如何做到的说明其原理"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>11. webpack的热更新是如何做到的？说明其原理</h5>
<p>具体可以参考 <a href="https://github.com/Jocs/jocs.github.io/issues/15">这里</a></p>
<h5 id="user-content-w12"><a id="user-content-12-如何利用webpack来优化前端性能" class="anchor" aria-hidden="true" href="#12-如何利用webpack来优化前端性能"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>12. 如何利用webpack来优化前端性能</h5>
<ul>
<li>压缩代码。删除多余的代码、注释、简化代码的写法等等方式</li>
<li>利用 <code>CDN</code> 加速。在构建过程中，将引用的静态资源路径修改为 <code>CDN</code> 上对应的路径</li>
<li>删除死代码 <code>Tree Shaking）</code>。将代码中永远不会走到的片段删除掉</li>
<li>优化图片，对于小图可以使用 <code>base64</code> 的方式写入文件中</li>
<li>按照路由拆分代码，实现按需加载，提取公共代码</li>
<li>给打包出来的文件名添加哈希，实现浏览器缓存文件</li>
</ul>
<h5 id="user-content-w13"><a id="user-content-13-如何提高webpack的构建速度" class="anchor" aria-hidden="true" href="#13-如何提高webpack的构建速度"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>13. 如何提高webpack的构建速度</h5>
<p>参考 <a href="https://gaodaqian.com/webpack4/11%E6%8F%90%E5%8D%87%20webpack%20%E7%9A%84%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6.html" rel="nofollow">这里</a></p>
<h5 id="user-content-w14"><a id="user-content-14-怎么配置单页应用怎么配置多页应用" class="anchor" aria-hidden="true" href="#14-怎么配置单页应用怎么配置多页应用"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>14. 怎么配置单页应用？怎么配置多页应用</h5>
<ul>
<li>单页应用可以理解为 <code>webpack</code> 的标准模式，直接在 <code>entry</code> 中指定单页应用的入口即可</li>
<li>多页应用的话，可以使用 <code>webpack</code> 的 <code>AutoWebPlugin</code> 来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范</li>
</ul>
<h5 id="user-content-w15"><a id="user-content-15-什么是bundle什么是chunk什么是module" class="anchor" aria-hidden="true" href="#15-什么是bundle什么是chunk什么是module"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>15. 什么是bundle,什么是chunk，什么是module</h5>
<blockquote>
<p><code>bundle</code> 是由 <code>webpack</code> 打包出来的文件，<code>chunk</code> 是指 <code>webpack</code> 在进行模块的依赖分析的时候，代码分割出来的代码块。<code>module</code>是开发中的单个模块</p>
</blockquote>
</article>
  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="0.15886s from unicorn-85d54fdb54-5f62c">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-Wu2cX0UHG28sGkNNaAzz61xwoVm34Lytz6/ZvRbnXjLxRpaPRTFmm3txQC/0rXH96xJ9FqpenzDORAs8Oui4wA==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-3baed136.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-uWq3JiwXO2npDqwNiUFwzlawJWcyHOhdJywEtJaWcZdDwGkkWyeocBHC+d5YrpWOO8StbErFFRCkILX//pVoiQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-a5235073.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

