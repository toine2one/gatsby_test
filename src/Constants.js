const devMode = true
export let AppConstants = {}

if (devMode) {
  // ------ DEVELOPMENT MODE ------
  AppConstants = {
    IDENTITY_API_BASE_URL: "https://localhost:7073",
  }
} else {
  // ------ PRODUCTION MODE ------
  AppConstants = {
    IDENTITY_API_BASE_URL: "https://cryptopia-identity-api.azurewebsites.net",
  }
}
