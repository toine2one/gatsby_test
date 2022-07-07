import { AppConstants } from "../Constants"
import { GetCookie, SetCookie } from "../helpers/CookieHelperFunctions"

export const ContactProfileStatus = {
  CREATED: "CREATED",
  VERIFIED: "VERIFIED",
}

export class ContactProfile {
  constructor(
    status = null,
    firstName = null,
    lastName = null,
    email = null,
    etherAddress = null,
    discord = null,
    hasEarlyAccess = null,
    faction = null,
    playStyle = null,
    code = null
  ) {
    this.status = status
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.etherAddress = etherAddress
    this.discord = discord
    this.hasEarlyAccess = hasEarlyAccess
    this.faction = faction
    this.playStyle = playStyle
    this.code = code
  }
}

export class ContactProfileService {
  static async createAsync(email) {
    const response = await fetch(
      `${AppConstants.IDENTITY_API_BASE_URL}/create?email=${email}`,
      {
        method: "POST",
      }
    )

    if (response.ok) {
      const contactProfile = new ContactProfile()
      contactProfile.email = email
      contactProfile.status = ContactProfileStatus.CREATED

      this.storeContactProfile(contactProfile)
      return true
    } else {
      throw new Error("Unable to create new contact profile")
    }
  }

  static async verifyContactAsync(email, code) {
    const result = await fetch(`${AppConstants.IDENTITY_API_BASE_URL}/verify`, {
      method: "GET",
      headers: {
        email: email,
        verif_code: code,
      },
    })

    if (result.ok) {
      const contactObj = await result.json()
      const contactProfile = new ContactProfile()
      contactProfile.status = ContactProfileStatus.VERIFIED
      contactProfile.firstName = contactObj.firstName
      contactProfile.lastName = contactObj.lastName
      contactProfile.email = contactObj.email
      contactProfile.etherAddress = contactObj.etherAddress
      contactProfile.discord = contactObj.discord
      contactProfile.hasEarlyAccess = contactObj.hasEarlyAccess
      contactProfile.faction = contactObj.faction
      contactProfile.playStyle = contactObj.playStyle
      contactProfile.code = code

      return contactProfile
    } else {
      throw new Error("Unable to fetch verified contact profile")
    }
  }

  static async fetchVerifiedContactProfileAsync(email, code) {
    const result = fetch(`${AppConstants.IDENTITY_API_BASE_URL}/get`, {
      method: "GET",
      headers: {
        email: email,
        verif_code: code,
      },
    })

    if (result.ok) {
      const contactObj = await result.json()
      const contactProfile = new ContactProfile()
      contactProfile.status = contactObj.status
      contactProfile.firstName = contactObj.firstName
      contactProfile.lastName = contactObj.lastName
      contactProfile.email = contactObj.email
      contactProfile.etherAddress = contactObj.etherAddress
      contactProfile.discord = contactObj.discord
      contactProfile.hasEarlyAccess = contactObj.hasEarlyAccess
      contactProfile.faction = contactObj.faction
      contactProfile.playStyle = contactObj.playStyle
      contactProfile.code = code

      return contactProfile
    } else {
      throw new Error("Unable to fetch verified contact profile")
    }
  }

  static async updateAsync(contactProfile) {
    if (contactProfile.status === ContactProfileStatus.VERIFIED) {
      const response = await fetch(
        `${AppConstants.IDENTITY_API_BASE_URL}/update`,
        {
          method: "PUT",
          headers: {
            email: contactProfile.email,
            verif_code: contactProfile.code,
          },
          body: JSON.stringify(contactProfile),
        }
      )

      return response.ok
    } else {
      throw new Error("Contact unverified")
    }
  }

  static storeContactProfile(contactProfile) {
    SetCookie("CONTACT_PROFILE", JSON.stringify(contactProfile), 3560)
  }

  static getStoredContactProfile() {
    var storedContactProfileJson = GetCookie("CONTACT_PROFILE")

    if (storedContactProfileJson) {
      const storedContactProfileObj = JSON.parse(storedContactProfileJson)

      const contactProfile = new ContactProfile()
      contactProfile.status = storedContactProfileObj.status
      contactProfile.firstName = storedContactProfileObj.firstName
      contactProfile.lastName = storedContactProfileObj.lastName
      contactProfile.email = storedContactProfileObj.email
      contactProfile.etherAddress = storedContactProfileObj.etherAddress
      contactProfile.discord = storedContactProfileObj.discord
      contactProfile.hasEarlyAccess = storedContactProfileObj.hasEarlyAccess
      contactProfile.faction = storedContactProfileObj.faction
      contactProfile.playStyle = storedContactProfileObj.playStyle
      contactProfile.code = storedContactProfileObj.code

      return contactProfile
    }
  }
}
