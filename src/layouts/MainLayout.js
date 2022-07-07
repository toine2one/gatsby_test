import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/Navbar/NavBar"
import { AppConstants } from "../Constants"
import { AppContext } from "../contexts/AppContext"
import { getQueryParams } from "../helpers/getQueryParams"
import { ContactProfileService } from "../services/ContactProfileService"
import "../styles/global.scss"

export default function MainLayout({ children }) {
  const [loaded, setLoaded] = useState(false)
  const [contactProfile, setContactProfile] = useState()

  const initIntersectionObserve = () => {
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
        document.addEventListener("scroll", lazyload)
        window.addEventListener("resize", lazyload)
        window.addEventListener("orientationChange", lazyload)
      }
    }
  }

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
          setContactProfile(contactProfile)
          navigate("/")
        }
      }
    } catch (error) {
      console.log(error)
      // TODO: show error modal
    }
  }

  useEffect(() => {
    initIntersectionObserve()
    handleContactProfileVerificationCredentials()

    if (!loaded) {
      const contactProfile = ContactProfileService.getStoredContactProfile()
      setContactProfile(contactProfile)
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
          }}
        >
          <NavBar></NavBar>
          <div className="main-layout__content">{children}</div>
          <Footer></Footer>
        </AppContext.Provider>
      )}
    </div>
  )
}
