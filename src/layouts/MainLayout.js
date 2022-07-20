import { navigate, Script } from "gatsby"
import React, { useEffect, useState } from "react"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/Navbar/NavBar"
import SocialBullets from "../components/SocialBullets/SocialBullets"
import { AppContext } from "../contexts/AppContext"
import { getQueryParams } from "../helpers/getQueryParams"
import { ContactProfileService } from "../services/ContactProfileService"
import SocialBulletsMobile from "../components/SocialBulletsMobile/SocialBulletsMobile"
import "../styles/global.scss"
import { Helmet } from "react-helmet"

export default function MainLayout({ children }) {
  const [loaded, setLoaded] = useState(false)
  const [contactProfile, setContactProfile] = useState(null)

  const handleContactProfileVerificationCredentials = async () => {
    try {
      const params = getQueryParams(window.location.href)
      if (params.email && params.code) {
        const result = await ContactProfileService.verifyContactAsync(
          params.email,
          params.code
        )
        if (result) {
          ContactProfileService.storeContactProfile(result)
          loadContactProfile()
          navigate("/")
        }
      }
    } catch (error) {
      console.log(error)
      // TODO: show error modal
    }
  }

  const loadContactProfile = () => {
    const contactProfile = ContactProfileService.getStoredContactProfile()
    setContactProfile(contactProfile)
  }

  useEffect(() => {
    var lazyloadImages
    var lazyloadStyle

    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy")
      lazyloadStyle = document.querySelectorAll(".lazy-style")

      var imageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var image = entry.target
            image.src = image.dataset.src
            image.classList.remove("lazy")
            imageObserver.unobserve(image)

            if (entry.target.classList.contains("lazy-style")) {
              entry.target.style.backgroundImage = `url(${entry.target.dataset.bgImg})`
            }
          }
        })
      })

      lazyloadImages.forEach(function (image) {
        imageObserver.observe(image)
      })

      lazyloadStyle.forEach(function (styleElement) {
        imageObserver.observe(styleElement)
      })
    } else {
      var lazyloadThrottleTimeout
      lazyloadImages = document.querySelectorAll(".lazy")

      function lazyload() {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout)
        }

        lazyloadThrottleTimeout = setTimeout(function () {
          var scrollTop = window.pageYOffset
          lazyloadImages.forEach(function (img) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src
              img.classList.remove("lazy")
            }
          })
          if (lazyloadImages.length === 0) {
            document.removeEventListener("scroll", lazyload)
            window.removeEventListener("resize", lazyload)
            window.removeEventListener("orientationChange", lazyload)
          }
        }, 20)
      }
      document.addEventListener("scroll", lazyload)
      window.addEventListener("resize", lazyload)
      window.addEventListener("orientationChange", lazyload)
    }

    if (!loaded) {
      handleContactProfileVerificationCredentials()
      loadContactProfile()
      setLoaded(true)
    }
  }, [contactProfile])

  return (
    <div className="main-layout">
      {loaded && (
        <AppContext.Provider
          value={{
            contactProfile: contactProfile,
            hasContactProfile:
              contactProfile !== undefined && contactProfile !== null,
            onContactProfileChangeHandler: () => loadContactProfile(),
          }}
        >
          <NavBar></NavBar>
          <div className="main-layout__content">{children}</div>
          <Footer></Footer>
        </AppContext.Provider>
      )}
      <div className="d-none d-lg-block">
        <SocialBullets />
      </div>
      <div className="d-lg-none">
        <SocialBulletsMobile />
      </div>

      <div class="orientation-hor-overlay">
        <img
          src="/images/main/turn_device_portrait.webp"
          alt="Turn device to portrait"
        />
      </div>

      <Script
        id="google-tag-manager-src"
        src="https://www.googletagmanager.com/gtag/js?id=UA-208669100-1"
      />
      <Script
        id="google-tag-manager-script-2"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-208669100-1');`,
        }}
      />

      <Script
        id="facebook-script"
        dangerouslySetInnerHTML={{
          __html: `!function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '346546480789814');
        fbq('track', 'PageView');`,
        }}
      />
      <Helmet>
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=346546480789814&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPV8K9S"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </Helmet>
    </div>
  )
}
