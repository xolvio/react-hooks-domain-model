// TODO
// Create some services to deal with transport (Apollo/Fetch) for sending commands/queries to a remote API (GQL/REST):
// const vehicleImagesAPI = remoteDomain(vehicleImagesAPIURL)
// const contentAPI = remoteDomain(contentAPIURL)
//
// // Use some local domain models:
// const threeSixtyInteraction = ThreeSixtyInteraction()
// const threeSixtyLoader = ThreeSixtyLoader()
//
// // pass all these domains into a ViewService (application layer)
// const threeSixtyService = ThreeSixtyService({vehicleImagesAPI, contentAPI, threeSixtyInteraction, threeSixtyLoader})

// service would fetch content, fetch images and expose domain methods
//
// ThreeSixtyService({vehicleImagesAPI, contentAPI, threeSixtyInteraction, threeSixtyLoader}) {
// domain service can be exposed the same as a domain entity using the toCQRSWithHash() helper